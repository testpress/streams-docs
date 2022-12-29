---
sidebar_position: 4
---

# Player Events

## About Player events

You can listen for events in the player by attaching a callback using .on()

```js
player.on('ended', function() {
  // Executes when the video is ended
});
```

The events are equivalent to the HTML5 video events.

To remove a listener, call .off() with the callback function. If you pass an event name only, you remove all listeners for that event.

```js
var onPlay = function() {

};

player.on('ended', onPlay);

// If later you decide that you don't need to listen for `ended`
player.off('ended', onPlay);

// Alternatively, call `off` with just the event name to remove all listeners
player.off('ended');
```

## Events for playback controls

- ended
- error
- loaded
- pause
- play
- progress
- seeked
- timeupdate
- volumechange
- ratechange

### ended

This event fires when playback reaches the end of a video.

:::info

When the player's loop behavior is enabled, the ended event doesn't fire.

:::

### loaded

This event fires when a new video is loaded in the player.

### volume

This event fires when the volume in the player changes.

### timeupdate

This event fires when the playback position of the video changes, generally every 250 ms during playback, but the interval can vary depending on the browser.

### seeked

This event fires when the player seeks  a specific time. A simultaneous timeupdate event also fires.

### progress

This event fires while the video is loading. The event data indicates the amount of the video that has been buffered.

### play

This event fires when the video plays.

### pause

This event fires when the video is paused.

### error

This event fires when the player experiences some sort of error. If a method call generated the error, the name of the method appears in the event data, along with the name of the error.

### ratechange

This event fires when the playback rate of the video in the player changes.

