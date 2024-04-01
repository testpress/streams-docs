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
                "tracks": [],
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
                "resolutions": [
                    "240p",
                    "480p",
                    "720p"
                ],
                "enable_drm": true
            },
            "parent": null,
            "parent_id": null
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
        "tracks": [],
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
    "parent_id": null,
    "download_url": "https://d28qihy7z761lk.cloudfront.net/private/yXrprYum2TS.mp4?response-content-disposition=attachment%3B+filename%3DBig+Buck+Bunny+Video.mp4&Expires=1708718514&Signature=wzuk7MhZsjKE9MwG0yaM1cMMFurc3ZIhCmrR0~fx2vgSwVd1d0B68GG~KwE6upj8XJMn~5zrBcadlf8TWeFuRyoRbIw6vipEDbWYLdPQhLwZcHp7mwz7ERNpikvBZJUO7KB5Z~h6BSGvcDBnVVc9pNZ8W2Zz95Ix28dnNhr~J9fqEgHtd0KaOqmX~LVjbHq56u6NiYrm4SZm3hmnWsfuaShWVJzkEBGrgnx8EnYtYe4JkHEBSvnskJvQPuCz82gwlK4vxNSdJ~0g08xkcwkJQG1mLqi39gbumkalS-8jp-pAKoyHMpXsHO6m9FKpwHHjnHp2wwPlSOykUPk1dcrt8Q__&Key-Pair-Id=K2XWKDWM065EGO"
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