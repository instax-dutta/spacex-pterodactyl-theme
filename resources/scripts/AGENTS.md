# Frontend Source DOX

## Purpose
- Own source-side global styling that is shared by Pterodactyl's React frontend.

## Ownership
- `assets/css/GlobalStylesheet.ts` owns the React global stylesheet source in this repository.
- Component-specific React source belongs to the installed Pterodactyl application unless it is intentionally added to this theme source.

## Local Contracts
- Keep global rules conservative; do not flatten component layout or override arbitrary generated class names.
- Preserve focus, form, editor, terminal, chart, and accessibility behavior.
- Keep the source compatible with the panel's existing styled-components/Tailwind build conventions.

## Work Guidance
- Prefer a scoped theme stylesheet for visual changes over broad React global changes.
- Run the installed panel's frontend typecheck and production build after non-trivial source changes when possible.
- Do not commit `node_modules`, compiled assets, or deployment-only source copies.

## Verification
- Run `python3 scripts/check-theme-coverage.py`.
- Run the installed panel's `tsc --noEmit` and relevant tests when this source is changed and the panel deployment is available.

## Child DOX Index
- No child `AGENTS.md` files are needed under this boundary.
