---
sidebar_position: 6
---

# Delete Live Stream API

To delete an individual live stream in the organization, send an HTTP DELETE request to the API Endpoint , with the [authentication Header](../server-api/authentication.md). This API supports the deletion of both live and scheduled live streams. 


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/
```
For a successful request, status 204 is returned.

:::important
 If the streaming live stream or a live stream with an active server is deleted, it will result in stopping the server.
:::
