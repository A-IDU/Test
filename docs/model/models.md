---
description: "Three sizes, one API. Switch with a single parameter."
---

# Models and context

| Model      | Best for                                         | Context   |
| ---------- | ------------------------------------------------ | --------- |
| **x-Lite** | Classification, extraction, and high-volume chat | 256K      |
| **x-Core** | The balanced default for assistants and RAG      | 1M        |
| **x-Max**  | Deep reasoning for research, code, and analysis  | 1M        |

## 1M-token context

Load entire codebases, contract sets, or a year of support tickets in one request — with near-perfect recall across the whole window.

## Switching models

Change the `model` parameter; nothing else in your request needs to change.

```python
client.responses.create(model="datumx-2-max", input="...")
```

{% content-ref url="../pricing.md" %}
[pricing.md](../pricing.md)
{% endcontent-ref %}
