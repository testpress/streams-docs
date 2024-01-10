---
sidebar_position: 3
---

# Assets

- An asset refers to a media content/video that is processed, stored, and delivered through Streams. This endpoint creates an asset allowing users to ingest media content into the TP Streams system for processing and delivery.

## Upload an video

To Upload a asset you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](/docs/server-api/authentication.md).


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

### Response 
**HTTP Status Codes:**

For valid requests the API server returns a JSON
- **201 Created:**
 Indicates successful creation of a new video resource

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

- **401 Unauthorized :**
    Returned when the request lacks valid authentication credentials

    ```json
    {
        "detail": "Invalid token."
    }
    ```
- **404 Not Found :**
    If the wrong organization ID is provided

    ```json
    The requested resource was not found on this server.
    ```

## Get all the assets that belong to the organization

To get all assets in the organization, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](/docs/server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/
```

**Response**

**HTTP Status Codes:**

- **200 OK :**
  Request successful. Server processed the request

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
        ]
    }
    ```

- **401 Unauthorized :**
    Returned when the request lacks valid authentication credentials

    ```json
    {
        "detail": "Invalid token."
    }


- **404 Not Found :**
    If the wrong organization ID is provided

    ```json
    The requested resource was not found on this server.
    ```

## Get Individual Asset Details

To get a individual asset in the organization, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](/docs/server-api/authentication).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/
```


**Response**
**HTTP Status Codes:**

- **200 OK :**
  Request successful. Server processed the request

    ```json
    {
        "title": "sample.mp4",
        "bytes": null,
        "type": "video",
        "video": {
            "progress": 0,
            "thumbnails": [],
            "status": "Completed",
            "playback_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/56761978-503c-4ad9-9eca-dff4c4cc12db/video.m3u8",
            "dash_url": "https://d28qihy7z761lk.cloudfront.net/transcoded/56761978-503c-4ad9-9eca-dff4c4cc12db/video.mpd",
            "preview_thumbnail_url": null,
            "format": "abr",
            "resolutions": [
                "240p"
            ],
            "video_codec": "h264",
            "audio_codec": "aac",
            "content_protection_type": "drm",
            "tracks": [],
            "inputs": [
                {
                    "url": "private/e3e153564cb641b08edb3ae9c85c7211.mp4"
                }
            ]
        },
        "id": "56761978-503c-4ad9-9eca-dff4c4cc12db",
        "live_stream": null,
        "parent_id": "32seYYHeNxE",
    }

- **404 Not Found : **
    
    If the wrong organization ID is provided
    ```json
    The requested resource was not found on this server.
    ```

    If the wrong asset ID is provided:

    ```json
    {
        "detail": "Not found."
    }
- **401 Unauthorized :**
    Returned when the request lacks valid authentication credentials

    ```json
    {
        "detail": "Invalid token."
    }

## Delete Individual Asset

To delete a individual asset in the organization, you need to send an HTTP DELETE request to the API Endpoint, with the [authentication Header](/docs/server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/
```

If the specified asset is a folder, it will remove all its child assets. you need to send an HTTP DELETE request to the API Endpoint, with the [authentication Header](/docs/server-api/authentication.md).

This will delete the specified asset from your organization

## Move Individual Asset
To move an asset from one folder to another or to the root directory,  you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](/docs/server-api/authentication.md) .

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