---
sidebar_position: 4
---

# Watermarks

Display one or more text and image watermarks over video playback by passing `BaseWatermarkConfig` entries (`TextWatermarkConfig` and `ImageWatermarkConfig`) to `TPStreamsPlayerView.setWatermarks()`. Watermarks render above the video content and adjust automatically on screen resize, orientation changes, and fullscreen toggles. Pass an empty list or call `clearWatermarks()` to remove all watermarks.

:::caution Migration Notice
`WatermarkConfig` is currently retained as a `typealias` for backward compatibility. Please update your code to use `TextWatermarkConfig`, as `WatermarkConfig` will be deprecated in upcoming releases.
:::

## Usage

```kotlin
import com.tpstreams.player.TextWatermarkConfig
import com.tpstreams.player.ImageWatermarkConfig
import com.tpstreams.player.WatermarkAnimation
import com.tpstreams.player.WatermarkAnimationType

val watermarks = listOf(
    // Text watermark with ping-pong animation
    TextWatermarkConfig(
        text = "user@example.com",
        x = 0,
        y = 50,
        color = 0xFFFFFFFF.toInt(),
        textSize = 16f,
        opacity = 0.5f,
        animation = WatermarkAnimation(
            type = WatermarkAnimationType.PING_PONG,
            duration = 10000L
        )
    ),
    // Static text watermark
    TextWatermarkConfig(
        text = "CONFIDENTIAL",
        x = 50,
        y = 10,
        color = 0xFFFF0000.toInt(),
        textSize = 14f,
        opacity = 0.3f
    ),
    // Image watermark (e.g., instructor avatar or brand logo)
    ImageWatermarkConfig(
        imageUrl = "https://example.com/branding/logo.png",
        width = 48,
        height = 48,
        x = 92,
        y = 88,
        opacity = 1.0f
    )
)

// Apply watermarks
binding.tpPlayerView.setWatermarks(watermarks)

// Remove all watermarks
binding.tpPlayerView.clearWatermarks()
```

---

## Configuration Types

Both text and image watermark configurations implement `BaseWatermarkConfig`.

### TextWatermarkConfig Properties

Use `TextWatermarkConfig` to overlay text strings (e.g., user email, username, or timestamp) for piracy protection.

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `String` | — | Watermark text (required, cannot be blank) |
| `x` | `Int` | `0` | Horizontal position as a percentage of the player view width (`0`–`100`) |
| `y` | `Int` | `0` | Vertical position as a percentage of the player view height (`0`–`100`) |
| `color` | `Int` | `0xFFFFFFFF.toInt()` | Watermark text color as an ARGB integer (default: white) |
| `textSize` | `Float` | `14f` | Text size in SP |
| `opacity` | `Float` | `0.3f` | Opacity from `0.0` (transparent) to `1.0` (opaque) |
| `animation` | `WatermarkAnimation?` | `null` | Optional animation configuration; `null` renders a static watermark |

### ImageWatermarkConfig Properties

Use `ImageWatermarkConfig` to display remote image overlays such as instructor avatars or brand logos.

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `imageUrl` | `String` | — | HTTPS URL of the image to display (required, PNG recommended for transparency) |
| `width` | `Int` | `48` | Width in `dp` (must be greater than 0) |
| `height` | `Int` | `48` | Height in `dp` (must be greater than 0) |
| `x` | `Int` | `92` | Horizontal position percentage (`0`–`100`, default places towards bottom-right) |
| `y` | `Int` | `88` | Vertical position percentage (`0`–`100`, default places towards bottom-right) |
| `opacity` | `Float` | `1.0f` | Opacity from `0.0` (transparent) to `1.0` (opaque) |

---

## WatermarkAnimation / WatermarkAnimationType

`WatermarkAnimation` is supported on `TextWatermarkConfig` and accepts a `type` (`WatermarkAnimationType`) and `duration` in milliseconds (default `10000L`, minimum `100L`).

Supported animation types:
- **`PING_PONG`** (`WatermarkAnimationType.PING_PONG`): Moves the watermark horizontally from the left edge to the right edge and back, taking the configured duration per leg. The `y` position is preserved, while the initial `x` coordinate is animated.
- **`RANDOM`** (`WatermarkAnimationType.RANDOM`): Repositions the watermark to random coordinates across the player view every `duration` milliseconds. Both `x` and `y` initial coordinates are randomized.

---

## Behavior & Features

- **Asynchronous Image Loading:** Images configured in `ImageWatermarkConfig` are fetched asynchronously in the background and downsampled efficiently to minimize memory footprint.
- **Controls Auto-Hide:** Image watermark overlays automatically and smoothly fade out when player controls are visible and fade back in when controls hide, avoiding visual clutter over playback buttons.
- **Responsive Layout:** Watermarks remain fully visible within the active video area and automatically reposition during screen rotation, fullscreen toggles, and view resizing.
- **Playback Sync:** Animated watermarks automatically pause during buffering or when video playback is paused, and resume when playback continues.
- **Lifecycle Cleanup:** Calling `clearWatermarks()` stops all active animations and removes all watermark overlays from the player view.
