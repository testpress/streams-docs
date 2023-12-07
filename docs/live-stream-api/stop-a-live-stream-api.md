---
sidebar_position: 5
---


# Stop a live stream
To Stop a live stream you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<str:asset_id>/stop_live_stream/
```

This will stop the specified live stream

:::important

If the value of the parameter "transcode_recorded_video" is set to true, you will receive the video object in the webhook response.


:::


**Sample webhook response is as follows**
```json
{
    "title": "Data science Live class",
    "bytes": null,
    "type": "livestream",
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
                "url": "https://static.testpress.in/Data_science_Live_class.mp4"
            }
        ],
    }, 
    "id": "4PtERT9d9uK",
    "live_stream": {
        "rtmp_url": "rtmp://23.427.127.24/live",
        "stream_key": "org-4xu8ay-live-4PtERT9d9uK-jKP4",
        "status": "Completed",
        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/4xu8ay/4PtERT9d9uK/video.m3u8",
        "start": null,
        "transcode_recorded_video": true,
        "chat_embed_url":"https://app.tpstreams.com/live-chat/4PtERT9d9uK/"
    },
    "parent_id": null
}
```