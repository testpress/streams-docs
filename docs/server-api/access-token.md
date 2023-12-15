---
sidebar_position: 7
---

# Access token
An access token is essential for secure video playback . 

### Create an Access token

To generate the Access token you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md) and the optional Access token request Body.

```bash
https://app.tpstreams.com/api/v1/{{org_code}}/assets/{{asset_id}}/access_tokens/
```

**Optional Fields**

| Name                            | Type         | description |
| -----------                     | -----------  | ----------- |
| time_to_live                    | integer      | By default, the Access token validity is set to infinity. You can create shorter-lived URLs by passing the time_to_live parameter. This value is to be set in seconds |
| expires_after_first_usage       | boolean      | Passing true will make the access token expire immediately after the first usage |
| annotations                     | json         | JSON contain all the information about the watermark. Please refer to this [doc](../video-embedding/watermarking.md) for details on watermarking. |

For valid requests the API server returns a JSON:

```js
{
    "playback_url":"https://app.tpstreams.com/embed/dcek2m/6cKHaeJ44pp/?access_token=1a60b175-c2e8-4a38-814b-323697f52994",
    "expires_after_first_usage":false,
    "code":"1a60b175-c2e8-4a38-814b-323697f52994",
    "status":"Active","valid_until":null,
    "annotations":[]
}
```


### List Access tokens

Make get request to the below API with your video id to list access tokens

```bash
https://app.tpstreams.com/api/v1/{{org_code}}/assets/{{asset_id}}/access_tokens/
```

**Query parameters**

| Parameter      | Data type    | 
| ---------      | ---------    |  
| is_active      | boolean      | 


**Response**
```js
{
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "playback_url": "https://app.tpstreams.com/embed/d2ff26b2-f88e-4d6d-a9ce-bb0e3ce858cc/?access_token=e91e2bf4-a3ab-493f-8685-7b88ea943c5a",
            "expires_after_first_usage": false,
            "code": "e91e2bf4-a3ab-493f-8685-7b88ea943c5a",
            "status": "Active",
            "valid_until": null,
            "annotations": [
                {
                    "text": "moving text",
                    "type": "dynamic",
                    "color": "#FF0000",
                    "opacity": "0.80",
                    "size": 15,
                    "interval": 1000,
                    "skip": 0,
                    "x": 16,
                    "y": 16
                },
                {
                    "text": "moving text 2",
                    "type": "dynamic",
                    "color": "#FF0000",
                    "opacity": "0.80",
                    "size": 15,
                    "interval": 1000,
                    "skip": 0,
                    "x": 16,
                    "y": 16
                }
            ]
        },
        {
            "playback_url": "https://app.tpstreams.com/embed/d2ff26b2-f88e-4d6d-a9ce-bb0e3ce858cc/?access_token=a33ab940-2fc5-44e8-bb7a-222ee06f023b",
            "expires_after_first_usage": false,
            "code": "a33ab940-2fc5-44e8-bb7a-222ee06f023b",
            "status": "Active",
            "valid_until": null,
            "annotations": [
                {
                    "text": "moving text",
                    "type": "dynamic",
                    "color": "#FF0000",
                    "opacity": "0.80",
                    "size": 15,
                    "interval": 1000,
                    "skip": 0,
                    "x": 16,
                    "y": 16
                },
                {
                    "text": "moving text 2",
                    "type": "dynamic",
                    "color": "#FF0000",
                    "opacity": "0.80",
                    "size": 15,
                    "interval": 1000,
                    "skip": 0,
                    "x": 16,
                    "y": 16
                }
            ]
        },
        {
            "playback_url": "https://app.tpstreams.com/embed/d2ff26b2-f88e-4d6d-a9ce-bb0e3ce858cc/?access_token=609fb114-d45d-4b64-9c95-3a2334bec0ad",
            "expires_after_first_usage": false,
            "code": "609fb114-d45d-4b64-9c95-3a2334bec0ad",
            "status": "Active",
            "valid_until": null,
            "annotations": [
                {
                    "text": "moving text",
                    "type": "dynamic",
                    "color": "#FF0000",
                    "opacity": "0.80",
                    "size": 15,
                    "interval": 1000,
                    "skip": 0,
                    "x": 16,
                    "y": 16
                },
                {
                    "text": "moving text 2",
                    "type": "dynamic",
                    "color": "#FF0000",
                    "opacity": "0.80",
                    "size": 15,
                    "interval": 1000,
                    "skip": 0,
                    "x": 16,
                    "y": 16
                }
            ]
        }
    ]
}
```




### View Access token

Make get request to the below API with your video id and access token code to get the access token details

```bash
https://app.tpstreams.com/api/v1/{{org_code}}/assets/{{asset_id}}/access_tokens/{access_token_code}/
```


**Response**
```js
    {
        "playback_url": "https://app.tpstreams.com/embed/d2ff26b2-f88e-4d6d-a9ce-bb0e3ce858cc/?access_token=e91e2bf4-a3ab-493f-8685-7b88ea943c5a",
        "expires_after_first_usage": false,
        "code": "e91e2bf4-a3ab-493f-8685-7b88ea943c5a",
        "status": "Active",
        "valid_until": null,
        "annotations": [
            {
                "text": "moving text",
                "type": "dynamic",
                "color": "#FF0000",
                "opacity": "0.80",
                "size": 15,
                "interval": 1000,
                "skip": 0,
                "x": 16,
                "y": 16
            }
        ]
    }
```




### Update Access token 

```bash
https://app.tpstreams.com/api/v1/{{org_code}}/assets/{{asset_id}}/access_tokens/{access_token_code}/
```

This code below updates the access_token time_to_live.

```js
{
    time_to_live: 300
}
```

**Response**
```js
{
    "playback_url": "https://app.tpstreams.com/embed/d2ff26b2-f88e-4d6d-a9ce-bb0e3ce858cc/?access_token=e91e2bf4-a3ab-493f-8685-7b88ea943c5a",
    "expires_after_first_usage": false,
    "code": "e91e2bf4-a3ab-493f-8685-7b88ea943c5a",
    "status": "Active",
    "valid_until": "2022-08-30T14:24:23.835382Z",
    "annotations": []
}
```

