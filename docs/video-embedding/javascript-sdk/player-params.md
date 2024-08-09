# Player Parameters

### About Player Parameters

Player parameters are query parameters that you can append to the `playback_url` to configure the player's behavior. These parameters allow for a customized playback experience by controlling features such as mute, autoplay, looping, and more directly through the URL.

### Parameters Overview

The following query parameters can be added to the `playback_url` to control the player's settings:

| Parameter       | Data type | Values          | Description                                                            |
|-----------------|-----------|-----------------|------------------------------------------------------------------------|
| `background`    | String    | `'1'` or `'0'`  | Enables or disables background mode. `'1'` enables it, `'0'` disables it. |
| `muted`         | String    | `'1'` or `'0'`  | Mutes or unmutes the player. `'1'` mutes the player, `'0'` unmutes it.  |
| `autoplay`      | String    | `'1'` or `'0'`  | Controls autoplay. `'1'` enables autoplay, `'0'` disables it.           |
| `loop`          | String    | `'1'` or `'0'`  | Enables or disables loop mode. `'1'` enables looping, `'0'` disables it. |

### Usage

These parameters are appended to the `playback_url` in the format `key=value`. Multiple parameters can be included by separating them with an ampersand (`&`).

#### Example Usage

```bash
https://app.tpstreams.com/embed/dcek2m/BxDe5ZYDyD6/?access_token=72186a33-107a-49b6-b275-a853c907be33&muted=1&autoplay=1&loop=1
```


### Detailed Description

- **`background`**: Controls whether the player operates in background mode, useful for scenarios where the video should continue playing in the background.
  
- **`muted`**: Sets whether the video should start muted. If set to `'1'`, the video will begin without sound, which is especially useful in autoplay scenarios.
  
- **`autoplay`**: Determines whether the video will start playing as soon as the player is ready. Setting this to `'1'` enables autoplay.
  
- **`loop`**: Defines whether the video will automatically restart from the beginning after it finishes. A value of `'1'` enables looping.

** Sample format **

```html 
<div style="padding-top:56.25%;position:relative;"><iframe src="https://app.tpstreams.com/embed/{{asset_id}}/?access_token={{access_token}}&autoplay=1" style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen="" frameborder="0"></iframe></div>
```

## Embed on your site

Now you use constructed iframe code in your code to embed the video. 

** Example **
```html live showLineNumbers
<html>
<body>

<div style={{ paddingTop: '56.25%', position: 'relative'}}><iframe src="https://app.tpstreams.com/embed/dcek2m/BxDe5ZYDyD6/?access_token=72186a33-107a-49b6-b275-a853c907be33&autoplay=1" style={{ border: 0, maxWidth: '100%', position: 'absolute', top:0, left:0, height:'100%', width:'100%' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen="" frameborder="0"></iframe></div>


</body>
</html>