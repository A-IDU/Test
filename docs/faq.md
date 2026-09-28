---
description: Questions, answered.
---

# FAQ

<details>

<summary>What makes DATUMx different from other LLMs?</summary>

DATUMx is trained and evaluated around grounding. In grounded mode every factual claim is tied to a source you provided, and the model abstains rather than guessing when the evidence isn't there.

</details>

<details>

<summary>Do you train on my data?</summary>

No. API inputs and outputs are never used to train our models. Data is retained for 30 days for abuse monitoring by default, and zero-retention is available on enterprise plans.

</details>

<details>

<summary>Can I migrate from another provider?</summary>

Yes. DATUMx exposes an OpenAI-compatible endpoint, so most apps switch by changing the base URL and model name. Our migration guide covers prompts, tools, and streaming.

</details>

<details>

<summary>Which data sources can I connect?</summary>

S3, GCS, Azure Blob, Postgres, Snowflake, BigQuery, Google Drive, SharePoint, Notion, and any HTTP API. Files are indexed automatically and kept in sync. See [Connecting data sources](getting-started/data-sources.md).

</details>

<details>

<summary>Is there a free tier?</summary>

Every new account gets $10 in credits with no card required, plus free access to x-Lite in the playground.

</details>
