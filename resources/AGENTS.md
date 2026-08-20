# Resources DOX

## Purpose
- Own source-side hooks that let the theme integrate with Pterodactyl Blade and React rendering.

## Ownership
- `views/` owns Blade layout and body-class/style-link integration.
- `scripts/` owns frontend global styling source and any future React-facing theme hooks.

## Local Contracts
- Theme hooks must be additive and must not replace Pterodactyl application routes, components, or compiled assets.
- Keep source changes compatible with the installed Pterodactyl version used for local verification.
- Do not place secrets or deployment-only configuration under `resources/`.

## Work Guidance
- Read the nearest child contract before editing Blade or frontend source.
- Keep template entrypoints explicit so user, admin, and auth styles do not leak into one another.
- When a source change affects the deployed panel bundle, run the panel's own typecheck/build checks in the disposable deployment if available.

## Verification
- Inspect rendered template hooks with targeted `grep` checks.
- Run the repository coverage checker after integration changes.
- Run Pterodactyl frontend typecheck/build checks only in the installed panel when that deployment is available.

## Child DOX Index
- `views/AGENTS.md` — Blade layout integration.
- `scripts/AGENTS.md` — frontend stylesheet source.
