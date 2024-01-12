---
sidebar_position: 3
---

# Transcoding Job detail


## Get all the Transcoding Jobs
To get all Transcoding Jobs in the organization, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/
```

**Response**
```json
{
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": "BQGhbcuzupQ",
            "resolutions": [
                "240p"
            ],
            "video_duration": null,
            "status": "Transcoding",
            "input_url": "https://s3.eu-central-1.wasabisys.com/maki-corp-dcek2m-tpstreams.com/private/a33f840bead744d6b7b0dd624e5c4a51.mp4?response-content-disposition=attachment%3B+filename%3DAnthropology+Foundation+Course+2023+Class+%23+52+Batch+1.mp4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=C5RAHD5WJ3E1DGJQ1EFN%2F20231123%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20231123T062222Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=307ebf984c810a5ebefdfa521c544d37833d41c87f0df804ecdce700c350c07e",
            "output_path": "s3://wasabisys.com/maki-corp-dcek2m-tpstreams.com/transcoding_jobs/?access_key=C5RAHD5WJ3E1DGJQ1EFN&secret_key=ekeAbrzzbjRC7MA97WbI1Yrnzfg3mZCTBmF2DvaS&region=eu-central-1",
            "start_time": "2023-11-23T12:50:29.668814+05:30",
            "end_time": null,
            "type": "transcoding_job",
            "error_message": null
        },
        {
            "id": "8sb6CfXy6bY",
            "resolutions": [
                "240p"
            ],
            "video_duration": "00:01:43",
            "status": "Error",
            "input_url": "https://s3.eu-central-1.wasabisys.com/maki-corp-dcek2m-tpstreams.com/private/221813821bc44daba200945d82bb6e87.mp4?response-content-disposition=attachment%3B+filename%3Dfinal_call.mp4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=C5RAHD5WJ3E1DGJQ1EFN%2F20231123%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20231123T101709Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ba91a3d2b23c06293a8a3f969abbc411ce8826a0d7c8fa7e38822fbbde9516df",
            "output_path": "s3://wasabisys.com/maki-corp-dcek2m-tpstreams.com/transcoding_jobs/?access_key=C5RAHD5WJ3E1DGJQ1EFN&secret_key=ekeAbrzzbjRC7MA97WbI1Yrnzfg3mZCTBmF2DvaS&region=eu-central-1",
            "start_time": "2023-11-23T16:01:42.881334+05:30",
            "end_time": null,
            "type": "transcoding_job",
            "error_message": "The specified input URL does not exist or cannot be accessed"
        },
        {
            "id": "UBzx3BF6Rpg",
            "resolutions": [
                "240p"
            ],
            "video_duration": "00:01:43",
            "status": "Transcoding",
            "input_url": "https://s3.eu-central-1.wasabisys.com/maki-corp-dcek2m-tpstreams.com/private/221813821bc44daba200945d82bb6e87.mp4?response-content-disposition=attachment%3B+filename%3Dfinal_call.mp4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=C5RAHD5WJ3E1DGJQ1EFN%2F20231123%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20231123T101709Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ba91a3d2b23c06293a8a3f969abbc411ce8826a0d7c8fa7e38822fbbde9516df",
            "output_path": "s3://wasabisys.com/maki-corp-dcek2m-tpstreams.com/transcoding_jobs/?access_key=C5RAHD5WJ3E1DGJQ1EFN&secret_key=ekeAbrzzbjRC7MA97WbI1Yrnzfg3mZCTBmF2DvaS&region=eu-central-1",
            "start_time": "2023-11-23T16:15:51.731772+05:30",
            "end_time": null,
            "type": "transcoding_job",
            "error_message": null
        }
    ]
}
```

## Get Individual Transcoding Job Details
To get a individual Transcoding Job in the organization, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

```base
https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/<job_id>/
```


Replace <organization_id> with your organization's unique identifier and <job_id> with the specific job ID you want to retrieve details for.

**Response**

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

