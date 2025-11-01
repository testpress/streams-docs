import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

const ApiCodeBlock = ({ method, url, body = null, titlePrefix = '' }) => {
  const curlCommand = body
    ? `curl -X ${method.toUpperCase()} "${url}" \\
-H "Authorization: token {API_TOKEN}" \\
-H "Content-Type: application/json" \\
-d '${JSON.stringify(body)}'`
    : `curl -X ${method.toUpperCase()} "${url}" \\
-H "Authorization: token {API_TOKEN}"`;

  const pythonCode = body
    ? `import requests

url = "${url}"
headers = {"Authorization": "token {API_TOKEN}", "Content-Type": "application/json"}
data = ${JSON.stringify(body, null, 2)}

response = requests.${method.toLowerCase()}(url, json=data, headers=headers)
print(response.json())`
    : `import requests

url = "${url}"
headers = {"Authorization": "token {API_TOKEN}"}

response = requests.${method.toLowerCase()}(url, headers=headers)
print(response.status_code if "${method.toUpperCase()}" === "DELETE" else response.json())`;

  return (
    <Tabs>
      <TabItem value="curl" label="cURL" default>
        <CodeBlock className="language-bash" title={`${titlePrefix} - cURL`}>
          {curlCommand}
        </CodeBlock>
      </TabItem>
      <TabItem value="python" label="Python">
        <CodeBlock className="language-python" title={`${titlePrefix} - Python`}>
          {pythonCode}
        </CodeBlock>
      </TabItem>
    </Tabs>
  );
};

export default ApiCodeBlock;
