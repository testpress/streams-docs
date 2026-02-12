---
sidebar_position: 5
---

# Widevine Specs

Google's Widevine DRM system defines three different security levels.

| Widevine Security Level | Description | Device Type |
|-------------------------|-------------|-------------|
| L1                      | Video Decryption & Processing is performed in Trusted Execution Environment (TEE) | Most Modern Android Devices |
| L2                      | Video Decryption occurs in TEE, but video processing occurs outside TEE | - |
| L3                      | Does not have a TEE, may include hardware cryptographic engine | Old and budget Android devices |

## Client security level 
(`content_key_specs.security_level`)

The table below illustrates the general mapping between the EME security level(content_key_specs.security_level) definitions and Widevine device robustness levels.

| Definition           | EME Level(content_key_specs.security_level) | Widevine Device Security Level |
|----------------------|-----------|--------------------------------|
| SW_SECURE_CRYPTO     | 1         | L3                              |
| SW_SECURE_DECODE     | 2         | L3                              |
| HW_SECURE_CRYPTO     | 3         | L2                              |
| HW_SECURE_DECODE     | 4         | L1                              |
| HW_SECURE_ALL        | 5         | L1                              |

:::important

**Note**: Desktop browsers support only L3, So you will need to specify security_level=1 .

:::

## Track type 
(`content_key_specs.track_type`)

| Track Type | Definition       |
|------------|------------------|
| AUDIO      | Audio tracks     |
| SD         | 576p or less     |
| HD         | 720p, 1080p      |
| UHD1       | 4K               |
| UHD2       | 8K               |

## HDCP Parameter Table
(`content_key_specs.required_output_protection.hdcp`)

HDCP stands for High-bandwidth Digital Content Protection. Its primary purpose is to safeguard digital copyrighted content as it moves from one device to your TV, typically using HDMI, DVI, or DisplayPort connections

| HDCP Parameter        | WV Security Level (applies to) | Description                                    |
|-----------------------|--------------------------------|------------------------------------------------|
| HDCP_NONE             | L3                              | HDCP not specified                             |
| HDCP_V1               | L1                              | Enforce HDCP 1.x Playback not allowed if Client does not report HDCP 1.x or better. |
| HDCP_V2               | L1                              | Enforce HDCP 2.0 Playback not allowed if Client does not report HDCP 2.0 or better. |
| HDCP_V2_1             | L1                              | Enforce HDCP 2.1 Playback not allowed if Client does not report HDCP 2.1 or better. |
| HDCP_V2_2             | L1                              | Enforce HDCP 2.2 Playback not allowed if Client does not report HDCP 2.2 or better. |
| HDCP_V2_3             | L1                              | Enforce HDCP 2.3 Playback not allowed if Client does not report HDCP 2.3 or better. |
| HDCP_NO_DIGITAL_OUTPUT| L1                              | No digital output allowed, including HDCP. Internal display only. |