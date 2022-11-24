---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

You need authentication token to access Streams data and resources through the API

## Generate authentication token

Make Post request to the below link with the credentials to generate an authentication token.


**POST https://tpstreams.com/api/auth/login/ **

| Name        | Type        | Description |
| ----------- | ----------- |----------- |
| username    | string      | Username of the user |
| password    | string      | Password of the user |


### Sample code

<Tabs>
<TabItem value="py" label="Python">

```py
import requests

url = "https://tpstreams.com/api/auth/login/"

payload = "{\n    \"username\": \"hari\",\n    \"password\": \"welcome\"\n}"
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

url = URI("https://tpstreams.com/api/auth/login/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["cache-control"] = 'no-cache'
request.body = "{\n    \"username\": \"hari\",\n    \"password\": \"welcome\"\n}"

response = http.request(request)
puts response.read_body

```

</TabItem>

<TabItem value="php" label="php">

```php

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://tpstreams.com/api/auth/login/',
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "username": "<type_your_username_here>",
    "password": "<type_your_password_here>"
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

The response will return an token which should be prefixed with token and included in all API requests to the server in a header that looks like the following:

```bash
Authorization: token auth-token-string
```