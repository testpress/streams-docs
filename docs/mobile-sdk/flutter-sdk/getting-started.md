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

```
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

Once you have the controller, you can use it to interact with the player, such as controlling playback, fetching the current position, or listening to events.

- To control playback or fetch video details, refer to the [Player Methods documentation](./player-methods).
- To listen to player state changes and events, refer to the [Player Events documentation](./player-events).

For a practical implementation and usage of tpstreams_player_sdk, refer to our [Sample Flutter App](https://github.com/testpress/sample_flutter_app).