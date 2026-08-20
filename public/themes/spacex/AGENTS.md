# SpaceX Theme DOX

## Purpose
- Own the dark SpaceX visual system for Pterodactyl user, admin, and authentication surfaces.
- Provide a local preview covering the supported panel component states.

## Ownership
- `css/variables.css` owns design tokens.
- `css/base.css` owns conservative primitives and form/button foundations.
- `css/layout.css` owns layout and responsive behavior.
- `css/components.css` owns shared widgets and third-party integrations.
- `css/auth.css` owns authentication states.
- `spacex.css` is the user-facing entrypoint; `theme.css` is the scoped AdminLTE/admin entrypoint.
- `test-panel.html` is a dependency-free preview only.

## Local Contracts
- Keep admin rules scoped to `.spacex-admin` and user rules compatible with React/Tailwind output.
- Canvas-rendered xterm and Chart.js surfaces require explicit sizing and contrast rules; ordinary text-color rules are insufficient.
- Do not hide console output, graph canvases, controls, focus indicators, or loading/error states.
- Do not introduce network requests, package dependencies, or panel behavior into the static preview.

## Work Guidance
- Update tokens first when adding a new semantic state or surface.
- Use existing selector conventions before adding generated class hashes; if a generated hook is unavoidable, document why and verify it against the installed bundle.
- Preserve responsive behavior at mobile widths and avoid changing application markup unless required for a stable styling hook.

## Verification
- Run `python3 scripts/check-theme-coverage.py`.
- Run `git diff --check`.
- Validate the preview JavaScript syntax and perform an HTTP smoke check when preview files change.

## Child DOX Index
- No child `AGENTS.md` files are needed under this theme boundary.
