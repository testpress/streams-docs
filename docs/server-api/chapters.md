---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Chapters

Manage video chapters to enable navigation within your video content.

## Add Video Chapters

To create chapters for an existing video asset, send an HTTP **POST** request to the API endpoint with the [authentication header](./authentication.md).

### Endpoint

```
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/
```


### Request Fields

| Field      | Type                   | Description                 | Required |
| ---------- | ---------------------- | --------------------------- | -------- |
| `chapters` | `array<ChapterObject>` | List of chapter definitions | Yes      |

#### ChapterObject Schema

| Field        | Type   | Description                                    | Required |
| ------------ | ------ | ---------------------------------------------- | -------- |
| `title`      | string | Title of the chapter                           | Yes      |
| `start_time` | string | `HH:MM:SS` timestamp within the video duration | Yes      |


### Examples

<Tabs>
  <TabItem value="curl" label="cURL" default>

```bash
curl -X POST \
"https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/" \
-H "Authorization: token <API_TOKEN>" \
-H "Content-Type: application/json" \
-d '{
  "chapters": [
    {"title": "Intro", "start_time": "00:00:02"},
    {"title": "Overview", "start_time": "00:01:30"}
  ]
}'
```

  </TabItem>

  <TabItem value="python" label="Python">

```python
import requests

url = "https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/"
headers = {"Authorization": "token <API_TOKEN>"}
data = {
  "chapters": [
    {"title": "Intro", "start_time": "00:00:02"},
    {"title": "Overview", "start_time": "00:01:30"}
  ]
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

  </TabItem>
</Tabs>

### Sample Response

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {"id": 6427, "title": "Intro", "start_time": "00:00:02"},
    {"id": 6428, "title": "Overview", "start_time": "00:01:30"}
  ]
}
```

---

## View Video Chapters

To retrieve chapters for a specific video asset, send an HTTP **GET** request to the API endpoint with the [authentication header](./authentication.md).

### Endpoint

```
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/
```

### Examples

<Tabs>
  <TabItem value="curl" label="cURL" default>

```bash
curl -X GET \
"https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/" \
-H "Authorization: token <API_TOKEN>"
```

  </TabItem>

  <TabItem value="python" label="Python">

```python
import requests

url = "https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/"
headers = {"Authorization": "token <API_TOKEN>"}

response = requests.get(url, headers=headers)
print(response.json())
```

  </TabItem>
</Tabs>

### Sample Response

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {"id": 6427, "title": "Intro", "start_time": "00:00:02"},
    {"id": 6428, "title": "Overview", "start_time": "00:01:30"}
  ]
}
```

---

## Delete a Video Chapter

To delete a specific chapter from a video asset, send an HTTP **DELETE** request to the API endpoint with the [authentication header](./authentication.md).

### Endpoint

```
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/<chapter_id>/
```

### Examples

<Tabs>
  <TabItem value="curl" label="cURL" default>

```bash
curl -X DELETE \
"https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/<chapter_id>/" \
-H "Authorization: token <API_TOKEN>"
```

  </TabItem>

  <TabItem value="python" label="Python">

```python
import requests

url = "https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/<chapter_id>/"
headers = {"Authorization": "token <API_TOKEN>"}

response = requests.delete(url, headers=headers)
print(response.status_code)  # Should print 204
```

  </TabItem>
</Tabs>

### Success Response

```
Status: 204 No Content
```

---

## Status Codes

| Status Code                 | Description                       |
| --------------------------- | --------------------------------- |
| `200 OK`                    | Chapters retrieved successfully   |
| `201 Created`               | Chapters created successfully     |
| `204 No Content`            | Chapter deleted successfully      |
| `400 Bad Request`           | Invalid data or timestamp format  |
| `401 Unauthorized`          | Missing or invalid authentication |
| `404 Not Found`             | Asset or chapter does not exist   |
| `500 Internal Server Error` | Unexpected server issue           |

