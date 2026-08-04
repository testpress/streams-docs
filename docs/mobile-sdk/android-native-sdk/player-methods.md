---
sidebar_position: 2
---

# Player Methods & Events

The `TPStreamsPlayer` provides several public methods and properties to control playback and query state.

### Player Methods

| Method | Description |
| :--- | :--- |
| `play()` | Starts or resumes playback. |
| `pause()` | Pauses playback. |
| `seekTo(positionMs: Long)` | Seeks to a specific position in milliseconds. |
| `getCurrentPosition()` | Returns the current playback position in milliseconds. |
| `getDuration()` | Returns the total duration of the media in milliseconds. |
| `getPlaybackState()` | Returns the current state of the player (`IDLE`, `BUFFERING`, `READY`, `ENDED`). |
| `getPlaybackSpeed()` | Returns the current playback speed factor (e.g., `1.5f`). |
| `setPlaybackSpeed(speed: Float)` | Sets the playback speed factor (`1.0f` is normal). |
| `isPlaying()` | Returns true if the player is currently playing. |

### Player Events

You can listen to player events using `TPStreamsPlayer.Listener`.

```kotlin
player.listener = object : TPStreamsPlayer.Listener {
    override fun onAccessTokenExpired(videoId: String, callback: (String) -> Unit) {
        // Called when the access token has expired.
        // Fetch a new token and pass it back to the player.
        val newToken = fetchNewTokenFromServer(videoId)
        callback(newToken)
    }

    override fun onError(error: PlaybackError, message: String) {
        // Called when a playback error occurs
        println("Error: $message")
    }
}
```
