---
sidebar_position: 2
---

# Player Methods

The TPStreamsPlayerView provides several methods to control video playback and manage player states. Below is the detailed explanation of each method:

## Play

```js
play()
```

Starts video playback. Call this method when you want the video to start playing or resume after being paused.

## Pause

```js
pause()
```

Pauses video playback. This stops the video while allowing it to be resumed later from the same position.

## Seek

```js
seekTo(positionMs: number)
```

Seeks to a specific time in the video. The positionMs parameter specifies the timestamp in milliseconds you want to jump to.

**Parameters:**
- `positionMs`: The position in milliseconds representing the time position in the video.

## Set Playback Speed

```js
setPlaybackSpeed(speed: number)
```

Sets the playback speed of the video.

**Parameters:**
- `speed`: A number value where 1.0 is normal speed, 0.5 is half-speed, and 2.0 is double-speed.

## Get Current Position

```js
getCurrentPosition(): Promise<number>
```

Retrieves the current playback position of the video in milliseconds.

## Get Video Duration

```js
getDuration(): Promise<number>
```

Retrieves the total duration of the currently loaded video in milliseconds.

## Check Playing State

```js
isPlaying(): Promise<boolean>
```

Checks if the video is currently playing.

## Get Playback Speed

```js
getPlaybackSpeed(): Promise<number>
```

Gets the current playback speed of the video.
