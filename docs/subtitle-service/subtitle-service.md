---
sidebar_position: 1
---

# Subtitle Service

The Subtitle Service API allows you to asynchronously generate subtitles for any valid audio or video URL, independently of an asset. The system will process the media and generate subtitles in WebVTT (.vtt) format.

## Create a Subtitle Job

To trigger subtitle generation for a media URL, send an HTTP POST request to the API Endpoint with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/subtitle_jobs/
```

**Fields**

| Name            | Type   | Description                                                                                             | Required |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- |
| url             | string | A publicly accessible URL to the audio or video file.                                                   | Yes      |
| client_metadata | object | A JSON object (up to 10KB) to store any custom metadata you want to associate with this job.            | No       |

**Sample Request Body (JSON)**
```json
{
    "url": "https://example.com/audio.mp3",
    "client_metadata": {
        "my_internal_id": "12345"
    }
}
```

**Response**

For valid requests, the API server returns a JSON response with status code `201 Created`:

```json
{
    "id": "7cFHfFSfjna",
    "url": "https://example.com/audio.mp3",
    "language": "en",
    "status": "Queued",
    "subtitle_url": null,
    "audio_duration": null,
    "error_code": null,
    "error_message": null,
    "client_metadata": {
        "my_internal_id": "12345"
    },
    "created": "2023-10-27T10:00:00.000000Z"
}
```

:::info
Subtitle generation is an asynchronous process. The initial status will be `Queued` or `Processing`. You can poll the Retrieve Job API to check when it reaches `Completed`.
:::

## Retrieve a Subtitle Job

To get the current status and details of a specific subtitle job, send an HTTP GET request to the API Endpoint.

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/subtitle_jobs/<job_id>/
```

**Response**

For valid requests, the API server returns a JSON response with status code `200 OK`:

```json
{
    "id": "7cFHfFSfjna",
    "url": "https://example.com/audio.mp3",
    "language": "en",
    "status": "Completed",
    "subtitle_url": "https://d28qihy7z761lk.cloudfront.net/private/subtitle_jobs/7cFHfFSfjna.vtt",
    "audio_duration": "00:02:00.000000",
    "error_code": null,
    "error_message": null,
    "client_metadata": {
        "my_internal_id": "12345"
    },
    "created": "2023-10-27T10:00:00.000000Z"
}
```

## List Subtitle Jobs

To retrieve a list of all your subtitle jobs, send an HTTP GET request to the API Endpoint.

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/subtitle_jobs/
```

**Response**

For valid requests, the API server returns a JSON array of subtitle jobs (can be paginated) with status code `200 OK`:

```json
[
    {
        "id": "7cFHfFSfjna",
        "url": "https://example.com/audio.mp3",
        "language": "en",
        "status": "Completed",
        "subtitle_url": "https://d28qihy7z761lk.cloudfront.net/private/subtitle_jobs/7cFHfFSfjna.vtt",
        "audio_duration": "00:02:00.000000",
        "error_code": null,
        "error_message": null,
        "client_metadata": null,
        "created": "2023-10-27T10:00:00.000000Z"
    }
]
```
