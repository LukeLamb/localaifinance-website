// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://localaifinance.com',
  vite: {
    plugins: [tailwind()],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  }
});