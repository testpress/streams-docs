---
sidebar_position: 4
---

# Folders

## Create a folder

To create a folder, you need to send an HTTP POST request to the API Endpoint, along with the  [authentication Header](../server-api/authentication.md).


```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/folders/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| title            | string       | The name of the folder |      Yes    |
| parent           | string       | The UUID of the parent folder, if you want to create the folder as a child        | No        |


**Sample request body**

```json 
{
  "title": "CAT videos",
  "parent": "32seYYHeNxE"
}

```

For valid requests the API server returns a JSON:

```json
{
 "title": "CAT videos",
 "uuid": "46seZZHAnWE", // folder id
}

```