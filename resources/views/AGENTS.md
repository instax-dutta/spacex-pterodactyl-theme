# Blade Integration DOX

## Purpose
- Own the Blade layout hooks that load the SpaceX theme and apply the correct body classes.

## Ownership
- `templates/wrapper.blade.php` owns shared user/auth stylesheet links.
- `templates/base/core.blade.php` owns the user-panel body hook.
- `templates/auth/core.blade.php` owns the auth body hook.
- `layouts/admin.blade.php` owns admin stylesheet links and `.spacex-admin` markup scope.

## Local Contracts
- Keep the stock Pterodactyl layout structure and application mount points intact.
- Load theme CSS additively after the stock asset declarations so theme rules can refine the panel without replacing compiled React assets.
- Keep admin-only rules out of the user-panel body class and keep auth styling intentionally scoped.

## Work Guidance
- Make the smallest template edit possible and preserve Blade section/yield behavior.
- Check both link paths and body classes when changing an entrypoint.
- Clear the deployed Laravel view/config cache only in the disposable panel after deployment; do not commit cache files.

## Verification
- `grep` the affected template for stylesheet links and body hooks.
- Run `python3 scripts/check-theme-coverage.py`.
- Run a local HTTP request to an affected panel route when the disposable panel is available.

## Child DOX Index
- No child `AGENTS.md` files are needed under this boundary.
