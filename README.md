# DATUMx — Landing Page

A responsive, dependency-free landing page for **DATUMx**, a grounded large language model.

## Run locally

It's plain HTML/CSS/JS — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page markup: hero with live demo console, features, benchmarks, API snippet, pricing, FAQ, signup CTA |
| `styles.css` | Design tokens, layout, and responsive breakpoints (980px, 640px) |
| `script.js` | Typed demo response, scroll reveals, code tabs + copy, mobile menu, email form validation |
| `assets/favicon.svg` | Logo mark |

## Notes

- Benchmark figures, prices, customer logos, and stats are **placeholders** — replace them with real numbers before launch.
- The signup form validates client-side only; wire it to your backend or email provider.
- Respects `prefers-reduced-motion`.
