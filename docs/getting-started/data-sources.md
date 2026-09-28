---
description: Point DATUMx at the data you want answers grounded in.
---

# Connecting data sources

Pass one or more source URIs in the `sources` parameter. DATUMx indexes the files automatically and keeps them in sync.

## Supported sources

| Category        | Sources                                          |
| --------------- | ------------------------------------------------ |
| Object storage  | Amazon S3, Google Cloud Storage, Azure Blob      |
| Databases       | Postgres, Snowflake, BigQuery                    |
| Workspace tools | Google Drive, SharePoint, Notion                 |
| Anything else   | Any HTTP API                                     |

## Example

```python
answer = client.responses.create(
    model="datumx-2-core",
    sources=[
        "s3://acme/finance/",
        "notion://workspace/product-reviews",
    ],
    input="What drove the change in churn last quarter?",
)
```

{% hint style="info" %}
Citations point back to the exact file and location — a spreadsheet sheet and cell, or a PDF page — so reviewers can verify every claim.
{% endhint %}
