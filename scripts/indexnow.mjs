#!/usr/bin/env node
/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
 * Runs after each deploy (see .github/workflows/deploy.yml) or by hand:
 *   node scripts/indexnow.mjs
 * The key file must be live at https://kianlocks.com/<key>.txt (public/<key>.txt).
 */
const HOST = 'kianlocks.com';
const KEY = 'b7e3f1c94a2d4e0f8c6a5d3b2e1f0a97';
const SITEMAP = `https://${HOST}/sitemap-0.xml`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Give GitHub Pages' CDN a moment to serve the new build.
await sleep(30_000);

const xml = await (await fetch(SITEMAP)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) { console.error('No URLs found in sitemap'); process.exit(0); }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
