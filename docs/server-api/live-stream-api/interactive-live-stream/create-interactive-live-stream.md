---
sidebar_position: 2
---

# Create an interactive live stream

To create an interactive live stream, send an HTTP POST request to the API endpoint with the [authentication header](../../authentication.md) and `type` set to `interactive`.

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/live_streams/
```

**Fields**

| Name                  | Type    | Description | Required |
| --------------------- | ------- | ----------- | -------- |
| title                 | string  | Name of the live stream. Used for filtering and searching. | Yes |
| type                  | string  | Must be `interactive`. Defaults to `broadcast` when omitted. | Yes |
| start                 | string  | Date and time to schedule the session, in the format `YYYY-MM-DD HH:MM:SS`. Must not be in the past. Omit to create the session instantly. | No |
| enable_drm            | boolean | Protects the session recording with DRM. Defaults to `false`. | No |
| skip_join_screen      | boolean | Attendees enter the session directly, without a pre-join screen. Defaults to `false`. | No |
| add_everyone_on_stage | boolean | Every attendee joins the stage instead of watching as a viewer. Defaults to `false`. | No |

**Sample request body**

```json
{
  "title": "Data science live class",
  "type": "interactive",
  "start": "2026-11-05 15:30:00",
  "enable_drm": true,
  "skip_join_screen": true,
  "add_everyone_on_stage": false
}
```

For valid requests the API server returns `201 Created` with the live stream asset. The response below is trimmed to the fields that matter for interactive live streams:

```json
{
    "title": "Data science live class",
    "type": "livestream",
    "id": "5h6EpZQC6sh",
    "live_stream": {
        "type": "interactive",
        "external_session_id": "6a9d565031ba022f16368188",
        "status": "Not Started",
        "start": "2026-11-05 15:30:00",
        "enable_drm": true
    },
    "parent": null,
    "parent_id": null
}
```

- Use the asset `id` in all later API calls for this live stream.
- `external_session_id` identifies the interactive session. It is only returned for interactive live streams.
- Broadcast-only fields such as `rtmp_url` and `stream_key` are returned as `null` and can be ignored. Users join and watch through the [access token](access-tokens-and-embedding) `playback_url`.
- The live stream stays in `Not Started` until you [start it](start-and-stop#start-a-live-stream), even if a `start` time is set.

### Errors

| Status code | Reason |
| ----------- | ------ |
| 400 Bad Request | Invalid fields, a `start` time in the past, or the organization's live stream limit is reached. |
| 403 Forbidden | Interactive live streaming is not enabled for your organization. |
| 502 Bad Gateway | The interactive session could not be created. No live stream is created, so it is safe to retry. |
