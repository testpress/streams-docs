---
sidebar_position: 4
---

# Troubleshooting

This guide helps you resolve common issues when using the TPStream Android Player SDK.

## 5xxx Series Error Codes

### 5001 - Invalid Assets ID
**Root Cause:**
- Video asset not found or invalid ID
- Video not part of the initialized Organization ID

**Debug Steps:**
- Ensure the organization ID is correct
- Verify video ID format and encoding
- Check if video exists in TPStream dashboard
- Confirm video is published (not draft)
- Test with known working video ID
- Check regional availability restrictions

### 5002 - Invalid Access Token for Assets
**Root Cause:**
- Authentication/authorization failure

**Debug Steps:**
- Check token expiration timestamp
- Verify token format and encoding
- Test token with direct API calls
- Confirm token has video access permissions
- Generate fresh token and retry

### 5004 - Network Connection Failed
**Root Cause:**
- Network connectivity issues

**Debug Steps:**
- Test internet connectivity with other apps
- Check network speed and stability
- Verify DNS resolution
- Test with different networks (WiFi/mobile)
- Check firewall/proxy configurations

### 5005 - Server Error
**Root Cause:**
- TPStream server-side issues

**Debug Steps:**
- Check TPStream service status page
- Monitor HTTP status codes (5xx range)
- Test with different content/accounts
- Look for error patterns and timing
- Implement retry logic with backoff

### 5100 - Unspecified Error
**Root Cause:**
- Unhandled exceptions or unknown errors

**Debug Steps:**
- Check application logs for stack traces
- Identify error source (ExoPlayer/Network/SDK)
- Test on different devices/Android versions
- Gather device and network information
- Reproduce with minimal setup or test case

## 4xxx Series Error Codes (ExoPlayer Errors)

### 4001 - Decoder Initialization Failed
**Root Cause:**
- Media decoder cannot be initialized
- Device hardware decoder limitations
- Codec compatibility issues

**Debug Steps:**
- Check device hardware decoder support
- Test with software decoder fallback
- Verify video codec compatibility (H.264, H.265, VP9)
- Check device memory and performance
- Test on different Android versions

### 4003 - Decoding Failed
**Root Cause:**
- Video stream corruption or invalid data
- Codec configuration issues
- Hardware decoder errors

**Debug Steps:**
- Try different video resolution/bitrate
- Check video file integrity
- Test with different video formats
- Verify codec settings and parameters
- Test on different devices

### 4004 - IO Unspecified Error
**Root Cause:**
- Unspecified I/O errors during playback
- Live stream disconnection issues
- General ExoPlayer I/O failures

**Debug Steps:**
- Check for live stream connectivity issues
- Verify stream URL accessibility
- Test with different network conditions
- Check for stream format compatibility
- Monitor for intermittent connection problems