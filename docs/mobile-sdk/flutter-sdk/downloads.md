---
sidebar_position: 5
---

# Downloads

The Flutter TPStreams SDK provides comprehensive download functionality for offline video playback. This includes initiating downloads, managing ongoing tasks, and tracking progress through streams.

## Enabling Download Support

You can enable download support directly in the player UI by setting the `showDownloadOption` parameter. When enabled, the player will display a download button.

```dart
import 'package:tpstreams_player_sdk/tpstreams_player_sdk.dart';

TPStreamPlayer(
  assetId: 'YOUR_ASSET_ID',
  accessToken: 'YOUR_ACCESS_TOKEN',
  showDownloadOption: true, // Displays the download button in the player
  offlineLicenseExpireDays: 15, // Optional: Duration in days for which the offline license is valid. Defaults to 15 days.
)
```

## Initiating a Download

Use the `startDownload` method from `TPStreamsDownloadManager` to initiate a video download for offline playback.

### `startDownload`

```dart
final downloadManager = TPStreamsDownloadManager();

await downloadManager.startDownload(
  assetId,      // String: Required
  accessToken,  // String: Required
  metadata,     // Map<String, String> | null: Optional custom metadata
);
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `assetId` | `String` | Unique identifier for the video asset. |
| `accessToken` | `String` | Valid access token for the video. |
| `metadata` | `Map<String, String>` | (Optional) Any custom key-value pairs you want to attach to the download. |

## Managing Downloads

### Basic Operations

Use the `TPStreamsDownloadManager` to control active and completed downloads.

- **pauseDownload(DownloadAsset asset)**: Pauses an ongoing download. (**Note**: Currently supported on Android only. Throws `UnsupportedError` on iOS).
- **resumeDownload(DownloadAsset asset)**: Resumes a paused or failed download. (**Note**: Currently supported on Android only. Throws `UnsupportedError` on iOS).
- **cancelDownload(DownloadAsset asset)**: Cancels an ongoing download.
- **deleteDownload(DownloadAsset asset)**: Removes a downloaded video from local storage.
- **deleteAllDownloads()**: Removes all downloaded videos from the device.
- **getAllDownloads()**: Returns a `Future<List<DownloadAsset>>` containing all tracked downloads.

## Download Events

The SDK uses a `Stream` to provide real-time updates on all download activities. This is the recommended way to keep your UI in sync with download states.

### `downloadsStream`

Triggered periodically with the status of all current downloads.

```dart
final downloadManager = TPStreamsDownloadManager();

downloadManager.downloadsStream.listen((List<DownloadAsset> downloads) {
  for (var asset in downloads) {
    print("Video: ${asset.title}");
    print("Status: ${asset.state}");
    print("Progress: ${asset.progress}%");
  }
});
```

## Playing Downloaded Media

To play a video that has been downloaded, use the `TPStreamPlayer.offline` constructor. This ensures the player uses the local file instead of streaming from the network.

```dart
TPStreamPlayer.offline(
  assetId: 'YOUR_DOWNLOADED_ASSET_ID',
)
```

## Data Structures

### `DownloadAsset`

The object returned in the `downloadsStream` and by `getAllDownloads()`.

| Property | Type | Description |
| :--- | :--- | :--- |
| `assetId` | `String` | Unique identifier for the video. |
| `title` | `String?` | Title of the video. |
| `state` | `DownloadState` | The current state of the download. |
| `progress` | `double` | Percentage of the download completed (0 to 100). |
| `metadata` | `Map<String, String>?` | Custom metadata attached to the download. |

### `DownloadState`

An enum representing the lifecycle of a download:

- `notDownloaded`: The asset is not present locally.
- `downloading`: The asset is currently being downloaded.
- `paused`: The download has been paused (Android only).
- `completed`: The asset is fully downloaded and ready for offline play.
- `failed`: The download encountered an error.

## Usage Example

```dart
import 'package:flutter/material.dart';
import 'package:tpstreams_player_sdk/tpstreams_player_sdk.dart';

class MyDownloadPage extends StatefulWidget {
  @override
  _MyDownloadPageState createState() => _MyDownloadPageState();
}

class _MyDownloadPageState extends State<MyDownloadPage> {
  final _downloadManager = TPStreamsDownloadManager();
  List<DownloadAsset> _downloads = [];

  @override
  void initState() {
    super.initState();
    // 1. Listen for updates
    _downloadManager.downloadsStream.listen((downloads) {
      setState(() {
        _downloads = downloads;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: _downloads.length,
      itemBuilder: (context, index) {
        final asset = _downloads[index];
        return ListTile(
          title: Text(asset.title ?? 'Untitled'),
          subtitle: Text("${asset.state.name} - ${asset.progress.toStringAsFixed(1)}%"),
          trailing: IconButton(
            icon: Icon(Icons.delete),
            onPressed: () => _downloadManager.deleteDownload(asset),
          ),
        );
      },
    );
  }

  @override
  void dispose() {
    _downloadManager.dispose();
    super.dispose();
  }
}
```
