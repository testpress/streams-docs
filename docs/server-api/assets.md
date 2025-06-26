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
            "parent_id": null,
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
            "parent_id": null,
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


**Fields**


| Name   | Type   | Description                                                                 | Required |
|--------|--------|-----------------------------------------------------------------------------|----------|
| expiry | string | The duration (in seconds) for the playback URL to remain valid. For non-encrypted videos, the URL is valid for a lifetime by default. For AES-encrypted videos, defaults to 120 seconds if not specified. | No       |


**Sample request body**

```json 
{
    "expiry": 300
}
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
        "playback_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/yXrprYum2TS/video.m3u8Expires=1736006095&Signature=jDr8etkNBN0NWajFNNpiqwQxSyDzW497cz~tAodGK~49deNHWya4pvCy2sRyteyJPU455uDkE3we8MvXOkVenx4m8SR6IB-BsdIFJ0ZraQnMOQqVdsTBn8wBHgXERL28AF71Vkn5yH0-eDWUttzP2jc4o42WO~6SMd1YKjmKdqgyxU9K1TZBXr3tAXPdEJQlzipoRp6j7W~3QgAOz-zcOBRACoXj9P0Xi4yOjMaKSTrvGx~BvF4SBMAbQPGV2i-P-21-tpVCrPl921FRWlbLArt~IMbrfqAZJUXOWGB3NTpSUAMvM8HnQs7JCrySVwQaWGsLhgZk7x-6Ls2olKNb3Q__&Key-Pair-Id=K2XWKDWM065EGO",
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
    "parent_id": null,
    "views_count": 404,
    "average_watched_time": 443,
    "total_watch_time": 179192,
    "unique_viewers_count": 312,
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

## Generate Subtitle for an Asset

To generate subtitles for a video asset, you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/generate_subtitle/
```

**Description**

This endpoint triggers automatic subtitle generation for a video asset using speech-to-text technology. The system will generate English subtitles automatically and save them as a WebVTT (.vtt) file.

**Request Body**

No request body is required for this endpoint.

**Response**

For valid requests the API server returns the complete asset data in JSON format with status code 201:

```json
{
    "id": "9328558d-e0a5-4093-b3b9-8f15ad1550d8",
    "title": "Big Buck Bunny Video",
    "bytes": 450881324,
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
    "parent_id": "32seYYHeNxE"
}
```
**Pricing**

Auto-generated English subtitles cost $0.071 per minute of video content.

:::important
- Subtitle generation is an asynchronous process that may take several minutes
- Only one auto-generated subtitle track per video is allowed
- The video must be in "Completed" status for subtitle generation
- Email notifications are sent upon completion or failure
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

## Trim Video Asset

To trim a video asset, send an HTTP POST request to the API endpoint with either start_time or end_time (or both) in the request body along with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/trim/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| start_time    | number      |  Start time of the trimmed video (in seconds)	     | No* |
| end_time    | number      |  End time of the trimmed video (in seconds)	     | No* |

*At least one of start_time or end_time is required.

**Sample Request Body**

```json
{
    "start_time": 0,
    "end_time": 30
}
```

**Response**

For valid requests, the API server returns a JSON:

```json
{
    "message": "Video trim job started successfully",
    "trim_job_id": 58,
    "status": "Pending"
}
```

## Check Trim Job Status

To check the status of an ongoing or completed trim job, send an HTTP GET request to the status endpoint with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/trim/status/
```

**Response**

For valid requests, the API server returns a JSON:

```json
{
    "id": 58,
    "start_time": 0,
    "end_time": 30,
    "status": 1,
    "status_display": "Pending",
    "background_task_id": "abe9d132-ca1b-4cb2-a145-b3c19f7cda85",
    "created": "2025-06-12T19:41:48.001170+05:30",
    "modified": "2025-06-12T19:41:48.071262+05:30"
}
```

## Revert Trimmed Video

To revert a previously trimmed video back to its original state, send an HTTP POST request to the API endpoint along with the [authentication Header](../server-api/authentication.md). This will initiate a background task to restore the full-length video.

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/trim/revert/
```

**Request Body**

No request body is required for this endpoint.

**Response**

For valid requests, the API server returns a JSON:

```json
{
    "message": "Video revert job started successfully",
    "task_id": "b84b229e-19fb-45c2-be36-dc942a809e87"
}
```
