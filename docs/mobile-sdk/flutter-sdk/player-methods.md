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

### Set Video Resolution

```dart
Future<void> setVideoResolution(int resolution)
```

Sets the playback resolution to the matching quality (e.g., `720` switches to the 720p track).

**Parameters:**

    resolution: The desired video height in pixels (e.g., 720 for 720p).

**Example Usage:**

```dart
await controller.setVideoResolution(720); // Play at 720p
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

### Enter Fullscreen

```dart
Future<void> enterFullScreen()
```

Enters fullscreen mode programmatically, providing a fully immersive viewing experience.

**Example Usage:**

```dart
await controller.enterFullScreen();
```

### Exit Fullscreen

```dart
Future<void> exitFullScreen()
```

Exits fullscreen mode and returns to the normal view.

**Example Usage:**

```dart
await controller.exitFullScreen();
```

### Set Watermarks

```dart
Future<void> setWatermarks(List<BaseWatermarkConfig> configs)
```

Applies text (`TextWatermarkConfig`) and/or image (`ImageWatermarkConfig`) watermark overlays on the video player. Each config creates an independent watermark overlay. Pass an empty list to clear all watermarks. For comprehensive documentation, see [Watermarks](./watermarks).

:::caution Migration Notice
`WatermarkConfig` is retained as a `typedef` for backward compatibility. Please update your code to use `TextWatermarkConfig`, as `WatermarkConfig` will be deprecated in upcoming releases.
:::

**`TextWatermarkConfig` fields:**

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `String` | — | Watermark text (required). |
| `x` | `int` | `0` | Horizontal position as 0–100 percent. |
| `y` | `int` | `0` | Vertical position as 0–100 percent. |
| `color` | `int` | `0xFFFFFFFF` | Text color as an ARGB integer (default is white). |
| `textSize` | `double` | `14.0` | Text size in SP. |
| `opacity` | `double` | `0.3` | Opacity from 0.0 (invisible) to 1.0 (fully opaque). |
| `animation` | `WatermarkAnimation?` | `null` | (Optional) Animation applied to the watermark. |

**`ImageWatermarkConfig` fields:**

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `imageUrl` | `String` | — | HTTPS URL of the watermark image (required). |
| `width` | `int` | `48` | Width in logical pixels / dp. |
| `height` | `int` | `48` | Height in logical pixels / dp. |
| `x` | `int` | `92` | Horizontal position as 0–100 percent. |
| `y` | `int` | `88` | Vertical position as 0–100 percent. |
| `opacity` | `double` | `1.0` | Opacity from 0.0 (invisible) to 1.0 (fully opaque). |

**`WatermarkAnimation` fields:**

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | `WatermarkAnimationType` | — | The animation type: `WatermarkAnimationType.pingPong` (moves horizontally back and forth) or `WatermarkAnimationType.random` (repositions to random coordinates at each interval). |
| `duration` | `int` | `10000` | Animation duration in milliseconds. Minimum 100ms. |

**Example Usage:**

```dart
await controller.setWatermarks([
  // Animated text watermark
  TextWatermarkConfig(
    text: '© testpress',
    x: 100,
    y: 50,
    opacity: 0.9,
    animation: WatermarkAnimation(
      type: WatermarkAnimationType.pingPong,
      duration: 10000,
    ),
  ),
  // Static text watermark
  TextWatermarkConfig(
    text: '© TPStreams',
    x: 0,
    y: 50,
    opacity: 0.3,
  ),
  // Image watermark (e.g., logo or avatar)
  ImageWatermarkConfig(
    imageUrl: 'https://example.com/branding/logo.png',
    width: 48,
    height: 48,
    x: 92,
    y: 88,
    opacity: 1.0,
  ),
]);
```

### Clear Watermarks

```dart
Future<void> clearWatermarks()
```

Removes all watermarks and frees resources.

**Example Usage:**

```dart
await controller.clearWatermarks();
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