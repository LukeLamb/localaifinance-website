import { defineConfig } from '@tailwindcss/vite';

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(239 246 255)',
          100: 'rgb(219 234 254)',
          200: 'rgb(191 219 254)',
          300: 'rgb(147 197 253)',
          400: 'rgb(96 165 250)',
          500: 'rgb(59 130 246)',
          600: 'rgb(37 99 235)',  // Our primary color
          700: 'rgb(29 78 216)',  // Our primary-dark
          800: 'rgb(30 64 175)',
          900: 'rgb(30 58 138)',
          950: 'rgb(23 37 84)',
        },
        secondary: {
          50: 'rgb(236 253 245)',
          100: 'rgb(209 250 229)',
          200: 'rgb(167 243 208)',
          300: 'rgb(110 231 183)',
          400: 'rgb(52 211 153)',
          500: 'rgb(16 185 129)', // Our secondary color
          600: 'rgb(5 150 105)',
          700: 'rgb(4 120 87)',
          800: 'rgb(6 95 70)',
          900: 'rgb(6 78 59)',
          950: 'rgb(2 44 34)',
        },
        accent: {
          50: 'rgb(255 251 235)',
          100: 'rgb(254 243 199)',
          200: 'rgb(253 230 138)',
          300: 'rgb(252 211 77)',
          400: 'rgb(251 191 36)',
          500: 'rgb(245 158 11)', // Our accent color
          600: 'rgb(217 119 6)',
          700: 'rgb(180 83 9)',
          800: 'rgb(146 64 14)',
          900: 'rgb(120 53 15)',
          950: 'rgb(69 26 3)',
        },
      },
      fontFamily: {
        primary: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          'to': {
            opacity: '1',
          },
        },
        slideUp: {
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.15)',
        'xl-colored': '0 20px 25px -5px rgba(37, 99, 235, 0.1), 0 10px 10px -5px rgba(37, 99, 235, 0.04)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgb(37 99 235) 0%, rgb(16 185 129) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, rgb(16 185 129) 0%, rgb(245 158 11) 100%)',
      },
    },
  },
  plugins: [],
});
