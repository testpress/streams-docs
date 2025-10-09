---
sidebar_position: 1
---

# Getting Started with TPStorage

TPStorage is an **S3-compatible object storage** service. You can access and manage your storage using your **Access Key** and **Secret Key**, similar to Amazon S3.

## Installation

Make sure `boto3` is installed:

```bash
pip install boto3
```

## Configuration

Use the following sample code to connect to TPStorage:

```python
import boto3

# Initialize the TPStorage client
tpstorage = boto3.client(
    's3',
    endpoint_url='https://storage1.tpstreams.com',  # TPStorage endpoint
    aws_access_key_id='YOUR_ACCESS_KEY',            # Replace with your Access Key
    aws_secret_access_key='YOUR_SECRET_KEY',        # Replace with your Secret Key
    region_name='us-east-1',                        # Required by boto3, ignored by TPStorage
    config=boto3.session.Config(signature_version='s3v4')
)

# Example: List all buckets
response = tpstorage.list_buckets()
for bucket in response.get('Buckets', []):
    print(bucket['Name'])
```

## Basic Operations

### Uploading a File

```python
tpstorage.upload_file('local_file.txt', 'my-bucket', 'remote_file.txt')
```

### Generating a Temporary Download URL

```python
url = tpstorage.generate_presigned_url(
    'get_object',
    Params={'Bucket': 'my-bucket', 'Key': 'remote_file.txt'},
    ExpiresIn=3600  # Link valid for 1 hour
)
print("Download URL:", url)
```

## Access Details

| Setting | Value |
|----|----|
| **Endpoint URL** | `https://storage1.tpstreams.com` |
| **Access Key** | `<provided-to-you>` |
| **Secret Key** | `<provided-to-you>` |
| **Compatibility** | S3 API (boto3, AWS SDKs, rclone, etc.) |
| **Region** | `us-east-1` (placeholder, not used by TPStorage) |

