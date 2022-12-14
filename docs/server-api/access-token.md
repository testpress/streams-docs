---
sidebar_position: 6
---

# Access token

For Creation API, Please check [here](../video-embedding/authentication.md)

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

