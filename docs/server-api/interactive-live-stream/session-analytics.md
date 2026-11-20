---
sidebar_position: 7
slug: /server-api/live-stream-api/interactive-live-stream/session-analytics
---

# Session analytics

Session analytics show who attended an interactive live stream, how long they watched, and how engaged the session was. They are available while the session is live and after it ends.

To get the analytics, send an HTTP GET request to the API endpoint with the [authentication header](../authentication.md).

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/live_stream/analytics/
```

**Query parameters**

| Name               | Type    | Description | Required |
| ------------------ | ------- | ----------- | -------- |
| participants_limit | integer | Number of participants to return, from `0` to `1000`. Defaults to `100`. | No |

For example, to get up to 500 participants:

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/live_stream/analytics/?participants_limit=500
```

### Response

For valid requests the API server returns `200 OK`:

```json
{
    "started_at": "2026-11-05T10:00:00.000Z",
    "ended_at": "2026-11-05T11:02:00.000Z",
    "total_viewers": 412,
    "peak_concurrent_viewers": 380,
    "current_viewers": 0,
    "chat_messages_count": 1250,
    "host_messages_count": 40,
    "polls_count": 3,
    "viewers_over_time": [
        {
            "start": "2026-11-05T10:00:00.000Z",
            "end": "2026-11-05T10:01:00.000Z",
            "viewers": 120
        }
    ],
    "participants": [
        {
            "user_id": "student-1024",
            "name": "Priya Sharma",
            "email": "priya@example.com",
            "watch_time_minutes": 58,
            "first_seen_at": "2026-11-05T10:01:12.000Z",
            "last_seen_at": "2026-11-05T11:00:40.000Z"
        }
    ]
}
```

All times are in UTC.

| Field | Description |
| ----- | ----------- |
| started_at | When the session went live. |
| ended_at | When the session ended. `null` while the session is live. |
| total_viewers | Number of unique users who watched the session. |
| peak_concurrent_viewers | Highest number of users watching at the same time. |
| current_viewers | Number of users watching right now. `0` after the session ends. |
| chat_messages_count | Number of chat messages sent by everyone, including hosts. |
| host_messages_count | Number of chat messages sent by hosts. |
| polls_count | Number of polls conducted. |
| viewers_over_time | Number of users watching in each minute of the session, in time order. |
| participants | Users who watched the session, sorted by watch time, highest first. Up to `participants_limit` users. |

Each participant has these fields:

| Field | Description |
| ----- | ----------- |
| user_id | The `user_id` you passed when [generating the user's access token](access-tokens-and-embedding). Use it to match participants to users in your system. |
| name | The user's display name. |
| email | The user's email address, or `null` if it was not provided. |
| watch_time_minutes | Number of minutes the user was actively watching. |
| first_seen_at | When the user first started watching. |
| last_seen_at | When the user was last seen watching. |

### Limitations

- Exact join and leave times are not available. For each participant you get only the first and last time they were seen, and the total minutes they were watching. A user who left and came back shows a single span from `first_seen_at` to `last_seen_at`, and `watch_time_minutes` counts only the minutes they were watching.
- At most 1000 participants are returned, and the list is not paginated.

### Errors

| Status code | Reason |
| ----------- | ------ |
| 400 Bad Request | The live stream is not interactive, or `participants_limit` is not a number from `0` to `1000`. |
| 404 Not Found | No live stream exists with this asset id. |
| 409 Conflict | The live stream has not started yet. |
| 502 Bad Gateway | The analytics could not be fetched. Retry the request. |
