/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...fontFamily.sans],
      },
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
        container: '1.2fr 2.8fr',
      },
      gridTemplateRows: {
        container: '1fr max-content',
        'mobile-container': 'repeat(3, auto)',
      },
      backgroundImage: {
        'stepbar-desktop': 'url("/bg-sidebar-desktop.svg")',
        'stepbar-mobile': 'url("/bg-sidebar-mobile.svg")',
      },
    },
  },
  plugins: [],
};
