---
sidebar_position: 3
---


# Getting license to playback the content

Obtaining a license is essential for enabling playback of DRM-protected content. The process involves acquiring a valid license through the DRM system, granting authorized users access to view the protected media on their devices.

This API requires [authentication Header](../server-api/authentication.md)

```bash
POST: https://app.tpstreams.com/api/v1/<org_code>/drm_license/?data=<encoded_data>/
```

**Fields**

| Name              | Type         | Description                                                  | Required  |
| ---------------   | ------------ | --------------------------------------------------------     | --------- |
| org_code          | string       | The organization code for API endpoint                       | Yes       |
| content_id        | string       | The unique identifier for the content (Should be a random UUID generated you. This UUID will be used for getting licenses for that video.)                       | Yes       |
| WIDEVINE_AES_KEY  | string       | The AES key used for Widevine encryption                     | Yes       |
| WIDEVINE_IV       | string       | The initialization vector (IV) for Widevine encryption       | Yes       |

:::important

WIDEWINE_AES_KEY , WIDEWINE_IV  and org_code will be provided by us.

:::


## Generating Encoded Data:

To generate encoded data you need to fetch content data and signature

```json
{
    "content_data": "eyJkb3dubG9hZCI6ZmFsc2UsImRybV90eXBlIjoid2lkZXZpbmUiLCJjb250ZW50X2lkIjoiYTM1NmFhZWYzMGFhNGNkODlmNzY2ZjVmNjUzN2FjMzMifQ==",
    "signature": "NsBcxxchrA7tFw/O86SCM5hwiM6Np/+JnZgjlV0vRyo="
}
```

### Generating Content Data:

You can obtain the request field by performing the following steps in Python:


```python
import json
import base64

data = {
  "content_id": <content_id>,
  "download": true/false,
  "drm_type": "widevine/fairplay"
}
data = json.dumps(data, separators=(',', ':'))
encoded_content_data = base64.urlsafe_b64encode(data.encode())
# The result will be eyJjb250ZW50X2lkIjoiY2Y2YzMwZGQ1MGMxNDkyZTgyMzQ0ZWEzZTEzOWRhMWQifQ==
```

### Generating Signature:

You can obtain the signature field by performing the following steps in Python:

```python
import base64
import binascii
import hashlib
import json


from Cryptodome.Cipher import AES
from Cryptodome.Util.Padding import pad

def generate_signature(data, key, iv):
    hash = hashlib.sha1(base64.b64encode(data.encode())).digest()
    cipher = AES.new(
        binascii.unhexlify(key),
        AES.MODE_CBC,
        binascii.unhexlify(iv),
    )
    padded_hash = pad(hash, AES.block_size, style="pkcs7")
    signature = cipher.encrypt(padded_hash)
    return base64.b64encode(signature).decode()

key = "xxxx"  # AES Signing key
iv = "yyy"  # AES Signing iv
data = {
  "content_id": "cf6c30dd50c1492e82344ea3e139da1d"
}
data = json.dumps(data, separators=(',', ':'))
signature = generate_signature(data, key, iv)
```



You can obtain the Encoded data by performing the following steps in Python:


```python
import base64
import binascii
import hashlib
import json


from Cryptodome.Cipher import AES
from Cryptodome.Util.Padding import pad

key = "xxxx"  # AES Signing key
iv = "yyy"  # AES Signing iv
org_code = "xxxx"

content_data = {"content_id": "cf6c30dd50c1492e82344ea3e139da1d", "download": "true", "drm_type": "widevine"}
content_data = json.dumps(content_data, separators=(',', ':'))
encoded_content_data = base64.urlsafe_b64encode(content_data.encode())
signature = generate_signature(encoded_content_data)
data = {"content_data": encoded_content_data, "signature": signature}
data = json.dumps(data, separators=(',', ':'))
encoded_data = base64.urlsafe_b64encode(data)


```


```bash
LICENSE_URL = f"https://app.tpstreams.com/api/v1/{org_code}/drm_license/?data={encoded_data}"
```