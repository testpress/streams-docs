---
sidebar_position: 6
---

# Web Hooks

Streams uses webhooks to notify your application about things that happen asynchronously, apart from the API request-response cycle. For example, you may want to update something on your end when a video asset status changes from queued to ready or errored. When these events happen, Streams will make a POST request to the address you give us and you can do whatever you need with it on your end.

## Configure Webhook

Webhooks can be configured using a webhook endpoint URL and a secret token to ensure authenticity. Once the webhook is configured for a video source or different video sources, a notification will be sent for each event for the sources. Here, the parameter Secret Token is used to ensure in your code that the Webhook is coming from Streams. 

## Create a Webhook

To Create a webhook you need to send an HTTP POST request to the API Endpoint, with the [Authentication Header](../server-api/authentication.md).

```bash
https://app.tpstreams.com/api/v1/<organization_id>/webhooks/
```
**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| url       | string      |  URL to which asset data to be sent.           | True |
| secret_token            | string      |  secret_token will be sent in x-streams-token.| True |


**Sample request body**

```json 
{
    "url": "https://sample.beeceptor.com",
    "secret_token": "abcdef",
}

```

### Response 
**HTTP Status Codes:**

For valid requests the API server returns a JSON
- **201 Created:**
 Indicates successful creation of a new video resource

    ```json
    {
        "url": "https://sample.beeceptor.com",
        "secret_token": "abcdef",
        "id": "c4cf9c5f-0b60-4e5c-9db9-81321ffe31d5"
    }
    ```


- **401 Unauthorized**
    Returned when the request lacks valid authentication credentials.

    ```json
    {
        "detail": "Invalid token."
    }
    ```
- **404 Not Found :**
     If the wrong organization ID is provided:

    ```json
    The requested resource was not found on this server.
    ```

## List all webhooks
To get all the webhooks, you need to send an HTTP GET request to the API Endpoint, with the [Authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/webhooks/
```

**Response**

**HTTP Status Codes:**

- **200 OK:**
   Request successful. Server processed the request.

    ```json
    {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
            {
                "url": "https://sample.beeceptor.com",
                "secret_token": "abcdef",
                "id": "c4cf9c5f-0b60-4e5c-9db9-81321ffe31d5"
            }
        ]
    }
    ```

- **401 Unauthorized**
    Returned when the request lacks valid authentication credentials.

    ```json
    {
        "detail": "Invalid token."
    }
    ```
- **404 Not Found :**
    If the wrong organization ID is provided:

    ```json
    The requested resource was not found on this server.
    ```
## Update a webhook
To update a webhook, you need to send an HTTP PUT request to the API Endpoint, with the [Authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/webhooks/<webhook_id>/
```


**HTTP Status Codes:**

- **200 OK:**
   Request successful. Server processed the request.

    ```json
    {
        "url": "https://sample1.beeceptor.com",
        "secret_token": "abcdef",
        "id": "c4cf9c5f-0b60-4e5c-9db9-81321ffe31d5"
    }
    ```
    
- **404 Not Found :**

    If the wrong organization ID is provided:
    ```json
    The requested resource was not found on this server.
    ```

    If the wrong webhook ID is provided:

    ```json
    {
        "detail": "Not found."
    }
- **401 Unauthorized :**
    Returned when the request lacks valid authentication credentials.

    ```json
    {
        "detail": "Invalid token."
    }

## Delete a webhook
To delete a webhook, you need to send an HTTP DELETE request to the API Endpoint, with the [Authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/webhooks/<webhook_id>/
```

## WebHook Response
Whenever the status of asset changes, response will be sent to the webhook.
**Sample webhook response is as follows**
```json
{
    "id": "9328558d-e0a5-4093-b3b9-8f15ad1550d8", // asset id
    "title": "Big Buck Bunny Video",
    "bytes": null,
    "type": "video",
    "video": {
        "progress": 0,
        "thumbnails": [],
        "status": "Completed",
        "playback_url": "https://d7pdowhru2wq4.cloudfront.net/transcoded/9328558d-e0a5-4093-b3b9-8f15ad1550d8/video.m3u8",
        "dash_url": "https://d7pdowhru2wq4.cloudfront.net/transcoded/9328558d-e0a5-4093-b3b9-8f15ad1550d8/video.mpd",
        "preview_thumbnail_url": null,
        "format": "abr",
        "resolutions": ["240p", "360p", "480p", "720p"],
        "video_codec": "h264",
        "audio_codec": "aac",
        "enable_drm": true,
        "tracks": [],
        "inputs": [
            {
                "url": "https://static.testpress.in/BigBuckBunny.mp4"
            }
        ],
    },
}
```