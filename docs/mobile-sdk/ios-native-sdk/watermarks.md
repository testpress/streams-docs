---
sidebar_position: 4
---

# Watermarks

Display one or more text watermarks over the video content by passing `WatermarkConfig` entries to
`setWatermarks(_:)`. Watermarks render above the video and subtitles but below the player controls, on both the SwiftUI
and UIKit paths. Pass an empty list to remove all watermarks.

## Usage

```swift
let config = TPStreamPlayerConfigurationBuilder()
    .setWatermarks([
        WatermarkConfig(
            text: "example-user",
            x: 0,
            y: 50,
            color: 0xFFFFFFFF,
            textSize: 18,
            opacity: 0.5,
            animation: WatermarkAnimation(type: .pingPong, duration: 10000)
        ),
        WatermarkConfig(
            text: "example-user",
            x: 100,
            y: 100,
            color: 0xFFFF0000,
            textSize: 14,
            opacity: 0.2
        )
    ])
    .build()
```

On iOS, watermarks are configuration rather than imperative methods. On the UIKit path you can mutate
`TPStreamPlayerViewController.config.watermarks` at runtime to re-apply them without recreating the player.

## WatermarkConfig properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | String | — | Watermark text (required) |
| `x` | Int64 | `0` | Horizontal position as a percentage of the player view width (0–100) |
| `y` | Int64 | `0` | Vertical position as a percentage of the player view height (0–100) |
| `color` | Int64 | `0xFFFFFFFF` | Watermark color as an ARGB value (white) |
| `textSize` | Double | `14` | Text size in points |
| `opacity` | Double | `0.3` | Watermark opacity (0.0–1.0) |
| `animation` | WatermarkAnimation? | `nil` | Optional animation; `nil` renders a static watermark |

## WatermarkAnimation / WatermarkAnimationType

`WatermarkAnimation` has `type` (`WatermarkAnimationType`) and `duration` in milliseconds (default `10000`, minimum `100`).

Supported animation types:
- **`pingPong`** (`.pingPong`): Moves the watermark horizontally from the left edge to the right edge and back, taking the configured duration per leg. Animated watermarks **ignore the x coordinate**; their y position is honored.
- **`random`** (`.random`): Repositions the watermark to random coordinates across the player view every `duration` milliseconds. Both `x` and `y` initial coordinates are randomized.

## Behavior

- Watermarks are kept fully visible inside the player view with a small fixed inset, and reposition on rotation,
  fullscreen transitions, and view resizing.
- Animated watermarks pause while playback is not active (paused, buffering, ended) and resume from the paused position;
  the watermark remains visible.
- Out-of-range `x`/`y` (0–100) and `opacity` (0.0–1.0) values are clamped to the nearest bound; an animation duration
  below 100 ms is floored to 100 ms. Invalid values never crash playback.
- Overlapping watermarks render with earlier list entries on top.
- Watermarks are cleaned up and all animations stopped when the player view is released or deinitialized.
