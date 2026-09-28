---
description: From key to production in five lines.
---

# Quickstart

A clean REST API with official SDKs for Python, TypeScript, Go, and Java. Streaming, batching, and fine-tuning are built in — no extra services to stitch together.

## 1. Get an API key

Sign up with your work email to get an API key and $10 in free credits. Then export it:

```bash
export DATUMX_API_KEY="your-key-here"
```

{% hint style="warning" %}
Keep your key secret. Never commit it to source control or ship it in client-side code.
{% endhint %}

## 2. Install an SDK

{% tabs %}
{% tab title="Python" %}
```bash
pip install datumx
```
{% endtab %}

{% tab title="TypeScript" %}
```bash
npm install datumx
```
{% endtab %}
{% endtabs %}

## 3. Ask a grounded question

{% tabs %}
{% tab title="Python" %}
{% code title="main.py" %}
```python
from datumx import Datumx

client = Datumx()

answer = client.responses.create(
    model="datumx-2-core",
    sources=["s3://acme/finance/"],
    input="What was our Q3 churn rate?",
)
print(answer.text, answer.citations)
```
{% endcode %}
{% endtab %}

{% tab title="TypeScript" %}
{% code title="main.ts" %}
```typescript
import Datumx from "datumx";

const client = new Datumx();

const answer = await client.responses.create({
  model: "datumx-2-core",
  sources: ["s3://acme/finance/"],
  input: "What was our Q3 churn rate?",
});
console.log(answer.text, answer.citations);
```
{% endcode %}
{% endtab %}

{% tab title="cURL" %}
```bash
curl https://api.datumx.ai/v2/responses \
  -H "Authorization: Bearer $DATUMX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "datumx-2-core",
    "sources": ["s3://acme/finance/"],
    "input": "What was our Q3 churn rate?"
  }'
```
{% endtab %}
{% endtabs %}

## What's included

* OpenAI-compatible endpoint for easy migration
* Streaming responses with token-level citations
* Batch API at 50% off for offline workloads
* Usage dashboards, rate-limit headers, and audit logs

{% content-ref url="data-sources.md" %}
[data-sources.md](data-sources.md)
{% endcontent-ref %}
