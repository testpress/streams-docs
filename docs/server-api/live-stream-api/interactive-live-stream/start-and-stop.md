---
sidebar_position: 3
---

# Start and stop

## Start a live stream

To start an interactive live stream, send an HTTP POST request to the API endpoint with the [authentication header](../../authentication.md).

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/start_live_stream/
```

This endpoint only works for interactive live streams. Broadcast live streams start when the encoder starts streaming.

For valid requests the API server returns `200 OK` with the live stream asset, now in the `Streaming` status:

```json
{
    "title": "Data science live class",
    "type": "livestream",
    "id": "5h6EpZQC6sh",
    "live_stream": {
        "type": "interactive",
        "external_session_id": "6a9d565031ba022f16368188",
        "status": "Streaming",
        "start": "2026-11-05 15:30:00",
        "enable_drm": true
    }
}
```

Calling start on a live stream that is already `Streaming` returns the same response and changes nothing.

**Errors**

| Status code | Reason |
| ----------- | ------ |
| 400 Bad Request | The live stream is not interactive, or it is already `Completed`, `Stopped` or in `Error`. |
| 404 Not Found | No live stream exists with this asset id. |
| 502 Bad Gateway | The interactive session could not be started. Retry the request. |

## Stop a live stream

To stop an interactive live stream, use the same [stop API](../stop-a-live-stream-api.md) as broadcast live streams:

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/stop_live_stream/
```

For valid requests the API server returns:

```json
{
    "message": "Live stream stopped successfully",
    "trim_scheduled": false
}
```

The live stream moves to `Completed` and all attendees leave the session. Stopping a live stream that is already `Completed` returns `204 No Content`.

If the host ends the session from the studio, the live stream also moves to `Completed`, so you do not need to call the stop API in that case.

## Status lifecycle

| Status      | Description |
| ----------- | ----------- |
| Not Started | The live stream is created and waiting to be started. |
| Streaming   | The session is live. Hosts and attendees can join. |
| Completed   | The session has ended. The `playback_url` now plays the recording. |

## Webhooks

If you have [registered a webhook](../../webhooks.md), TPStreams sends the live stream asset to it on every status change: when the live stream is created (`Not Started`), started (`Streaming`) and ended (`Completed`). The payload has the same format as [broadcast live stream webhooks](../webhook-response.md), with `live_stream.type` set to `interactive`.
