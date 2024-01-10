---
sidebar_position: 4
---


# List Live Streams API

To retrieve a list of live streams in the organization, send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md). This API supports to list live streams, scheduled live streams 

```http
https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/
```
**Sample webhook response is as follows**
**Response**

**HTTP Status Codes:**

- **200 OK :**
   Request successful. Server processed the request.

    ```json
    {
        "count": 2,
        "next": null,
        "previous": null,
        "results": [
            {
                "title": "Data Science Live Class",
                "bytes": null,
                "type": "livestream",
                "video": null,
                "id": "8DH94uXQgrA",
                "live_stream": {
                    "rtmp_url": "rtmp://52.66.213.19/live",
                    "stream_key": "org-89b2cy-live-8DH94uXQgrA-7XkI",
                    "status": "Completed",
                    "hls_url": "https://d3cydmgt9q030i.cloudfront.net/live/89b2cy/8DH94uXQgrA/video.m3u8",
                    "start": "2023-12-07 13:02:16",
                    "transcode_recorded_video": true,
                    "enable_drm_for_recording": true,
                    "chat_embed_url": null,
                    "resolutions": [
                        "240p",
                        "480p",
                        "720p"
                    ]
                },
                "parent": null,
                "parent_id": null
            },
            {
                "title": "GO LIVE NOW",
                "bytes": null,
                "type": "livestream",
                "video": null,
                "id": "9QgXR3pPj49",
                "live_stream": {
                    "rtmp_url": "",
                    "stream_key": null,
                    "status": "Completed",
                    "hls_url": "https://d3cydmgt9q030i.cloudfront.net/live/89b2cy/9QgXR3pPj49/video.m3u8",
                    "start": "2023-12-07 12:34:42",
                    "transcode_recorded_video": true,
                    "enable_drm_for_recording": true,
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
        ]
    }
    ```

- **401 Unauthorized :**
    Returned when the request lacks valid authentication credentials.

    ```json
    {
        "detail": "Invalid token."
    }


- **404 Not Found :**
     If the wrong organization ID is provided:

    ```json
    The requested resource was not found on this server.
    ```
