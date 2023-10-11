---
sidebar_position: 1
---

# Introduction

Welcome to the Transcoding as a Service documentation! This guide will help you understand how to use our transcoding service to convert videos into different resolutions. Transcoding is the process of converting video files from one format to another or to different resolutions to make them compatible with various devices and streaming platforms.


### Trancode a video

To transcode a video, you need to make a POST request to the following API endpoint:

```bash
https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/
```
Replace <organization_id> with your organization's unique identifier.

#### Sample payload:
```json
{
    "input_url": "https://example.com/input-video.mp4",
    "output_path": "s3://example-bucket/output-path/",
    "resolutions": ["240p", "480p"]
}
```

Here's a breakdown of the fields in the payload:

| Name              |  Description                                                 |  
| ---------------   | --------------------------------------------------------     | 
| input_url         | The URL of the input video file you want to transcode        | 
| output_path       | The S3 bucket path where the transcoded video files will be stored. Make sure to specify a unique path for each transcoding job | 
| resolutions       | An array of resolutions you want to transcode the video into. You can specify multiple resolutions as needed. Available resoltions are 240p, 360p, 480p, 720p and 1080p |


#### Response 

Upon a successful request, you will receive a response like below with information about the transcoding job, including a unique job ID. You can use this job ID to monitor the progress and check the status of your transcoding job.

```json
{
    "id": "5KQfnXCg8Qh",
    "resolutions": [
        "240p",
        "480p"
        ],
    "video_duration": null,
    "status": "Queued",
    "input_url": "https://example.com/input-video.mp4",
    "output_path": "s3://example-bucket/output-path/",
    "start_time": null,
    "end_time": null
}
```

### Get notified on status change
 We offer webhook integration to keep you informed about the status and progress of your transcoding jobs in real-time. With webhook integration, you can receive notifications as soon as your job status changes, making it easier to track and manage your video transcoding tasks.

To register a webhook for your organization, Please check webhook [documentation](../server-api/webhooks.md).

### Get Transcoding Job detail

To retrieve the details of a transcoding job, make a GET request to the following API endpoint:

```base
https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/<job_id>/
```

Replace <organization_id> with your organization's unique identifier and <job_id> with the specific job ID you want to retrieve details for.

#### Sample Response

```json
{
    "id": "5KQfnXCg8Qh",
    "resolutions": [
        "240p",
        "480p"
    ],
    "video_duration": 120,
    "status": "Completed",
    "input_url": "https://example.com/input-video.mp4",
    "output_path": "s3://example-bucket/output-path/",
    "start_time": "2023-04-20T23:20:06.034924+12:00",
    "end_time": "2023-04-20T23:40:06.034924+12:00"
}
```