---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Organization

## Get all the organizations that belong to the user

you need to send an HTTP GET request to the API Endpoint, with the [authentication Header](../server-api/authentication.md), to list all the  organizations belonging to the user.

```bash
https://app.tpstreams.com/api/v1/organizations/
```

<Tabs>
<TabItem value="URL" label="cURL">

```bash
curl --request GET \
  --url https://app.tpstreams.com/api/v1/organizations/ \
  --header 'authorization: token 378ad87dc80534b75dcb674da1e7a0145b27461c936c4091c17546fdca6baac1' \
  --header 'cache-control: no-cache'
```

</TabItem>
<TabItem value="rb" label="Ruby">

``` rb
require 'uri'
require 'net/http'

url = URI("https://app.tpstreams.com/api/v1/organizations/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["authorization"] = 'token 378ad87dc80534b75dcb674da1e7a0145b27461c936c4091c17546fdca6baac1'
request["cache-control"] = 'no-cache'

response = http.request(request)
puts response.read_body
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

url = "https://app.tpstreams.com/api/v1/organizations/"

headers = {
    'authorization': "token 378ad87dc80534b75dcb674da1e7a0145b27461c936c4091c17546fdca6baac1",
    'cache-control': "no-cache"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)

```


</TabItem>
<TabItem value="c" label="C#">

```c
var client = new RestClient("https://app.tpstreams.com/api/v1/organizations/");
var request = new RestRequest(Method.GET);
request.AddHeader("cache-control", "no-cache");
request.AddHeader("authorization", "token 378ad87dc80534b75dcb674da1e7a0145b27461c936c4091c17546fdca6baac1");
IRestResponse response = client.Execute(request);
```
</TabItem>
</Tabs>

### Response 


**HTTP Status Codes:**

- **200 OK:**
  - Request successful. Server processed the request.

    ```json
        {
            "count": 2,
            "next": null,
            "previous": null,
            "results": [
                {
                    "name": "Testpress",
                    "uuid": "6dnpyx"
                },
                {
                    "name": "Streams",
                    "uuid": "7coqzy"
                }
            ]
        }
    ```

- **401 Unauthorized:**
  - Request lacks valid authentication. Client needs proper credentials.
  
    ```json
    {"detail":"Invalid token."}
    ```
