---
sidebar_position: 4
---

# Watermarks

Display one or more text watermarks over the video content by passing `WatermarkConfig` entries to `TPStreamsPlayerView.setWatermarks()`. Watermarks render above the video content and adjust automatically on screen resize and orientation changes. Pass an empty list or call `clearWatermarks()` to remove all watermarks.

## Usage

```kotlin
import com.tpstreams.player.WatermarkConfig
import com.tpstreams.player.WatermarkAnimation
import com.tpstreams.player.WatermarkAnimationType

val watermarks = listOf(
    WatermarkConfig(
        text = "example-user",
        x = 0,
        y = 50,
        color = 0xFFFFFFFF.toInt(),
        textSize = 18f,
        opacity = 0.5f,
        animation = WatermarkAnimation(
            type = WatermarkAnimationType.PING_PONG,
            duration = 10000L
        )
    ),
    WatermarkConfig(
        text = "example-user",
        x = 100,
        y = 100,
        color = 0xFFFF0000.toInt(),
        textSize = 14f,
        opacity = 0.2f
    )
)

// Apply watermarks
binding.tpPlayerView.setWatermarks(watermarks)

// Remove all watermarks
binding.tpPlayerView.clearWatermarks()
```

## WatermarkConfig Properties

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `String` | — | Watermark text (required) |
| `x` | `Int` | `0` | Horizontal position as a percentage of the player view width (0–100) |
| `y` | `Int` | `0` | Vertical position as a percentage of the player view height (0–100) |
| `color` | `Int` | `0xFFFFFFFF.toInt()` | Watermark color as an ARGB integer (white) |
| `textSize` | `Float` | `14f` | Text size in SP |
| `opacity` | `Float` | `0.3f` | Watermark opacity (0.0–1.0) |
| `animation` | `WatermarkAnimation?` | `null` | Optional animation; `null` renders a static watermark |

## WatermarkAnimation / WatermarkAnimationType

`WatermarkAnimation` has `type` (`WatermarkAnimationType`) and `duration` in milliseconds (default `10000L`, minimum `100L`).

Supported animation types:
- **`PING_PONG`** (`WatermarkAnimationType.PING_PONG`): Moves the watermark horizontally from the left edge to the right edge and back, taking the configured duration per leg. Animated watermarks ignore the initial `x` coordinate; their `y` position is honored.
- **`RANDOM`** (`WatermarkAnimationType.RANDOM`): Repositions the watermark to random coordinates across the player view every `duration` milliseconds. Both `x` and `y` initial coordinates are randomized.

## Behavior

- Watermarks remain fully visible inside the player view and automatically reposition on screen rotation, fullscreen changes, and view resizing.
- Animated watermarks pause during playback buffering/pauses and resume when playback continues.
- Calling `clearWatermarks()` stops all running animations and removes the overlay views.
