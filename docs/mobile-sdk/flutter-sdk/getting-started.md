---
sidebar_position: 1
---

# Getting Started

To use our Flutter player SDK, add [`tpstreams_player_sdk`](https://pub.dev/packages/tpstreams_player_sdk) as a dependency in your [pubspec.yaml](https://flutter.dev/docs/development/platform-integration/platform-channels) file.


### Initializing TPStreamsSDK 

First, import the package:

```dart
import 'package:tpstreams_player_sdk/tpstreams_player_sdk.dart';
```

Next, initialize the SDK at the entry point of your application (in the `main` function) before calling `runApp`:

```dart
import 'package:flutter/material.dart';
import 'package:tpstreams_player_sdk/tpstreams_player_sdk.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  TPStreamsSDK.initialize(
    orgCode: "YOUR_ORG_CODE",
    allowFallbackToL3: true, // Optional, defaults to false
  );
  runApp(const MyApp());
}
```

Make sure to replace `"YOUR_ORG_CODE"` with your actual organization code.

#### Initialization Parameters

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `orgCode` | `String` | Yes | — | Your TPStreams organization code. |
| `provider` | `PROVIDER` | No | `PROVIDER.tpstreams` | The provider type (`PROVIDER.tpstreams`). |
| `authToken` | `String?` | No | `null` | Optional authentication token for protected resources. |
| `allowFallbackToL3` | `bool` | No | `false` | Enables automatic fallback to software decryption (Widevine L3) if hardware DRM (L1) fails on Android devices. |

:::info Widevine L3 Fallback (`allowFallbackToL3`)

`allowFallbackToL3` is an optional boolean parameter in `TPStreamsSDK.initialize` (default: `false`).

On Android devices, Widevine DRM operates at two primary security levels:
- **Widevine L1 (Hardware-level)**: Decryption and rendering occur entirely in the device's hardware Trusted Execution Environment (TEE).
- **Widevine L3 (Software-level)**: Decryption occurs via software.

**Why enable L3 fallback?**
- **Hardware & OEM DRM issues**: On certain Android devices (e.g., devices with custom ROMs, corrupted keystores, or buggy OEM DRM implementations), hardware L1 decryption may fail and cause DRM playback to break completely.
- **MediaTek & low-end device decoder limits (Error 4003)**: Error 4003 is commonly observed on low-end MediaTek devices where releasing the secure hardware decoder of an earlier player instance takes time. Due to the limited number of hardware secure decoders on these chipsets, the player fails to create a secure decoder instance.

Setting `allowFallbackToL3: true` instructs the native Android player to automatically fall back to software decryption (L3) in such error scenarios to avoid demanding a hardware secure decoder, preventing playback failures.
:::

### Android Setup

In the Android directory, extend the FlutterFragmentActivity class in your MainActivity file.

To do this, make the change in the following directory:
android/app/src/main/kotlin/com/project_name/MainActivity.kt

``` kotlin
import io.flutter.embedding.android.FlutterFragmentActivity

class MainActivity: FlutterFragmentActivity(){
    
}
```

### Play a Video 

To play a video using the TPStreams Player SDK, use the `TPStreamPlayer` widget:

```dart
TPStreamPlayer(assetId: 'ASSET_ID', accessToken: 'ACCESS_TOKEN')
```

Replace `ASSET_ID` and `ACCESS_TOKEN` with the actual assetId and accessToken of the video you wish to play.
After executing your Flutter application, the TPStreams player will display the video specified by the provided assetId and accessToken.

### `TPStreamPlayer` Configuration

The `TPStreamPlayer` widget accepts the following parameters:

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `assetId` | `String` | — | Unique identifier of the video asset (required). |
| `accessToken` | `String?` | `null` | Access token for the video. |
| `aspectRatio` | `double` | `16 / 9` | Aspect ratio of the player view. |
| `onPlayerCreated` | `Function(TPStreamsPlayerController)?` | `null` | Callback invoked when the player is created. Provides the controller for controlling playback. |
| `showDownloadOption` | `bool?` | `false` | Shows the download button in the player UI. |
| `startInFullscreen` | `bool?` | `false` | Launches the player directly in fullscreen mode. |
| `offlineLicenseExpireDays` | `int?` | `15` | Duration in days for which the offline license is valid. |
| `metadata` | `Map<String, String>?` | `null` | Custom key-value pairs to attach to the player. |
| `autoPlay` | `bool` | `true` | Whether playback starts automatically once the video is loaded. |
| `resolution` | `int?` | `null` | Initial playback quality as the maximum video height in pixels (e.g., `720` for 720p). |
| `userId` | `String?` | `null` | Identifier of the signed-in viewer. When provided, playback resumes from the last watched position. |
| `preferences` | `TPStreamsPlayerPreferences?` | defaults | Configures which player UI elements are shown (see below). |

#### `TPStreamsPlayerPreferences`

Use `TPStreamsPlayerPreferences` to control which UI elements are available in the player.

```dart
TPStreamPlayer(
  assetId: 'ASSET_ID',
  accessToken: 'ACCESS_TOKEN',
  preferences: TPStreamsPlayerPreferences(
    enableFullscreen: true,       // Show the fullscreen button
    enablePlaybackSpeed: true,    // Show playback speed options
    enableCaptions: true,         // Show captions/CC options
    showResolutionOptions: true,  // Show video quality options
    enableSeekButtons: true,      // Show forward/backward seek buttons
    seekBarColor: Colors.blue.value, // Optional: tint the seek bar
  ),
)
```

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `enableFullscreen` | `bool` | `true` | Enables the fullscreen button. |
| `enablePlaybackSpeed` | `bool` | `true` | Enables playback speed controls. |
| `enableCaptions` | `bool` | `true` | Enables caption/subtitle controls. |
| `showResolutionOptions` | `bool` | `true` | Enables video quality selection. |
| `enableSeekButtons` | `bool` | `true` | Enables forward/backward seek buttons. |
| `seekBarColor` | `int?` | `null` | (Optional) Color of the seek bar as an ARGB integer (e.g., `Colors.blue.value`). |


### Control Video Playback

To control the video playback (e.g., play, pause, seek), you need to get a reference to the TPStreamsPlayerController. This controller is passed via the onPlayerCreated callback when the player widget is initialized.

```dart
TPStreamPlayer(
  assetId: 'ASSET_ID',
  accessToken: 'ACCESS_TOKEN',
  onPlayerCreated: _onPlayerCreated,
)

void _onPlayerCreated(TPStreamsPlayerController controller) {
  // Store the controller for later use
  this.controller = controller;
}

```

- To control playback or fetch video details, refer to the [Player Methods documentation](./player-methods).
- To listen to player state changes and events, refer to the [Player Events documentation](./player-events).
- To configure dynamic text and image watermarks, refer to the [Watermarks documentation](./watermarks).

For a practical implementation and usage of tpstreams_player_sdk, refer to our [Sample Flutter App](https://github.com/testpress/sample_flutter_app).