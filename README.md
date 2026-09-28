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
| `gitbook-docs.yaml` | GitBook site config: maps the **DATUMx Docs** space to `docs/` |
| `docs/` | GitBook space: `README.md` (home), `SUMMARY.md` (sidebar), pages, and `.gitbook/assets/` |

## GitBook sync

`docs/` is a GitBook space built from the landing page content. GitBook syncs Markdown only, so the HTML page stays outside `docs/` and is not imported.

To connect it (site-wide Git Sync):

1. In GitBook, open your site and choose **Git Sync** in the sidebar.
2. Connect GitHub and install the GitBook app on this repository if prompted.
3. Select repository `A-IDU/Test` and the branch to sync.
4. Initial sync direction: **GitHub → GitBook**, because the repo is the source of truth.
5. **Project directory:** leave blank. `gitbook-docs.yaml` lives at the repo root.
6. **Content mapping:** map the space to `./docs`, matching `gitbook-docs.yaml`.
7. Click **Sync**.

After that, sync runs both ways. To add a page, create a Markdown file under `docs/` and add it to `docs/SUMMARY.md`. Don't change the space `key` in `gitbook-docs.yaml`: GitBook treats a new key as a new space.

## Notes

- Benchmark figures, prices, customer logos, and stats are **placeholders** — replace them with real numbers before launch.
- The signup form validates client-side only; wire it to your backend or email provider.
- Respects `prefers-reduced-motion`.
