import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { PAGES } from './src/data/pages.ts';

/**
 * Sitemap <lastmod> is per-URL and only moves when content really changes
 * (previously every URL got the build time on every deploy — a false
 * freshness signal). Content pages take `updated` from src/data/pages.ts;
 * everything else uses CORE_LASTMOD, bumped by hand when those pages change.
 */
const CORE_LASTMOD = '2026-09-23';
const LASTMOD = Object.fromEntries(PAGES.map((p) => [`https://kianlocks.com${p.path}`.replace(/\/$/, ''), p.updated]));

// https://astro.build/config
export default defineConfig({
  site: 'https://kianlocks.com',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const key = item.url.replace(/\/$/, '');
        const isHome = key === 'https://kianlocks.com';
        return {
          ...item,
          lastmod: new Date((LASTMOD[key] ?? CORE_LASTMOD) + 'T00:00:00Z').toISOString(),
          changefreq: key.includes('/guides/') ? 'monthly' : 'weekly',
          priority: isHome ? 1.0 : key.includes('/locksmith/') || !key.includes('/guides') ? 0.8 : 0.6,
        };
      },
    }),
  ],
});
