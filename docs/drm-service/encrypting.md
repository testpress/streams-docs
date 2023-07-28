---
sidebar_position: 2
---


# Encrypting the content

The encryption process varies depending on the technology used. For Widevine and FairPlay, there are different entry paths and parameters involved in encrypting content. Each DRM provider has its own distinct approach to ensure secure protection for media content.

## Widevine Encryption

Shaka Packager is used for encrypting content and offers seamless integration with Widevine, making it a popular choice for ensuring secure delivery through the Widevine DRM technology. [Shaka Packager](https://github.com/shaka-project/shaka-packager)



To encrypt your content, you can utilize Shaka Packager by running the following command with [authentication Header](../server-api/authentication.md).
:

```bash

  packager \
  in=https://static.testpress.in/BigBuckBunny.mp4,stream=audio,output=audio.mp4 \
  in=https://static.testpress.in/BigBuckBunny.mp4,stream=video,output=h264_360p.mp4 \
  --enable_widevine_encryption \
  --key_server_url https://app.tpstreams.com/api/v1/<org_code>/widevine_key/ \
  --content_id <content_id> \
  --signer testpress \
  --aes_signing_key <WIDEWINE_AES_KEY> \
  --aes_signing_iv <WIDEWINE_IV> \
  --mpd_output video.mpd

```

**Fields**

| Name              | Type         | Description                                                  | Required  |
| ---------------   | ------------ | --------------------------------------------------------     | --------- |
| org_code          | string       | The organization code for API endpoint                       | Yes       |
| content_id        | string       | The unique identifier for the content (Should be a random UUID generated you. This UUID will be used for getting licenses for that video.)                        | Yes       |
| WIDEVINE_AES_KEY  | string       | The AES key used for Widevine encryption                     | Yes       |
| WIDEVINE_IV       | string       | The initialization vector (IV) for Widevine encryption       | Yes       |

:::important

WIDEWINE_AES_KEY , WIDEWINE_IV  and org_code will be provided by us.

:::


## Fairplay Encryption

This API allows users to obtain a FairPlay encryption key. It provides the necessary functionality to acquire the encryption key for ensuring secure content delivery on Apple's platforms.

This API requires [authentication Header](../server-api/authentication.md)

```bash
POST: https://app.tpstreams.com/api/v1/{{org_code}}/fairplay_key/
```

with request body:
```
{
  "request": "eyJjb250ZW50X2lkIjoiY2Y2YzMwZGQ1MGMxNDkyZTgyMzQ0ZWEzZTEzOWRhMWQifQ==",
  "signature": "NsBcxxchrA7tFw/O86SCM5hwiM6Np/+JnZgjlV0vRyo="
}
```

### Generating Request Body:

You can obtain the request field by performing the following steps in Python:


```python
import json
import base64

data = {"content_id": "cf6c30dd50c1492e82344ea3e139da1d"}
data = json.dumps(data, separators=(',', ':'))
result = base64.urlsafe_b64encode(data.encode())
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
result = base64.urlsafe_b64encode(data.encode())

post_data = {
  "request": result,
  "signature": signature
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

