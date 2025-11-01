import {
  ChapterStatusTable,
  Table
} from '../../src/components/ApiDocs';
import ApiCodeBlock from '../../src/components/ApiDocs/ApiCodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import '../../src/components/ApiDocs/newStyle.css';

# Video Chapters API

The **Video Chapters API** allows you to **add, retrieve, and delete chapter markers** for video assets.
Chapters improve video navigation by enabling timestamp-based sections.

**Authentication:** All requests require the [Authorization Header](../server-api/authentication.md).

---

## 1. Add Video Chapters

Create one or more chapters for an existing video asset.

### Endpoint
<div className="shadow--lw ">

```bash title="POST"
 /api/v1/{organization_id}/assets/{asset_id}/chapters/
```
</div>

### Request Body

<Tabs>
  <TabItem value="json" label="Example JSON">
    <CodeBlock language="json">
{`{
  "chapters": [
    { "title": "Intro", "start_time": "00:00:02" },
    { "title": "Overview", "start_time": "00:01:30" }
  ]
}`}
    </CodeBlock>
  </TabItem>

  <TabItem value="table" label="Parameters">
    <Table
      columns={[
        { key: 'field', header: 'Field' },
        { key: 'type', header: 'Type' },
        { key: 'description', header: 'Description' },
        { key: 'required', header: 'Required' },
      ]}
      data={[
        { field: 'chapters', type: 'array', description: 'List of chapter objects', required: 'Yes' },
        { field: 'title', type: 'string', description: 'Chapter title', required: 'Yes' },
        { field: 'start_time', type: 'string', description: 'Start time (HH:MM:SS)', required: 'Yes' },
      ]}
    />
  </TabItem>
</Tabs>

### Example Request

<ApiCodeBlock
method="POST"
url="https://app.tpstreams.com/api/v1/{organization_id}/assets/{asset_id}/chapters/"
body={{
chapters: [
{ title: "Intro", start_time: "00:00:02" },
{ title: "Overview", start_time: "00:01:30" }
]
}}
titlePrefix="Create Chapter"
/>

### Sample Response

```json title="HTTP 201 Created"
{
  "chapters": [
    { "id": 6431, "title": "Intro", "start_time": "0:00:02" },
    { "id": 6432, "title": "Overview", "start_time": "0:01:30" }
  ]
}
```

### Status Codes

<ChapterStatusTable type="create" />

---

## 2. View Video Chapters

Retrieve all chapter markers for a given video asset.

### Endpoint

```bash title="GET"
 /api/v1/{organization_id}/assets/{asset_id}/chapters/
```

### Example Request

<ApiCodeBlock
method="GET"
url="https://app.tpstreams.com/api/v1/{organization_id}/assets/{asset_id}/chapters/"
titlePrefix="View Chapters"
/>

### Sample Response

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    { "id": 6429, "title": "Intro", "start_time": "0:00:02" },
    { "id": 6430, "title": "Overview", "start_time": "0:01:30" }
  ]
}
```

### Status Codes

<ChapterStatusTable type="list" />

---

## 3. Delete a Video Chapter

Remove a specific chapter from a video asset.

### Endpoint

```bash title="DELETE"
 /api/v1/{organization_id}/assets/{asset_id}/chapters/{chapter_id}/
```

### Example Request

<ApiCodeBlock
method="DELETE"
url="https://app.tpstreams.com/api/v1/{organization_id}/assets/{asset_id}/chapters/{chapter_id}/"
titlePrefix="Delete Chapter"
/>

### Status Codes

<ChapterStatusTable type="delete" />

