---
sidebar_position: 3
---

# Offline Downloads

TPStreams SDK provides a `DownloadClient` to manage offline video downloads.

### 1. Initialize Download Manager
```kotlin
val downloadClient = DownloadClient.getInstance(context)
```

### 2. Start a Download
You can start a download using the `startDownload` method. If no resolution is provided, it will show a resolution selection bottom sheet.

```kotlin
downloadClient.startDownload(
    context = this,
    assetId = "YOUR_ASSET_ID",
    accessToken = "YOUR_ACCESS_TOKEN",
    resolution = "720p", // Optional, will show selection sheet if null
    metadata = mapOf("category" to "math", "teacher" to "John Doe") // Optional custom metadata
)
```

### 3. Custom Metadata for Downloads
Custom metadata passed during `startDownload` (or `TPStreamsPlayer.create`) is persisted and can be retrieved later from the `DownloadItem`. This is useful for storing extra context like categories, IDs, or any other strings related to the video.

```kotlin
val allDownloads = downloadClient.getAllDownloadItems()
allDownloads.forEach { item ->
    val category = item.metadata["category"]
    println("Category for ${item.title}: $category")
}
```

### 4. Manage Downloads (Quick Reference)

| Method | Description |
| :--- | :--- |
| `pauseDownload(assetId)` | Pauses an active download. |
| `resumeDownload(assetId)` | Resumes a paused download. |
| `removeDownload(assetId)` | Deletes a downloaded video or cancels a pending download. |
| `isDownloaded(assetId)` | Checks if the video is fully downloaded. |

### 5. Handle Download State and Progress
To build a custom download UI, you can use the `DownloadItem` provided by the `DownloadClient`.

```kotlin
// Get all current downloads
val downloadItems = downloadClient.getAllDownloadItems()

// DownloadItem Properties:
// - assetId: String          - Unique identifier for the video
// - title: String            - Title of the video
// - thumbnailUrl: String?     - URL to the thumbnail (optional)
// - totalBytes: Long          - Total size of the video in bytes
// - downloadedBytes: Long     - Number of bytes downloaded so far
// - progressPercentage: Float - Progress as a percentage (0.0 - 100.0)
// - state: Int                - Current state (e.g., STATE_DOWNLOADING, STATE_COMPLETED)
```

### 6. Handling Download Events
Implement `DownloadClient.Listener` to receive updates about download progress and state changes.

```kotlin
downloadClient.addListener(object : DownloadClient.Listener {
    override fun onDownloadStateChanged(downloadItem: DownloadItem, error: Exception?) {
        // Called when state changes (DOWNLOADING, COMPLETED, FAILED, etc.)
        println("Download state: ${downloadItem.state}")
    }

    override fun onDownloadsChanged() {
        // Called periodically (every 1 sec) while any download is active.
        // Use this to update progress bars or refresh your download list UI.
        val activeDownloads = downloadClient.getAllDownloadItems()
    }

    override fun onDownloadStarted(downloadItem: DownloadItem) {
        println("Download started: ${downloadItem.title}")
    }

    override fun onDownloadPaused(downloadItem: DownloadItem) {
        println("Download paused: ${downloadItem.title}")
    }

    override fun onDownloadResumed(downloadItem: DownloadItem) {
        println("Download resumed: ${downloadItem.title}")
    }

    override fun onDownloadCompleted(downloadItem: DownloadItem) {
        println("Download complete: ${downloadItem.title}")
    }

    override fun onDownloadFailed(downloadItem: DownloadItem, error: Exception) {
        println("Download failed: ${error.message}")
    }

    override fun onDownloadDeleted(assetId: String) {
        println("Download removed for asset: $assetId")
    }
})
```