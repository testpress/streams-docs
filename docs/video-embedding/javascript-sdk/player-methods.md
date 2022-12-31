---
sidebar_position: 3
---

# Player Methods

### About player methods

You can call player methods by calling the corresponding function on the Player object. All player method executes only after the iframe is loaded, so no need to wait for the player to loaded to call the methods. 

``` js
player.play();
```

All methods, except for on() and off(), return a Promise — a special JavaScript object that stands for the result of the operation, whether success or failure.

Promises for methods that return information resolve with the value of the property in question.

```js
player.getLoop().then(function(loop) {
  // Whether the player is set to loop
});
```


### Get the playback position of a video

This method gets the current playback position of a video, measured in seconds.

**Function**
```js
getCurrentTime()
```

**Returns**
```bash
Promise <number>
```

**Example**

``` bash
player.getCurrentTime().then(function(seconds) {
  // `seconds` indicates the current playback position of the video
});
```
​

### Get the loop state of a player

This method gets the loop state of a player, where true indicates that the video restarts once it reaches the end of playback.

**Function**
```js
getLoop()
```

**Returns**
```bash
Promise <boolean>
```

**Example**
```js
player.getLoop().then(function(loop) {
  // `loop` indicates whether the loop behavior is active
});
```
​

### Get the pause state of a player

This method gets the pause state of the current player, where true indicates that playback is paused.

**Function**
```js
getPaused()
```

**Returns**
```bash
Promise <boolean>
```

**Example**
```js
player.getPaused().then(function(paused) {
  // `paused` indicates whether the player is paused
});
```
​

### Get the ended state of a video

This method gets the ended state of the video, where true indicates that the video has ended. The video has ended if its current playback position is exactly equal to its duration.

**Function**
```bash
getEnded()
```

**Returns**
```bash
Promise <boolean>
```

**Example**
```js
player.getEnded().then(function(ended) {
  // `ended` indicates whether the video has ended
});
```


### Get the playback rate of a player

This method gets the playback rate of a player on a scale from 0.5 to 2, where 0.5 is half speed and 2 is double speed.

**Function**
```js
getPlaybackRate()
```

**Returns**
```bash
Promise <number>
```

**Example**
```js
player.getPlaybackRate().then(function(playbackRate) {
  // `playbackRate` indicates the numeric value of the current playback rate
});
```


### Get the volume level of a player

This method gets the volume level of a player on a scale of 0 to 1.

:::info
Most mobile devices don't support a volume level independent of the system volume. In these cases, this method always returns 1.
:::

**Function**
```js
getVolume()
```

**Returns**
```bash 
Promise <number>
```

**Example**
```js
player.getVolume().then(function(volume) {
  // `volume` indicates the volume level of the player
});
```

### Get user watched time ranges

This methods returns the list of time ranges that user watched in a video.

**Function**
```js
played()
```

**Returns**
```bash 
Promise <Array>
```

**Example**
```js
player.played().then(function(ranges) {
  // ranges => [[0, 120.084666], [155.292928, 161.054032], ...]
});
```

### Pause a video

This method pauses the playback of a video.

**Function**

```js
pause()
```

**Returns**

```bash
Promise <void>
```

**Example**

```js
player.pause().then(function() {
  // The video is paused
}).catch(function(error) {
  // Some other error occurred
});
```


### Play a video

This method plays the playback of a video.

**Function**
```js
play()
```

**Returns**
```bash
Promise <void>
```

**Example**
```js
player.play().then(function() {
  // The video is paused
}).catch(function(error) {
  // Some other error occurred
});
```
​

### Set the playback position of a video

This method sets the current playback position in seconds. The player attempts to seek to as close to the specified time as possible. The exact time comes back as the fulfilled value of the promise.

**If playback hasn't started yet**,  using this method starts playback.    
**If playback has already started**, using this method doesn't affect the play state.

:::info
  If the player is paused, it remains paused. If the player is playing, it buffers the video from the new position and then resumes playing.
:::

**Function**
```js
setCurrentTime(seconds)
```

**Parameters**

|Parameter| Data type | Required? | Description |
|---------| ----------|-----------|-------------|
| seconds | Number    | Yes       | The playback position in seconds.|

**Returns**

```bash
Promise <number, (RangeError | Error)>
```

**Errors**

| Error      | Description |
| ------     | ----------- |
| RangeError | The time is less than 0 or greater than the video's duration.|
| Error      | Some other error occurred. |

**Example**
```js
player.setCurrentTime(30.456).then(function(seconds) {
  // `seconds` indicates the actual time that the player seeks to
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
        // The time is less than 0 or greater than the video's duration
        break;
    default:
        // Some other error occurred
        break;
  }
});
```

​
### Set the autoplay state of a player or browser

This method enables or disables autoplay in a player or browser, where true indicates that autoplay is enabled. Under autopause, whenever a new video loads in the browser window, the video begins in a played state.
By default autoplay was disabled.

:::info
The autopause feature has no effect if you've disabled cookies in your browser, either through browser settings or with an extension or plugin.
:::

**Function**
```js
setAutoPlay({autoplay})
```

**Parameters**

| Parameter | Data type | Required? | Description |
| --------- | --------- | --------- | ----------- |
| autopause | Boolean   | Yes       | The autopause state to set.|

**Returns**
```bash
Promise <boolean, (UnsupportedError | Error)>
```

**Errors**

| Error            | Description |
| ---------        | ---------   |
| UnsupportedError | Autopause isn't supported by the current player or browser. |
| Error            |  Some other error occurred. |

**Example**

```js
player.setAutoPlay(false).then(function(autopause) {
  // Autoplay is disabled
}).catch(function(error) {
  // Handle errors
});
```


### Set the loop state of a player

This method sets the loop state of the player. When the loop state is true, playback resumes at the beginning of the video immediately after the video ends.

**Function**
```js
setLoop(loop)
```

**Parameters**

| Parameter | Data type | Required? | Description |
| --------- | --------- | --------- | ----------- |
| loop      | Boolean   | Yes       | Whether the player loops video playback. |


**Returns**
```bash
Promise <boolean>
```

**Example**
```js
player.setLoop(true).then(function(loop) {
  // The loop behavior is enabled
});
```


### Set the playback rate of a player

This method sets the playback rate of the player on a scale from 0.5 to 2, where 0.5 is half speed and 2 is double speed. When you set the playback rate through the API, the specified value isn't synchronized to other players or stored as the viewer's preference.

**Function**
```js
setPlaybackRate(playbackRate)
```

**Parameters**

| Parameter   | Data type | Required? | Description |
| ---------   | --------- | --------- | ----------- |
| playbackRate| Number | Yes| The playback rate of the player from 0.5 to 2.|


**Returns**
```bash
Promise <number, (RangeError | Error)>**
```

**Errors**

| Error            | Description |
| ---------        | ---------   |
| RangeError       | The playback rate is less than 0.5 or greater than 2. |
| Error            | Some other error occurred.|

**Example**

```js 
player.setPlaybackRate(0.5).then(function(playbackRate) {
  // The playback rate is set
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
        // The playback rate is less than 0.5 or greater than 2
        break;
    default:
        // Some other error occurred
        break;
  }
});
```


### Set the volume level of a player

This method sets the volume level of the player on a scale from 0 to 1. When you set the volume through the API, the specified value isn't synchronized to other players or stored as the viewer's preference.

**Function**
```js
setVolume(volume)
```
**Parameters**

| Parameter | Data type | Required? | Description |
| --------- | --------- | --------- | ----------- |
| volume    | Number    |Yes        | The volume level of the player from 0 to 1. |

**Returns**

```bash
Promise <number, (RangeError | Error)>
```

**Errors**

| Error            | Description |
| ---------        | ---------   |
| RangeError       | The volume is less than 0 or greater than 1. |
| Error | Some other error occurred. |

**Example**

```js 
player.setVolume(0.5).then(function(volume) {
  // The volume is set
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
        // The volume is less than 0 or greater than 1
        break;
    default:
        // Some other errors occurred
        break;
  }
});
```

### Apply watermark to the video

This method applies watermark to the video. Please refer to this [doc](../watermarking.md) for more details on watermarking.

**Function**

```js
applyWatermark()
```

**Parameters**

| Parameter      | Data type | Required? | 
| ---------      | --------- | --------- | 
| annotations    | json      |Yes        | 


**Returns**
```bash
Promise <void>
```

**Example**

```js 
const annotations = [
   {
      "type":"dynamic",
      "text":"Dinesh",
      "opacity":"0.8",
      "color":"#FF0000",
      "size":"5",
      "interval":5000,
      "skip": 2000
   }
]
player.applyWatermark(annotations).then(function() {
  // The watermark is applied
})
```