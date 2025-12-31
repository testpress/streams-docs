---
sidebar_position: 1
---

# Getting Started

To use our React Native player SDK, add [`react-native-tpstreams`](https://www.npmjs.com/package/react-native-tpstreams) as a dependency in your project.

## Installation

```sh
npm install react-native-tpstreams
```

## Initialize TPStreams

First, initialize TPStreams with your organization ID. This should be done **only once** at your app's entry point (e.g., App.js or index.js):

```js
import { TPStreams } from "react-native-tpstreams";

TPStreams.initialize('YOUR_ORGANIZATION_ID');
```

## Add the Player Component

Then add the player component to your app:

```jsx
import { TPStreamsPlayerView } from "react-native-tpstreams";

<TPStreamsPlayerView 
  videoId="YOUR_VIDEO_ID"
  accessToken="YOUR_ACCESS_TOKEN"
  style={{ width: '100%', height: 300 }}
/>
```

## Player Props

- `videoId`: (Required) The ID of the video to play.
- `accessToken`: (Required) Access token for the video.
- `startAt`: (Optional) Position in seconds where playback should start. Default is 0.
- `shouldAutoPlay`: (Optional) Whether the video should start playing automatically. Default is true.
- `showDefaultCaptions`: (Optional) Whether to show default captions if available. Default is false.
- `startInFullscreen`: (Optional) Whether to start the player in fullscreen mode. Default is false.
- `enableDownload`: (Optional) Whether to enable download functionality for the video. When set to true, the player will show a download button. Default is false.
- `offlineLicenseExpireTime`: (Optional) The expiration time for offline licenses in seconds. If not provided, defaults to 15 days (1,296,000 seconds).
- `downloadMetadata`: (Optional) Custom metadata to attach to downloads. Accepts an object with string key-value pairs. This metadata is stored with the download and can be retrieved later. Default is undefined.

For a practical implementation and usage of react-native-tpstreams, refer to our [Sample React Native App](https://github.com/testpress/sample-rn-player-app).
