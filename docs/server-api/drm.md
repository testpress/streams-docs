---
sidebar_position: 5
---

# DRM License

To play DRM protected videos, your player should request DRM licence from our URL.

This API requires [access_token](../video-embedding/authentication.md) in query param for authentication.

```bash
POST: https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/drm_license/?access_token={{access_token}}
```

**Sample code**

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
         href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.11.7/video-js.min.css"
         rel="stylesheet"
         />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.11.7/video.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/videojs-contrib-eme@3.8.0/dist/videojs-contrib-eme.js"></script>
      <title>Test VideJS DRM</title>
   </head>
   <body>
      <div style="margin: 50px auto; max-width: 400px">
         <video id="my-video" class="video-js"></video>
      </div>
      <script>
         const license_url = "" // replace with your endpoint which returns DRM license response
         var player = videojs(
           "my-video",
           {
             controls: true,
             fluid: true,
             html5: {
               vhs: {
                 overrideNative: true,
               },
             },
           },
           function () {
             var player = this;
             player.eme();
             player.src({
               src: "https://d7pdowhru2wq4.cloudfront.net/transcoded/8b9b948e-192d-4474-b909-5ac5c27918eb/video.mpd",
               type: "application/dash+xml",
               keySystems: {
                 "com.widevine.alpha": {
                   getLicense: (emeOptions, keyMessage, callback) => {
                     let headers = {};
                     let body = undefined;
         
                       headers["Content-type"] = "application/octet-stream";
                       body = keyMessage;
         
                     videojs.xhr(
                       {
                         url: license_url,
                         method: "POST",
                         body: body,
                         responseType: "arraybuffer",
                         headers: headers,
                       },
                       (err, response, responseBody) => {
                         if (err) {
                           callback(err);
                           return;
                         }
         
                         if (
                           response.statusCode >= 400 &&
                           response.statusCode <= 599
                         ) {
                           // Pass an empty object as the error to use the default code 5 error message
                           callback({});
                           return;
                         }
         
                         callback(null, responseBody);
                       }
                     );
                   },
                 },
               },
             });
           }
         );
      </script>
   </body>
</html>

```