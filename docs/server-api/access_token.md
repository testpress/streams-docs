---
sidebar_position: 6
---

# Access token

### List Access tokens

Make get request to the below API with your video id to list access tokens

```bash
https://demo.testpress.in/api/v2.5/admin/videos/{video-id}/access-tokens
```

**Query parameters**

| Parameter      | Data type    | 
| ---------      | ---------    |  
| is_active      | boolean      | 


**Response**
```js
{
    "count": 4,
    "next": null,
    "previous": null,
    "per_page": 20,
    "results": [
        {
            "url": "https://demo.testpress.in/api/v2.5/admin/videos/T5ytuyF04NC/access-tokens/6c15094e-bd08-422c-93ba-2cd71867e035/",
            "expires_after_first_usage": true,
            "code": "6c15094e-bd08-422c-93ba-2cd71867e035",
            "status": "Expired",
            "valid_until": "2022-09-04T19:19:06.399581Z",
            "annotations": [
                {
                    "text": "moving text",
                    "type": "dynamic",
                    "color": "#FFFF00",
                    "opacity": "0.30",
                    "size": 5,
                    "interval": 2500,
                    "skip": 20,
                    "x": 21,
                    "y": 21
                },
                {
                    "text": "moving text",
                    "type": "dynamic",
                    "color": "#FFFF00",
                    "opacity": "0.30",
                    "size": 5,
                    "interval": 2500,
                    "skip": 20,
                    "x": 21,
                    "y": 21
                }
            ]
        },
        {
            "url": "https://demo.testpress.in/api/v2.5/admin/videos/T5ytuyF04NC/access-tokens/2c6f4c16-9a8e-4739-9827-d141f68452aa/",
            "expires_after_first_usage": false,
            "code": "2c6f4c16-9a8e-4739-9827-d141f68452aa",
            "status": "Expired",
            "valid_until": "2022-09-04T19:13:01.619546Z",
            "annotations": [
                {
                    "text": "moving text",
                    "type": "dynamic",
                    "color": "#FFFF00",
                    "opacity": "0.30",
                    "size": 5,
                    "interval": 2500,
                    "skip": 20,
                    "x": 21,
                    "y": 21
                },

        {
            "url": "https://demo.testpress.in/api/v2.5/admin/videos/T5ytuyF04NC/access-tokens/26fe0ae0-6450-4b10-8541-2379815071ba/",
            "expires_after_first_usage": false,
            "code": "26fe0ae0-6450-4b10-8541-2379815071ba",
            "status": "Expired",
            "valid_until": "2022-09-04T19:13:01.639349Z",
            "annotations": [
                {
                    "text": "moving text",
                    "type": "dynamic",
                    "color": "#FFFF00",
                    "opacity": "0.90",
                    "size": 25,
                    "interval": 1500,
                    "skip": 10,
                    "x": 11,
                    "y": 11
                }
            ]
        },
        {
            "url": "https://demo.testpress.in/api/v2.5/admin/videos/T5ytuyF04NC/access-tokens/4a802a74-4ebb-473d-8f41-8e624279aba6/",
            "expires_after_first_usage": false,
            "code": "4a802a74-4ebb-473d-8f41-8e624279aba6",
            "status": "Expired",
            "valid_until": "2022-09-04T19:11:52.247073Z",
            "annotations": []
        }
    ]
}
```




### View Access token

Make get request to the below API with your video id and access token code to get the access token details

```bash
https://demo.testpress.in/api/v2.5/admin/videos/{video-id}/access-tokens/{access_token_code}/
```


**Response**
```js
{
    "url": "https://demo.testpress.in/api/v2.5/admin/videos/{video-id}/access-tokens/your_access_token_code/",
    "expires_after_first_usage": false,
    "code": "your_access_token_code",
    "status": "Active",
    "valid_until": "2022-08-30T14:24:23.835382Z",
    "annotations":[]
}
```




### Update Access token 

```bash
https://demo.testpress.in/api/v2.5/admin/videos/{video-id}/access-tokens/{access_token_code}/
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
    "url": "https://demo.testpress.in/api/v2.5/admin/videos/{video-id}/access-tokens/your_access_token_code/",
    "expires_after_first_usage": false,
    "code": "your_access_token_code",
    "status": "Active",
    "valid_until": "2022-08-30T14:24:23.835382Z",
    "annotations":[]
}
```

