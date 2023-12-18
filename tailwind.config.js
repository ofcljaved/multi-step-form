/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      gridTemplateColumns: {
        container: '1.25fr 2.75fr',
      },
      gridTemplateRows: {
        container: 'auto max-content',
        'mobile-container': '1.5fr 1fr auto max-content',
      },
      backgroundImage: {
        'stepbar-desktop': 'url("/bg-sidebar-desktop.svg")',
        'stepbar-mobile': 'url("/bg-sidebar-mobile.svg")',
      },
    },
  },
  plugins: [],
};
