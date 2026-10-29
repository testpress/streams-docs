---
sidebar_position: 1
---

# Introduction

An interactive live stream is a real-time session that runs in the browser. The host goes live from a studio page with their camera, microphone or screen, and attendees can be brought on stage to talk with the host. There is no RTMP ingest and no OBS setup.

Attendees who are not on stage watch the session as a normal live video, and the recording is available in the same player once the session ends.

### Interactive vs broadcast live streams

|                      | Broadcast (default)                    | Interactive                                   |
| -------------------- | -------------------------------------- | --------------------------------------------- |
| How the host goes live | OBS or any RTMP encoder              | Browser studio, no software to install        |
| Attendees on stage   | No                                     | Yes                                           |
| `type` field         | `broadcast`                            | `interactive`                                 |
| Start the stream     | Start streaming from the encoder       | [Start API](start-and-stop) or the dashboard  |
| Playback for viewers | [Access token](../../access-token.md) `playback_url` | Interactive [access token](access-tokens-and-embedding) `playback_url` |

:::important

Interactive live streaming must be enabled for your organization. Contact TPStreams support to enable it. Until it is enabled, creating an interactive live stream returns `403 Forbidden`.

:::

### Integration flow

1. [Create an interactive live stream](create-interactive-live-stream), either instantly or scheduled for later.
2. [Generate a host access token](access-tokens-and-embedding#host-token) and open its `playback_url` for the host. This is the host's studio.
3. [Start the live stream](start-and-stop#start-a-live-stream).
4. [Generate an attendee access token](access-tokens-and-embedding#attendee-token) for each attendee and [embed](access-tokens-and-embedding#embed-the-live-stream) the `playback_url` in your page.
5. Optionally, listen for [player events](player-events) on your page to react when an attendee joins or leaves the stage, or when the session ends.
6. [Stop the live stream](start-and-stop#stop-a-live-stream) when the session is over. The recording plays in the same embed afterwards.

Status changes are sent to your [webhook](start-and-stop#webhooks), just like broadcast live streams.
