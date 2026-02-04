---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

You need authentication token to access Streams data and resources through the API

## Generate authentication token

**Best Practices for Auth Token Management**

* **Reuse Existing Tokens:** Before generating a new token, check if you have an existing, valid token that can be reused.
* **Minimize New Token Generation:** Creating an excessive number of tokens adds unnecessary overhead and can negatively impact the performance of authentication services.
* **Generate Only When Necessary:** Create a new token only when an existing one has expired or is invalid.

Following these practices ensures optimal system performance and reliability for all services.

---

:::important
A **maximum of 20 authentication tokens** can be created per organization.
:::

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
---
## Logout and Delete Authentication Token

Clients can invalidate an existing authentication token using the logout API.  
This operation permanently deletes the token and prevents it from being used for any future API requests.

**Best Practices for Token Revocation**

* **Logout When Done:** Always revoke tokens when they are no longer needed (for example, user logout).
* **Immediate Revocation:** If a token is suspected to be compromised, revoke it immediately.
* **One-Time Action:** Once revoked, the token cannot be reused or recovered.
* **Client Responsibility:** Clients must explicitly call the logout API to invalidate tokens.

Following these practices improves security and prevents unauthorized access.

---

:::important
The logout operation **permanently deletes the token** from the system.  
Any API request made with a revoked token will be rejected.
:::

Make a **POST** request to the following endpoint to revoke an authentication token.

**POST https://app.tpstreams.com/api/auth/logout/**

### Request Headers

| Name            | Type   | Description |
|-----------------|--------|-------------|
| Authorization   | string | Authentication token prefixed with `Token` |

**Example Header**
```bash
Authorization: Token auth-token-string
```
### Sample code

<Tabs>
<TabItem value="py" label="Python">

```py
import requests

url = "https://app.tpstreams.com/api/auth/logout/"

headers = {
    "Authorization": "Token auth-token-string",
}

response = requests.post(url, headers=headers)

print(response.status_code)

```

</TabItem>
<TabItem value="rb" label="Ruby">

```rb
require 'uri'
require 'net/http'

url = URI("https://app.tpstreams.com/api/auth/logout/")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = "Token auth-token-string"

response = http.request(request)
puts response.code


```

</TabItem>

<TabItem value="php" label="PHP">

```php

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://app.tpstreams.com/api/auth/logout/',
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => array(
    'Authorization: Token auth-token-string'
  ),
));
$response = curl_exec($curl);
$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);
echo $http_code;

```

</TabItem>
</Tabs>

### Response

On successful token revocation, the API returns:

```http
204 No Content
```
