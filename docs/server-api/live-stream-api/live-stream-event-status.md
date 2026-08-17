---
sidebar_position: 3
---

# Live Stream Events & Status

This document explains the workflow and status of your live stream, describing the progression of events from scheduling to final video availability. This guide will help you understand the real-time status updates and webhook events you receive.

***

## Live Stream Statuses 

Live stream statuses reflect the overall state of your live stream. These are visible on the asset details page.

| **Status** | **Meaning** |
| :--- | :--- |
| **`NOT_STARTED`** | The live stream has been scheduled, and the server is being provisioned. Your stream is not yet ready to accept a broadcast. |
| **`STREAMING`** | The server is ready and actively receiving a live video feed. This means your broadcast is live and viewable by your audience. |
| **`RECORDING`** | The stream is actively being recorded. The content is being captured and stored for later use, even if the live broadcast itself ends. |
| **`DISCONNECTED`** | The connection between your broadcasting software (OBS) and the streaming server has been lost. This could be due to a network issue, a power failure, or a temporary disconnection. The server remains active for a short period, allowing you to reconnect and resume the stream without creating a new one. |
| **`STOPPED`** | The live stream has been manually ended by the user or has timed out after a disconnection. The server has been terminated, and the live stream is no longer active. To stream again, you must create a new live stream. |
| **`COMPLETED`** | The live stream has finished, and the recorded video is now fully processed and available. This status is typically seen after a stream has ended and the recording has been transcoded and stored. |
| **`ERROR`** | An unexpected error has occurred, preventing the live stream from continuing. |

***

## Live Stream Events

Events are the specific, immediate actions (like starting or stopping) that change the stream's Status. These messages appear in your detailed logs and are sent directly to your system via webhooks.

| **Event Type** | **Meaning** |
| :--- | :--- |
| **`CREATED`** | The initial event, triggered when a live stream is created. This event signals that a server instance is being spun up to handle the broadcast. This corresponds to the **`NOT_STARTED`** status. |
| **`ON_PUBLISH`** | The event that indicates a successful connection from the broadcasting software (OBS). The stream is now live. This corresponds to the **`STREAMING`** status. |
| **`ON_PUBLISH_DONE`** | The event that indicates a temporary disconnection from the broadcasting software. This could be due to a user stopping the stream, a network interruption, or another issue. The server is still running for a short time, giving you a chance to reconnect. This corresponds to the **`DISCONNECTED`** status. |
| **`STOPPED`** | The final event, triggered when a live stream is permanently ended. The server has been terminated, and the stream cannot be resumed. This corresponds to the **`STOPPED`** status. |
| **`RECORDING`** | An event indicating that the stream is being recorded. This is separate from the `ON_PUBLISH` event and focuses on the recording process. This corresponds to the **`RECORDING`** status. |
| **`COMPLETED`** | An event signaling that the live stream recording has been fully processed, and the final video file is ready. This corresponds to the **`COMPLETED`** status. |
| **`ERROR`** | An event indicating that an error has occurred during the live stream. This corresponds to the **`ERROR`** status. |

***

## Example Live Stream Workflow 

Sample API response

```json
{
  "id": "9JGyz9njKnj",
  "title": "Test session",
  "type": "livestream",
  "live_stream": {
     ...
    "activities": [
      {
        "status": "On Publish",
        "timestamp": "September 22, 2025, 05:59 PM"
      },
      {
        "status": "On Publish Done",
        "timestamp": "September 22, 2025, 06:06 PM"
      },
      {
        "status": "Stopped",
        "timestamp": "September 22, 2025, 06:17 PM"
      }
    ]
  }
}
```

1. A live stream is scheduled.
    -   **Action:** The server is initiated, and an RTMP key and ID are generated.
    -   **Status:** `NOT_STARTED`
    -   **Event:** `CREATED`

2. The broadcaster starts streaming from their broadcasting software (e.g., OBS).
    -   **Action:** The live stream is now active and viewable.
    -   **Status:** `STREAMING`
    -   **Event:** `ON_PUBLISH`

3. The broadcaster's network temporarily disconnects.
    -   **Action:** The stream is temporarily paused, but the server is still running, awaiting a reconnection.
    -   **Status:** `DISCONNECTED`
    -   **Event:** `ON_PUBLISH_DONE`

4. The broadcaster fails to reconnect, or the stream is manually stopped.
    -   **Action:** The server is terminated, and the live stream has officially ended.
    -   **Status:** `STOPPED`
    -   **Event:** `STOPPED`
