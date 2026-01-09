---
sidebar_position: 2
---

# Offline Downloads

We'll explore the workflow in this document. The [Sample iOS App](https://github.com/testpress/sample-iOS-app) on GitHub provides code examples for a typical use case.

## Enable Download Support

Use the `showDownloadOption()` configuration to display the download button in the player UI:

```swift
let config = TPStreamPlayerConfigurationBuilder()
    .showDownloadOption()
    .build()

playerViewController?.config = config
```

## Creating a TPStreamsDownloadManager

The following code snippet demonstrates how to set up a download delegate to receive download state updates:

```swift
TPStreamsDownloadManager.shared.setTPStreamsDownloadDelegate(tpStreamsDownloadDelegate: self)
```

Using `TPStreamsDownloadManager.shared` you can get a list of downloaded media and perform operations to delete and cancel downloads.

#### Get List of Downloaded Media

```swift
let downloads: [OfflineAsset] = TPStreamsDownloadManager.shared.getAllOfflineAssets()
```

#### Check if Asset is Downloaded

```swift
let isDownloaded = TPStreamsDownloadManager.shared.isAssetDownloaded(assetID: assetId)
```

#### Delete

```swift
TPStreamsDownloadManager.shared.deleteDownload(assetId)
```

#### Cancel

```swift
TPStreamsDownloadManager.shared.cancelDownload(assetId)
```

## TPStreamsDownloadDelegate

Implement the `TPStreamsDownloadDelegate` protocol to handle download lifecycle events:

```swift
extension YourClass: TPStreamsDownloadDelegate {
    func onStart(offlineAsset: OfflineAsset) { }
    func onComplete(offlineAsset: OfflineAsset) { }
    func onPause(offlineAsset: OfflineAsset) { }
    func onResume(offlineAsset: OfflineAsset) { }
    func onCanceled(assetId: String) { }
    func onDelete(assetId: String) { }
    func onStateChange(status: Status, offlineAsset: OfflineAsset) { }
    func onProgressChange(assetId: String, percentage: Double) { }
}
```

## Playing Downloaded Media

Use `TPAVPlayer` with the offline asset ID to play downloaded content:

```swift
if TPStreamsDownloadManager.shared.isAssetDownloaded(assetID: assetId) {
    player = TPAVPlayer(offlineAssetId: assetId) { error in
        if let error = error {
            print("Playback error: \(error.localizedDescription)")
            return
        }
        print("Playback started successfully")
    }
}
```
