---
sidebar_position: 3
---

# DRM Encryption (CBCS)

DRM Encryption (CBCS) allows you to use a single set of encryption keys for both FairPlay and Widevine DRM. By this we can create a single set of encrypted media files and use them for both Widevine and FairPlay.

## Shaka Packager Command

To encrypt your content using Shaka Packager, use the `cbcs` protection scheme and include both protection systems. 

To obtain the DRM Encryption Key, IV, and URI, please check [Obtaining DRM Encryption Keys (CBCS)](#obtaining-drm-encryption-keys-cbcs).

```bash
packager \
  in=input.mp4,stream=video,output=video.mp4 \
  in=input.mp4,stream=audio,output=audio.mp4 \
  --enable_raw_key_encryption \
  --keys "label=:key_id=<content_id>:key=<key>:iv=<IV>" \
  --protection_scheme cbcs \
  --protection_systems Widevine,FairPlay \
  --hls_key_uri <HLS_URI> \
  --clear_lead 0 \
  --hls_master_playlist_output video.m3u8 \
  --mpd_output video.mpd
```

### Field Definitions

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| **content_id** | string | A unique identifier for the content (must be a valid UUID). | Yes |
| **key** | string | The 16-byte hex encryption key used for both DRM systems. | Yes |
| **iv** | string | The 16-byte hex initialization vector. | Yes |
| **HLS_URI** | string | The URI used for HLS/FairPlay (e.g., `skd://...`). | Yes |

---

## Obtaining DRM Encryption Keys (CBCS)

This API returns encryption metadata compatible with both FairPlay and Widevine.

### Endpoint
```bash
POST https://app.tpstreams.com/api/v1/{{org_code}}/drm_encryption_keys/
```

### Request Payload
The request body must contain a base64 encoded JSON string and a security signature.

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| **org_code** | string | Your unique organization code. | Yes |
| **request** | string | Base64 encoded JSON containing the `content_id`. | Yes |
| **signature** | string | AES-CBC encrypted SHA1 hash of the request data. | Yes |

#### Sample Request Body
```json
{
  "request": "eyJjb250ZW50X2lkIjogImNmNmMzMGRkLTUwYzEtNDkyZS04MjM0LTRlYTNlMTM5ZGExZCJ9",
  "signature": "JzwEMcwgf4Tp1b6o5x0HbM08o7PuXA6XnwTmWeHF0g4="
}
```

### Response
```json
{
  "content_id": "cf6c30dd-50c1-492e-8234-4ea3e139da1d",
  "key": "3ab60de900d64edf9cb25a76f81794e6",
  "iv": "f70bce4094fd4612abac60d9809c5b0c",
  "uri": "skd://e5573f8bb8ac47ea839a65beae73263d"
}
```

---

## Generating the Request Payload (Python)

Use the following Python script to generate the required `request` and `signature` fields. You will need your organization's **AES Signing Key** and **IV** (provided in your dashboard).

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
data = {
  "content_id": "cf6c30dd-50c1-492e-8234-4ea3e139da1d"
}
data = json.dumps(data, separators=(',', ':'))
signature = generate_signature(data, key, iv)
result = base64.urlsafe_b64encode(data.encode()).decode()

post_data = {
  "request": result,
  "signature": signature
}

```
