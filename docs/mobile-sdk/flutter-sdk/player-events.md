---
sidebar_position: 3
---


# Player Events

You can listen to various events related to the player's state through the TPStreamsPlayerController. By adding a listener, you can track changes in the player's properties such as whether the video is playing, the current position, buffering state, and more.

### Adding a Listener

To track player events, add a listener to the TPStreamsPlayerController like this:

```dart
_controller?.addListener(() {
  setState(() {
    // Access the current player state through _controller!.value
    bool isPlaying = _controller!.value.isPlaying;
    bool isFullScreen = _controller!.value.isFullScreen;
    Duration position = _controller!.value.position;
    Duration duration = _controller!.value.duration;
  });
});
```

### Available Properties to Track

The listener will trigger updates to the following properties of the TPStreamsPlayerValue:
- **isLoading:** true if the video is still being loaded into the player.
- **isPlaying:** true if the video is playing, false if paused.
- **position:** The current playback position.
- **duration:** The total duration of the video.
- **isBuffering:** Indicates if the player is currently buffering.
- **isFullScreen:** true if the video is in fullscreen mode.
- **isEnded:** true if the video has played to the end.
- **error:** Provides error information if an error occurs during playback.

Simply use controller.value.property to access the current state values in the listener.

### Fullscreen Callbacks

You can also listen to fullscreen-related callbacks:

```dart
_controller?.onBeforeFullScreenEnter = () {
  // Called before entering fullscreen
};

_controller?.onBeforeFullScreenExit = () {
  // Called before exiting fullscreen
};
```

### Replay Callback

Set `onReplay` to be notified when the replay button is clicked after playback ends:

```dart
_controller?.onReplay = () {
  // Called when the replay button is clicked
};
```

### Access Token Expiration Callback

Set `onAccessTokenExpired` to refresh the access token seamlessly when it expires during playback:

```dart
_controller?.onAccessTokenExpired = (String videoId) async {
  // Fetch a fresh token for the given video and return it
  String newToken = await fetchNewTokenFromServer(videoId);
  return newToken;
};
```