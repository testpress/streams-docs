---
sidebar_position: 2
---

# AES Encryption

Advanced Encryption Standard (AES) is a widely used symmetric encryption algorithm designed to secure data. 

It employs a block cipher method, transforming data in fixed-size blocks, typically 128 bits. AES operates through a series of rounds involving substitution, permutation, and mixing of data elements, making it highly resistant to attacks. 

It offers key lengths of 128, 192, or 256 bits for varying levels of security. AES encryption is widely adopted for its efficiency and robust protection, used in securing sensitive data during transmission and storage

## Upload AES Encrypted video

To Upload a asset with AES Encryption you need to send an HTTP POST request to the API [Endpoint](../server-api/assets.md#upload-an-video), with the 
"content_protection_type" as "aes".


**Sample request body**

```json 
{
  "title": "Big Buck Bunny Video",
  "inputs": [
    {
      "url": "https://static.testpress.in/BigBuckBunny.mp4"
    }
  ],
  "resolutions": ["240p", "360p", "480p", "720p"],
  "content_protection_type": "aes",
  "folder": "32seYYHeNxE"
}

```



## How to play AES Encrypted video


### Generate a Signed Playback URL

To successfully access and play AES encrypted videos, it's essential to generate a signed playback URL specifically designed for each video.


To obtain it send an HTTP GET request to the API [Endpoint](../server-api/assets.md#get-individual-asset-details), with the 
the query parameter 'expiry,' indicating the duration in seconds until the URL expires.

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/?expiry=100
```

The playback_url provided in the API response is the signed URL that you can use for secure video playback.

**Response**
```json
{
    "title": "sample.mp4",
    "bytes": null,
    "type": "video",
    "video": {
        ....
        ....
        "playback_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/56761978-503c-4ad9-9eca-dff4c4cc12db/video.m3u8",
    },

}

```





### Handle AES-encrypted key request

The player sends a request to our endpoint, as indicated within the m3u8 file, to obtain the AES decryption key needed for video playback. However, the API endpoint mandates an access token for authorization. 

To handle this, it's important to ensure that the access token is included in the request as a query parameter initiated by the player.


To generate access tokens send an HTTP GET request to the API [Endpoint](authentication.md#obtaining-an-access-token)



**Sample video.js code**


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video.js HLS Example</title>
    <link href="https://unpkg.com/video.js@7.21.4/dist/video-js.min.css" rel="stylesheet">
    <script src="https://unpkg.com/video.js@7.21.4/dist/video.min.js"></script>
</head>
<body>
    <video id="player" class="video-js vjs-big-play-centered vjs-default-skin" controls preload="auto" width="640"
        height="360">
        <source src="PLAYBACK_SIGNED_URL.m3u8" type="application/x-mpegURL">
    </video>

    <script>
        var player = videojs('player', { html5: { hls: { cacheEncryptionKeys: true } } });

        player.ready(function () {
            player.hls.xhr.beforeRequest = (options) => {
                if (options.uri.includes("aes_key")) {
                    options.uri += `?access_token=YOUR_ACCESS_TOKEN_HERE`;
                    return options;
                }

                return options;
            };
        });
    </script>
</body>

</html>
```

Replace `"PLAYBACK_SIGNED_URL.m3u8"` with the actual playback_url of your encrypted video and `"YOUR_ACCESS_TOKEN_HERE"` with the provided access token.