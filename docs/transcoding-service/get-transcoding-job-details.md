---
sidebar_position: 3
---
# Get Transcoding Job detail

To retrieve the details of a transcoding job, make a GET request to the following API endpoint , with the [authentication Header](../server-api/authentication.md).

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
    "output_path": "s3://example-bucket/path/?access_key=E8WPS6H1A4OYD3ZNVMR&secret_key=N1dYpS2cTk5AeH6jWf8TgBh9Ji0MkL1N2O3P",
    "start_time": "2023-04-20T23:20:06.034924+12:00",
    "end_time": "2023-04-20T23:40:06.034924+12:00",
    "error_message": null,
}
```
:::important
In case of transcoding errors, details will be provided in the "error_message" field of the response.
:::

