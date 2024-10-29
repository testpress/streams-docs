---
sidebar_position: 3
---

# Player Fragment Methods

The `TpStreamPlayerFragment` is a wrapper around `TpStreamPlayerView` that provides a comprehensive video streaming solution. This fragment supports auto-rotation, full-screen mode, secure screen protection, and forced software decoding, making it ideal for projects requiring advanced playback features, content security, and improved compatibility across devices.

### Enabling Auto Full-Screen on Device Rotation

```kotlin
playerFragment.enableAutoFullScreenOnRotate()
```

The `enableAutoFullScreenOnRotate()` function automatically switches the player to full-screen mode when the device rotates to landscape orientation and exits full-screen mode when rotated back to portrait. This feature enhances the viewing experience by dynamically adapting the player to full-screen in landscape, providing a seamless transition during playback.

### Entering Full-Screen Mode

```kotlin
playerFragment.showFullScreen()
```

The `showFullScreen()` function enables the player to enter full-screen mode programmatically, providing a fully immersive viewing experience. This method is useful in scenarios where full-screen playback is triggered by an action, such as a button tap or specific event. Calling showFullScreen() adjusts the player to occupy the entire screen, minimizing distractions and focusing solely on the video content.

### Exiting Full-Screen Mode

```kotlin
playerFragment.exitFullScreen()
```

The `exitFullScreen()` function allows the player to exit full-screen mode programmatically. This can be used when the app needs to return to a normal (non-full-screen) view under specific conditions, such as when navigating back or when an external event requires a smaller display area. Calling this method ensures that the player returns to its initial size and placement within the app’s layout.

### Setting Preferred Exit Orientation

```kotlin
playerFragment.setPreferredFullscreenExitOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT)
```

The `setPreferredFullscreenExitOrientation()` function allows you to set the preferred screen orientation for the player when exiting full-screen mode. For example, setting `ActivityInfo.SCREEN_ORIENTATION_PORTRAIT` will ensure the screen reverts to portrait when full-screen mode is exited, providing a consistent viewing experience across different device orientations.

### Using Software Decoder for Non-Standard Aspect Ratios

```kotlin
playerFragment.useSoftwareDecoder()
```

The `useSoftwareDecoder()` function forces the player to use a software decoder instead of a hardware decoder, particularly useful for videos with non-standard aspect ratios, like 9:16. This is especially beneficial on devices where hardware decoders are optimized for standard landscape formats (e.g., 16:9) but may struggle with portrait-oriented or unusually formatted videos.

### Enabling Secure View for Software-Decoded Content

```kotlin
playerFragment.enableSecureView()
```

When using software decoding with `playerFragment.useSoftwareDecoder()`, it’s recommended to also enable `playerFragment.enableSecureView()` to secure protected content during playback. Enabling `useSoftwareDecoder()` forces the video to be decoded via a software codec, which may allow screen capture on some devices. `enableSecureView()` prevents screen capture, offering enhanced security for DRM-protected content.
