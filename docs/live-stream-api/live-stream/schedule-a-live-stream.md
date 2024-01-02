---
sidebar_position: 1
---

# Schedule a live stream


### Schedule a live stream
To Schedule a live stream you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](/server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| title            | string      |  Specify a text string or identifier which can be used for filtering or searching the live stream.| Yes |
| start            | string      |  Specify the date and time (in the format: "YYYY-MM-DD HH:MM:SS") when the live stream should be scheduled.| Yes |
| enable_drm_for_recording       | boolean      | A boolean value to enable or disable DRM for live stream recording.| No |

**Sample request body**

```json 
{
  "title": "Data science Live class",
  "start": "2024-10-05 15:30:00",
  "enable_drm_for_recording": false
}

```

### Response 
**HTTP Status Codes:**

For valid requests the API server returns a JSON
- **201 Created:**
 Indicates successful creation of a new video resource

    ```json
    {
        "title": "Data science Live class",
        "bytes": null,
        "type": "livestream",
        "video": null,
        "id": "AuC9yX2EtBr",
        "live_stream": {
            "rtmp_url": "",
            "stream_key": null,
            "status": "Not Started",
            "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/gnarys/AuC9yX2EtBr/video.m3u8",
            "start": "2024-10-05 15:30:00",
            "transcode_recorded_video": true,
            "enable_drm_for_recording": false,
            "chat_embed_url": null,
            "resolutions": [
                "240p",
                "480p",
                "720p"
            ]
        },
        "parent": null,
        "parent_id": null
    }
    ```

- **401 Unauthorized**
    Returned when the request lacks valid authentication credentials.

    ```json
    {
        "detail": "Invalid token."
    }
    ```
- **404 Not Found**

    The requested resource was not found on this server.
- ** 400 Bad Request**
Client error due to invalid or conflicting data.
Invalid Folder UUID

  Returned when the provided folder UUID is invalid.

  ```json
  {
      "parent": [
          "Invalid folder UUID"
      ]
  }



Live stream is created with the scheduled time for you to start the server later.

Above response has the details of the live stream scheduled which can also be obtained by API 
**/api/v1/<organization_id>/assets/<asset_id>/**
:::important

- Scheduled live streams will not automatically start at the specified time; they must be manually initiated.
- RTMP URL and stream key will be available once you start the stream


:::

