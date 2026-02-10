---
sidebar_position: 2
---
# Trancode a video

To transcode a video, you need to make a POST request to the following API endpoint, with the [authentication Header](../server-api/authentication.md).

```bash
https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/
```
Replace <organization_id> with your organization's unique identifier.

#### Sample payload:
You have the flexibility to choose the method that best fits your workflow. Whether you prefer using an external video URL or a direct S3 bucket path, both options are available to you:

**1. External Video URL:**
```json
{
    "input_url": "https://example.com/input-video.mp4",
    "output_path": "s3://example-bucket/path/?access_key=<access_key>&secret_key=<secret_key>&region=<region>",
    "resolutions": ["240p", "480p"],
    "client_metadata": {
        "client_id": "12345",
        "project": "marketing_campaign_2024"
    }
}
```

**2. Direct S3 Bucket Path:**

```json
{
    "input_path": "s3://example-bucket/video.mp4/?access_key=<access_key>&secret_key=<secret_key>&region=<region>",
    "output_path": "s3://example-bucket/path/?access_key=<access_key>&secret_key=<secret_key>&region=<region>",
    "resolutions": ["240p", "480p"],
    "client_metadata": {
        "client_id": "12345",
        "project": "marketing_campaign_2024"
    }
}
```

Here's a breakdown of the fields in the payload:

| **Name**          | **Description**                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| input_url       | The URL of the input video file you want to transcode. **OR** The S3 bucket path of the input video file. If using the S3 path, ensure the access_key , secret_key and region match the bucket's credentials. |
| output_path     | The S3 bucket path where the transcoded video files will be stored. Ensure a unique path for each transcoding job. The access_key , secret_key and region query parameters should match the bucket's credentials. | 
| resolutions     | An array of resolutions for transcoding the video. Specify multiple resolutions as needed. Options include 240p, 360p, 480p, 720p, and 1080p.                                      |
| client_metadata | (Optional) A JSON object containing custom metadata for your reference. This metadata will be returned in the job response and webhook notifications. Maximum size: 10 KB.                                      |

:::important
The `client_metadata` field is optional and can be used to store custom data for your internal purposes (e.g., tracking client IDs, project names, or reference information). The server does not modify or interpret this data—it simply stores and returns it exactly as provided in API responses and webhook notifications.
:::

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
    "output_path": "s3://example-bucket/path/?access_key=<access_key>&secret_key=<secret_key>&region=<region>",
    "start_time": null,
    "end_time": null,
    "error_message": null,
    "client_metadata": {
        "client_id": "12345",
        "project": "marketing_campaign_2024"
    }
}
```
:::important
In case of transcoding errors, details will be provided in the "error_message" field of the response.
:::


### Get notified on status change
 We offer webhook integration to keep you informed about the status and progress of your transcoding jobs in real-time. With webhook integration, you can receive notifications as soon as your job status changes, making it easier to track and manage your video transcoding tasks.

To register a webhook for your organization, Please check webhook [documentation](../server-api/webhooks.md).

Upon registering a webhook, you will receive a status change along with information about your transcoding job. Here is an example of the response you might receive:

```json
{
    "id": "5KQfnXCg8Qh",
    "resolutions": [
        "240p",
        "480p"
    ],
    "video_duration": null,
    "status": "transcoding",
    "input_url": "https://example.com/input-video.mp4",
    "output_path": "s3://example-bucket/path/?access_key=<access_key>&secret_key=<secret_key>&region=<region>",
    "start_time": "2023-11-22T12:30:00Z",
    "end_time": null,
    "error_message": null,
    "client_metadata": {
        "client_id": "12345",
        "project": "marketing_campaign_2024"
    }
}
