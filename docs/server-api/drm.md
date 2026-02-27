---
sidebar_position: 5
---

# DRM License

To play DRM protected videos, your player should request DRM licence from our URL.

This API requires [access_token](../video-embedding/authentication.md) in query param for authentication.

```bash
POST: https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/drm_license/?access_token={{access_token}}&drm_type={{drm_type}}
```

**Query Parameters**

| Name       | Type   | Description                                       | Default    |
| ---------- | ------ | ------------------------------------------------- | ---------- |
| `drm_type` | string | The type of DRM. Options: `widevine`, `fairplay`. | `widevine` |

**Request Body**

| Name                       | Type    | Description                                                                                                               | Required |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- | -------- |
| `player_payload`           | string  | For **Widevine**, this is the key message. For **FairPlay**, this is the SPC message. This **must be encoded in base64**.                                              | Yes      |
| `license_duration_seconds` | integer | The total duration (in seconds) that the DRM license is valid for Widevine. Once this time expires, the player must request a new license to continue playback. | No       |
| `lease_duration_seconds`   | integer | The total duration (in seconds) that the DRM license is valid for FairPlay. Once this time expires, the player must request a new license to continue playback. | No       |
| `is_persistent`    | boolean | Set to true to allow the license to be stored for offline viewing.                                                             | No       |
| `widevine`                 | object  | Additional configurations for Widevine. See the Widevine table below.                                                               | No       |

**Widevine Configuration Fields**

+---------------------------------------------------+------------------------------------------------------+
| **Name**                                          |  **Description**                                     |
+---------------------------------------------------+------------------------------------------------------+
| content_key_specs.track_type                      |  A track type definition, Options are                |
|                                                   |  - AUDIO - audio tracks                              |
|                                                   |  - SD - 576p or less                                 |
|                                                   |  - HD - 720p, 1080p                                  |
|                                                   |  - UHD1 - 4K                                         |
|                                                   |  - UHD2 - 8K                                         |
+---------------------------------------------------+------------------------------------------------------+
| content_key_specs.security_level                  | Security level for content key specs, Default = 1.   |
|                                                   |                                                      |
|                                                   | - 1 - Software-based whitebox crypto is              |
|                                                   | required. (SW_SECURE_CRYPTO).                        |
|                                                   | - 2 - Software crypto and an obfuscated              |
|                                                   | decoder is required. (SW_SECURE_DECODE).             |
|                                                   | - 3 - Key material and crypto operations             |
|                                                   | must be performed within a hardware-                 |
|                                                   | backed trusted execution environment.                |
|                                                   | (HW_SECURE_CRYPTO).                                  |
|                                                   | - 4 - Crypto and decoding of content                 |
|                                                   | must be performed within a hardware-                 |
|                                                   | backed trusted execution environment.                |
|                                                   | (HW_SECURE_DECODE).                                  |
|                                                   | - 5 - Crypto, decoding, and all handling             |
|                                                   | of media (compressed and uncompressed)               |
|                                                   | must be handled within a hardware-                   |
|                                                   | backed trusted execution environment.                |
|                                                   | (HW_SECURE_ALL)                                      |
+---------------------------------------------------+------------------------------------------------------+
| content_key_specs.required_output_protection.hdcp | Output protection options for HDCP                   |
|                                                   | Options:                                             |
|                                                   | - HDCP_NONE                                          |
|                                                   | - HDCP_V1                                            |
|                                                   | - HDCP_V2                                            |
|                                                   | - HDCP_V2_1                                          |
|                                                   | - HDCP_V2_2                                          |
|                                                   | - HDCP_V2_3                                          |
|                                                   | - HDCP_NO_DIGITAL_OUTPUT                             |
+---------------------------------------------------+------------------------------------------------------+
| license_duration                                  | The total duration (in seconds) that the DRM         |
|                                                   | license is valid. Once this time expires, the        |
|                                                   | player must request a new license to continue        |
|                                                   | playback. Set to 0 for unlimited duration            |
|                                                   | (not recommended for rental content).                |
+---------------------------------------------------+------------------------------------------------------+

**Sample Payloads**

<details>
<summary>Widevine Sample</summary>

```json
{
  "player_payload": "<base64_encoded_key_message>",
  "license_duration_seconds": 3600,
  "is_persistent": false,
  "widevine": {
    "content_key_specs": [
      {
        "track_type": "SD",
        "security_level": 1,
        "required_output_protection": { "hdcp": "HDCP_V1" }
      },
      {
        "track_type": "HD",
        "security_level": 1,
        "required_output_protection": { "hdcp": "HDCP_V1" }
      },
      {
        "track_type": "UHD1",
        "security_level": 1,
        "required_output_protection": { "hdcp": "HDCP_V1" }
      },
      {
        "track_type": "UHD2",
        "security_level": 1,
        "required_output_protection": { "hdcp": "HDCP_V1" }
      },
      {
        "track_type": "AUDIO",
        "security_level": 1,
        "required_output_protection": { "hdcp": "HDCP_V1" }
      }
    ]
  }
}
```

</details>

<details>
<summary>FairPlay Sample</summary>

```json
{
  "player_payload": "<base64_encoded_spc_data>",
  "lease_duration_seconds": 3600,
  "is_persistent": true
}
```

</details>

---

### Response

The API returns the raw binary license which should be passed directly to the browser's CDM or the player SDK.

- **Status Code**: `200 OK`
- **Content-Type**: `application/octet-stream`
- **Body**: Raw binary data (Widevine License or FairPlay Content Key Context).

---

**Security Considerations:**

The recommendation is to invoke the DRM license endpoint on the server, rather than on the client. This precaution is taken because passing the License configuration and calling it from the client could expose configurations to users.
