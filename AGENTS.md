# SpaceX Pterodactyl Theme DOX

## Purpose
- Maintain a SpaceX-inspired dark theme source for Pterodactyl panels.
- Keep the theme usable as a source repository, local static preview, and deployable panel overlay.

## Ownership
- Root-owned files define project-wide theme, documentation, installation, and verification contracts.
- The repository contains theme source; `/var/www/pterodactyl` is a disposable external deployment and is not source-controlled here.

## Local Contracts
- Preserve Pterodactyl application behavior and compiled application assets; theme changes must remain additive and reversible.
- Do not commit credentials, runtime `.env` files, API tokens, panel database data, or VM-only deployment artifacts.
- Keep CSS selectors scoped and compatibility-friendly. Do not use destructive universal color/background overrides or unsupported browser-only dependencies without a fallback.
- Match existing file organization and prefer the smallest change that satisfies the request.

## Work Guidance
- Read this file and every applicable child `AGENTS.md` before editing.
- Keep user-panel, admin-panel, authentication, and preview concerns separated by their existing entrypoints.
- Update the nearest DOX document when a durable responsibility, workflow, contract, or child index changes.
- Use the dependency-free static preview for visual component coverage when a running panel is unavailable.

## Verification
- Run `git diff --check`.
- Run `bash -n install.sh` after installer changes.
- Run `python3 scripts/check-theme-coverage.py` for component coverage.
- Run `python3 -m py_compile scripts/check-theme-coverage.py` after checker changes.
- For releases, follow `RELEASE_CHECKLIST.md` and record any explicitly accepted exceptions in the release notes.
- The root package has no build/test dependency graph; do not invent npm checks here.

## Release Documentation
- `RELEASE_CHECKLIST.md` — release gates for source hygiene, coverage, preview/staging QA, deployment safety, and rollback.

## Child DOX Index
- `public/AGENTS.md` — public assets and theme tree.
- `resources/AGENTS.md` — Blade and frontend source integration.
- `scripts/AGENTS.md` — repository verification helpers.
