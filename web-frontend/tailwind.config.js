export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // The app is a notebook: dark ink on pale paper, marked up with highlighters.
        ink: {
          DEFAULT: '#16151d',
          soft: '#4a4757',
          faint: '#6f6b80',
        },
        paper: {
          light: '#f2f1f7',
          dark: '#0e0d13',
        },
        card: {
          light: '#ffffff',
          dark: '#1c1a25',
        },
        // Highlighter set. Every deck gets its own marker so she can tell them
        // apart at a glance, the way you'd color-code a notebook.
        marker: {
          yellow: '#ffd83d',
          grape: '#6c4ce0',
          coral: '#ff6b5a',
          mint: '#16b894',
          sky: '#3b9bff',
          magenta: '#e2569f',
          lime: '#8ec63f',
          tangerine: '#ff9f2e',
          slate: '#7c8aa5',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        read: ['"Newsreader Variable"', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '22px',
        '3xl': '28px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(22, 21, 29, 0.06), 0 8px 24px -12px rgba(22, 21, 29, 0.18)',
        lift: '0 2px 6px rgba(22, 21, 29, 0.08), 0 24px 48px -20px rgba(22, 21, 29, 0.35)',
      },
    },
  },
};
