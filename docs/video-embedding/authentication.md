---
sidebar_position: 1
---

# Playback Authentication

Access token generated using Streams API which is required to authorize video playback. 

If the user has your video embed code he can embed your video onto any page on the internet if you don't have domain restrictions. even if you have, users can view the video by embedding your video on your home page or any other page that doesn't restrict users.

You can prevent the above scenario by generating an access token using API with time-to-live or set to expire after one usage on the back-end server and then sent to the website front-end and use generate access_token as part of the video embed code.


### Obtaining an Access token

To generate the Access token you need to send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md) and the optional Access token request Body.

```bash
https://app.tpstreams.com/api/v1/{{org_code}}/assets/{{asset_id}}/access_tokens/
```

**Optional Fields**

| Name                            | Type         | description |
| -----------                     | -----------  | ----------- |
| time_to_live                    | integer      | By default, the Access token validity is set to infinity. You can create shorter-lived URLs by passing the time_to_live parameter. This value is to be set in seconds |
| expires_after_first_usage       | boolean      | Passing true will make the access token expire immediately after the first usage |
| annotations                     | json         | JSON contain all the information about the watermark. Please refer to this [doc](./watermarking.md) for details on watermarking. |

For valid requests the API server returns a JSON:

```js
{
    "playback_url": "https://app.tpstreams.com/embed/d2ff26b2-f88e-4d6d-a9ce-bb0e3ce858cc/?access_token=609fb114-d45d-4b64-9c95-3a2334bec0ad",
    "expires_after_first_usage": false,
    "code": "609fb114-d45d-4b64-9c95-3a2334bec0ad",
    "status": "Active",
    "valid_until": null,
    "annotations": []
}
```