// Static Astro portfolio deployed on Cloudflare Pages.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://imtiaz-asif-portfolio.pages.dev';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  prefetch: true,
  vite: { plugins: [tailwindcss()] },
});
