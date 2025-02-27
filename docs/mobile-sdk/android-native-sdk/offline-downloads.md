---
sidebar_position: 2
---

# Offline Downloads

We'll explore the workflow in this document.The [Sample Android App](https://github.com/testpress/sample-android-app) on Github provides code examples for a typical use case.

## Enable Download support

Create TpInitParams with .enableDownloadSupport(true) to enable download support.

```kotlin
var parameters = TpInitParams.Builder()
    .setVideoId(videoId)
    .setAccessToken(accessToken)
    .enableDownloadSupport(true)
    .setOfflineLicenseExpireTime(60 * 60 * 24 * 15) //15 Days
    .build()
```

## Creating a TpStreamsDownloadManager

The following code snippet demonstrates how to instantiate a TpStreamsDownloadManager

```kotlin
val tpStreamDownloadManager : TpStreamDownloadManager = TpStreamDownloadManager(activityContext)
```

Using this TpStreamDownloadManager we can get a list of downloaded media and the following media operations to start, delete, pause, resume, and cancel.

#### Get list of downloaded media

```kotlin
val downloads : LiveData<List<Asset>?> = tpStreamDownloadManager.getAllDownloads()
```
It will return a list of Asset in LiveData to monitor the download progress use ViewModel and observe.

#### Start

```kotlin
// Start download Using TpInitParams
tpStreamDownloadManager.startDownload(fragmentActivity, params)
// Start download Using TpStreamPlayer
tpStreamDownloadManager.startDownload(fragmentActivity, player)
```

#### Delete

```kotlin
tpStreamDownloadManager.deleteDownload(asset)
```

#### Pause

``` kotlin
tpStreamDownloadManager.pauseDownload(asset)
```

#### Resume

```kotlin
tpStreamDownloadManager.resumeDownload(asset)
```

#### Cancel

```kotlin
tpStreamDownloadManager.cancelDownload(asset)
```

#### Delete All

```kotlin
tpStreamDownloadManager.deleteAllDownload()
```

## Playing downloaded media

Create offline params and pass them to player activity via intent to play an offline video.

```kotlin
val intent = Intent(activityContext,PlayerActivity::class.java)
intent.putExtra(TP_OFFLINE_PARAMS,TpInitParams.createOfflineParams(video.videoId))
startActivity(intent)
```