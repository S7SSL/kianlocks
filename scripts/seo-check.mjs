#!/usr/bin/env node
/**
 * Post-build SEO / AIO / truthfulness lint for kianlocks.com.
 * Run after `astro build`:  npm run check:seo
 * Exits 1 on any error. Mirrors the house rules carried over from ClearLegacy:
 *  - titles ≤ 65 chars, meta descriptions 70–160 chars, exactly one <h1>
 *  - canonical present, absolute, trailing-slash form
 *  - every JSON-LD block parses; no "[PLACEHOLDER]" strings; no AggregateRating
 *    unless ALLOW_RATING=1
 *  - every FAQPage question is visible on the page (no hidden FAQ schema)
 *  - every internal link resolves to a built page or file
 *  - banned claims (see CLAIMS-REGISTER.md) never appear in visible copy
 *  - every indexable page is in the sitemap
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://kianlocks.com';
const errors = [];
const warns = [];

const BANNED = [
  [/same[- ]day (callout|fitting|appointment|lock change)/i, '"same day" promise — planned work is 2–5 working days'],
  [/fitted same day/i, '"fitted same day" — planned work is 2–5 working days'],
  [/the only (euro )?cylinder/i, '"the only cylinder" — other brands hold the same ratings'],
  [/every UK (home )?insurer/i, '"every UK insurer" overclaim'],
  [/licensed locksmith/i, 'locksmiths are not licensed in the UK'],
  [/MLA[- ]approved (company|locksmith)s? (since|—|-)|we are MLA/i, 'MLA approval claim — not held'],
  [/not an emergency or 24-hour service|don.t do emergency lockouts/i, 'contradicts 24/7 emergency-by-quote service'],
  [/5\.0 from 47|47 reviews/i, 'fabricated review count'],
];

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const sitemap = files.filter((f) => /sitemap-\d+\.xml$/.test(f)).map((f) => readFileSync(f, 'utf8')).join('');
const sitemapLocs = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

const decode = (s) => s
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;|&#x27;|&rsquo;|&lsquo;/g, "'")
  .replace(/&nbsp;/g, ' ').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—');
const norm = (s) => decode(s).replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim().toLowerCase();

for (const file of htmlFiles) {
  const rel = '/' + relative(DIST, file).replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const e = (m) => errors.push(`${rel}: ${m}`);

  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!title) e('missing <title>');
  else if (decode(title).length > 65) e(`title ${decode(title).length} chars (>65): ${decode(title)}`);

  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!noindex) {
    if (!desc) e('missing meta description');
    else {
      const n = decode(desc).length;
      if (n > 160) e(`meta description ${n} chars (>160)`);
      if (n < 70) warns.push(`${rel}: meta description only ${n} chars`);
    }
  }

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) e(`${h1s} <h1> elements`);

  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!canon) e('missing canonical');
  else if (!noindex && !/^https:\/\/kianlocks\.com\/(.*\/)?$/.test(canon)) e(`canonical not absolute trailing-slash form: ${canon}`);

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const visible = norm(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' '));
  for (const raw of blocks) {
    let data;
    try { data = JSON.parse(raw); } catch (err) { e(`JSON-LD parse error: ${err.message}`); continue; }
    const str = JSON.stringify(data);
    if (/"\[[A-Z _]+\]"|\[(STREET|POSTCODE|EMAIL|PHONE)\]/.test(str)) e('placeholder text inside JSON-LD');
    if (/AggregateRating/.test(str) && process.env.ALLOW_RATING !== '1') e('AggregateRating present — only allowed when it mirrors a real independent source');
    if (data['@type'] === 'FAQPage') {
      for (const q of data.mainEntity || []) {
        if (!visible.includes(norm(q.name))) e(`FAQPage question not visible on page: "${q.name}"`);
      }
    }
  }

  // Banned claims in visible copy
  for (const [re, why] of BANNED) if (re.test(visible)) e(`banned claim: ${why}`);

  // Internal links
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1];
    const target = href.endsWith('/') ? join(DIST, href, 'index.html') : join(DIST, href);
    if (!existsSync(target) && !existsSync(join(DIST, href + '.html')) && !existsSync(join(DIST, href, 'index.html'))) {
      e(`broken internal link ${href}`);
    } else if (!href.endsWith('/') && !/\.[a-z0-9]+$/i.test(href)) {
      warns.push(`${rel}: internal link without trailing slash (301 hop): ${href}`);
    }
  }

  if (!noindex && !sitemapLocs.has(SITE + rel)) e('indexable page missing from sitemap');
}

// llms.txt sanity
const llms = join(DIST, 'llms.txt');
if (!existsSync(llms)) errors.push('/llms.txt missing');
else {
  const t = readFileSync(llms, 'utf8');
  for (const m of t.matchAll(/\]\((https:\/\/kianlocks\.com[^)]*)\)/g)) {
    const p = m[1].replace(SITE, '');
    const f = p.endsWith('/') ? join(DIST, p, 'index.html') : join(DIST, p);
    if (!existsSync(f) && !existsSync(join(DIST, p, 'index.html'))) errors.push(`/llms.txt links to missing ${p}`);
  }
}

console.log(`Checked ${htmlFiles.length} HTML files, ${sitemapLocs.size} sitemap URLs.`);
warns.forEach((w) => console.log('  warn  ' + w));
errors.forEach((x) => console.log('  ERROR ' + x));
if (errors.length) { console.log(`\n${errors.length} error(s).`); process.exit(1); }
console.log('SEO check passed.');
