import { createGlobalStyle } from 'styled-components/macro';

/**
 * SpaceX-inspired global layer for the React user panel.
 * Component-specific styling belongs in the shipped theme stylesheets; this
 * layer only establishes shared tokens and non-destructive primitives.
 */
export default createGlobalStyle`
    :root {
        --spacex-void: #000000;
        --spacex-canvas: #050508;
        --spacex-canvas-soft: #0a0a0f;
        --spacex-canvas-soft-2: #101016;
        --spacex-canvas-raised: #15151d;
        --spacex-canvas-raised-2: #1b1b25;
        --spacex-canvas-floating: #22222e;
        --spacex-ink: #f0f0fa;
        --spacex-body: #b7b7c5;
        --spacex-muted: #858593;
        --spacex-hairline: #292932;
        --spacex-hairline-soft: #383843;
        --spacex-hairline-strong: #50505c;
        --spacex-link: #70b7ff;
        --spacex-link-soft: rgba(112, 183, 255, 0.16);
        --spacex-success: #4fd36a;
        --spacex-error: #ff6b63;
        --spacex-warning: #e7b84b;
        --spacex-info: #70b7ff;
        --spacex-font-sans: 'Inter', 'D-DIN', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        --spacex-font-mono: 'D-DIN Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
        --spacex-radius: 6px;
        --spacex-radius-lg: 10px;
        --spacex-shadow-panel: 0 8px 24px rgba(0, 0, 0, 0.26);
        color-scheme: dark;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        min-width: 320px;
        background: var(--spacex-canvas);
        color: var(--spacex-body);
        font-family: var(--spacex-font-sans);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        min-height: 100vh;
        margin: 0;
        overflow-x: hidden;
        background: var(--spacex-canvas);
        color: var(--spacex-body);
        font-family: var(--spacex-font-sans);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--spacex-ink);
        font-family: var(--spacex-font-sans);
        font-weight: 700;
        letter-spacing: 0.045em;
        line-height: 1.12;
        text-transform: uppercase;
    }

    a {
        color: var(--spacex-link);
        text-decoration: none;
        transition: color 160ms ease;
    }

    a:hover,
    a:focus {
        color: #ffffff;
    }

    input,
    select,
    textarea {
        font: inherit;
    }

    input:not([type='checkbox']):not([type='radio']):not([type='range']):not([type='color']):not([type='file']),
    textarea,
    select {
        max-width: 100%;
        border: 1px solid var(--spacex-hairline);
        border-radius: var(--spacex-radius);
        background: var(--spacex-canvas-soft);
        color: var(--spacex-ink);
        outline: 0;
    }

    input:focus,
    textarea:focus,
    select:focus {
        border-color: var(--spacex-link);
        box-shadow: 0 0 0 3px var(--spacex-link-soft);
    }

    button {
        font: inherit;
    }

    :focus-visible {
        outline: 2px solid var(--spacex-link);
        outline-offset: 2px;
    }

    ::selection {
        background: var(--spacex-link);
        color: var(--spacex-void);
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
