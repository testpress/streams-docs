# Javascript Uploader


### Introduction
If you would like to upload videos without using the embedded uploader UI, you can use our javascript SDK that provides methods to upload videos, and track its progress.


## Guide to integrate the uploader
This guide will help you integrate the TPStreams video uploader SDK into your website allowing you to upload videos directly to your TPStreams account.


### Step 1: Get the Authentication Token
Use the API mentioned [here](../server-api/authentication.md) to obtain a user authentication token. This token is required for the uploader to authenticate uploads.


### Step 2: Import the TPStreams Uploader SDK
Include the TPStreams Uploader SDK script in your webpage. Add the following `<script>` tag in the `<head>` or right after the starting `<body>` tag:

```html
<script src="https://static.testpress.in/static/js/tpstreams-uploader.min.js"></script>
```


### Step 3: Initialize the uploader instance
Make sure to replace the organization id with your own TPStreams organization ID. Click [here](/docs/videos-uploader/javascript-uploader#uploader-configuration-options) to know more about the uploader configuration options.

```html
<script>
  const authToken = '5f34asdd8aec31adfgfc7dee2bc70ab18dbf0a9cf592aghjd9e63c148362cdf595e008bec1';
  const orgId = "abcdefg";
  const uploaderConfig = {
    generateSubtitle: true,
    contentProtectionType: "aes"
  };
  const uploader = new TpStreamsUploaderSDK(authToken, orgId, uploaderConfig);
</script>
```


### Step 4: Select files and start upload
After you've created a file input on your webpage, you can pass those files to the uploader instance.

```html
<script>
  document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    uploader.selectFiles([file]);
    uploader.upload();
  });
</script>
```


### Full Example Code
The following code will display the video upload progress and asset ID on your webpage.

```html
<html>
  <head>
    <title>Video Upload with JS SDK</title>
    <script src="https://static.testpress.in/static/js/tpstreams-uploader.min.js"></script>
  </head>
  <body>
    <h1>Upload Video Using TpStreams Uploader SDK</h1>
    <input type="file" id="fileInput" accept="video/*">
    <button id="uploadButton">Upload Video</button>
    <div id="upload_progress"></div>
    <div id="status"></div>
    
    <script>
      const authToken = '5ffc7dee2bc70ab18dbf0a9cf592ad9e63c148362cdf595e008bec1';
      const orgId = "abcdef";
      const uploaderConfig = {generateSubtitle: true, contentProtectionType: "aes"};
      const uploader = new TpStreamsUploaderSDK(authToken, orgId, uploaderConfig);

      uploader.on('uploadProgress', (data) => {
          document.getElementById("upload_progress").innerHTML = `Progress for asset ${data.asset_id}: ${data.progress_percentage}%`;
      });

      uploader.on('uploadSuccess', (data) => {
        console.log(`${data.name}, with asset ID ${data.asset_id} has been uploaded. Transcoding Status: ${data.status}`)
        document.getElementById('status').innerHTML = "Uploading was successful.";
      });

      uploader.on('uploadError', (data) => {
        console.log(`An error occurred while uploading ${data.name}, with asset ID ${data.asset_id}. Transcoding Status: ${data.status}. Error: ${data.error}`)
        document.getElementById('status').innerHTML = "Uploading has failed";
      });

      document.getElementById('uploadButton').addEventListener('click', () => {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (file) {
            uploader.selectFiles([file]);
            uploader.upload();
        } else {
            alert('Please select a video file to upload.');
        }
      });
    </script>
  </body>
</html>

```


## Uploader Configuration Options
You can pass the following configuration options to the uploader while initializing using the `uploaderConfig` argument.

**uploaderConfig**

| Parameter   | Description             | Type            |
|-------------|-------------------------|-----------------|
| generateSubtitle       | Auto-generate english subtitles for $0.071 per minute of video. False by default.                                                  | Boolean         |
| contentProtectionType  | Choose encryption standard to safeguard your videos. DRM encryption is enabled by default.                                         | String ("drm", "aes" or "disabled") |
| resolutions            | Choose the resolutions in which you want to transcode the videos. By default they will be transcoded in all available resolutions. | List of string ["240p", "360p", "480p", "720p"] |



## Uploader Events
You can listen for events in the uploader by attaching a callback using .on()

### uploadProgress
Listen to this event to track video upload progress.

```html
<script>
  uploader.on('uploadProgress', (data) => {
    document.getElementById("upload_progress").innerHTML = `Progress for asset ${data.asset_id}: ${data.progress_percentage}%`;
  });
</script>
```


### uploadProgress
This event is fired when a video is successfully uploaded to TpStreams.

```html
<script>
  uploader.on('uploadSuccess', (data) => {
    console.log(`${data.name}, with asset ID ${data.asset_id} has been uploaded. Transcoding Status: ${data.status}`)
  });
</script>
```

### uploadError
This event is fired when an error occurs while uploading a video to TpStreams.

```html
<script>
  uploader.on('uploadError', (data) => {
    console.log(`An error occurred while uploading ${data.name}, with asset ID ${data.asset_id}. Transcoding Status: ${data.status}. Error: ${data.error}`)
  });
</script>
```