---
sidebar_position: 4
---

# Cancel Transcoding Job 

To cancel a transcoding job, you need to send an HTTP DELETE request to the API Endpoint , with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/transcoding_jobs/<job_id>/
```


**Response**

Upon a successful cancellation request, the API will respond with a message confirming the cancellation. Here is an example of the response you might receive:

```json
{
    "message": "Job cancelled successfully."
}
```
In case the job has already been completed, the API will respond with a message indicating that the job is already done:

```json
{
    "message": "Job is already completed."
}
```
:::important
 You can only cancel transcoding jobs that are not in a completed status.
:::