---
sidebar_position: 4
---

# Watermarks

Display one or more text and image watermarks over video playback by passing `BaseWatermarkConfig` entries (`TextWatermarkConfig` and `ImageWatermarkConfig`) to `setWatermarks(_:)`. Watermarks render above the video and subtitles but below the player controls on both SwiftUI and UIKit paths. Pass an empty list to remove all watermarks.

:::caution Migration Notice
`WatermarkConfig` is currently retained as a `typealias` for backward compatibility. Please update your code to use `TextWatermarkConfig`, as `WatermarkConfig` will be deprecated in upcoming releases.
:::

## Usage

```swift
import TPStreamsSDK

let config = TPStreamPlayerConfigurationBuilder()
    .setWatermarks([
        // Animated text watermark
        TextWatermarkConfig(
            text: "user@example.com",
            x: 0,
            y: 50,
            color: 0xFFFFFFFF,
            textSize: 16,
            opacity: 0.5,
            animation: WatermarkAnimation(type: .pingPong, duration: 10000)
        ),
        // Static text watermark
        TextWatermarkConfig(
            text: "CONFIDENTIAL",
            x: 50,
            y: 10,
            color: 0xFFFF0000,
            textSize: 14,
            opacity: 0.3
        ),
        // Image watermark (e.g., instructor avatar or brand logo)
        ImageWatermarkConfig(
            imageUrl: "https://example.com/branding/logo.png",
            width: 48,
            height: 48,
            x: 92,
            y: 88,
            opacity: 1.0
        )
    ])
    .build()
```

On iOS, watermarks are defined via configuration. On the UIKit path, you can mutate `TPStreamPlayerViewController.config.watermarks` at runtime to update or re-apply them without recreating the player.

---

## Configuration Types

Both text and image watermark configurations conform to `BaseWatermarkConfig`.

### TextWatermarkConfig Properties

Use `TextWatermarkConfig` to overlay text strings (e.g., user email, ID, or notice) for content protection.

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `String` | — | Watermark text (required) |
| `x` | `Int64` | `0` | Horizontal position as a percentage of the player view width (`0`–`100`) |
| `y` | `Int64` | `0` | Vertical position as a percentage of the player view height (`0`–`100`) |
| `color` | `Int64` | `0xFFFFFFFF` | Watermark text color as an ARGB integer value (default: white) |
| `textSize` | `Double` | `14` | Text size in points |
| `opacity` | `Double` | `0.3` | Opacity from `0.0` (transparent) to `1.0` (opaque) |
| `animation` | `WatermarkAnimation?` | `nil` | Optional animation; `nil` renders a static watermark |

### ImageWatermarkConfig Properties

Use `ImageWatermarkConfig` to display remote image overlays such as instructor avatars or company branding.

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `imageUrl` | `String` | — | HTTPS URL of the watermark image (required, PNG recommended) |
| `width` | `Double` | `48` | Width in points (clamped to `>= 0`) |
| `height` | `Double` | `48` | Height in points (clamped to `>= 0`) |
| `x` | `Int64` | `92` | Horizontal position percentage (`0`–`100`, default places towards bottom-right) |
| `y` | `Int64` | `88` | Vertical position percentage (`0`–`100`, default places towards bottom-right) |
| `opacity` | `Double` | `1.0` | Opacity from `0.0` (transparent) to `1.0` (opaque) |

---

## WatermarkAnimation / WatermarkAnimationType

`WatermarkAnimation` is supported on `TextWatermarkConfig` and accepts `type` (`WatermarkAnimationType`) and `duration` in milliseconds (default `10000`, minimum `100`).

Supported animation types:
- **`pingPong`** (`.pingPong`): Moves the watermark horizontally from the left edge to the right edge and back, taking the configured duration per leg. Animated watermarks **ignore the initial x coordinate**; their y position is honored.
- **`random`** (`.random`): Repositions the watermark to random coordinates across the active player view every `duration` milliseconds. Both `x` and `y` initial coordinates are randomized.

---

## Behavior & Features

- **Asynchronous Image Loading & Caching:** Remote images in `ImageWatermarkConfig` are fetched asynchronously and cached for smooth rendering.
- **Controls Auto-Hide:** Image watermark overlays automatically fade out when player controls are visible and smoothly fade back in when controls are dismissed.
- **Safe Positioning & Boundary Clamping:** Watermarks are kept fully visible inside the player view with a fixed inset, and automatically reposition on screen rotation, fullscreen transitions, and view resizing. Out-of-range `x`/`y` (`0`–`100`) and `opacity` (`0.0`–`1.0`) values are clamped to the nearest bound.
- **Playback Sync:** Animated text watermarks pause while playback is not active (paused, buffering, ended) and resume smoothly from the paused position when playback resumes.
- **Lifecycle Cleanup:** Overlays and running animation timers are cleanly torn down when the player view controller is deinitialized.
