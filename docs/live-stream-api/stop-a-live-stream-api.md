---
sidebar_position: 5
---


# Stop a live stream
To Stop a live stream you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<str:asset_id>/stop_live_stream/
```

This will stop the specified live stream

For valid requests the API server returns a JSON:

```json
{
    "message": "Live stream stopped successfully",
    "trim_scheduled": false
}
```

## Schedule Trim After Live Stream

You can optionally add trim parameters to the stop API request body to schedule a trim operation that will be executed after the live stream recording is completed and transcoded. This allows you to trim the recorded video directly when stopping the live stream.

**Fields for Trim Scheduling**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| start_time       | integer      | Start time in seconds from the beginning of the recording | Yes (for trim) |
| end_time         | integer      | End time in seconds from the beginning of the recording | Yes (for trim) |

**Sample request body with trim scheduling**

```json
{
    "start_time": 30,
    "end_time": 120
}
```

:::important

When scheduling a trim:
- Both `start_time` and `end_time` are required
- Both must be non-negative integers
- `start_time` must be less than `end_time`
- `end_time` cannot exceed the total duration of the live stream recording
- The trim operation will be executed automatically after transcoding completes

:::

**Response with trim scheduled**

```json
{
    "message": "Live stream stopped successfully",
    "trim_scheduled": true
}
```

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
        "enable_drm_for_recording": true,
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