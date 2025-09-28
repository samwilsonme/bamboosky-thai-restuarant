// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bamboosky.co.uk',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('404') && !page.includes('thank-you'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ]
});