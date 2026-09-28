---
description: The grounded language model. Every answer, anchored to a source.
cover: .gitbook/assets/datumx-hero.png
coverY: 0
layout:
  cover:
    visible: true
    size: hero
  title:
    visible: true
  description:
    visible: true
---

# Welcome to DATUMx

DATUMx is a large language model built for precision. It reasons over your data, cites what it uses, and says so when it doesn't know — so you can ship AI that people actually trust.

<a href="getting-started/quickstart.md" class="button primary">Start building free</a> <a href="model/grounded-generation.md" class="button secondary">How grounding works</a>

{% hint style="success" %}
**DATUMx 2 is now generally available.** Every new account gets $10 in free credits — no card required.
{% endhint %}

## At a glance

| Context window | Median latency | Languages |
| :------------: | :------------: | :-------: |
| **1M tokens**  | **< 300 ms**   | **100+**  |

## Why DATUMx

A *datum* is the reference every measurement starts from. DATUMx is designed the same way — every capability is tuned around being right, then being fast.

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Grounded generation</strong></td><td>Inline citations down to the page and cell, with a confidence score on every claim.</td><td><a href="model/grounded-generation.md">grounded-generation.md</a></td></tr><tr><td><strong>1M-token context</strong></td><td>Load entire codebases, contract sets, or a year of support tickets in one request.</td><td><a href="model/models.md">models.md</a></td></tr><tr><td><strong>Reliable tool use</strong></td><td>Schema-exact structured outputs, parallel function calls, and resilient agent loops.</td><td><a href="model/tool-use.md">tool-use.md</a></td></tr><tr><td><strong>Private by default</strong></td><td>Never trained on your data. SOC 2 Type II, HIPAA-eligible, regional residency.</td><td><a href="security.md">security.md</a></td></tr><tr><td><strong>Three sizes, one API</strong></td><td>x-Lite, x-Core, and x-Max. Switch with a single parameter.</td><td><a href="pricing.md">pricing.md</a></td></tr><tr><td><strong>Fewer hallucinations</strong></td><td>1.2% hallucination rate on grounded QA with x-Max.</td><td><a href="model/benchmarks.md">benchmarks.md</a></td></tr></tbody></table>

## See it in action

> **You:** What was our Q3 churn rate, and what drove it?
>
> **DATUMx:** Q3 churn was 3.1%, down from 3.8% in Q2 **\[1]**. The biggest driver was annual-plan renewals in the SMB segment, which rose 22% after the onboarding redesign **\[2]**. Enterprise churn was flat **\[1]**.
>
> `[1]` finance/q3-metrics.xlsx · Sheet "Retention"\
> `[2]` product/onboarding-review.pdf · p. 4

{% content-ref url="getting-started/quickstart.md" %}
[quickstart.md](getting-started/quickstart.md)
{% endcontent-ref %}
