---
sidebar_position: 1
---

# Offline Downloads

We'll explore the workflow in this document.The [Sample Android App](https://github.com/testpress/sample-android-app) on Github provides code examples for a typical use case.

## Enable Download support

Create TpInitParams with .enableDownloadSupport(true) to enable download support.

``` kotlin
var parameters = TpInitParams.Builder()
    .setVideoId(videoId)
    .setAccessToken(accessToken)
    .setOrgCode("organization_id") //  app.tpstreams.com/api/v1/organizations_id/
    .enableDownloadSupport(true)
    .build()
```

## Creating a TpStreamsDownloadManager

The following code snippet demonstrates how to instantiate a TpStreamsDownloadManager

``` kotlin
val tpStreamDownloadManager : TpStreamDownloadManager = TpStreamDownloadManager(activityContext)
```

Using this TpStreamDownloadManager we can get a list of downloaded media and the following media operations to delete, pause, resume, and cancel.

#### Get list of downloaded media

``` kotlin
val downloads : LiveData<List<Video>?> = tpStreamDownloadManager.getAllDownloads()
```
It will return a list of OfflineVideoInfo in LiveData to monitor the download progress use ViewModel and observe.

#### Delete

``` kotlin
tpStreamDownloadManager.deleteDownload(video)
```

#### Pause

``` kotlin
tpStreamDownloadManager.pauseDownload(video)
```

#### Resume

``` kotlin
tpStreamDownloadManager.resumeDownload(video)
```

#### Cancel

``` kotlin
tpStreamDownloadManager.cancelDownload(video)
```

## Playing downloaded media

Create offline params and pass them to player activity via intent to play an offline video.

``` kotlin
val intent = Intent(activityContext,PlayerActivity::class.java)
intent.putExtra(TP_OFFLINE_PARAMS,TpInitParams.createOfflineParams(video.videoId))
startActivity(intent)
```