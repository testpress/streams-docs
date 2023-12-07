---
sidebar_position: 2
---

# Create a live stream instantly


To Create a live stream instantly you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| title            | string      |  Specify a text string or identifier which can be used for filtering or searching the live stream.| Yes |
| enable_drm       | boolean      | A boolean value to enable or disable DRM for live stream recording.| No |

**Sample request body**

```json 
{
  "title": "Data science Live class",
  "enable_drm": true
}

```

For valid requests the API server returns a JSON:

```json
{
    "title": "Data science Live class",
    "bytes": null,
    "type": "livestream",
    "video": null,
    "id": "4PtERT9d9uK",
    "live_stream": {
        "rtmp_url": "",
        "stream_key": null,
        "status": "Not Started",
        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/4xu8ay/4PtERT9d9uK/video.m3u8",
        "start": null,
        "transcode_recorded_video": true,
        "chat_embed_url": null
    },
    "parent_id": null
}
```
:::important

- The live stream server typically takes around 20-30 seconds to start. 
- Once it's up and running, both the "rtmp_url" and "stream_key" will become accessible. 


:::
To automatically receive rtmp_url and stream key as soon as the server is established,[WebHook Response](webhook-response).

After successfully registering the webhook, you will receive an rtmp_url and stream_key as a response paste it in the obs stream settings  **Settings > Stream**






 ![OBS settings](/img/obs.png)
