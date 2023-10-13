---
sidebar_position: 4
---

# Live Streams

- A live stream is a real-time video broadcast delivered through a streaming platform. You can create live streams, allowing users to ingest media content into the TP Streams system for processing and delivery.

- With the TP Streams system, you have the ability to create live streams in two distinct ways:

1. [Create a live stream instantly](../server-api/live-stream.md#create-a-live-stream-instantly)
2. [Schedule live streams and start them later](../server-api/live-stream.md#schedule-a-live-stream-and-start-the-server-later)

## Create a live stream instantly
To Create a live stream instantly you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| title            | string      |  Specify a text string or identifier which can be used for filtering or searching the live stream.| Yes |

**Sample request body**

```json 
{
  "title": "Data science Live class"
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
To automatically receive rtmp_url and stream key as soon as the server is established,[Create a Web Hook](../server-api/webhooks.md).

After successfully registering the webhook, you will receive an updated webhook response.

## Schedule a live stream and start the server later
### Schedule a live stream
To Schedule a live stream you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| title            | string      |  Specify a text string or identifier which can be used for filtering or searching the live stream.| Yes |
| start            | string      |  Specify the date and time (in the format: "YYYY-MM-DD HH:MM:SS") when the live stream should be scheduled.| Yes |

**Sample request body**

```json 
{
  "title": "Data science Live class",
  "start": "2024-10-05 15:30:00"
}

```

For valid requests the API server returns a JSON:

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
        "enable_drm": false,
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
Live stream is created with the scheduled time for you to start the server later.

Above response has the details of the live stream scheduled which can also be obtained by API 
**/api/v1/<organization_id>/assets/<asset_id>/**
:::important

- Scheduled live streams will not automatically start at the specified time; they must be manually initiated.
- RTMP URL and stream key will be available once you start the stream


:::

### Start the server for the scheduled live stream
To Start a server for the scheduled live stream you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).


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
        "enable_drm": false,
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
To automatically receive rtmp_url and stream key as soon as the server is established,[Create a Web Hook](../server-api/webhooks.md).

After successfully registering the webhook, you will receive an updated webhook response.

## Stop a live stream
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


## WebHook Response
Upon a successful creation of live stream, to notify your application about things that happen asynchronously ,
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
        "status": "Available",
        "hls_url": "https://d28qihy7z761lk.cloudfront.net/live/4xu8ay/4PtERT9d9uK/video.m3u8",
        "start": null,
        "transcode_recorded_video": true,
        "chat_embed_url":"https://app.tpstreams.com/live-chat/4PtERT9d9uK/"
    },
    "parent_id": null
}
```
After getting the rtmp_url and stream_key paste it in the obs stream settings  **Settings > Stream**






 ![OBS settings](/img/obs.png)
