---
sidebar_position: 2
---

# Player Methods

To use the `Tpstreams` module, first import `NativeModules` from `react-native` and get the `Tpstreams` instance:

```js
import { NativeModules } from 'react-native';
const { Tpstreams } = NativeModules;
```

The `Tpstreams` module provides several methods to control video playback and manage player states. Below is a detailed explanation of each method:

## Play

```js
Tpstreams.play();
```

Starts video playback. Call this method when you want the video to start playing or resume after being paused.

## Pause

```js
Tpstreams.pause();
```

Pauses video playback, allowing it to be resumed later from the same position.

## Seek To

```js
Tpstreams.seekTo(position: number);
```

Seeks to a specific position in the video (in milliseconds).

**Example Usage:**

```js
Tpstreams.seekTo(10000); // Jump to the 10-second mark
```

## Get Current Time

```js
Tpstreams.getCurrentTime().then(console.log);
```

Gets the current playback position of the video (in milliseconds). Returns a promise that resolves with the current time.

## Get Duration

```js
Tpstreams.getDuration().then(console.log);
```

Retrieves the total duration of the currently loaded video (in milliseconds). Returns a promise that resolves with the total duration.

## Get Buffered Time

```js
Tpstreams.getBufferedTime().then(console.log);
```

Gets the amount of video data that has been buffered (in milliseconds). Returns a promise that resolves with the buffered time.

## Get Playback State

```js
Tpstreams.getPlaybackState().then(console.log);
```

Gets the current playback state of the player (e.g., `playing`, `paused`, `buffering`). Returns a promise that resolves with the state.

## Get Play When Ready

```js
Tpstreams.getPlayWhenReady().then(console.log);
```

Checks if the player is set to start playback automatically. Returns a promise that resolves with a boolean value.

## Set Play When Ready

```js
Tpstreams.setPlayWhenReady(true); // Enable autoplay
```

Controls whether the player should start playback automatically when loaded.

## Get Playback Speed

```js
Tpstreams.getPlaybackSpeed().then(console.log);
```

Gets the current playback speed of the video. Returns a promise that resolves with the speed value.

## Set Playback Speed

```js
Tpstreams.setPlaybackSpeed(1.5); // Play at 1.5x speed
```

Changes the playback speed of the video.

## Release

```js
Tpstreams.release();
```

Releases the player resources, stopping playback and hiding the player UI. Once called, the player cannot be used again unless reinitialized.


# Player Events

`Tpstreams` provides event listeners to handle various player events. Below are the available events and how to use them:

## Listening to Events

To subscribe to player events, use the `NativeEventEmitter` from `react-native` with `TpstreamsModule`:

```js
import { NativeEventEmitter, NativeModules } from 'react-native';

const { Tpstreams } = NativeModules;
const eventEmitter = new NativeEventEmitter(Tpstreams);

const subscription = eventEmitter.addListener('onPlaybackStateChanged', (state) => {
  console.log('Playback State Changed:', state);
});

// Remember to remove the listener when unmounting
subscription.remove();
```

## Available Events

### onPlaybackStateChanged
Triggered when the playback state changes.

```js
eventEmitter.addListener('onPlaybackStateChanged', (state) => {
  console.log('Playback State:', state);
});
```

### onAccessTokenExpired
Triggered when the access token expires (requires refresh).

```js
eventEmitter.addListener('onAccessTokenExpired', () => {
  console.log('Access token expired, please refresh.');
});
```

### onMarkerCallback
Triggered when a marker (timestamp) is reached during playback.

```js
eventEmitter.addListener('onMarkerCallback', (marker) => {
  console.log('Marker reached:', marker);
});
```

### onDeviceInfoChanged
Triggered when the device information changes.

```js
eventEmitter.addListener('onDeviceInfoChanged', (info) => {
  console.log('Device info changed:', info);
});
```

### onFullScreenChanged
Triggered when the fullscreen mode changes.

```js
eventEmitter.addListener('onFullScreenChanged', (isFullscreen) => {
  console.log('Fullscreen mode:', isFullscreen);
});
```

### onIsLoadingChanged
Triggered when the player’s loading state changes.

```js
eventEmitter.addListener('onIsLoadingChanged', (isLoading) => {
  console.log('Loading state changed:', isLoading);
});
```

### onIsPlayingChanged
Triggered when the player’s playing state changes.

```js
eventEmitter.addListener('onIsPlayingChanged', (isPlaying) => {
  console.log('Playing state:', isPlaying);
});
```

### onPlayerError
Triggered when the player encounters an error.

```js
eventEmitter.addListener('onPlayerError', (error) => {
  console.log('Player Error:', error);
});
```

### onSeekBackIncrementChanged
Triggered when the seek-back increment value changes.

```js
eventEmitter.addListener('onSeekBackIncrementChanged', (value) => {
  console.log('Seek back increment changed:', value);
});
```

### onSeekForwardIncrementChanged
Triggered when the seek-forward increment value changes.

```js
eventEmitter.addListener('onSeekForwardIncrementChanged', (value) => {
  console.log('Seek forward increment changed:', value);
});
```

### onTimelineChanged
Triggered when the timeline of the player changes.

```js
eventEmitter.addListener('onTimelineChanged', (timeline) => {
  console.log('Timeline changed:', timeline);
});
```

### onTracksChanged
Triggered when the available tracks change (e.g., audio/video/subtitles).

```js
eventEmitter.addListener('onTracksChanged', (tracks) => {
  console.log('Tracks changed:', tracks);
});

