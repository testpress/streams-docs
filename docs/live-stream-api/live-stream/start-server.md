---
sidebar_position: 1
---

# Start the scheduled live stream


To Start a server for the scheduled live stream you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](/server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<str:asset_id>/start_server/
```
For valid requests the API server returns a JSON:

```json
{
    "title": "Data science Live class",
    "bytes": null,
    "type": "livestream",
    "video": null,
    "id": "8XGEEj6ptnB",
    "live_stream": {
        "rtmp_url": "",
        "stream_key": null,
        "status": "Not Started",
        "hls_url": "https://d3cydmgt9q030i.cloudfront.net/live/edee9b/8XGEEj6ptnB/video.m3u8",
        "start": "2024-10-05 15:30:00",
        "transcode_recorded_video": true,
        "enable_drm_for_recording": false,
        "chat_embed_url": "https://app.tpstreams.com/live-chat/edee9b/8XGEEj6ptnB/",
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
This will start the server for specified live stream

Above response has the details of the live stream started which can also be obtained by API 
**/api/v1/<organization_id>/assets/<asset_id>/**

:::important

- The live stream server typically takes around 20-30 seconds to start. 
- Once it's up and running, both the "rtmp_url" and "stream_key" will become accessible. 


:::
To automatically receive rtmp_url and stream key as soon as the server is established,[Create a Web Hook](/server-api/webhooks.md).

After successfully registering the webhook, you will receive an updated webhook response.


