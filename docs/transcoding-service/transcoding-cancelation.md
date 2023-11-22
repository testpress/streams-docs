---
sidebar_position: 4
---

# Cancel Transcoding Job 

To cancel a transcoding job, you need to send an HTTP DELETE request to the API Endpoint .

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/<job_id>/
```

:::important
 You can only cancel transcoding jobs that are not in a completed status.
:::
