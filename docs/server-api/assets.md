---
sidebar_position: 3
---

# Assets

- An asset refers to a media content/video that is processed, stored, and delivered through Streams. This endpoint creates an asset allowing users to ingest media content into the TP Streams system for processing and delivery.

## Upload an video

To Upload a asset you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/videos/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| content_protection_type    | string      |  To ensure the security of your video content, you can choose from available protection types: 'drm', 'aes' encryption, or indicate 'disable' for no specific protection. Each option offers varying levels of security for your content.       | No |
| title            | string      |  Specify a text string or identifier which can be used for filtering or searching the asset.| No |
| resolutions      | array         | Required resolutions of the transformed asset in case of HLS or MPEG-DASH delivery format. Can be a comma separated string out of the following values: 240p, 360p, 480p, 540p, 720p, and 1080p. Re-sized rendition will retain the input aspect ratio. | Yes |
| inputs | json | URL or web address of a file that TP streams should download to create a new asset. | Yes |
| folder | string | The UUID of the folder, if you want to upload the video into that specific folder | No |

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
  "content_protection_type": "drm",
  "folder": "32seYYHeNxE"
}

```

For valid requests the API server returns a JSON:

```json
{
    "id": "9328558d-e0a5-4093-b3b9-8f15ad1550d8", // asset id
    "title": "Big Buck Bunny Video",
    "bytes": null,
    "type": "video",
    "video": {
        "progress": 0,
        "thumbnails": [],
        "status": "Completed",
        "playback_url": "https://d7pdowhru2wq4.cloudfront.net/transcoded/9328558d-e0a5-4093-b3b9-8f15ad1550d8/video.m3u8",
        "dash_url": "https://d7pdowhru2wq4.cloudfront.net/transcoded/9328558d-e0a5-4093-b3b9-8f15ad1550d8/video.mpd",
        "preview_thumbnail_url": null,
        "format": "abr",
        "resolutions": ["240p", "360p", "480p", "720p"],
        "video_codec": "h264",
        "audio_codec": "aac",
        "content_protection_type": "drm",
        "tracks": [],
        "inputs": [
            {
                "url": "https://static.testpress.in/BigBuckBunny.mp4"
            }
        ],
    },
    "parent_id": "32seYYHeNxE",
}

```
Above response can also be obtained by asset detail API **/api/v1/<organization_id>/assets/<asset_id>/**

## Get all the assets that belong to the organization

To get all assets in the organization, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/
```

**Response**
```json
{
    "count": 2,
    "next": "https://app.tpstreams.com/api/v1/dcek2m/assets/?limit=50&offset=50",
    "previous": null,
    "results": [
        {
            "title": "Big Buck Bunny Video",
            "bytes": 450881324,
            "type": "video",
            "video": {
                "progress": 0,
                "thumbnails": [
                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_4.png",
                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_6.png",
                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_5.png",
                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_2.png",
                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_1.png",
                    "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_3.png"
                ],
                "status": "Completed",
                "playback_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/video.m3u8",
                "dash_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/video.mpd",
                "preview_thumbnail_url": null,
                "cover_thumbnail_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/thumbnails/thumbnail_4.png",
                "format": "abr",
                "resolutions": [
                    "240p",
                    "360p",
                    "480p",
                    "720p"
                ],
                "video_codec": "h264",
                "audio_codec": "aac",
                "enable_drm": true,
                "tracks": [
                            {
                            "id": 4094,
                            "type": "Preview Thumbnail",
                            "preview_thumbnail": {
                                "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/996NXydJQDU/sprite/sprite_image.png",
                                "interval": 2,
                                "width": 160,
                                "height": 90,
                                "rows": 10,
                                "columns": 10
                            }
                             }
                        ],
                "inputs": [
                    {
                        "url": "private/yXrprYum2TS.mp4"
                    }
                ],
                "transmux_only": null,
                "duration": 597,
                "content_protection_type": "drm"
            },
            "id": "yXrprYum2TS",
            "live_stream": null,
            "parent": null,
            "parent_id": null
        },
        {
            "title": "Data science Live class",
            "bytes": null,
            "type": "livestream",
            "video": null,
            "id": "AAbxGpp8DUm",
            "live_stream": {
                "rtmp_url": "rtmp://13.235.45.255/live",
                "stream_key": "org-dcek2m-live-AAbxGpp8DUm-H4xB",
                "status": "Not Started",
                "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/dcek2m/AAbxGpp8DUm/video.m3u8",
                "start": "2023-12-06 16:37:56",
                "transcode_recorded_video": true,
                "enable_drm_for_recording": true,
                "chat_embed_url": "https://app.tpstreams.com/live-chat/dcek2m/AAbxGpp8DUm/",
                "chat_room_id": "52fc408c-6a87-45f3-a659-af9c298c8926",
                "resolutions": [
                    "240p",
                    "480p",
                    "720p"
                ],
                "enable_drm": true,
                "enable_llhls": false,
                "latency": "Normal Latency"
            },
            "parent": null,
            "parent_id": null,
            "download_url": null
        }
    ]
}

```

## Get Individual Asset Details

To get a individual asset in the organization, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/
```


**Response**
```json
{
    "title": "Big Buck Bunny Video",
    "bytes": 68380099,
    "type": "livestream",
    "video": {
        "progress": 0,
        "thumbnails": [
            "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/thumbnails/thumbnail_4.png",
            "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/thumbnails/thumbnail_6.png",
            "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/thumbnails/thumbnail_5.png",
            "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/thumbnails/thumbnail_2.png",
            "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/thumbnails/thumbnail_1.png",
            "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/thumbnails/thumbnail_3.png"
        ],
        "status": "Completed",
        "playback_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/video.m3u8",
        "dash_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/video.mpd",
        "preview_thumbnail_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/thumbnails/thumbnail_4.png",
        "cover_thumbnail_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/thumbnails/thumbnail_4.png",
        "format": "abr",
        "resolutions": [
            "240p",
            "360p",
            "480p",
            "720p"
        ],
        "video_codec": "h264",
        "audio_codec": "aac",
        "enable_drm": true,
        "tracks": [
            {
                "id": 7483,
                "type": "Preview Thumbnail",
                "name": "",
                "url": "https://d28qihy7z761lk.cloudfront.net/None",
                "bytes": null,
                "language": "en",
                "width": null,
                "height": null,
                "duration": null,
                "is_active": true,
                "subtitle_type": "Uploaded",
                "preview_thumbnail": {
                    "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/BQjtYcFgGkh/sprite/sprite_image.png",
                    "interval": 1,
                    "width": 160,
                    "height": 90,
                    "rows": 13,
                    "columns": 13
                }
            }
        ],
        "inputs": [
            {
                "url": "private/BQjtYcFgGkh/video.mp4"
            }
        ],
        "transmux_only": null,
        "duration": 167,
        "content_protection_type": "drm",
        "generate_subtitle": false
    },
    "id": "BQjtYcFgGkh",
    "live_stream": {
        "rtmp_url": "rtmp://65.2.122.216/live",
        "stream_key": "org-dcek2m-live-BQjtYcFgGkh-vtX2",
        "status": "Completed",
        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/dcek2m/BQjtYcFgGkh/video.m3u8",
        "start": "2024-05-28 11:30:19",
        "transcode_recorded_video": true,
        "enable_drm_for_recording": true,
        "chat_embed_url": "https://app.tpstreams.com/live-chat/dcek2m/BQjtYcFgGkh/",
        "chat_room_id": "b1b717e4-6e88-4360-9b59-55036e6b6b61",
        "resolutions": [
            "240p",
            "480p",
            "720p"
        ],
        "enable_drm": false,
        "enable_llhls": false,
        "latency": "Low Latency"
    },
    "parent": null,
    "parent_id": null,
    "download_url": "https://d28qihy7z761lk.cloudfront.net/private/BQjtYcFgGkh/video.mp4?response-content-disposition=attachment%3B+filename%3Dtesting+one+02.mp4&Expires=1717076519&Signature=Jhzao52IKAtlilHGEHNyk~vs3twuCHNUW9dP5pZKZgjYydhsKUh3X1Dh3Hgd3m4jWjyhwISQa1X-xtpbBLBt1o1eSt4N-lOhSNH1Y9C~8vWXF2lZ8uALJWavvbTLj-kvjBhAYgme4IRoqUb9FA7wL4jBjCj3nd30sc4NlpQQP7yVZ51Rpr2s7oWxSid2UUAjhdlJOabRyt8m5yIIExUg-xg~FixFQqaqJ8WGliSieajPdA8ErShNgLIsQthT9D99TOCPnADEzmFRSQyU9zdD7wgqSxbPjtw~Eo8ah6Lk-aNENrXM1hjybfi4Vc9C4RmKCDx27erNZQLf6pf5chenfg__&Key-Pair-Id=K2XWKDWM065EGO"
}

```

## Delete Individual Asset

To delete a individual asset in the organization, you need to send an HTTP DELETE request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/
```

If the specified asset is a folder, it will remove all its child assets. you need to send an HTTP DELETE request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

This will delete the specified asset from your organization

## Move Individual Asset
To move an asset from one folder to another or to the root directory,  you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md) .

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/move/
```


**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| parent    | string      |  UUID of the destination  folder	     | No |


**Sample request body**

```json 
{
    "parent": "7hCCRZtXNmq"
}

```

**Response**

For valid requests the API server returns a JSON:

```json
{
    "detail": "Asset moved successfully."
}
```

:::important

To move an asset to the root directory , send an HTTP POST request with an empty request body to the designated API endpoint.
:::

## Upload Subtitles to an Asset
To upload subtitles to an asset , you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md) .

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/upload_subtitle/
```

**Fields**



| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| subtitle    | .vtt file      |  File Containing Subtitles	     | Yes |
| name    | string      |  Name of the subtitles	     | No |
| language    | string      |   Language code of the subtitles      | No |
Send the subtitle file using form-data in the request body.

To know language code please check [Language-codes](../language-codes) 	

**Sample Postman request body  (Form-data only) **



 ![OBS settings](/img/upload_subtitle_req_body.png)




**Response**

For valid requests the API server returns a JSON:


```json
{
    "detail": "Subtitle uploaded successfully"
}
```

:::important
For subtitle upload, use form-data in the request body. Select your .vtt file with the "subtitle" key .
:::


## Upload Thumbnail to an Asset
To upload Thumbnail to an asset , you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md) .

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/upload_thumbnail/
```

**Fields**



| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| thumbnail    | .png, .jpeg, .jpg image      | Thumbnail image	     | Yes |


Send the thumbnail Image using form-data in the request body.


**Sample Postman request body  (Form-data only) **



 ![OBS settings](/img/upload_thumbnail_req_body.png)



**Response**

For valid requests the API server returns a JSON:


```json
{
    "detail": "Thumbnail uploaded successfully"
}
```

:::important
For Thumbnail upload, use form-data in the request body. select an image file in .png, .jpeg, or .jpg format that is less than 2 MB in size .
:::