---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Direct Video Upload

- An upload session provides a secure, direct-to-storage mechanism for uploading video files from your server to TP Streams. This method allows you to generate a temporary upload link and credentials to securely upload your videos.

## 1. Create an Upload Session

To create an upload session, send an HTTP POST request to the API Endpoint, with the [authentication Header](../server-api/authentication.md).

```bash
https://app.tpstreams.com/api/v1/<organization_id>/assets/upload-sessions/
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| content_protection_type    | string      |  To ensure the security of your video content, you can choose from available protection types: 'drm', 'aes' encryption, or indicate 'disable' for no specific protection. Each option offers varying levels of security for your content.       | No |
| title            | string      |  Specify a text string or identifier which can be used for filtering or searching the asset.| Yes |
| resolutions      | array         | Required resolutions of the transformed asset in case of HLS or MPEG-DASH delivery format. Can be a comma separated string out of the following values: 240p, 360p, 480p, 540p, 720p, and 1080p. Re-sized rendition will retain the input aspect ratio. | Yes |
| folder | string | The UUID of the folder, if you want to upload the video into that specific folder | No |
| generate_subtitle | boolean | Enable automatic generation of subtitles for the video after upload. Defaults to false if not specified. | No |

**Sample request body**

```json 
{
  "title": "Big Buck Bunny Video",
  "resolutions": ["240p", "360p", "480p", "720p"],
  "content_protection_type": "drm",
  "folder": "32seYYHeNxE",
  "generate_subtitle": true
}
```

For valid requests the API server returns a JSON response containing the asset information, session details, and a `client_payload` object:

```json
{
    "asset": {
        "id": "9328558d-e0a5-4093-b3b9-8f15ad1550d8",
        "title": "Big Buck Bunny Video",
        "bytes": null,
        "type": "video",
        "parent_id": "32seYYHeNxE",
        "video": {
            "status": "Not Started"
        }
    },
    "upload_session": {
        "uuid": "e98df89a-1122-4a01-9876-1234abcd5678",
        "max_file_size_bytes": 5368709120,
        "expires_at": "2026-07-21T18:03:16.000000Z",
        "status": "Created"
    },
    "client_payload": {
        "upload_link": "https://s3.amazonaws.com/tpstreams-bucket",
        "key": "private/server-uploads/9328558d-e0a5-4093-b3b9-8f15ad1550d8",
        "AWSAccessKeyId": "AKIAIOSFODNN7EXAMPLE",
        "policy": "eyJleHBpcmF0aW9uIjoiMjAy...",
        "signature": "vSdt2134k..."
    }
}
```

## 2. Upload the Video File

Using the `client_payload` from the previous step, upload your video via a **multipart form-data** POST request to the `upload_link`. 

Include all `client_payload` fields in your request, and ensure the actual video `file` is added **last**.

:::important
The `file` parameter **must** be the last field in your multipart request.
:::

**Complete Example:**

<Tabs>
<TabItem value="curl" label="cURL">

```bash
# 1. Create the Upload Session
curl -X POST https://app.tpstreams.com/api/v1/<organization_id>/assets/upload-sessions/ \
  -H "Authorization: token <your_token>" \
  -H "Content-Type: application/json" \
  -d '{"title": "Big Buck Bunny Video", "resolutions": ["240p", "720p"]}'

# 2. Extract the payload from the response above and upload the file
curl -X POST https://s3.amazonaws.com/tpstreams-bucket \
  -F "key=private/server-uploads/9328558d-e0a5-4093-b3b9-8f15ad1550d8" \
  -F "AWSAccessKeyId=AKIAIOSFODNN7EXAMPLE" \
  -F "policy=eyJleHBpcmF0aW9uIjoiMjAy..." \
  -F "signature=vSdt2134k..." \
  -F "file=@/path/to/your/video.mp4"
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

# 1. Create the Upload Session
session_url = "https://app.tpstreams.com/api/v1/<organization_id>/assets/upload-sessions/"
headers = {
    "Authorization": "token <your_token>",
    "Content-Type": "application/json"
}
data = {
    "title": "Big Buck Bunny Video",
    "resolutions": ["240p", "720p"]
}
response = requests.post(session_url, headers=headers, json=data)
response.raise_for_status()
client_payload = response.json()["client_payload"]

# 2. Upload the Video File
upload_url = client_payload.pop("upload_link")

with open("/path/to/your/video.mp4", "rb") as video_file:
    files = {"file": video_file}
    upload_response = requests.post(upload_url, data=client_payload, files=files)

upload_response.raise_for_status()
print("Upload successful!")
```

</TabItem>
<TabItem value="rb" label="Ruby">

```rb
require 'uri'
require 'net/http'
require 'json'
require 'net/http/post/multipart'

# 1. Create the Upload Session
session_url = URI("https://app.tpstreams.com/api/v1/<organization_id>/assets/upload-sessions/")
http = Net::HTTP.new(session_url.host, session_url.port)
http.use_ssl = true

req = Net::HTTP::Post.new(session_url)
req["Authorization"] = "token <your_token>"
req["Content-Type"] = "application/json"
req.body = {
  title: "Big Buck Bunny Video",
  resolutions: ["240p", "720p"]
}.to_json

response = http.request(req)
client_payload = JSON.parse(response.read_body)["client_payload"]

# 2. Upload the Video File
upload_url = URI(client_payload.delete("upload_link"))
File.open("/path/to/your/video.mp4") do |video_file|
  client_payload["file"] = UploadIO.new(video_file, "video/mp4", "video.mp4")
  
  multipart_req = Net::HTTP::Post::Multipart.new(upload_url.path, client_payload)
  
  res = Net::HTTP.start(upload_url.host, upload_url.port, use_ssl: true) do |multipart_http|
    multipart_http.request(multipart_req)
  end
  puts "Upload status: #{res.code}"
end
```

</TabItem>
<TabItem value="cs" label="C#">

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.IO;
using System.Threading.Tasks;
using System.Text.Json;

class Program {
    static async Task Main() {
        using var client = new HttpClient();
        
        // 1. Create the Upload Session
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("token", "<your_token>");
        var requestBody = new StringContent(
            "{\"title\": \"Big Buck Bunny Video\", \"resolutions\": [\"240p\", \"720p\"]}",
            System.Text.Encoding.UTF8,
            "application/json"
        );
        
        var response = await client.PostAsync("https://app.tpstreams.com/api/v1/<organization_id>/assets/upload-sessions/", requestBody);
        var responseString = await response.Content.ReadAsStringAsync();
        
        using var jsonDoc = JsonDocument.Parse(responseString);
        var clientPayload = jsonDoc.RootElement.GetProperty("client_payload");
        string uploadLink = clientPayload.GetProperty("upload_link").GetString();
        
        // 2. Upload the Video File
        using var content = new MultipartFormDataContent();
        
        foreach (var property in clientPayload.EnumerateObject()) {
            if (property.Name != "upload_link") {
                content.Add(new StringContent(property.Value.GetString()), property.Name);
            }
        }
        
        var fileContent = new StreamContent(File.OpenRead("/path/to/your/video.mp4"));
        content.Add(fileContent, "file", "video.mp4");
        
        var uploadResponse = await client.PostAsync(uploadLink, content);
        Console.WriteLine($"Upload Status: {uploadResponse.StatusCode}");
    }
}
```

</TabItem>
</Tabs>
