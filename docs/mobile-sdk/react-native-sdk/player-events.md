---
sidebar_position: 3
---

# Player Events

You can listen to various events related to the player's state through the TPStreamsPlayerView component. By adding event handlers, you can track changes in the player's properties such as whether the video is playing, loading state, playback speed changes, and more.

## Available Events

The TPStreamsPlayerView component provides the following event handlers:

- **onPlayerStateChanged(state: number)**: Fires when player state changes.
- **onIsPlayingChanged(isPlaying: boolean)**: Fires when playing state changes.
- **onPlaybackSpeedChanged(speed: number)**: Fires when playback speed changes.
- **onIsLoadingChanged(isLoading: boolean)**: Fires when loading state changes.
- **onError(error: {message: string, code: number, details?: string})**: Fires when an error occurs.
- **onAccessTokenExpired(videoId: string, callback: (newToken: string) => void)**: Fires when the access token expires. Call the callback with a new token to continue playback.

## Player State Values

The **onPlayerStateChanged** event provides numeric state values that correspond to the following player states:

- **0** - IDLE: Player is idle and not ready to play
- **1** - BUFFERING: Player is buffering content
- **2** - READY: Player is ready to play
- **3** - ENDED: Video playback has ended

## Event Handler Usage

```jsx
<TPStreamsPlayerView
  videoId="YOUR_VIDEO_ID"
  accessToken="YOUR_ACCESS_TOKEN"
  onPlayerStateChanged={(state) => {
    switch(state) {
      case 0:
        console.log('Player is idle');
        break;
      case 1:
        console.log('Player is buffering');
        break;
      case 2:
        console.log('Player is ready');
        break;
      case 3:
        console.log('Video ended');
        break;
    }
  }}
  onIsPlayingChanged={(isPlaying) => console.log(`Is playing: ${isPlaying}`)}
  onPlaybackSpeedChanged={(speed) => console.log(`Speed changed: ${speed}x`)}
  onIsLoadingChanged={(isLoading) => console.log(`Loading: ${isLoading}`)}
  onError={(error) => console.error('Player error:', error)}
  onAccessTokenExpired={async (videoId, callback) => {
    // Fetch a new token from your server
    const newToken = await getNewTokenForVideo(videoId);
    callback(newToken);
  }}
/>
```
