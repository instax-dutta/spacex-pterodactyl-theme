const spacexColors = {
  // SpaceX Primary Colors
  'space-black': '#000000',
  'spectral-white': '#f0f0fa',
  
  // Ghost Button Colors
  'ghost-surface': 'rgba(240, 240, 250, 0.1)',
  'ghost-border': 'rgba(240, 240, 250, 0.35)',
  
  // Gradient Overlay
  'overlay-dark': 'rgba(0, 0, 0, 0.5)',
  
  // Semantic colors for Pterodactyl compatibility
  'spectral': {
    50: '#f0f0fa',
    100: '#e8e8f8',
    200: '#d8d8e8',
    300: '#c0c0d0',
    400: '#a8a8b8',
    500: '#8a8a9a',
    600: '#6c6c7c',
    700: '#4e4e5e',
    800: '#30303e',
    900: '#1c1c22',
    950: '#000000',
  },
  
  // Accent colors for interactive elements
  'space': {
    50: '#f0f0fa',
    100: '#e0e0f0',
    200: '#c0c0d8',
    300: '#a0a0c0',
    400: '#8080a8',
    500: '#606080',
    600: '#404060',
    700: '#202040',
    800: '#101020',
    900: '#080810',
    950: '#000000',
  },
};

module.exports = {
  content: [
    './resources/scripts/**/*.{js,jsx,ts,tsx}',
    './resources/views/**/*.blade.php',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'D-DIN', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['D-DIN Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
        din: ['D-DIN', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // SpaceX Primary Palette
        'space-black': spacexColors['space-black'],
        'spectral': spacexColors['spectral'],
        'space': spacexColors['space'],
        
        // Pterodactyl compatibility - map to SpaceX colors
        gray: spacexColors['spectral'],
        neutral: spacexColors['spectral'],
        slate: spacexColors['space'],
        zinc: spacexColors['space'],
        
        // Semantic colors
        blue: {
          DEFAULT: '#3b82f6',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        red: {
          DEFAULT: '#ef4444',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        green: {
          DEFAULT: '#22c55e',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        yellow: {
          DEFAULT: '#facc15',
          400: '#fbbf24',
          500: '#facc15',
          600: '#eab308',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        purple: {
          DEFAULT: '#8b5cf6',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(240, 240, 250, 0.05)',
        DEFAULT: '0 2px 4px rgba(240, 240, 250, 0.1)',
        md: '0 2px 6px rgba(240, 240, 250, 0.15)',
        lg: '0 4px 12px rgba(240, 240, 250, 0.2)',
        xl: '0 8px 24px rgba(240, 240, 250, 0.25)',
        none: 'none',
      },
      letterSpacing: {
        tight: '0.96px',
        normal: '0px',
        wide: '1.17px',
        wider: '1px',
      },
      backgroundOpacity: {
        5: '0.05',
        10: '0.1',
        15: '0.15',
        20: '0.2',
      },
    },
  },
  plugins: [],
};
