---
sidebar_position: 4
---

# Downloads

The React Native TPStreams SDK provides comprehensive download functionality for offline video playback. This includes initiating downloads, managing ongoing tasks, and tracking progress through events.

## Initiating a Download

Use the `startDownload` function to initiate a video download for offline playback.

### `startDownload`

```typescript
import { startDownload } from 'react-native-tpstreams';

await startDownload(
  videoId,      // string: Required
  accessToken,  // string: Required
  resolution,   // string | null: Optional (e.g., '360p', '720p')
  metadata      // object | null: Optional custom metadata
);
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `videoId` | `string` | Unique identifier for the video. |
| `accessToken` | `string` | Valid access token for the video. |
| `resolution` | `string` | (Optional) Desired resolution. Defaults to best available if `null`. |
| `metadata` | `object` | (Optional) Any custom key-value pairs you want to attach to the download. |

## Managing Downloads

### Basic Operations

- **pauseDownload(videoId: string)**: Pauses an ongoing download. Returns `Promise<void>`.
- **resumeDownload(videoId: string)**: Resumes a paused download. Returns `Promise<void>`.
- **removeDownload(videoId: string)**: Removes a downloaded video. Returns `Promise<void>`.

### Download Status

- **isDownloaded(videoId: string)**: Checks if a video has been downloaded. Returns `Promise<boolean>`.
- **isDownloading(videoId: string)**: Checks if a video is currently downloading. Returns `Promise<boolean>`.
- **isPaused(videoId: string)**: Checks if a video download is paused. Returns `Promise<boolean>`.
- **getDownloadStatus(videoId: string)**: Gets the download status of a video as a descriptive string. Returns `Promise<string>`.
- **getAllDownloads()**: Gets all downloaded videos. Returns `Promise<DownloadItem[]>`.

## Download Events

To receive updates about download progress and state changes, you must first initialize the progress listener and then subscribe to specific events.

### Initialization

You should call this once (e.g., in `useEffect` or at app launch) to enable background progress tracking.

```typescript
import { addDownloadProgressListener, removeDownloadProgressListener } from 'react-native-tpstreams';

await addDownloadProgressListener();
```

### Event Listeners

All listeners return an `EmitterSubscription`. Always call `.remove()` on the subscription when cleaning up your component.

#### Progress Updates

Triggered periodically with the status of all current downloads.

```typescript
import { onDownloadProgressChanged } from 'react-native-tpstreams';

const subscription = onDownloadProgressChanged((downloads: DownloadItem[]) => {
  downloads.forEach(item => {
    console.log(`${item.title}: ${item.progressPercentage}%`);
  });
});
```

#### State Change Events

These events are triggered when an individual download changes state.

:::caution Deprecation Notice
`onDownloadStateChanged` is being deprecated in the upcoming versions. We recommend using dedicated events like `onDownloadStarted`, `onDownloadCompleted`, etc., for more precise control and better type safety.
:::

| Event | Payload | Description |
| :--- | :--- | :--- |
| `onDownloadStarted` | `(item: DownloadItem)` | Download has successfully started. |
| `onDownloadPaused` | `(item: DownloadItem)` | Download has been paused. |
| `onDownloadResumed` | `(item: DownloadItem)` | Download has resumed. |
| `onDownloadCompleted` | `(item: DownloadItem)` | Download finished successfully. |
| `onDownloadFailed` | `(item: DownloadItem, error: DownloadError)` | Download failed. |
| `onDownloadStateChanged` | `(item: DownloadItem, error?: DownloadError)` | (Deprecated) General state change listener. |
| `onDownloadDeleted` | `(videoId: string)` | Triggered when a download is removed. |

## Data Structures

### `DownloadItem`

The object returned in most event callbacks and by `getAllDownloads()`.

```typescript
interface DownloadItem {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  totalBytes: number;
  downloadedBytes: number;
  progressPercentage: number;
  state: 'Downloading' | 'Paused' | 'Completed' | 'Failed' | 'Queued';
  metadata: Record<string, any>;
}
```

### `DownloadError`

Returned in `onDownloadFailed` and `onDownloadStateChanged`.

```typescript
interface DownloadError {
  message: string; // Human readable error message
  type: string;    // Technical error code/type
}
```

## Usage Example

```typescript
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { 
  addDownloadProgressListener, 
  onDownloadCompleted, 
  onDownloadFailed 
} from 'react-native-tpstreams';

const MyComponent = () => {
  useEffect(() => {
    // 1. Initialize background tracking
    addDownloadProgressListener();

    // 2. Listen for Completion
    const completedSub = onDownloadCompleted((item) => {
      Alert.alert('Success', `${item.title} is ready for offline viewing!`);
    });

    // 3. Listen for Failures
    const failedSub = onDownloadFailed((item, error) => {
      console.error(`Download failed: ${error.message}`);
    });

    return () => {
      completedSub.remove();
      failedSub.remove();
    };
  }, []);

  return (
    // Your UI components
  );
};
```
