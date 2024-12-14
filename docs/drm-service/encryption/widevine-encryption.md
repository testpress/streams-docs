---
sidebar_position: 1
---

# Widevine Encryption

Shaka Packager is used for encrypting content and offers seamless integration with Widevine, making it a popular choice for ensuring secure delivery through the Widevine DRM technology. [Shaka Packager](https://github.com/shaka-project/shaka-packager)


## Shaka Packager Command :
To encrypt your content, you can utilize Shaka Packager by running the following command 
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

You can retrieve the organization code and DRM keys by making a GET request to the API. [Organization](https://developer.tpstreams.com/docs/server-api/organizations)

Check out this repository for encrypting a video with a Widevine license
 [DRM Video Processing](https://github.com/testpress/drm-video-processing/) 