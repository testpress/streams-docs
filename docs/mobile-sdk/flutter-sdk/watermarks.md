---
sidebar_position: 4
---

# Watermarks

Display one or more text and image watermarks over video playback by passing `BaseWatermarkConfig` entries (`TextWatermarkConfig` and `ImageWatermarkConfig`) to `TPStreamsPlayerController.setWatermarks()`. Watermarks render above the video content and adjust automatically on screen resize, orientation changes, and fullscreen mode. Pass an empty list or call `clearWatermarks()` to remove all watermarks.

:::caution Migration Notice
`WatermarkConfig` is currently retained as a `typedef` for backward compatibility. Please update your code to use `TextWatermarkConfig`, as `WatermarkConfig` will be deprecated in upcoming releases.
:::

## Usage

```dart
import 'package:tpstreams_player_sdk/tpstreams_player_sdk.dart';

// Apply text and image watermarks
await controller.setWatermarks([
  // Animated text watermark
  TextWatermarkConfig(
    text: 'user@example.com',
    x: 0,
    y: 50,
    color: 0xFFFFFFFF,
    textSize: 16.0,
    opacity: 0.5,
    animation: WatermarkAnimation(
      type: WatermarkAnimationType.pingPong,
      duration: 10000,
    ),
  ),
  // Static text watermark
  TextWatermarkConfig(
    text: 'CONFIDENTIAL',
    x: 50,
    y: 10,
    color: 0xFFFF0000,
    textSize: 14.0,
    opacity: 0.3,
  ),
  // Image watermark (e.g., instructor avatar or brand logo)
  ImageWatermarkConfig(
    imageUrl: 'https://example.com/branding/logo.png',
    width: 48,
    height: 48,
    x: 92,
    y: 88,
    opacity: 1.0,
  ),
]);

// Remove all watermarks
await controller.clearWatermarks();
```

---

## Configuration Types

Both text and image watermark configurations extend `BaseWatermarkConfig`.

### TextWatermarkConfig Properties

Use `TextWatermarkConfig` to display text overlays such as user IDs or emails for content security.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `String` | — | Watermark text (required) |
| `x` | `int` | `0` | Horizontal position as a percentage of the player view width (`0`–`100`) |
| `y` | `int` | `0` | Vertical position as a percentage of the player view height (`0`–`100`) |
| `color` | `int` | `0xFFFFFFFF` | Text color as an ARGB integer value (default: white) |
| `textSize` | `double` | `14.0` | Text size in SP |
| `opacity` | `double` | `0.3` | Opacity from `0.0` (transparent) to `1.0` (opaque) |
| `animation` | `WatermarkAnimation?` | `null` | Optional animation configuration; `null` renders a static watermark |

### ImageWatermarkConfig Properties

Use `ImageWatermarkConfig` to display remote image overlays such as instructor avatars or brand logos.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `imageUrl` | `String` | — | HTTPS URL of the watermark image (required, PNG recommended) |
| `width` | `int` | `48` | Width in logical pixels / dp |
| `height` | `int` | `48` | Height in logical pixels / dp |
| `x` | `int` | `92` | Horizontal position percentage (`0`–`100`, default places towards bottom-right) |
| `y` | `int` | `88` | Vertical position percentage (`0`–`100`, default places towards bottom-right) |
| `opacity` | `double` | `1.0` | Opacity from `0.0` (transparent) to `1.0` (opaque) |

---

## WatermarkAnimation / WatermarkAnimationType

`WatermarkAnimation` is supported on `TextWatermarkConfig` and accepts `type` (`WatermarkAnimationType`) and `duration` in milliseconds (default `10000`, minimum `100`).

Supported animation types:
- **`WatermarkAnimationType.pingPong`**: Moves the watermark horizontally back and forth between screen edges. The `y` position is preserved while the horizontal position is driven by the animation.
- **`WatermarkAnimationType.random`**: Relocates the watermark to random coordinates across the player view every `duration` milliseconds. Both `x` and `y` coordinates are randomized.

---

## Behavior & Features

- **Asynchronous Image Loading:** Images are loaded asynchronously in the background.
- **Controls Auto-Hide:** Image watermarks smoothly fade out when player controls are visible and reappear when controls hide.
- **Responsive Layout:** Watermarks remain visible within the video display area and automatically adjust during orientation changes, resizing, and fullscreen transitions.
- **Playback Sync:** Animations automatically pause during video buffering/pause and resume on playback.
- **Lifecycle Cleanup:** Calling `clearWatermarks()` or disposing the controller stops all running animations and clears all overlays.
