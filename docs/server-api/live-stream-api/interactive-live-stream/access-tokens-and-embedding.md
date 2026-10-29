---
sidebar_position: 4
---

# Access tokens and embedding

Every host and attendee needs their own access token. The token identifies the user inside the session, and its `playback_url` is the page you open or embed for that user.

To generate an access token, send an HTTP POST request to the API endpoint with the [authentication header](../../authentication.md). This is the same endpoint used for [video access tokens](../../access-token.md). For interactive live streams it accepts the fields below.

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/access_tokens/
```

**Fields**

| Name              | Type    | Description | Required |
| ----------------- | ------- | ----------- | -------- |
| is_host           | boolean | `true` generates a host token, `false` an attendee token. Defaults to `false`. | No |
| user_id           | string  | Your own unique id for the user, up to 255 characters. Use the same id for the same user every time. | Yes, for attendees |
| name              | string  | Display name shown in the session. | No |
| profile_pic_url   | string  | URL of the user's profile picture. | No |
| user_email        | string  | Email address of the user. | No |
| user_phone_number | string  | Phone number of the user, up to 32 characters. | No |
| time_to_live      | integer | How long the token is valid, in seconds. Defaults to `86400` (1 day). Maximum `604800` (7 days). | No |
| playback_options  | object  | Playback settings for this user. See [playback options](#playback-options). | No |

### Attendee token

```json
{
  "user_id": "student-1024",
  "name": "Priya Sharma",
  "user_email": "priya@example.com",
  "time_to_live": 7200
}
```

### Host token

```json
{
  "is_host": true,
  "name": "Arun Kumar"
}
```

- Host tokens can only be generated with an API key of a user who has permission to manage live streams.
- If `user_id` is omitted for a host, it defaults to the id of the user who owns the API key, and `name` and `user_email` default to that user's details.
- Open the host `playback_url` in a new browser tab. It is the host's studio, where they can share their camera, microphone and screen.

### Response

For valid requests the API server returns `201 Created`:

```json
{
    "playback_url": "https://app.tpstreams.com/embed/gcdem4/5h6EpZQC6sh/?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user_id": "student-1024"
}
```

The token is valid for the whole session, including the recording after the session ends, until `time_to_live` expires. It only works for the live stream it was generated for.

### Playback options

`playback_options` controls how the session and its recording play for the user. All keys are optional and default to `false`.

| Key | Type | Description |
| --- | ---- | ----------- |
| shouldPreferOnlyHighDefinitionPlayback | boolean | Plays only in 1080p and 720p. Users on slow connections may see buffering. |
| shouldHideSeekControls | boolean | Hides the seek bar and the forward and backward buttons. |
| shouldDisallowRecordedPlaybackIfNotLive | boolean | After the session ends, this token cannot play the recording. |
| customBrandingData | object | Shows your brand in the session. `name` (string, required) and `logoUrl` (URL, optional). |

```json
{
  "user_id": "student-1024",
  "name": "Priya Sharma",
  "playback_options": {
    "shouldHideSeekControls": true,
    "customBrandingData": {
      "name": "Acme Academy",
      "logoUrl": "https://example.com/logo.png"
    }
  }
}
```

### Errors

| Status code | Reason |
| ----------- | ------ |
| 400 Bad Request | `user_id` is missing for an attendee token, or a field is invalid. |
| 403 Forbidden | Interactive live streaming is not enabled for your organization, or the API key's user cannot host this live stream. |
| 404 Not Found | No asset exists with this id in your organization. |
| 502 Bad Gateway | The host session could not be set up. Retry the request. |

## Embed the live stream

Embed the attendee's `playback_url` in an iframe. The `allow` attribute is required so attendees on stage can use their camera, microphone and screen share, and so the recording can play with DRM.

```html
<iframe
  src="https://app.tpstreams.com/embed/gcdem4/5h6EpZQC6sh/?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  style="border: 0; width: 100%; aspect-ratio: 16 / 9;"
  allow="camera; microphone; display-capture; autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write"
  allowfullscreen>
</iframe>
```

- Generate the token on your server and never expose your API key in the browser.
- If your organization has allowed domains for embedding configured, the embed only loads on those domains, the same as video embeds.
- The embed returns a not found page if the token is invalid, expired, or belongs to a different live stream.
- When an attendee leaves the stage, the embed shows a **Rejoin** option. When the session ends, the recording stays visible in the embed.

To react to what happens inside the embed, such as an attendee joining the stage or the session ending, see [player events](player-events).
