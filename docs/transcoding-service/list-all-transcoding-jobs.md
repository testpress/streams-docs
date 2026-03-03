---
sidebar_position: 3
---
# List all Transcoding Jobs

To list all transcoding jobs, make a GET request to the following API endpoint, with the [authentication Header](../server-api/authentication.md).

```base
https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/
```

Replace `<organization_id>` with your organization's unique identifier.

### Query Parameters

You can filter and order the list of transcoding jobs using the following query parameters:

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `status` | string | Filter jobs by status. You can provide multiple statuses by repeating the parameter. <br/> Options: `queued`, `transcoding`, `completed`, `error`. |
| `enable_drm` | boolean | Filter jobs by whether DRM is enabled (`true`) or disabled (`false`). |
| `ordering` | string | Order the jobs by creation time. <br/> Options: `-created` (Latest first), `created` (Oldest first). |

#### Example request with filters
`https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/?status=completed&status=error&enable_drm=true&ordering=-created`

### Sample Response

The response is paginated and contains a list of transcoding jobs.

```json
{
    "count": 42,
    "next": "https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/?page=2",
    "previous": null,
    "results": [
        {
            "id": "5KQfnXCg8Qh",
            "resolutions": [
                "240p",
                "480p"
            ],
            "video_duration": 120,
            "status": "Completed",
            "input_url": "https://example.com/input-video.mp4",
            "output_path": "s3://example-bucket/path/?access_key=<access_key>&secret_key=<secret_key>&region=<region>",
            "start_time": "2023-04-20T23:20:06.034924+12:00",
            "end_time": "2023-04-20T23:40:06.034924+12:00",
            "error_message": null,
            "enable_drm": true
        },
        {
            "id": "7XkLp9mN2O",
            "resolutions": [
                "720p"
            ],
            "video_duration": 300,
            "status": "Queued",
            "input_url": "https://example.com/another-video.mp4",
            "output_path": "s3://example-bucket/another-path/?access_key=<access_key>&secret_key=<secret_key>&region=<region>",
            "start_time": null,
            "end_time": null,
            "error_message": null,
            "enable_drm": false
        }
    ]
}
```
