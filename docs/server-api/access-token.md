---
sidebar_position: 8
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
| widevine                        | object       | Optional configuration object for Widevine DRM license renewal. Used for real-time playback revocation. See [Renewable Widevine Licenses](#renewable-widevine-licenses-real-time-playback-revocation) for details. |

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

### Renewable Widevine Licenses (Real-Time Playback Revocation)

By default, DRM licenses remain valid for 15 days once issued to a viewer. If you need the ability to revoke access and stop active playback in real time (for example, when a user logs out, their subscription expires, or concurrent streams are detected), you can issue an access token configured for **Widevine license renewal**.

#### Request Payload

Pass the `widevine` object in the POST request body when creating the access token:

```json
{
  "time_to_live": 3600,
  "widevine": {
    "can_renew": true,
    "renewal_delay_seconds": 180,
    "license_duration_seconds": 360
  }
}
```

#### Widevine Renewal Fields

| Name | Type | Required | Default | Allowed Range | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `can_renew` | boolean | Yes | — | Must be `true` | Enables periodic license renewals for the playback session. |
| `renewal_delay_seconds` | integer | No | `180` | `180` – `3600` | How often (in seconds) the player contacts the license server to renew its license. |
| `license_duration_seconds` | integer | No | `360` | `360` – `7200` | Validity duration (in seconds) of each renewed license. Must be greater than `renewal_delay_seconds`. |
| `renewal_retry_interval_seconds` | integer | No | `15` | `15` – `300` | Time to wait (in seconds) before retrying if a renewal request fails due to temporary network issues. |
| `renewal_recovery_duration_seconds` | integer | No | `30` | `0` – `600` | Grace period (in seconds) allowed for playback while retrying failed renewals. |

:::note Important Constraints
- **`time_to_live`**: Must be a positive integer.
- **Single-use tokens**: `expires_after_first_usage` cannot be `true`, because the player must re-present the token on every renewal request.
- **Organization Support**: Your organization must have access token caching enabled.
- **DRM Platforms**: License renewal is currently supported for Widevine DRM (Chrome, Firefox, Edge, Android).
- **Offline Storage**: Tokens with renewal rules force `can_persist: false` (streaming only; offline downloads are not permitted).
:::

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
    "time_to_live": 300
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

#### Revoking Access and Stopping Playback Immediately

To revoke an active playback session immediately, update `time_to_live` to `0`:

```js
{
    "time_to_live": 0
}
```

Setting `time_to_live` to `0` marks the access token as expired immediately. For tokens created with `widevine` renewal enabled, the player's next renewal request (sent every `renewal_delay_seconds`) will be rejected with `401 Unauthorized`, stopping unauthorized playback.
