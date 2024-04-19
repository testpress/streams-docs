#  DRM Policies
This guide explains Digital Rights Management (DRM) policies
## Default DRM Policies
This table helps you choose the right security level for Digital Rights Management (DRM) on your videos.

| Security Level                 | Widevine minimum security level | FairPlay minimum security level | Digital output                |
|--------------------------------|--------------------------------|---------------------------------|--------------------------------|
| Highest                        | L1 (HW_SECURE_ALL)             | N/A                             | Requires HDCP v2 or later     |
| High                           | L1 (HW_SECURE_ALL)             | N/A                             | Requires HDCP v1 or later     |
| Medium                         | L3 (SW_SECURE_CRYPTO)          | N/A                             | Requires HDCP v1 or later     |
| Low                            | L3 (SW_SECURE_CRYPTO)          | N/A                             | Does not require HDCP         |


## Supported browsers 
This table helps you understand which combinations of web browsers and security levels are supported for DRM. It covers both desktop and mobile browsers. 
### Desktop

| Desktop HTML5 Browsers       | Highest                          | High                             | Medium                           | Low                              |
|------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| Chrome                       | --                                | --                               | --                               | ✅                               |
| Edge                        | --                                | --                               | --                               | ✅                               |
| Firefox                      | --                                | --                               | --                               | ✅                               |
| Safari                         | ✅                                | ✅                               | ✅                               | ✅                               |

### Mobile
| Mobile                       | Highest                          | High                             | Medium                           | Low                              |
|------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| Android sdk       | ✅                                | ✅                               | ✅                               | ✅                               |
| Chrome (Android)            | --                                | --                               | --                               | ✅                               |
| iOS (native)       | ✅                                | ✅                               | ✅                               | ✅                               |
| Safari                       | ✅                                | ✅                               | ✅                               | ✅                               |

## Screen Record blocking
This guide explains how DRM (Digital Rights Management) prevents recording videos on different devices. DRM's effectiveness in blocking video recording isn't guaranteed, as it relies on your browser's Content Decryption Module (CDM), which can change with different versions

### Desktop

| Desktop HTML5 Browsers       | Highest                          | High                             | Medium                           | Low                              |
|------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| Chrome                       | N/A                              | N/A                              | N/A                                | ✓                                |
| Edge (MacOS)                 | N/A                              | N/A                              | ---                              | ---                              |
| Edge (Windows)               | N/A                              | N/A                              | N/A                                | --                                |
| Firefox                      | N/A                              | N/A                              | ---                              | ---                              |
| Safari                       | ✓                                | ✓                                | ✓                                | ✓                                |

:::important

**Note**: For screen sharing prevention in Widevine, the device must have HDCP capability in hardware, and recording apps must adhere to HDCP regulations. Apps like Zoom and Google Meet don't allow recording of HDCP content. Capturing HDCP content this way could breach copyright laws.

:::
### Mobile

| Mobile Native                | Highest                          | High                             | Medium                           | Low                              |
|------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| Android                      | N/A                              | N/A                              | N/A                              | ---                              |
| iOS                            | ✓                                | ✓                                | ✓                                | ✓                                |

| Browser                      | Highest                          | High                             | Medium                           | Low                              |
|------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| Chrome (iOS)                 | ✓                                | ✓                                | ✓                                | ✓                                |
| Chrome (Android)                 | N/A                               | N/A                              | N/A                                | ---                                |
| Edge (Android)               | N/A                              | N/A                              | N/A                              | ---                              |
| Edge (iOS)                   | ✓                                | ✓                                | ✓                                | ✓                                |
| Firefox (Android)            | N/A                              | N/A                              | N/A                              | ---                              |
| Firefox (iOS)                | ✓                                | ✓                                | ✓                                | ✓                                |
| Safari (iOS)                | ✓                                | ✓                                | ✓                                | ✓                                |


## Preventing Screen Capture:

### 1. In Apps:
   - **Android Apps:**
     - We can prevent the screen capture in andriod app using our [Andriod SDK](../category/android-native-sdk) 
   - **iOS Apps and Safari:**
     - Screen capture can be prevented in Native Flutter or Native App with our [IOS SDK](../category/ios-native-sdk)


### 2. Browsers:
   - **Mac Desktop/Laptop/Iphone:**
     - Screen capture prevention in Safari possible with Fairplay DRM.
   - **Windows, Linux, Mobiles:**
     -  There's no way to completely block screen recording on desktop browsers like Chrome or Firefox because they only support Level 3 (L3) of Widevine DRM.  to know more about you can find [here](./widevine-specs.md)

## Extra Protection:
   - **Adding Watermarks:**

      - We offer watermarks to mark your content as protected.
      you can find more information about [here](../video-embedding/watermarking.md)  
