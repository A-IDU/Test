---
description: Every factual claim tied to a source you provided.
---

# Grounded generation

Connect documents, databases, and APIs. DATUMx retrieves, reasons, and returns inline citations down to the page and cell — with a calibrated confidence score on every claim.

## How it works

{% stepper %}
{% step %}
### Retrieve

DATUMx searches the sources attached to the request and pulls the passages relevant to the question.
{% endstep %}

{% step %}
### Reason

The model answers using only the retrieved evidence, tracking which passage supports each claim.
{% endstep %}

{% step %}
### Cite — or abstain

Each claim comes back with a citation and a confidence score. When the evidence isn't there, DATUMx says so instead of guessing.
{% endstep %}
{% endstepper %}

## Coverage

| Metric                 | Value     |
| ---------------------- | --------- |
| Claims with citations  | **98.7%** |

{% hint style="info" %}
Figures on this page are illustrative placeholders.
{% endhint %}
