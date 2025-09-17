import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2fbff',
          100: '#e6f6fe',
          200: '#bfe9fc',
            300: '#99dbfa',
          400: '#4dc0f6',
          500: '#00a6f2',
          600: '#0085c2',
          700: '#006391',
          800: '#004261',
          900: '#002130',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
};

export default config;
