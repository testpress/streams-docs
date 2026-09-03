---
sidebar_position: 1
---

# Getting Started

To use our Flutter player SDK, add [`tpstreams_player_sdk`](https://pub.dev/packages/tpstreams_player_sdk) as a dependency in your [pubspec.yaml](https://flutter.dev/docs/development/platform-integration/platform-channels) file.


### Initializing TPStreamsSDK 

First, imported our package:

```dart
import 'package:tpstreams_player_sdk/tpstreams_player_sdk.dart';
```

Next, you can initialize the TPStreamsSDK with your organization code.

```dart
TPStreamsSDK.initialize(orgCode: "YOUR_ORG_CODE");
```

Make sure to replace "YOUR_ORG_CODE" with your actual organization code. This code snippet should be placed at the entry point of your application (usually in the main function) to ensure proper initialization of the TPStreamsSDK.

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