---
sidebar_position: 8
---

# Audio Tracks

Manage multilingual audio tracks for your video assets. You can list existing audio tracks, retrieve individual track details, update track display names and ISO 639-1 language codes individually, or update multiple tracks in bulk.

## List Audio Tracks for an Asset

To retrieve a list of all audio tracks associated with a video asset, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/audio_tracks/
```

**Response**

For valid requests the API server returns a JSON list of audio tracks:

```json
[
    {
        "id": 101,
        "name": "English",
        "language": "en",
        "type": "audio",
        "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/7cFHfFSfjna/audio_128k_track1/",
        "bytes": 5242880,
        "is_active": true
    },
    {
        "id": 102,
        "name": "Tamil",
        "language": "ta",
        "type": "audio",
        "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/7cFHfFSfjna/audio_128k_track2/",
        "bytes": 5242880,
        "is_active": true
    }
]
```

## Get Individual Audio Track Details

To retrieve details for a specific audio track, you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/audio_tracks/<track_id>/
```

**Response**

For valid requests the API server returns the audio track JSON object:

```json
{
    "id": 101,
    "name": "English",
    "language": "en",
    "type": "audio",
    "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/7cFHfFSfjna/audio_128k_track1/",
    "bytes": 5242880,
    "is_active": true
}
```

## Update Single Audio Track

To update the display name or language code of an audio track, you need to send an HTTP PATCH request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/audio_tracks/<track_id>/
```

**Fields**

| Name             | Type         | Description | Required  |
| -----------      | -----------  | ----------- | ---------- |
| name             | string       | Display name of the audio track shown in player controls. | No |
| language         | string       | ISO 639-1 language code (e.g., `en`, `ta`, `hi`). Pass `null` to clear. | No |

At least one of `name` or `language` must be provided.

To know language code please check [Language-codes](../language-codes)

**Sample request body**

```json
{
    "name": "English (Original)",
    "language": "en"
}
```

**Response**

For valid requests the API server returns the updated audio track JSON object:

```json
{
    "id": 101,
    "name": "English (Original)",
    "language": "en",
    "type": "audio",
    "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/7cFHfFSfjna/audio_128k_track1/",
    "bytes": 5242880,
    "is_active": true
}
```

## Bulk Update Audio Tracks

To update multiple audio tracks for a video asset in a single request, you need to send an HTTP PATCH request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/audio_tracks/bulk/
```

**Fields**

| Name             | Type         | Description | Required  |
| -----------      | -----------  | ----------- | ---------- |
| tracks           | array        | List of audio track updates for the video asset. | Yes |

**Bulk Track Item Fields**

| Name             | Type         | Description | Required  |
| -----------      | -----------  | ----------- | ---------- |
| id               | integer      | Unique ID of the audio track. | Yes |
| name             | string       | Display name of the audio track shown in player controls. | No |
| language         | string       | ISO 639-1 language code (e.g., `en`, `ta`, `hi`). Pass `null` to clear. | No |

Each track item must include an `id` and at least one of `name` or `language`.

To know language code please check [Language-codes](../language-codes)

**Sample request body**

```json
{
    "tracks": [
        {
            "id": 101,
            "name": "English",
            "language": "en"
        },
        {
            "id": 102,
            "name": "Tamil",
            "language": "ta"
        },
        {
            "id": 103,
            "name": "Hindi",
            "language": "hi"
        }
    ]
}
```

**Response**

For valid requests the API server returns the complete list of updated audio tracks:

```json
[
    {
        "id": 101,
        "name": "English",
        "language": "en",
        "type": "audio",
        "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/7cFHfFSfjna/audio_128k_track1/",
        "bytes": 5242880,
        "is_active": true
    },
    {
        "id": 102,
        "name": "Tamil",
        "language": "ta",
        "type": "audio",
        "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/7cFHfFSfjna/audio_128k_track2/",
        "bytes": 5242880,
        "is_active": true
    },
    {
        "id": 103,
        "name": "Hindi",
        "language": "hi",
        "type": "audio",
        "url": "https://d28qihy7z761lk.cloudfront.net/transcoded/7cFHfFSfjna/audio_128k_track3/",
        "bytes": 5242880,
        "is_active": true
    }
]
```
