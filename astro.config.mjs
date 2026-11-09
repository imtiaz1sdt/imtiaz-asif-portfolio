// Static Astro portfolio deployed on Cloudflare Pages.
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://imtiaz-asif-portfolio.pages.dev';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  prefetch: true,
  vite: { plugins: [tailwindcss()] },
  fonts: [
    { provider: fontProviders.google(), name: 'Fraunces', cssVariable: '--ff-display', weights: ['400', '500', '600'], styles: ['normal', 'italic'], subsets: ['latin'] },
    { provider: fontProviders.google(), name: 'Inter', cssVariable: '--ff-body', weights: ['400', '500', '600'], subsets: ['latin'] },
    { provider: fontProviders.google(), name: 'Space Mono', cssVariable: '--ff-mono', weights: ['400', '700'], subsets: ['latin'] },
  ],
});
