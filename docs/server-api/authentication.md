---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

You need authentication token to access Streams data and resources through the API

## Generate authentication token

Make Post request to the below link with the credentials to generate an authentication token.


**POST https://app.tpstreams.com/api/auth/login/ **

| Name               | Type        | Description |
| -----------        | ----------- |----------- |
| username           | string      | Email address of the user |
| password           | string      | Password of the user |
| organization_id    | string      | Organization id |


### Sample code

<Tabs>
<TabItem value="py" label="Python">

```py
import requests

url = "https://app.tpstreams.com/api/auth/login/"

payload = "{\n    \"username\": \"hari@example.com\",\n    \"password\": \"welcome\",\n \"organization_id\": \"auhf2k\"}"
headers = {
    'content-type': "application/json",
    'cache-control': "no-cache",
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

</TabItem>
<TabItem value="rb" label="Ruby">

```rb
re 'uri'
require 'net/http'

url = URI("https://app.tpstreams.com/api/auth/login/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"username\": \"hari@example.com\",\n    \"password\": \"welcome\",\n \"organization_id\": \"auhf2k\"}"

response = http.request(request)
puts response.read_body

```

</TabItem>

<TabItem value="php" label="php">

```php

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://app.tpstreams.com/api/auth/login/',
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "username": "<type_your_emailaddress_here>",
    "password": "<type_your_password_here>",
    "organization_id": "<type_your_organization_id_here>"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

</TabItem>
</Tabs>

### Response

The response will return an token which should be prefixed with Token and included in all API requests to the server in a header that looks like the following:

```bash
Authorization: Token auth-token-string
```
