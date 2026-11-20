---
sidebar_position: 6
slug: /server-api/live-stream-api/interactive-live-stream/recording-and-transcript
---

# Recording and transcript

After an interactive live stream ends, TPStreams processes the session into an MP4 recording. Once the recording is ready, an English transcript is generated from its audio. You can download both through the API, and TPStreams sends a [webhook](#webhooks) when each one becomes ready.

The recording also keeps playing in the same [embed](access-tokens-and-embedding#embed-the-live-stream) after the session ends. Use these endpoints when you need the files themselves, for example to store them or to show captions in your own player.

:::tip

Download links are temporary. Download the file right away, and call the endpoint again whenever you need a new link instead of storing it.

:::

## Get the recording

To get a download link for the recording, send an HTTP GET request to the API endpoint with the [authentication header](../authentication.md).

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/live_stream/recording/
```

When the recording is ready, the API server returns `200 OK`:

```json
{
    "status": "ready",
    "download_url": "https://storage.example.com/recordings/5h6EpZQC6sh.mp4?signature=..."
}
```

`download_url` points to an MP4 file in the highest quality available, up to 1080p.

If the recording is not ready yet, the API server returns `409 Conflict` with a `status` that tells you why:

```json
{
    "status": "processing",
    "detail": "Recording is still being processed."
}
```

### Errors

| Status code | `status` | Reason |
| ----------- | -------- | ------ |
| 400 Bad Request | | The live stream is not interactive. |
| 404 Not Found | | No live stream exists with this asset id. |
| 409 Conflict | `not_available` | The live stream has not ended yet. |
| 409 Conflict | `processing` | The recording is still being processed. Retry later, or wait for the [recording ready webhook](#webhooks). |
| 422 Unprocessable Entity | `failed` | The recording could not be processed. Contact TPStreams support. |
| 502 Bad Gateway | | The recording could not be fetched. Retry the request. |

## Get the transcript

To get a download link for the transcript, send an HTTP GET request to the API endpoint with the [authentication header](../authentication.md).

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/live_stream/transcript/
```

When the transcript is ready, the API server returns `200 OK`:

```json
{
    "status": "ready",
    "download_url": "https://storage.example.com/captions/5h6EpZQC6sh-en.vtt?signature=..."
}
```

`download_url` points to a WebVTT (`.vtt`) file. Transcripts are generated in English only.

The transcript is generated after the recording, so it is never ready before the recording is.

### Errors

The errors are the same as for the [recording](#errors), with `processing` and `failed` referring to the transcript.

## Webhooks

If you have [registered a webhook](../webhooks.md), TPStreams notifies it when the recording and the transcript become ready:

| Event | Sent when | Call |
| ----- | --------- | ---- |
| `LIVESTREAM_RECORDING_READY` | The recording is ready to download. | [Get the recording](#get-the-recording) |
| `LIVESTREAM_TRANSCRIPT_READY` | The transcript is ready to download. It always arrives after `LIVESTREAM_RECORDING_READY`. | [Get the transcript](#get-the-transcript) |

The payload is the live stream asset, the same as for [status changes](start-and-stop#webhooks), with the `event` field naming what happened. It does not contain a download link: use the asset `id` to call the endpoint for that event. The payload below is trimmed to the fields that matter here:

```json
{
    "title": "Data science live class",
    "type": "livestream",
    "id": "5h6EpZQC6sh",
    "live_stream": {
        "type": "interactive",
        "external_session_id": "6a9d565031ba022f16368188",
        "status": "Completed",
        "start": "2026-11-05 15:30:00"
    },
    "event": "LIVESTREAM_RECORDING_READY"
}
```

Webhooks created through the API receive every event, including these two. For a webhook set up in the dashboard to receive only selected events, select **Recording Ready** and **Transcript Ready** under **Live Stream**.
