---
sidebar_position: 5
---

# Player events

When you [embed an interactive live stream](access-tokens-and-embedding#embed-the-live-stream) in your page, the embed sends events to your page as things happen inside it, such as the user joining the stage or the session ending.

Use these events to keep your page in sync with the session. For example, show a "You are live" badge while the user is on stage, show a thank-you message when the session ends, or track how much of the recording a user watched.

## Before you start

A user inside the embed is always in one of two views:

- **Stage**: the live room where the host and attendees on stage talk with camera and microphone.
- **Live video**: a video player for attendees who are not on stage. After the session ends, the same player plays the recording.

Events starting with `webrtc:` come from the stage. Events starting with `video:` come from the live video player.

## Listening for events

The embed sends events with the browser's [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API. Add a `message` listener on `window` in the page that contains the iframe:

```js
const liveSession = document.getElementById("live-session"); // your iframe

window.addEventListener("message", (event) => {
  // Only accept messages from the TPStreams embed on this page.
  if (event.origin !== "https://app.tpstreams.com") return;
  if (event.source !== liveSession.contentWindow) return;

  const data = event.data;
  if (!data || typeof data.type !== "string") return;

  console.log("Received event:", data.type, data);
});
```

Every event is an object with a `type` field. Some events have extra fields, described below.

## Events

### webrtc:join-stage

Fires when the user joins the stage.

```json
{ "type": "webrtc:join-stage" }
```

Use it to update your page when the user goes live, for example to show a "You are live" badge.

### webrtc:left-stage

Fires when the user leaves the stage while the session is still running.

```json
{ "type": "webrtc:left-stage" }
```

Use it to undo anything you changed on `webrtc:join-stage`, or to track how long users stay on stage.

### webrtc:view-mode

Fires when the user enters a view. `mode` tells you which one.

```json
{ "type": "webrtc:view-mode", "mode": "stage" }
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| `mode` | `"stage"` or `"hls"` | `stage` when the user enters the stage, `hls` when the user enters the live video view. |

Use it to adjust your layout for the current view, for example to make room for a chat panel while the user is watching the live video.

### webrtc:livestream-ended

Fires when the session ends while the user is on stage. This happens when the host ends the session or you call the [stop API](start-and-stop#stop-a-live-stream).

```json
{ "type": "webrtc:livestream-ended" }
```

Use it to show an end-of-session message, a feedback form, or to redirect the user.

### video:play

Fires when the video starts or resumes playing, in the live video or the recording.

```json
{ "type": "video:play", "durationAtInSeconds": 312.4 }
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| `durationAtInSeconds` | number | The playback position, in seconds, when the video started playing. |

Use it with `video:pause` to track watch time.

### video:pause

Fires when the video is paused, in the live video or the recording.

```json
{ "type": "video:pause", "durationAtInSeconds": 498.1 }
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| `durationAtInSeconds` | number | The playback position, in seconds, when the video was paused. |

Use it with `video:play` to track watch time.

### video:livestream-ended

Fires when the session ends while the user is watching the live video.

```json
{ "type": "video:livestream-ended" }
```

This is the live video counterpart of `webrtc:livestream-ended`. The session can end in either view, so listen for both to know when the session is over.

### video:ended

Fires when the recording plays to the end.

```json
{ "type": "video:ended" }
```

Use it to mark the recording as watched or to show what's next.

## Event types

If you use TypeScript, this type covers every event the embed sends:

```ts
type InteractiveLiveStreamEvent =
  | { type: "webrtc:join-stage" }
  | { type: "webrtc:left-stage" }
  | { type: "webrtc:view-mode"; mode: "stage" | "hls" }
  | { type: "webrtc:livestream-ended" }
  | { type: "video:play"; durationAtInSeconds: number }
  | { type: "video:pause"; durationAtInSeconds: number }
  | { type: "video:livestream-ended" }
  | { type: "video:ended" };
```

## Order of events

These examples show the events your page receives in common situations.

**An attendee joins the stage, then leaves it**

```text
webrtc:join-stage
webrtc:view-mode   { mode: "stage" }
webrtc:left-stage
```

**An attendee watches the live video until the session ends**

```text
webrtc:view-mode         { mode: "hls" }
video:play               { durationAtInSeconds: 1834.6 }
video:livestream-ended
```

**An attendee watches the recording after the session**

```text
webrtc:view-mode   { mode: "hls" }
video:play         { durationAtInSeconds: 0 }
video:pause        { durationAtInSeconds: 312.4 }
video:play         { durationAtInSeconds: 312.4 }
video:ended
```

## Important notes

- **Don't trust events for anything critical.** Events run in the user's browser and can be faked. They are fine for updating your page. For anything that matters, such as attendance records or marking a session complete, confirm it on your server, for example with the live stream status from the [API](../list-live-stream-api.md) or your [webhook](start-and-stop#webhooks).
- **Always check the origin and source.** Your page can receive messages from other scripts and iframes. Check `event.origin` and `event.source` as shown in [Listening for events](#listening-for-events).
- **Events need an iframe.** Events are only sent when the `playback_url` is loaded inside an iframe. Opening it directly in a browser tab sends no events.
- **Ignore unknown events.** Only the events on this page are sent. New events may be added in the future, so ignore any `type` you don't recognize.
