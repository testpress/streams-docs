---
sidebar_position: 4
---

# Widevine Configuration

Through Widevine Configuration , we can specify the desired Widevine license specification within the license request.

This API requires [encoded_data](#generate-encoded-data) in query param for authentication.

```bash
POST: https://app.tpstreams.com/api/v1/<org_code>/drm_license/?data=<encoded_data>/
```
**Fields**

| Name           | Type   | Description                                            | Required |
| -------------- | ------ | ------------------------------------------------------ | -------- |
| player_payload | string | Player license key message encoded into base64 String. | Yes      |
| widevine       | json   | See the Widevine table below for available fields.     | No       |

  
**Widevine**

+---------------------------------------------------+------------------------------------------------------+
| **Name**                                          |  **Description**                                     |
+---------------------------------------------------+------------------------------------------------------+
| content_key_specs.track_type                      |  A track type definition, Options are                |
|                                                   |  - AUDIO - audio tracks                              |
|                                                   |  - SD - 576p or less                                 |
|                                                   |  - HD - 720p, 1080p                                  |
|                                                   |  - UHD1 - 4K                                         |
|                                                   |  - UHD2 - 8K                                         |
+---------------------------------------------------+------------------------------------------------------+
| content_key_specs.security_level                  | Security level for content key specs, Default = 1.   |
|                                                   |                                                      |
|                                                   | - 1 - Software-based whitebox crypto is              |
|                                                   | required. (SW_SECURE_CRYPTO).                        |
|                                                   | - 2 - Software crypto and an obfuscated              |
|                                                   | decoder is required. (SW_SECURE_DECODE).             |
|                                                   | - 3 - Key material and crypto operations             |
|                                                   | must be performed within a hardware-                 |
|                                                   | backed trusted execution environment.                |
|                                                   | (HW_SECURE_CRYPTO).                                  |
|                                                   | - 4 - Crypto and decoding of content                 |
|                                                   | must be performed within a hardware-                 |
|                                                   | backed trusted execution environment.                |
|                                                   | (HW_SECURE_DECODE).                                  |
|                                                   | - 5 - Crypto, decoding, and all handling             |
|                                                   | of media (compressed and uncompressed)               |
|                                                   | must be handled within a hardware-                   |
|                                                   | backed trusted execution environment.                |
|                                                   | (HW_SECURE_ALL)                                      |
+---------------------------------------------------+------------------------------------------------------+
| content_key_specs.required_output_protection.hdcp | Output protection options for HDCP                   |
|                                                   | Options:                                             |
|                                                   | - HDCP_NONE                                          |
|                                                   | - HDCP_V1                                            |
|                                                   | - HDCP_V2                                            |
|                                                   | - HDCP_V2_1                                          |
|                                                   | - HDCP_V2_2                                          |
|                                                   | - HDCP_V2_3                                          |
|                                                   | - HDCP_NO_DIGITAL_OUTPUT                             |
+---------------------------------------------------+------------------------------------------------------+

**Sample Payload:**

```json
{
    "player_payload": keyMessageInbase64,
    "widevine": {
        "content_key_specs": [
            {'track_type': 'SD', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},
            {'track_type': 'HD', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},
            {'track_type': 'UHD1', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},
            {'track_type': 'UHD2', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},
            {'track_type': 'AUDIO', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}}
        ]
    }
}
```


You can obtain the Encoded data by performing the following steps in Python:

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
encoded_data = base64.urlsafe_b64encode(data)


```
To generate encoded data you need to fetch content data [Generating Content Data](#generating-content-data) and signature
[Generate Signature](#generating-signature) 

### Generating Content Data:

You can obtain the request field by performing the following steps in Python:


```python
import json
import base64
def generate_content_data(content_id):
  data = {
    "content_id": content_id,
    "download": true/false,
    "drm_type": "widevine/fairplay"
  }
  data = json.dumps(data, separators=(',', ':'))
  return base64.urlsafe_b64encode(data.encode())
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
iv = "yyy"  # AES Signing iv
data = {
  "content_id": "cf6c30dd50c1492e82344ea3e139da1d"
}
data = json.dumps(data, separators=(',', ':'))
signature = generate_signature(data, key, iv)
```



**Fields**

| Name              | Type         | Description                                                  | Required  |
| ---------------   | ------------ | --------------------------------------------------------     | --------- |
| org_code          | string       | The organization code for API endpoint                       | Yes       |
| content_id        | string       | The unique identifier for the content (Should be a random UUID generated you. This UUID will be used for getting licenses for that video.)                       | Yes       |
| AES_SIGNING_KEY  | string       | The AES key used for Widevine encryption                     | Yes       |
| AES_SIGNING_IV       | string       | The initialization vector (IV) for Widevine encryption       | Yes       |

:::important

AES_SIGNING_KEY , AES_SIGNING_IV  and org_code will be provided by us.




**Security Considerations:**

The recommendation is to invoke the DRM license endpoint on the server, rather than on the client. This precaution is taken because passing the License configuration and calling it from the client could expose configurations to users. 