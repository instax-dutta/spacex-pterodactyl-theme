# Public Assets DOX

## Purpose
- Own browser-delivered theme assets and the dependency-free local component preview.

## Ownership
- `public/themes/spacex/` owns the SpaceX CSS entrypoints, modular stylesheets, and preview panel.
- Keep generated Pterodactyl application bundles outside this repository's public source tree.

## Local Contracts
- Preserve relative stylesheet imports from `spacex.css` and `theme.css`.
- Preview assets must remain self-contained and must not call panel APIs or embed credentials.
- Changes to the theme must preserve both user-facing and AdminLTE/admin surfaces.

## Work Guidance
- Read the child theme contract before editing files under `public/themes/spacex`.
- Prefer semantic design tokens in `css/variables.css` over repeated literal values.
- Keep third-party integration rules narrow enough not to break xterm, Chart.js, CodeMirror, Select2, DataTables, or modal behavior.

## Verification
- Run `python3 scripts/check-theme-coverage.py`.
- Serve `public/themes/spacex/test-panel.html` with a static HTTP server when visual interaction needs checking.

## Child DOX Index
- `themes/spacex/AGENTS.md` — SpaceX theme source and preview.
