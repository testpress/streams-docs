---
sidebar_position: 2
---



# Fairplay Encryption
This section provides an introduction to Fairplay Encryption, explaining its purpose as a DRM (Digital Rights Management) technology used to secure content delivery on Apple platforms.

## Shaka Packager Command :
To encrypt your content, you can utilize Shaka Packager by running the following command :

To obtain  the FairPlay Encryption Key, IV, and URI, please check this [Fairplay Encrption Keys](#obtain-fairplay-encryption-keys)

```bash

packager \
  in=https://static.testpress.in/BigBuckBunny.mp4,stream=audio,output=audio.mp4 \
  in=https://static.testpress.in/BigBuckBunny.mp4,stream=video,output=h264_360p.mp4 \
  --keys "label=:key_id=<content_id>:key=<key>:iv=<IV>" \
  --protection_scheme cbcs \
  --protection_systems Fairplay \
  --hls_key_uri <HLS_URI> \
  --clear_lead 0 \
  --hls_master_playlist_output video.m3u8

```

**Fields**

| Name              | Type         | Description                                                  | Required  |
| ---------------   | ------------ | --------------------------------------------------------     | --------- |
| content_id        | string       | The unique identifier for the content (Should be a random UUID generated you. This UUID will be used for getting licenses for that video.)                        | Yes       |
| key  | string       | Secret code used to unlock FairPlay encrypted content on Apple devices. Check [Fairplay Encrption Keys](#obtain-fairplay-encryption-keys) for how to obtain this key.                   | Yes       |
| IV       | string       | The initialization vector (IV) for Fairplay encryption	. Check [Fairplay Encrption Keys](#obtain-fairplay-encryption-keys) for how to obtain this IV.      | Yes       |
| HLS_URI          | Link       | URL for encrypted content using FairPlay on Apple devicesendpoint Check [Fairplay Encrption Keys](#obtain-fairplay-encryption-keys) for how to obtain this HLS_URI.                      | Yes       |

## Obtain FairPlay Encryption Keys:

This API allows users to obtain a FairPlay encryption key. It provides the necessary functionality to acquire the encryption key for ensuring secure content delivery on Apple's platforms.


```bash
POST: https://app.tpstreams.com/api/v1/{{org_code}}/fairplay_key/
```

**Fields**

| Name              | Type         | Description                                                  | Required  |
| ---------------   | ------------ | --------------------------------------------------------     | --------- |
| org_code        | string       | The organization code for API endpoint  | Yes       |
| request body | string       | You need to include the request body, which contains both request and signature data. You can refer below for instructions on how to generate it                     | Yes       |


To obtain the request body please check this [Generating Request Body](#generating-request-body)


sample request body:
```
{
  "request": "eyJjb250ZW50X2lkIjoiY2Y2YzMwZGQ1MGMxNDkyZTgyMzQ0ZWEzZTEzOWRhMWQifQ==",
  "signature": "NsBcxxchrA7tFw/O86SCM5hwiM6Np/+JnZgjlV0vRyo="
}
```


Response

```json
{
  "iv": "f70bce4094fd4612abac60d9809c5b0c",
  "key": "3ab60de900d64edf9cb25a76f81794e6",
  "uri": "skd://e5573f8bb8ac47ea839a65beae73263d",
}
```


## Generating Request Body:

This step requires your secret key and initialization vector (IV) . you can obtain the signature field by performing the following steps in Python

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
result = base64.urlsafe_b64encode(data.encode())

post_data = {
  "request": result,
  "signature": signature
}
```

Response

```bash
{
    'request': 'eyJjb250ZW50X2lkIjoiY2Y2YzMwZGQ1MGMxNDkyZTgyMzQ0ZWEzZTEzOWRhMWQifQ==', 
     'signature': 'JzwEMcwgf4Tp1b6o5x0HbM08o7PuXA6XnwTmWeHF0g4='
}
```
