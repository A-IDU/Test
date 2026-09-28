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
| `.gitbook.yaml` | GitBook Git Sync config — points GitBook at `docs/` |
| `docs/` | GitBook space: `README.md` (home), `SUMMARY.md` (sidebar), and content pages |

## GitBook sync

The `docs/` folder is a GitBook space built from the landing page content. GitBook only syncs Markdown, so the HTML page and the docs live side by side, and `.gitbook.yaml` keeps GitBook out of the repo root.

To connect it:

1. In GitBook, create a space (or open an existing one).
2. Open the space menu → **Configure** → **GitHub Sync**, and install/authorize the GitBook GitHub app for this repository.
3. Select this repository and the branch to sync.
4. For the initial sync direction, choose **GitHub → GitBook** so the pages in `docs/` are imported.

After that, edits sync both ways: commits to `docs/` show up in GitBook, and edits in GitBook are committed back to the branch. To add a page, create a Markdown file under `docs/` and link it from `docs/SUMMARY.md`. Upload `docs/.gitbook/assets/datumx-logo.svg` as the space logo under **Customize**.

## Notes

- Benchmark figures, prices, customer logos, and stats are **placeholders** — replace them with real numbers before launch.
- The signup form validates client-side only; wire it to your backend or email provider.
- Respects `prefers-reduced-motion`.
