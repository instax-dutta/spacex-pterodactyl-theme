# SpaceX Inspired Pterodactyl Theme

[![GitHub Stars](https://img.shields.io/github/stars/instax-dutta/spacex-pterodactyl-theme?style=flat-square)](https://github.com/instax-dutta/spacex-pterodactyl-theme/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/instax-dutta/spacex-pterodactyl-theme?style=flat-square)](https://github.com/instax-dutta/spacex-pterodactyl-theme/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A premium **dark mode only** theme for Pterodactyl game server panels, inspired by SpaceX's industrial aerospace design aesthetic.

## Design Philosophy

This theme brings the cinematic, mission-focused design language of SpaceX to your Pterodactyl panel. Drawing from the official SpaceX website design system:

- **Pure Black Canvas** (`#000000`) - The void of space as your background
- **Spectral White** (`#f0f0fa`) - Not pure white, but with a slight blue-violet tint like starlight
- **D-DIN Typography** - Industrial geometric typeface with DIN heritage
- **Universal Uppercase** - All text is uppercase with positive letter-spacing (0.96px-1.17px)
- **Ghost Buttons** - Transparent buttons with `rgba(240, 240, 250, 0.1)` background and spectral borders
- **Zero Shadows** - No decorative shadows; depth comes from the photography content itself
- **No Cards** - Text sits directly on the canvas; containers are minimal and functional

## Preview

| Component | Design |
|-----------|--------|
| **Color Palette** | Black (#000000) + Spectral White (#f0f0fa) |
| **Typography** | Inter (fallback) with uppercase, positive letter-spacing |
| **Buttons** | Ghost style with spectral borders, 6px radius |
| **Background** | Subtle spectral gradient mesh on pure black |
| **Cards** | Dark raised surfaces with hairline borders |

## Features

- Full SpaceX-inspired color palette with CSS custom properties
- D-DIN typography style (using Inter as fallback)
- Universal uppercase text with proper letter-spacing
- Ghost button styling matching SpaceX's design
- Dark gradient overlays for text legibility
- Minimal shadow usage (as per SpaceX philosophy)
- **Complete coverage** of admin panel and user-facing pages
- Responsive design for all screen sizes
- AdminLTE 2.x skin overrides
- Authentication page styling
- File manager integration
- Terminal and code editor theming (xterm, CodeMirror)
- Select2 dropdown styling
- DataTables support
- SweetAlert2 theming
- Modular CSS architecture for easy customization

## Installation

### One-Command Install (Online)

```bash
# Run this from your Pterodactyl root directory
bash -c "$(curl -fsSL https://raw.githubusercontent.com/instax-dutta/spacex-pterodactyl-theme/master/install.sh)"
```

This will automatically:
- Clone the theme repository
- Copy files to correct locations
- Set proper permissions
- Clear Laravel cache

### Quick Install (Manual Git Clone)

```bash
# Clone the theme
cd /var/www/pterodactyl
git clone https://github.com/instax-dutta/spacex-pterodactyl-theme.git

# Run the installer
bash spacex-pterodactyl-theme/install.sh
```

### Manual Installation

1. **Copy the theme files:**
   ```bash
   # Create theme directory
   mkdir -p /var/www/pterodactyl/public/themes/spacex
   
   # Copy CSS files
   cp spacex-pterodactyl-theme/public/themes/spacex/*.css /var/www/pterodactyl/public/themes/spacex/
   
   # Copy Blade templates
   cp -r spacex-pterodactyl-theme/resources/views/ /var/www/pterodactyl/resources/
   
   # Copy React components
   cp -r spacex-pterodactyl-theme/resources/scripts/ /var/www/pterodactyl/resources/
   ```

2. **Set proper permissions:**
   ```bash
   chown -R www-data:www-data /var/www/pterodactyl/resources/views
   chown -R www-data:www-data /var/www/pterodactyl/public/themes/spacex
   chown -R www-data:www-data /var/www/pterodactyl/public/assets
   ```

3. **Clear Laravel cache:**
   ```bash
   php /var/www/pterodactyl/artisan view:clear
   php /var/www/pterodactyl/artisan cache:clear
   php /var/www/pterodactyl/artisan config:clear
   ```

4. **Restart your web server:**
   ```bash
   systemctl restart nginx
   # or
   systemctl restart apache2
   ```

5. **Hard refresh your browser** (Ctrl+Shift+R or Cmd+Shift+R)

## Configuration

### Font Setup

The theme uses **Inter** as the primary font (fallback for D-DIN). To get the best experience:

1. Add this to your `<head>` section:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

2. For the authentic SpaceX look, you can self-host **D-DIN** font files and update the CSS variables:
   ```css
   --spacex-font-sans: 'D-DIN', Inter, system-ui, -apple-system, sans-serif;
   ```

### Custom Colors

You can customize the theme colors by overriding the CSS variables in your own stylesheet:

```css
:root {
    --spacex-canvas: #000000;
    --spacex-ink: #f0f0fa;
    --spacex-body: #a8a8b8;
    --spacex-muted: #6c6c7c;
    --spacex-hairline: #202040;
    --spacex-ghost-surface: rgba(240, 240, 250, 0.1);
    --spacex-ghost-border: rgba(240, 240, 250, 0.35);
}
```

## File Structure

```
spacex-pterodactyl-theme/
├── package.json                    # Theme metadata
├── tailwind.config.js             # Tailwind configuration with SpaceX palette
├── install.sh                     # Installation script
├── README.md                      # This file
├── public/
│   └── themes/
│       └── spacex/
│           ├── css/               # Modular CSS architecture
│           │   ├── variables.css    # Design tokens & CSS custom properties
│           │   ├── base.css         # Reset, typography, forms, scrollbars
│           │   ├── layout.css       # Grid, spacing, responsive utilities
│           │   ├── components.css   # All interactive components
│           │   └── auth.css         # Authentication page styling
│           ├── spacex.css          # Main theme styles (user-facing)
│           ├── theme.css           # Admin panel overrides (AdminLTE)
│           └── test-panel.html     # Dependency-free local component preview
└── resources/
    ├── scripts/
    │   ├── assets/
    │   │   └── css/
    │   │       └── GlobalStylesheet.ts  # React global styles
    │   └── components/             # React component structure
    └── views/
        ├── layouts/
        │   └── admin.blade.php      # Admin layout template
        └── templates/
            ├── base/
            │   └── core.blade.php     # Core template
            └── wrapper.blade.php     # Wrapper template
```

To inspect the theme locally without a running panel, serve the repository root
with any static web server and open `/public/themes/spacex/test-panel.html`.
The preview is interactive but makes no network or panel API requests.

Example:
```bash
python3 -m http.server 8080
# open http://localhost:8080/public/themes/spacex/test-panel.html
```

## Release checklist

Before publishing a theme release, follow [`RELEASE_CHECKLIST.md`](RELEASE_CHECKLIST.md). It covers source hygiene, component coverage, static preview QA, disposable-panel verification, installer safety, browser testing, and rollback.

## Color Palette Reference

| Name | Hex | Usage |
|------|-----|-------|
| Space Black | `#000000` | Background canvas |
| Spectral White | `#f0f0fa` | Primary text color |
| Spectral Body | `#a8a8b8` | Secondary text |
| Spectral Muted | `#6c6c7c` | Muted text, icons |
| Hairline | `#202040` | Borders (strong) |
| Hairline Strong | `#30303e` | Borders (stronger) |
| Ghost Surface | `rgba(240, 240, 250, 0.1)` | Button background |
| Ghost Border | `rgba(240, 240, 250, 0.35)` | Button border |
| Overlay | `rgba(0, 0, 0, 0.5)` | Gradient overlays |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| Success | `#22c55e` | Success states, buttons |
| Error | `#ef4444` | Error states, buttons |
| Warning | `#facc15` | Warning states, buttons |
| Link | `#60a5fa` | Links, active states |
| Cyan | `#06b6d4` | Highlights, accents |

## Typography Reference

### Font Families
- **Sans**: Inter (fallback for D-DIN)
- **Mono**: System monospace (for code, labels)

### Font Sizes & Weights

| Role | Size | Weight | Letter Spacing | Transform |
|------|------|--------|----------------|-----------|
| H1 | 40px (2.5rem) | 700 | 0.96px | UPPERCASE |
| H2 | 32px (2rem) | 700 | 0.96px | UPPERCASE |
| H3 | 24px (1.5rem) | 700 | 1.17px | UPPERCASE |
| H4-H6 | 18px (1.125rem) | 700 | 1.17px | UPPERCASE |
| Body | 16px (1rem) | 400 | normal | Normal |
| Labels/Mono | 11px | 400 | 1.17px | UPPERCASE |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- **Design Inspiration**: [SpaceX Official Website](https://www.spacex.com)
- **Original Theme**: Based on [Elipso Theme](https://github.com/instax-dutta/elipso-theme) by Saidutta Abhishek Dash
- **Font**: [Inter](https://rsms.me/inter/) by Rasmus Andersson
- **Icons**: [Font Awesome](https://fontawesome.com) and [Ionicons](https://ionicons.com)

## License

MIT License - Feel free to use, modify, and distribute.

## Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.

## Support

For support or questions, please open an issue on GitHub.

---

**Made with love for the Pterodactyl community**

*Inspired by SpaceX - To the stars and beyond*
