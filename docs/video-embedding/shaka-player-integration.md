---
sidebar_position: 5
---

# Shaka Player Integration Guide

This guide will walk you through integrating Shaka Player for playing TPStreams Non-DRM & multi-DRM-protected videos on your site.


### Why Use Shaka Player?
- Adaptive Streaming: Automatically adjusts video quality based on network conditions.
- Multi-DRM Support: Supports major DRM systems like Widevine, and FairPlay.
- Cross-Browser Compatibility: Works across all modern browsers.
- Open Source: Free to use and backed by Google.


### Setting Up Non-DRM Video Playback
 
**1.1 Set Up the Basic HTML Structure**  
Create an HTML file, include the Shaka Player library and add a video element to play the video.
``` html
<!DOCTYPE html>
<html>
    <head>
    <!-- Shaka Player compiled library: -->
    <script src="dist/shaka-player.compiled.js"></script>
    <!-- Your application source: -->
    <script src="myapp.js"></script>
    </head>
    <body>
    <video id="video"
            width="640"
            poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
            controls autoplay></video>
    </body>
</html>
```

#### 1.2 Initialize the Shaka Player
Initialize a new instance of the Shaka Player and then attach it to the video element in your HTML and provide the manifest URL of your non-DRM video to the Shaka Player. 

```javascript
// You can obtain the M3U8 URL either through our portal or using our Asset Detail API. 
const manifestUri ='<TPStreams M3U8 URL>';

function initApp() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    if (shaka.Player.isBrowserSupported()) {
    initPlayer();
    } else {
    console.error('Browser not supported!');
    }
}

async function initPlayer() {
    const video = document.getElementById('video');
    const player = new shaka.Player();
    await player.attach(video);

    // Attach player to the window to make it easy to access in the JS console.
    window.player = player;

    try {
    await player.load(manifestUri);
    console.log('The video has now been loaded!');
    } catch (e) {
    onError(e);
    }
}

function onErrorEvent(event) {
    onError(event.detail);
}

function onError(error) {
    console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);
```


### Setting Up Multi-DRM Video Playback
Now, let's extend our setup to support DRM-protected content. We will cover both Widevine and FairPlay DRM systems.

#### 2.1 Load Manifest URL
Determine browser type using the user agent string to select either HLS (m3u8) for Safari or DASH (mpd) for others, ensuring compatibility with various DRM systems. You can obtain the both M3U8 and MPD file URLs via our Asset Detail API.


#### 2.2 Generate DRM License URLs
To obtain DRM license URLs for both Widevine and FairPlay, follow these steps:

Generate an access token granting access to the TPStreams License API. Refer to the provided [documentation](./authentication) for instructions.

Use the following endpoint to construct the license URLs for both Widevine and FairPlay:
```bash
https://app.tpstreams.com/api/v1/<ORG_ID>/assets/<ASSET_ID>/drm_license/?access_token=<ACCESS_TOKEN>&drm_type=<DRM_TYPE>
```
Replace placeholders with actual values:
- <ORG_ID>: Your organization's ID
- <ASSET_ID>: ID of the asset
- <ACCESS_TOKEN>: Access token obtained in above step.
- <DRM_TYPE>: Use "widevine" for Widevine or "fairplay" for FairPlay.

Incorporate the generated license URLs into your Shaka Player configuration for Widevine and FairPlay DRM support. 

#### 2.3 Implement Widevine DRM Support

Specify the license server URL in the DRM configuration to enable Widevine DRM: 

```javascript
player.configure({
    drm: {
    servers: {
        'com.widevine.alpha': WIDEVINE_LICENSE_URL,
    },
    },
});
```
Register request filters with Shaka Player's networking engine to modify license requests: 

```javascript
player.getNetworkingEngine().registerRequestFilter(function (type, request) {
    if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
    // This ensures that the license request contains the appropriate content type, 
    // which is required by our API 
    request.headers['Content-type'] = 'application/octet-stream';
    }
});
```


#### 2.4 Implement FairPlay DRM Support

Retrieve the FairPlay DRM certificate from a specified URL before playback. This certificate is essential for decrypting the video content.

```javascript
const response = await fetch(CERTIFICATE_PATH);
const certificate = await response.arrayBuffer();
```

Configure Shaka Player to use FairPlay DRM by specifying the license server URL and the fetched certificate in the DRM configuration. 

```javascript
player.configure({
    drm: {
    servers: {
        'com.apple.fps.1_0': FAIRPLAY_LICENSE_URL,
    },
    advanced: {
        'com.apple.fps.1_0': {
        serverCertificate: new Uint8Array(certificate),
        },
    },
    },
});
```

Modify the initialization data for FairPlay by extracting the content ID and adjusting the license URL. This ensures proper handling of the video content by the FairPlay DRM system.

```javascript
player.configure('drm.initDataTransform', (initData, type, drmInfo) => {
    if (type != 'skd') return initData;
    const contentId = new TextDecoder("utf-16").decode(initData.slice(16));
    const cert = player.drmInfo().serverCertificate;

    return shaka.util.FairPlayUtils.initDataTransform(
        initData,
        contentId,
        cert
    );
});
```

Register request filters with Shaka Player's networking engine to modify license requests. For FairPlay, set the appropriate headers and payload for the license request.

```javascript
player.getNetworkingEngine().registerRequestFilter(function (type, request) {
    if (type == shaka.net.NetworkingEngine.RequestType.LICENSE) {
    request.uris = [FAIRPLAY_LICENSE_URL];
    request.method = 'POST';
    request.headers['Content-Type'] = 'application/json';
    const originalPayload = new Uint8Array(request.body);
    const base64Payload = shaka.util.Uint8ArrayUtils.toStandardBase64(originalPayload);
    request.body = JSON.stringify({
        spc: base64Payload,
    });
    }
});
```


### Setting Up Offline Download Support
Shaka Player supports offline playback, enabling users to download and play DRM-protected videos without an active internet connection. 

- Refer to the Shaka Player [documentation](https://shaka-player-demo.appspot.com/docs/api/tutorial-offline.html) for implementing offline support. 
- When configuring DRM settings for offline download, follow the steps outlined earlier to construct the DRM license URL. Additionally, ensure to include the query parameter download=true to acquire a persistent license suitable for offline use. 

For complete sample code, refer to our sample [repository](https://github.com/testpress/shaka-player-demo/). 