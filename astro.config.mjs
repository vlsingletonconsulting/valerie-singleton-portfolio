import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio.vsingleton.com',
  output: 'static',
  compressHTML: true,
  integrations: [
    sitemap(),
  ],
});
