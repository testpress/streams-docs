---
sidebar_position: 2
---


# Player Methods

The TPStreamsPlayerController provides several methods to control video playback and manage player states. Below is the detailed explanation of each method:

### Play

```dart
Future<void> play()
```

Starts video playback. Call this method when you want the video to start playing or resume after being paused.

**Example Usage:**

```dart
controller.play();
```
### Pause

```dart
Future<void> pause()
```

Pauses video playback. This stops the video while allowing it to be resumed later from the same position.

**Example Usage:**

```dart
controller.pause();
```

### Seek

```dart
Future<void> seek(Duration target)
```

Seeks to a specific time in the video. The target parameter specifies the timestamp you want to jump to.

**Parameters:**

    target: The Duration object representing the time position in the video.

**Example Usage:**

```dart
controller.seek(Duration(seconds: 60)); // Jump to the 1-minute mark
```

### Set Playback Speed

```dart
Future<void> setPlaybackSpeed(double speed)
```

Sets the playback speed of the video.

**Parameters:**

    speed: A double value where 1.0 is normal speed, 0.5 is half-speed, and 2.0 is double-speed.

**Example Usage:**

```dart
controller.setPlaybackSpeed(1.5); // Play at 1.5x speed
```

### Get Video Duration

```dart
Future<Duration> getDuration()
```

Retrieves the total duration of the currently loaded video.

**Example Usage:**

```dart
Duration videoDuration = await controller.getDuration();
```

### Get Video Current Position

```dart
Future<Duration> getCurrentTime()
```
Fetches the current playback position of the video.

**Example Usage:**

```dart

Duration currentTime = await controller.getCurrentTime();
```

### Dispose

```dart

Future<void> dispose()
```

Disposes of the player instance and releases resources. This should be called when the player is no longer needed.

**Example Usage:**

```dart
controller.dispose();
```