---
sidebar_position: 5
---

# DRM License

To play DRM protected videos, your player should request DRM licence from our URL.

This API requires [access_token](../video-embedding/authentication.md) in query param for authentication.

```bash
POST: https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/drm_license/?access_token={{access_token}}
```

### Usage:

You can use this endpoint across web, Android and iOS players to retrieve the DRM license, passing the key message provided by the player in the payload. 

Please check this [repository](https://github.com/harinath01/videojs-sample) for videojs sample code.



### Customize Widevine License:

Customizing the Widevine license is entirely optional. If you choose not to customize it, simply pass the keyMessage provided by the player to the DRM license API in "application/octet-stream" format.

If you prefer to tailor the Widevine license to your specific needs, include the desired configuration in the payload along with the player key message when making a request to the DRM License API.

**Sample Payload:**

```json
{
    "player_payload": btoa(keyMessage),
    "widevine": {
        "content_key_specs": [
            {'track_type': 'SD', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},
            {'track_type': 'HD', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},
            {'track_type': 'UHD1', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},
            {'track_type': 'UHD2', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}},
            {'track_type': 'AUDIO', 'security_level': 1, 'required_output_protection': {'hdcp': 'HDCP_V1'}}
        ]
    }
}
```

**Breakdown:**
 - We encode the player license key message into base64 as JSON cannot include byte data directly.
 - The license specification is passed in the license_specs field. Inside this field, we specify content_key_specs, where we define the output protection details such as HDCP enforcement and Widevine security level for each track. For more details on available HDCP enforcement and Widevine security levels, please refer to the documentation [here](https://static.testpress.in/static/docs/Widevine_Integration.pdf).
  

## Security Considerations:

The recommendation is to invoke the DRM license endpoint on the server, rather than on the client. This precaution is taken because passing the License configuration and calling it from the client could expose configurations to users. 