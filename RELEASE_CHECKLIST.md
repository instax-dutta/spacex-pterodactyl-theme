# SpaceX Pterodactyl Theme Release Checklist

Use this checklist for every release. Do not publish until every applicable gate is checked or an explicit exception is recorded in the release notes.

## 1. Release scope

- [ ] Confirm the release version and target Pterodactyl panel versions.
- [ ] Record whether the release changes CSS only, Blade hooks, frontend source, installer behavior, or all of them.
- [ ] Confirm the supported browser range and any known compatibility limits.
- [ ] Confirm the rollback owner and backup location for the target panel.

## 2. Source and repository hygiene

- [ ] Review `git status` and `git diff` for unrelated or generated files.
- [ ] Run `git diff --check`.
- [ ] Confirm no `.env` files, passwords, API tokens, database dumps, runtime logs, VM paths, or test credentials are tracked.
- [ ] Confirm the root `AGENTS.md` and all applicable child DOX documents are current.
- [ ] Confirm `README.md` installation, preview, support, and compatibility instructions match the release.
- [ ] Confirm the license file and package metadata are present and versioned.
- [ ] Confirm the changelog/release notes describe behavior changes, compatibility, and rollback.

## 3. Theme integrity

- [ ] Confirm `public/themes/spacex/spacex.css` imports variables, base, layout, components, and auth styles in the intended order.
- [ ] Confirm `theme.css` remains scoped to `.spacex-admin`.
- [ ] Confirm user, admin, and authentication body hooks point to the correct entrypoints.
- [ ] Confirm there are no duplicate stylesheet imports.
- [ ] Confirm there are no destructive `html *`/`body *` color or background overrides.
- [ ] Confirm no unsupported CSS feature is used without an acceptable fallback.
- [ ] Confirm focus-visible states, reduced-motion behavior, disabled states, validation states, and responsive breakpoints remain present.
- [ ] Confirm xterm console canvases have readable renderer contrast and safe sizing.
- [ ] Confirm Chart.js/SVG/canvas graph surfaces have visible dimensions, labels, gridlines, and contrast.

## 4. Automated verification

From the repository root:

```bash
git diff --check
bash -n install.sh
python3 -m py_compile scripts/check-theme-coverage.py
```

When a disposable or staging Pterodactyl panel is available, run the full component audit:

```bash
python3 scripts/check-theme-coverage.py \
  --panel-root /var/www/pterodactyl \
  --theme-root public/themes/spacex
```

- [ ] All coverage components pass.
- [ ] Any panel frontend typecheck, lint, build, and test commands pass.
- [ ] Any failure is either fixed or documented as a release blocker/exception.

## 5. Static preview QA

Serve the repository without a panel dependency:

```bash
python3 -m http.server 8080
```

Open `/public/themes/spacex/test-panel.html` and verify:

- [ ] Navigation and responsive layout.
- [ ] Typography, links, focus rings, buttons, and disabled controls.
- [ ] Text inputs, selects, checkboxes, radios, input groups, and validation states.
- [ ] Cards, panels, tables, alerts, callouts, badges, labels, progress bars, tabs, breadcrumbs, and pagination.
- [ ] Modal and SweetAlert-style surfaces.
- [ ] Terminal/editor/file-manager integration previews.
- [ ] Graph/stat surfaces and empty/loading states.
- [ ] No console errors, missing assets, invisible text, clipped content, or horizontal overflow at supported widths.

## 6. Real-panel staging QA

Install only into a disposable or staging panel and create a rollback backup before copying files.

- [ ] Login and logout work.
- [ ] User dashboard and server list render correctly.
- [ ] Admin dashboard, navigation, tables, forms, and permissions render correctly.
- [ ] Authentication, password reset, two-factor, alerts, and error states render correctly.
- [ ] Server console logs are visible and remain selectable/searchable.
- [ ] CPU, memory, disk, and network graphs receive live statistics and remain readable.
- [ ] Power controls, command input, file manager, editor, Select2, DataTables, and dialogs still function.
- [ ] Mobile navigation and narrow tables remain usable.
- [ ] Browser hard refresh and cache-cleared loads use the intended theme assets.

## 7. Installer and deployment safety

- [ ] Run the installer against a disposable panel first.
- [ ] Verify panel path detection and explicit-path installation.
- [ ] Verify backup creation before replacement.
- [ ] Verify permissions on views, theme assets, and any compiled assets.
- [ ] Verify Laravel view/config/cache clearing succeeds without masking application errors.
- [ ] Verify the installer is safe to rerun and does not duplicate links or destroy unrelated assets.
- [ ] Verify the documented rollback command restores the backed-up files.
- [ ] Verify the release does not require the theme repository to remain on the panel host.

## 8. Release and rollback

- [ ] Review the final diff one more time.
- [ ] Tag the release with the package/version metadata.
- [ ] Publish release notes with supported panel versions, installation command, preview URL, known limitations, and rollback instructions.
- [ ] Retain the staging test result and backup reference.
- [ ] After publishing, verify the release archive contains the expected CSS, templates, preview, checker, DOX docs, installer, README, and license files.
- [ ] If a regression appears, stop rollout, restore the backup, clear panel caches, and record the incident.
