---
sidebar_position: 3
---

# Assets

- An asset refers to a media content/video that is processed, stored, and delivered through Streams. This endpoint creates an asset allowing users to ingest media content into the TP Streams system for processing and delivery.

## Upload an video

To Upload a asset you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).


```bash
http://app.tpstreams.com/api/v1/<organization_id>/assets/videos/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| enable_drm       | boolean      |  Enable DRM encryption for transcoded videos. TP Streams supports Widevine and Fairplay DRMs           | False |
| title            | string      |  Specify a text string or identifier which can be used for filtering or searching the asset.| False |
| resolutions      | array         | Required resolutions of the transformed asset in case of HLS or MPEG-DASH delivery format. Can be a comma separated string out of the following values: 240p, 360p, 480p, 540p, 720p, and 1080p. Re-sized rendition will retain the input aspect ratio. | True |
| inputs | json | URL or web address of a file that TP streams should download to create a new asset. | True |

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
  "enable_drm": true
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
        "enable_drm": true,
        "tracks": [],
        "inputs": [
            {
                "url": "https://static.testpress.in/BigBuckBunny.mp4"
            }
        ],
    },
}

```
Above response can also be obtained by asset detail API **/api/v1/<organization_id>/assets/<asset_id>/**

## Get all the assets that belong to the organization

To get all assets in the organization, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
http://app.tpstreams.com/api/v1/<organization_id>/assets/
```

**Response**
```json
{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": "9328558d-e0a5-4093-b3b9-8f15ad1550d8",
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
                "resolutions": [
                    "240p"
                ],
                "video_codec": "h264",
                "audio_codec": "aac",
                "enable_drm": true,
                "tracks": [],
                "inputs": [
                    {
                        "url": "https://static.testpress.in/BigBuckBunny.mp4"
                    }
                ],
            },
        }
    ]
}

```

