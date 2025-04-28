---
sidebar_position: 1
---

# Getting Started

To use our React Native player SDK, install the [`react-native-tpstreams`](https://www.npmjs.com/package/react-native-tpstreams) package as a dependency in your project.

## Installation

Install the package using npm or yarn:

```sh
npm install react-native-tpstreams
```

or

```sh
yarn add react-native-tpstreams
```

### Initializing TPStreams SDK

First, import the package:

```javascript
import { NativeModules } from 'react-native';
const { Tpstreams } = NativeModules;
```

Next, initialize the SDK with your organization ID:

```javascript
Tpstreams.initializeTPSPlayer("YOUR_ORGANIZATION_ID");
```

Make sure to replace `YOUR_ORGANIZATION_ID` with your actual organization ID. This should be called at the entry point of your application to ensure proper initialization.

## Play a Video

To play a video using the TPStreams Player SDK, use the `TpStreamsPlayerView` component:

```javascript
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TpStreamsPlayerView from 'react-native-tpstreams';

const App = () => {
  const [playerProps] = useState({
    videoId: 'ASSET_ID',
    accessToken: 'ACCESS_TOKEN',
    enableDownload: false,
    autoPlay: true,
    style: { width: '100%', height: 300 },
  });

  return (
    <View style={styles.container}>
      <TpStreamsPlayerView {...playerProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

Replace `ASSET_ID` and `ACCESS_TOKEN` with the actual assetId and accessToken of the video you wish to play.

## Player Props
The player component accepts the following props:

| Prop            | Type    | Required | Default                         | Description                                    |
|----------------|---------|----------|---------------------------------|------------------------------------------------|
| `videoId`      | string  | Yes      | -                               | The unique identifier of the video asset.      |
| `accessToken`  | string  | Yes      | -                               | The authentication token required to access the video. |
| `enableDownload` | boolean | No     | `true`                          | Enables or disables video download.           |
| `autoPlay`     | boolean | No      | `true`                          | Controls whether the video should start playing automatically. |
| `style`        | object  | No      | `{ width: '100%', height: 300 }` | Defines the player’s width and height.        |





- To control playback or fetch video details and To listen to player state changes and events, refer to the [Player Methods documentation](./player-methods-and-events).
- To implement download list view, refer to the [Download Module Documentation](./download-module).

For a practical implementation and usage of tpstreams_player_sdk, refer to our [Sample React Native App](https://github.com/testpress/react_player_app/).