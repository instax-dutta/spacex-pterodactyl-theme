# Verification Scripts DOX

## Purpose
- Own dependency-free checks that validate the theme source against the installed Pterodactyl component surface.

## Ownership
- `check-theme-coverage.py` scans component source markers and required theme selectors for the user/admin/auth, console, graph, stat, form, widget, and dialog surfaces.

## Local Contracts
- Checks must be deterministic, read-only, and safe to run without panel credentials.
- Optional installed-panel paths default to `/var/www/pterodactyl` but must not be required for repository-only syntax checks.
- Do not store credentials, tokens, response bodies, or runtime state in this directory.

## Work Guidance
- Keep the checker standard-library-only unless the project explicitly adopts a dependency.
- Update coverage requirements when a durable component boundary or theme integration changes.
- Report missing source markers and selectors clearly and exit non-zero on failures.

## Verification
- Run `python3 -m py_compile scripts/check-theme-coverage.py`.
- Run `python3 scripts/check-theme-coverage.py`.
- Run `git diff --check`.

## Child DOX Index
- No child `AGENTS.md` files are needed under this boundary.
