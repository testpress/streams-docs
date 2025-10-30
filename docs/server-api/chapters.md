# Video Chapters

Video chapters allow you to define timestamped sections within a video, helping viewers navigate key moments more easily.
Each chapter includes a title and a start time. Chapters can be **created**, **retrieved**, or **deleted** using the following API endpoints.

---

### Add Video Chapters

To create chapters for an existing video asset, send an HTTP **POST** request to the endpoint below along with the [authentication header](../server-api/authentication.md).

**Endpoint**

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/
```

**Fields**

| Name                    | Type   | Description                                                                                                     | Required |
| ----------------------- | ------ | --------------------------------------------------------------------------------------------------------------- | -------- |
| `chapters`              | array  | A list of chapter objects to be created. Each must contain a title and a valid start time in `HH:MM:SS` format. | Yes      |
| `chapters[].title`      | string | The title of the chapter.                                                                                       | Yes      |
| `chapters[].start_time` | string | Timestamp in `HH:MM:SS` format indicating when the chapter starts. Must not exceed the total video duration.    | Yes      |

**Sample Request Body**

```json
{
  "chapters": [
    {
      "title": "Intro",
      "start_time": "00:00:02"
    },
    {
      "title": "Overview",
      "start_time": "00:01:30"
    }
  ]
}
```

**Sample Response**

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 6427,
      "title": "Intro",
      "start_time": "00:00:02"
    },
    {
      "id": 6428,
      "title": "Overview",
      "start_time": "00:01:30"
    }
  ]
}
```

---

### View Video Chapters

To retrieve all chapters associated with a specific video asset, send an HTTP **GET** request to the endpoint below along with the [authentication header](../server-api/authentication.md).

**Endpoint**

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/
```

**Sample Response**

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 6427,
      "title": "Intro",
      "start_time": "00:00:02"
    },
    {
      "id": 6428,
      "title": "Overview",
      "start_time": "00:01:30"
    }
  ]
}
```

---

### Delete a Video Chapter

To delete a specific chapter from a video asset, send an HTTP **DELETE** request to the endpoint below along with the [authentication header](../server-api/authentication.md).

**Endpoint**

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/<asset_id>/chapters/<chapter_id>/
```

**Response**

* **Status Code:** `204 No Content`
* **Body:** Empty (no JSON response is returned)
