---
sidebar_position: 4
---

# Downloads

The React Native TPStreams SDK provides comprehensive download functionality for offline video playback. This includes managing downloads, tracking progress, and handling download states.

## Download Methods

### Basic Download Operations

- **pauseDownload(videoId: string)**: Pauses an ongoing download. Returns `Promise<void>`.
- **resumeDownload(videoId: string)**: Resumes a paused download. Returns `Promise<void>`.
- **removeDownload(videoId: string)**: Removes a downloaded video. Returns `Promise<void>`.

### Download Status Methods

- **isDownloaded(videoId: string)**: Checks if a video has been downloaded. Returns `Promise<boolean>`.
- **isDownloading(videoId: string)**: Checks if a video is currently downloading. Returns `Promise<boolean>`.
- **isPaused(videoId: string)**: Checks if a video download is paused. Returns `Promise<boolean>`.
- **getDownloadStatus(videoId: string)**: Gets the download status of a video as a descriptive string. Returns `Promise<string>`.
- **getAllDownloads()**: Gets all downloaded videos. Returns `Promise<DownloadItem[]>`.

## Real-time Download Progress

The library provides real-time download progress updates for optimal performance:

### Progress Listener Methods

- **addDownloadProgressListener()**: Starts listening for download progress updates. Returns `Promise<void>`.
- **removeDownloadProgressListener()**: Stops listening for download progress updates. Returns `Promise<void>`.
- **onDownloadProgressChanged(listener: DownloadProgressListener)**: Adds a listener for progress changes. Returns `EmitterSubscription`.
- **onDownloadStateChanged(listener: DownloadStateChangeListener)**: Adds a listener for download state changes. Returns `EmitterSubscription`.

### Progress Listener Types

```jsx
type DownloadProgressChange = DownloadItem;

type DownloadProgressListener = (downloads: DownloadProgressChange[]) => void;

type DownloadStateChangeListener = (downloadItem: DownloadItem, error: DownloadError | null) => void;

type DownloadError = {
  message: string;
  code: number;
  type: string;
};
```

## Download Item

The download item object (**DownloadItem**) contains information about a downloaded or downloading video:

- **videoId**: The ID of the video.
- **title**: The title of the video.
- **thumbnailUrl**: URL to the video thumbnail (if available).
- **totalBytes**: Total size of the video in bytes.
- **downloadedBytes**: Number of bytes downloaded so far.
- **progressPercentage**: Download progress from 0 to 100.
- **state**: The current state of the download as String (Queued, Downloading, Completed, Failed, Removing, Restarting, Paused).
- **metadata**: Custom metadata attached to the download as a JSON string (if provided during download).
