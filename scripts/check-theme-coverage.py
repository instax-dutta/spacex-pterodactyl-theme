#!/usr/bin/env python3
"""Check that the SpaceX theme covers the installed Pterodactyl UI surfaces.

This is intentionally static: it does not need a browser or a running server,
and it catches the common regression where React canvas components are missed
by a CSS-only component audit.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path


COMPONENTS = {
    "user shell": {
        "files": [
            "resources/views/templates/wrapper.blade.php",
            "resources/views/templates/base/core.blade.php",
        ],
        "markers": ["spacex.css", "spacex-canvas"],
    },
    "admin shell": {
        "files": ["resources/views/layouts/admin.blade.php"],
        "markers": ["spacex-admin", "theme.css"],
    },
    "authentication": {
        "files": [
            "resources/views/templates/auth/core.blade.php",
            "resources/views/templates/wrapper.blade.php",
        ],
        "markers": ["spacex-auth-shell", "spacex.css"],
    },
    "live console": {
        "files": ["resources/scripts/components/server/console/Console.tsx"],
        "markers": ["xterm", "CONSOLE_OUTPUT"],
        "selectors": [".xterm", "style-module_uC90C8g3", "style-module_g8HBAuZB"],
    },
    "resource graphs": {
        "files": [
            "resources/scripts/components/server/console/StatGraphs.tsx",
            "resources/scripts/components/server/console/ChartBlock.tsx",
            "resources/scripts/components/server/console/chart.ts",
        ],
        "markers": ["react-chartjs-2", "Line", "ChartJS"],
        "selectors": ["style-module_j35sQtg2", "canvas"],
    },
    "server statistics": {
        "files": ["resources/scripts/components/server/console/StatBlock.tsx"],
        "markers": ["stat_block"],
        "selectors": ["style-module_V4CSEpa4"],
    },
    "forms and controls": {
        "files": ["resources/scripts/assets/css/GlobalStylesheet.ts"],
        "markers": ["input", "button", "select"],
        "selectors": ["input", ".form-control", "button"],
    },
    "third-party widgets": {
        "files": ["public/themes/pterodactyl/vendor/select2/select2.min.css"],
        "markers": ["select2"],
        "selectors": ["select2", "dataTables", "CodeMirror"],
    },
    "dialogs and feedback": {
        "files": ["public/themes/pterodactyl/vendor/sweetalert/sweetalert.min.css"],
        "markers": ["sweet-alert"],
        "selectors": [".modal", ".swal2", ".sweet-alert", ".alert"],
    },
}


def read(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return ""


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--panel-root", type=Path, default=Path("/var/www/pterodactyl"))
    parser.add_argument("--theme-root", type=Path, default=Path("public/themes/spacex"))
    args = parser.parse_args()

    theme_files = sorted(args.theme_root.glob("**/*.css"))
    deployed_files = sorted((args.panel_root / "public/themes/spacex").glob("**/*.css"))
    css = "\n".join(read(path) for path in theme_files + deployed_files)
    failures = 0

    print(f"Theme files scanned: {len(theme_files)} source, {len(deployed_files)} deployed")
    for name, requirement in COMPONENTS.items():
        missing_files = [str(path) for path in requirement["files"] if not read(args.panel_root / path)]
        source = "\n".join(read(args.panel_root / path) for path in requirement["files"])
        missing_markers = [marker for marker in requirement["markers"] if marker not in source]
        missing_selectors = [selector for selector in requirement.get("selectors", []) if selector not in css]
        missing = missing_files + [f"marker:{value}" for value in missing_markers]
        missing += [f"selector:{value}" for value in missing_selectors]
        if missing:
            failures += 1
            print(f"FAIL  {name}: {', '.join(missing)}")
        else:
            print(f"PASS  {name}")

    if failures:
        print(f"Coverage failures: {failures}")
        return 1
    print(f"Coverage complete: {len(COMPONENTS)} components")
    return 0


if __name__ == "__main__":
    sys.exit(main())
