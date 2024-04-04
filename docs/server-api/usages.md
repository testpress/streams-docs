---
sidebar_position: 8
---

# Usages
The Usage API helps you get your organization usage's.

## Get Your Organization's Usage
To retrieve your organization's data usage, send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

**Endpoint**
```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets_usage/
```

**Query Parameter **

The Usage API provides various options to filter data using query parameters:

| Parameter   | Description             | Type            |
|-------------|-------------------------|-----------------|
| month       | Filter by month         | Integer         |
| year        | Filter by year          | Integer         |
| day         | Filter by day           | Integer         |
| time_frame  | Filter by timeframe     | String ("daily" or "monthly") |
| start       | Start date              | Date (YYYY-MM-DD) |
| end         | End date                | Date (YYYY-MM-DD) |
| ordering    | Order results           | String          |

**Response**
```json
{
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 5385,
            "date": "2023-04-01",
            "bandwidth_used": 245540965,
            "subtitle_generation_cost": 0,
            "live_stream_usage": 0,
            "active_storage_bytes": 1198712474,
            "deleted_storage_bytes": 41007799,
            "total_storage_bytes": 1239720273
        },
        {
            "id": 5253,
            "date": "2023-05-01",
            "bandwidth_used": 2484764822,
            "subtitle_generation_cost": 0,
            "live_stream_usage": 0,
            "active_storage_bytes": 10651243573,
            "deleted_storage_bytes": 1043743829,
            "total_storage_bytes": 11694987402
        },
        {
            "id": 5178,
            "date": "2023-06-01",
            "bandwidth_used": 27907667,
            "subtitle_generation_cost": 0,
            "live_stream_usage": 0,
            "active_storage_bytes": 10891400407,
            "deleted_storage_bytes": 1043973205,
            "total_storage_bytes": 11935373612
        }
    ]
}

```