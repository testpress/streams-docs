---
sidebar_position: 7
---

# WebHook 
To notify your application about things that happen asynchronously ,
[Create a Web Hook](../server-api/webhooks.md).

After successfully registering the webhook, whenever the status of live stream changes, response will be sent to the webhook.

**Sample webhook response for livestream is as follows**
```json
{
    "title": "Data science Live class",
    "bytes": null,
    "type": "livestream",
    "video": null,
    "id": "4PtERT9d9uK",
    "live_stream": {
        "rtmp_url": "rtmp://23.427.127.24/live",
        "stream_key": "org-4xu8ay-live-4PtERT9d9uK-jKP4",
        "status": "Streaming",
        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/4xu8ay/4PtERT9d9uK/video.m3u8",
        "start": null,
        "transcode_recorded_video": true,
        "chat_embed_url":"https://app.tpstreams.com/live-chat/4PtERT9d9uK/"
    },
    "parent_id": null
}

```
#### Streaming Status Table

| Status       | Description |
|--------------|-------------|
| Not Started  | Live stream server not created or started. |
| Streaming    | The live stream is active, typically streamed via OBS. |
| Recording    | After stopping the live stream, it enters recording state, initiating transcoding. |
| Disconnected | Live streaming is stopped in OBS, either manually or due to network issues. |
| Error        | Error encountered while starting the live stream. |
| Completed    | Transcoding is completed, transitioning the status to "Completed." |

:::important

When the status of TPStreams changes:

- If the status of the live stream changes to **Disconnected**, initiate a direct reconnection using OBS.
- If the status changes to **Error**, create a new live stream.

