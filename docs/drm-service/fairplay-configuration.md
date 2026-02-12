---
sidebar_position: 6
---

# FairPlay Configuration

Through FairPlay Configuration, you can specify the desired FairPlay license specification within the license request.

This API requires [encoded_data](#generate-encoded-data) in the query param for authentication.

```bash
POST: https://app.tpstreams.com/api/v1/<org_code>/drm_license/?data=<encoded_data>/
```

**Fields**

| Name       | Type   | Description                                                | Required |
| ---------- | ------ | ---------------------------------------------------------- | -------- |
| spc        | string | Server Playback Context (SPC) — the key message from the player, typically base64-encoded. | Yes      |
| fairplay   | json   | See the FairPlay table below for available fields.          | No       |

**FairPlay**

+---------------------------------------------------+------------------------------------------------------+
| **Name**                                          |  **Description**                                     |
+---------------------------------------------------+------------------------------------------------------+
| lease_duration_seconds (optional)                 | How long a streaming (online) license is valid (seconds). Default: 5 hours. |
+---------------------------------------------------+------------------------------------------------------+
| rental_duration_seconds (optional)                | How long offline licenses remain valid (seconds). Default: 30 days. |
+---------------------------------------------------+------------------------------------------------------+

**Sample Payload:**

```json
{
    "spc": "base64EncodedSPCFromPlayer",
    "fairplay": {
        "lease_duration_seconds": 1800,
        "rental_duration_seconds": 86400
    }
}
```

You can obtain the encoded data by performing the following steps in Python:

### Generate Encoded Data

```python
import base64
import binascii
import hashlib
import json

from Cryptodome.Cipher import AES
from Cryptodome.Util.Padding import pad

encoded_content_data = generate_content_data(<content_id>)
signature = generate_signature(encoded_content_data)
data = {"content_data": encoded_content_data, "signature": signature}
data = json.dumps(data, separators=(',', ':'))
encoded_data = base64.urlsafe_b64encode(data).decode()
```

To generate encoded data you need content data [Generating Content Data](#generating-content-data) and [Generate Signature](#generating-signature).

### Generating Content Data

You can obtain the content data by performing the following steps in Python:

```python
import json
import base64

def generate_content_data(content_id, download=False, drm_type="fairplay"):
  data = {
    "content_id": content_id,
    "download": download,
    "drm_type": drm_type,
  }
  data_str = json.dumps(data, separators=(',', ':'))
  return base64.urlsafe_b64encode(data_str.encode()).decode()
```

### Generating Signature

You can obtain the signature field by performing the following steps in Python:

```python
import base64
import binascii
import hashlib
import json

from Cryptodome.Cipher import AES
from Cryptodome.Util.Padding import pad

def generate_signature(data, key, iv):
    hash = hashlib.sha1(data.encode()).digest()
    cipher = AES.new(
        binascii.unhexlify(key),
        AES.MODE_CBC,
        binascii.unhexlify(iv),
    )
    padded_hash = pad(hash, AES.block_size, style="pkcs7")
    signature = cipher.encrypt(padded_hash)
    return base64.b64encode(signature).decode()

key = "xxxx"  # AES Signing key
iv = "yyy"    # AES Signing iv
encoded_content_data = generate_content_data("cf6c30dd50c1492e82344ea3e139da1d")
signature = generate_signature(encoded_content_data, key, iv)
```

**Fields**

| Name              | Type   | Description                                                                 | Required |
| ----------------- | ------ | --------------------------------------------------------------------------- | -------- |
| org_code          | string | The organization code for API endpoint                                      | Yes      |
| content_id        | string | The unique identifier for the content (UUID used when encrypting the video). | Yes      |
| AES_SIGNING_KEY   | string | The AES key used for signing the content data                              | Yes      |
| AES_SIGNING_IV    | string | The initialization vector (IV) for signing                                 | Yes      |

:::important

AES_SIGNING_KEY, AES_SIGNING_IV and org_code will be provided by us.

You can retrieve the organization code and DRM keys by making a GET request to the API. [Organization](../server-api/organizations.md)

:::

**Security Considerations:**

The recommendation is to invoke the DRM license endpoint on the server, rather than on the client. This precaution is taken because passing the license configuration and calling it from the client could expose configurations to users.
