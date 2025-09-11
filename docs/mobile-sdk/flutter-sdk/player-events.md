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
- **isPlaying:** true if the video is playing, false if paused.
- **position:** The current playback position.
- **duration:** The total duration of the video.
- **isBuffering:** Indicates if the player is currently buffering.
- **isFullScreen:** true if the video is in fullscreen mode, false if not in fullscreen mode.
- **isEnded:** true if the video has played to the end.
- **error:** Provides error information if an error occurs during playback.

Simply use controller.value.property to access the current state values in the listener.