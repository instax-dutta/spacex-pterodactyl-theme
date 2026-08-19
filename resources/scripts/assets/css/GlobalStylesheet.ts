import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';

/**
 * SpaceX-inspired Pterodactyl Theme
 * 
 * Design System:
 * - Pure black canvas (#000000) with spectral white text (#f0f0fa)
 * - D-DIN typography with universal uppercase and positive letter-spacing
 * - Ghost buttons with rgba(240, 240, 250, 0.1) background
 * - Zero shadows, zero cards, zero decorative elements
 * - Full-viewport photography with dark gradient overlays
 */

export default createGlobalStyle`
    :root {
        /* SpaceX Color Palette */
        --spacex-black: #000000;
        --spacex-spectral: #f0f0fa;
        --spacex-ghost-surface: rgba(240, 240, 250, 0.1);
        --spacex-ghost-border: rgba(240, 240, 250, 0.35);
        --spacex-overlay: rgba(0, 0, 0, 0.5);
        --spacex-white-100: #ffffff;
        
        /* Canvas Colors */
        --spacex-canvas: #000000;
        --spacex-canvas-soft: #080810;
        --spacex-canvas-soft-2: #101020;
        --spacex-canvas-raised: #181828;
        
        /* Text Colors */
        --spacex-ink: #f0f0fa;
        --spacex-body: #a8a8b8;
        --spacex-muted: #6c6c7c;
        
        /* Border Colors */
        --spacex-hairline: #202040;
        --spacex-hairline-strong: #30303e;
        
        /* Accent Colors */
        --spacex-primary: #f0f0fa;
        --spacex-on-primary: #000000;
        --spacex-link: #60a5fa;
        --spacex-link-deep: #3b82f6;
        --spacex-success: #22c55e;
        --spacex-error: #ef4444;
        --spacex-warning: #facc15;
        --spacex-cyan: #06b6d4;
        
        /* Shadows - SpaceX uses minimal shadows */
        --spacex-shadow-sm: 0 1px 2px rgba(240, 240, 250, 0.05);
        --spacex-shadow: 0 2px 4px rgba(240, 240, 250, 0.1);
        --spacex-shadow-panel: 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px -4px rgba(0, 0, 0, 0.4);
        
        /* Typography */
        --spacex-font-sans: 'Inter', 'D-DIN', system-ui, -apple-system, sans-serif;
        --spacex-font-mono: 'D-DIN Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
        
        /* Spacing */
        --spacex-radius-sm: 4px;
        --spacex-radius: 6px;
        --spacex-radius-lg: 8px;
        --spacex-radius-xl: 12px;
        --spacex-radius-3xl: 32px;
        
        /* Color scheme */
        color-scheme: dark;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        background: var(--spacex-canvas);
        color: var(--spacex-ink);
        font-family: var(--spacex-font-sans);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        min-height: 100vh;
        background: var(--spacex-canvas) !important;
        color: var(--spacex-body) !important;
        font-family: var(--spacex-font-sans) !important;
        letter-spacing: 0.015em;
    }

    /* SpaceX Background Mesh */
    body.spacex-mesh,
    body:has(.spacex-auth-shell) {
        background:
            radial-gradient(ellipse 80% 50% at 20% 0%, rgba(240, 240, 250, 0.03), transparent 65%),
            radial-gradient(ellipse 50% 40% at 80% 15%, rgba(240, 240, 250, 0.02), transparent 55%),
            radial-gradient(ellipse 35% 25% at 50% 30%, rgba(240, 240, 250, 0.01), transparent 45%),
            linear-gradient(180deg, var(--spacex-canvas) 0%, var(--spacex-canvas-soft) 40rem) !important;
    }

    /* Typography - SpaceX Style */
    h1, h2, h3, h4, h5, h6 {
        color: var(--spacex-ink) !important;
        font-weight: 700 !important;
        font-family: var(--spacex-font-sans) !important;
        text-transform: uppercase !important;
        letter-spacing: 0.96px !important;
        line-height: 1.00 !important;
    }

    h1 {
        font-size: 2.5rem !important;
        letter-spacing: 0.96px !important;
    }

    h2 {
        font-size: 2rem !important;
        letter-spacing: 0.96px !important;
    }

    h3 {
        font-size: 1.5rem !important;
        letter-spacing: 1.17px !important;
    }

    h4, h5, h6 {
        font-size: 1.125rem !important;
        letter-spacing: 1.17px !important;
    }

    p, span, label, li, td {
        color: inherit;
    }

    strong, b {
        font-weight: 700 !important;
    }

    a {
        color: inherit !important;
        text-decoration: none;
    }

    /* Navigation and Labels - Uppercase with tracking */
    th,
    .table th,
    [class*='TableHeader'],
    [class*='LabelMono'],
    .nav-link,
    .sidebar-menu > li > a,
    .breadcrumb > li,
    .breadcrumb > li > a {
        font-family: var(--spacex-font-mono) !important;
        font-size: 11px !important;
        text-transform: uppercase !important;
        letter-spacing: 1.17px !important;
        color: var(--spacex-muted) !important;
    }

    /* Inputs and Forms */
    input:not([type='checkbox']):not([type='radio']),
    textarea,
    select,
    .form-control {
        background: var(--spacex-canvas-soft) !important;
        color: var(--spacex-ink) !important;
        border: 1px solid var(--spacex-hairline) !important;
        border-radius: var(--spacex-radius) !important;
        box-shadow: none !important;
    }

    input:not([type='checkbox']):not([type='radio']):hover,
    textarea:hover,
    select:hover,
    .form-control:hover {
        border-color: var(--spacex-hairline-strong) !important;
    }

    input:not([type='checkbox']):not([type='radio']):focus,
    textarea:focus,
    select:focus,
    .form-control:focus {
        border-color: var(--spacex-link) !important;
        box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.15) !important;
    }

    /* Buttons - SpaceX Ghost Style */
    button,
    .btn {
        font-family: var(--spacex-font-sans) !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 1.17px !important;
        transition: all 0.15s ease !important;
    }

    .btn-primary,
    button[type='submit']:not(.btn-secondary):not(.btn-danger) {
        background-color: var(--spacex-ghost-surface) !important;
        border-color: var(--spacex-ghost-border) !important;
        color: var(--spacex-ink) !important;
    }

    .btn-primary:hover,
    button[type='submit']:not(.btn-secondary):not(.btn-danger):hover {
        background-color: rgba(240, 240, 250, 0.15) !important;
        border-color: rgba(240, 240, 250, 0.45) !important;
        color: var(--spacex-white-100) !important;
    }

    .btn-secondary,
    .btn-default {
        background-color: transparent !important;
        border: 1px solid var(--spacex-hairline) !important;
        color: var(--spacex-ink) !important;
    }

    .btn-secondary:hover,
    .btn-default:hover {
        background-color: var(--spacex-canvas-soft) !important;
        border-color: var(--spacex-hairline-strong) !important;
    }

    .btn-danger {
        background-color: var(--spacex-error) !important;
        border-color: var(--spacex-error) !important;
        color: var(--spacex-white-100) !important;
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
        background: transparent;
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--spacex-hairline-strong);
        border-radius: 999px;
        border: 2px solid transparent;
        background-clip: padding-box;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    /* Selection */
    ::selection {
        background: var(--spacex-primary);
        color: var(--spacex-on-primary);
    }

    /* Terminal and Code */
    .xterm,
    .xterm-viewport,
    .xterm-screen,
    .CodeMirror,
    pre:not(.CodeMirror-line):not(.CodeMirror-placeholder) {
        background: var(--spacex-canvas) !important;
        color: var(--spacex-ink) !important;
        border-color: var(--spacex-hairline) !important;
    }

    /* Cards and Containers */
    .box,
    .small-box,
    .info-box,
    .callout,
    .nav-tabs-custom,
    .modal-content,
    .well,
    [class*='GreyRowBox'],
    [class*='StatBlock'],
    [class*='ServerDetails'],
    [class*='NetworkStats'] {
        background: var(--spacex-canvas-raised) !important;
        color: var(--spacex-body) !important;
        border: 1px solid var(--spacex-hairline) !important;
        border-radius: var(--spacex-radius-lg) !important;
        box-shadow: var(--spacex-shadow-panel) !important;
    }

    /* Navigation Bar */
    div[class*='NavigationBar'],
    div[class*='navigation-bar'],
    header,
    nav,
    div[class*='SubNavigation'],
    div[class*='ServerSubNavigation'],
    div[class*='NavigationRouter'],
    div[class*='SubNavBar'] {
        background: color-mix(in srgb, var(--spacex-canvas) 92%, transparent) !important;
        border-color: var(--spacex-hairline) !important;
    }

    /* Alerts */
    .alert {
        border-radius: var(--spacex-radius) !important;
        border: 1px solid var(--spacex-hairline) !important;
        box-shadow: none !important;
    }

    .alert-success {
        background: color-mix(in srgb, var(--spacex-success) 14%, var(--spacex-canvas)) !important;
        color: var(--spacex-ink) !important;
    }

    .alert-danger {
        background: color-mix(in srgb, var(--spacex-error) 12%, var(--spacex-canvas)) !important;
        color: var(--spacex-ink) !important;
    }

    .alert-warning {
        background: color-mix(in srgb, var(--spacex-warning) 14%, var(--spacex-canvas)) !important;
        color: var(--spacex-ink) !important;
    }

    /* Tables */
    .table,
    .table > tbody > tr > td,
    .table > tbody > tr > th,
    .table > tfoot > tr > td,
    .table > thead > tr > th {
        color: var(--spacex-body) !important;
        border-color: var(--spacex-hairline) !important;
        background: transparent !important;
    }

    .table > thead > tr > th {
        color: var(--spacex-muted) !important;
        font-family: var(--spacex-font-mono) !important;
        font-size: 11px !important;
        font-weight: 400 !important;
        text-transform: uppercase !important;
        letter-spacing: 1.17px !important;
    }

    .table-hover > tbody > tr:hover {
        background: color-mix(in srgb, var(--spacex-spectral) 4%, var(--spacex-canvas)) !important;
    }

    /* Dropdowns */
    .dropdown-menu {
        background: var(--spacex-canvas-raised) !important;
        border: 1px solid var(--spacex-hairline) !important;
        border-radius: var(--spacex-radius) !important;
        box-shadow: var(--spacex-shadow-panel) !important;
    }

    .dropdown-menu > li > a {
        color: var(--spacex-body) !important;
    }

    .dropdown-menu > li > a:hover {
        background: var(--spacex-canvas-soft) !important;
        color: var(--spacex-ink) !important;
    }

    /* Admin Panel Overrides */
    .skin-blue .wrapper,
    .skin-blue .main-sidebar,
    .skin-blue .left-side {
        background: var(--spacex-canvas) !important;
    }

    .skin-blue .main-header .logo,
    .skin-blue .main-header .navbar,
    .main-header .logo,
    .main-header .navbar {
        background: color-mix(in srgb, var(--spacex-canvas) 94%, transparent) !important;
        color: var(--spacex-ink) !important;
        border-bottom: 1px solid var(--spacex-hairline) !important;
        box-shadow: none !important;
    }

    .skin-blue .sidebar-menu > li.header {
        background: transparent !important;
        color: var(--spacex-muted) !important;
        font-family: var(--spacex-font-mono) !important;
        font-size: 11px !important;
        letter-spacing: 1.17px !important;
        text-transform: uppercase !important;
        padding: 17px 9px 8px !important;
    }

    .skin-blue .sidebar-menu > li > a {
        position: relative !important;
        border-left: 0 !important;
        margin: 1px 0 !important;
        padding: 10px 12px 10px 18px !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        letter-spacing: 1.17px !important;
        text-transform: uppercase !important;
        color: var(--spacex-body) !important;
    }

    .skin-blue .sidebar-menu > li:hover > a,
    .skin-blue .sidebar-menu > li.active > a,
    .skin-blue .sidebar-menu > li.menu-open > a {
        background: transparent !important;
        color: var(--spacex-ink) !important;
    }

    .skin-blue .sidebar-menu > li > a::before {
        content: '' !important;
        position: absolute !important;
        left: 0 !important;
        top: 9px !important;
        bottom: 9px !important;
        width: 2px !important;
        border-radius: 999px !important;
        background: transparent !important;
    }

    .skin-blue .sidebar-menu > li:hover > a::before,
    .skin-blue .sidebar-menu > li.active > a::before,
    .skin-blue .sidebar-menu > li.menu-open > a::before {
        background: var(--spacex-link) !important;
    }

    .skin-blue .sidebar-menu > li > a > i {
        width: 18px !important;
        margin-right: 8px !important;
        color: var(--spacex-muted) !important;
        text-align: center !important;
    }

    .skin-blue .sidebar-menu > li.active > a > i,
    .skin-blue .sidebar-menu > li:hover > a > i {
        color: var(--spacex-ink) !important;
    }

    /* Form elements in admin */
    .form-control,
    .select2-container--default .select2-selection--single,
    .select2-container--default .select2-selection--multiple {
        background: var(--spacex-canvas-soft) !important;
        color: var(--spacex-ink) !important;
        border: 1px solid var(--spacex-hairline) !important;
        border-radius: var(--spacex-radius) !important;
        box-shadow: none !important;
    }

    .form-control:focus,
    .select2-container--default.select2-container--focus .select2-selection--multiple,
    .select2-container--default .select2-selection--single:focus {
        border-color: var(--spacex-hairline-strong) !important;
        box-shadow: 0 0 0 2px rgba(240, 240, 250, 0.08) !important;
    }

    .form-control::placeholder {
        color: var(--spacex-muted) !important;
    }

    /* Footer */
    .main-footer {
        background: var(--spacex-canvas) !important;
        border-top: 1px solid var(--spacex-hairline) !important;
        color: var(--spacex-muted) !important;
        min-height: 26px !important;
        padding: 7px 18px !important;
        font-size: 11px !important;
        letter-spacing: 1.17px !important;
    }

    .main-footer a {
        color: var(--spacex-link) !important;
        text-decoration: none !important;
    }

    /* Modal */
    .modal-content {
        box-shadow: var(--spacex-shadow-panel) !important;
        background: var(--spacex-canvas-raised) !important;
        border: 1px solid var(--spacex-hairline) !important;
    }

    /* Auth Pages */
    body:has(.spacex-auth-shell) form {
        position: relative;
        max-width: 540px;
        margin: 0 auto;
    }

    body:has(.spacex-auth-shell) form > div,
    body:has(.spacex-auth-shell) form > .w-full,
    body:has(.spacex-auth-shell) form > [class*='bg-white'],
    body:has(.spacex-auth-shell) form > [class*='shadow'] {
        display: block !important;
        max-width: 540px !important;
        margin: 0 auto !important;
        padding: 36px !important;
        background: var(--spacex-canvas-raised) !important;
        border: 1px solid var(--spacex-hairline) !important;
        border-radius: var(--spacex-radius-lg) !important;
        box-shadow: var(--spacex-shadow-panel) !important;
    }

    body:has(.spacex-auth-shell) h2 {
        max-width: 540px;
        margin: 0 auto 20px !important;
        font-size: 36px !important;
        line-height: 1.1 !important;
        letter-spacing: 0.96px !important;
        text-align: left !important;
        text-transform: uppercase !important;
    }

    body:has(.spacex-auth-shell) form label,
    body:has(.spacex-auth-shell) form [class*='label'],
    body:has(.spacex-auth-shell) form .input-help {
        color: var(--spacex-muted) !important;
        font-size: 12px !important;
        letter-spacing: 1.17px !important;
        text-transform: uppercase !important;
    }

    body:has(.spacex-auth-shell) form input,
    body:has(.spacex-auth-shell) form textarea,
    body:has(.spacex-auth-shell) form select {
        height: 44px !important;
        padding: 0 16px !important;
        background: var(--spacex-canvas) !important;
        border: 1px solid var(--spacex-hairline) !important;
        border-radius: var(--spacex-radius) !important;
        color: var(--spacex-ink) !important;
        box-shadow: none !important;
    }

    body:has(.spacex-auth-shell) form input:hover,
    body:has(.spacex-auth-shell) form textarea:hover,
    body:has(.spacex-auth-shell) form select:hover {
        border-color: var(--spacex-hairline-strong) !important;
    }

    body:has(.spacex-auth-shell) form button[type='submit'],
    body:has(.spacex-auth-shell) form .btn-primary,
    body:has(.spacex-auth-shell) form [class*='bg-blue'] {
        height: 44px !important;
        margin-top: 10px !important;
        background: var(--spacex-ghost-surface) !important;
        border: 1px solid var(--spacex-ghost-border) !important;
        border-radius: var(--spacex-radius) !important;
        color: var(--spacex-ink) !important;
        box-shadow: none !important;
        font-weight: 700 !important;
        text-transform: uppercase !important;
        letter-spacing: 1.17px !important;
    }

    body:has(.spacex-auth-shell) form button[type='submit']:hover,
    body:has(.spacex-auth-shell) form .btn-primary:hover {
        background: rgba(240, 240, 250, 0.15) !important;
        border-color: rgba(240, 240, 250, 0.45) !important;
        color: var(--spacex-white-100) !important;
        transform: none;
    }
`;
