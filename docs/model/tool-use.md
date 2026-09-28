---
description: "Structured outputs, parallel function calls, and resilient agents."
---

# Tool use

* **Structured outputs** that always match your JSON schema.
* **Parallel function calls** in a single turn.
* **Agent loops** that recover gracefully from tool errors.

## Structured output example

```python
answer = client.responses.create(
    model="datumx-2-core",
    input="Extract the invoice total and due date.",
    response_format={
        "type": "json_schema",
        "schema": {
            "type": "object",
            "properties": {
                "total": {"type": "number"},
                "due_date": {"type": "string", "format": "date"},
            },
            "required": ["total", "due_date"],
        },
    },
)
```
