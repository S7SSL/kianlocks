# kianlocks.com — SEO & AI-visibility build (23 Sep 2026)

The ClearLegacy SEO/AIO playbook, applied to kianlocks. What shipped in code, and what only Sat can do.

## What changed in the repo

**Trust & accuracy (the ClearLegacy "truthfulness first" rule)**
- Removed the fabricated `AggregateRating 5.0 / 47 reviews` that was live in schema on every page.
- Removed `[STREET]` / `[POSTCODE]` placeholders that were live in JSON-LD.
- Added Companies House trading disclosures (legally required on a Ltd company website).
- Fixed contradictions: "we don't do emergency lockouts" vs the 24/7 emergency service; "same day" vs 2–5 working days; "the only 3-star cylinder"; "every UK insurer accepts"; unverifiable borough claims.
- `CLAIMS-REGISTER.md` — every claim, its source and re-verify date.

**Structured data**
- One `Locksmith` entity (`/#business`) with `legalName`, Companies House `identifier`/`sameAs`, contact points (bookings + 24/7 emergency), Mon–Sat 9–6 hours, `knowsAbout`, and a real `Offer` (£149.00 GBP).
- `Service` + `Offer` on home, why-abs, every borough and every landing page (the kianlocks equivalent of CL's Product/Offer fix).
- `Article` (datePublished/dateModified) on guides; `CollectionPage` on the guides hub.
- **Visible-FAQ rule** built into a component: `<FaqBlock>` renders the questions and the FAQPage JSON-LD from one array, so schema can never be hidden. Borough pages previously had FAQ schema with no visible FAQ — now each has four visible, borough-specific questions.

**AI-Overview / assistant visibility**
- "Quick answer" boxes (CL house pattern) on home, why-abs, all 9 boroughs, all guides and landing pages.
- `/llms.txt` generated at build from the same constants (prices/hours/pages can't drift), with an explicit "accuracy notes" section so assistants don't repeat wrong claims.
- `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot etc.
- `max-snippet:-1, max-image-preview:large` robots meta.
- IndexNow key + post-deploy job pings Bing/Yandex with every sitemap URL (Bing feeds Copilot and ChatGPT search).

**New pages (13)** — citation-engine content, all sourced and dated:
- Guides hub `/guides/`
- `/guides/lock-change-cost-london/` (the CL cost-guide equivalent)
- `/guides/best-anti-snap-euro-cylinders-uk/` (the CL "top providers" comparison equivalent — honest, includes brands we don't fit)
- `/guides/ts007-3-star-explained/`, `/guides/lock-snapping-explained/`, `/guides/insurance-approved-locks/`
- `/guides/do-landlords-have-to-change-locks/`, `/guides/can-tenants-change-locks/`
- `/guides/how-to-choose-a-locksmith-london/`
- `/landlord-lock-change-london/`, `/new-tenant-lock-change-london/`, `/3-star-lock-upgrade-london/` (the Path A pages from the May playbook, never built until now)
- `/emergency-locksmith-london/` (quoted-per-job, no price published)

**Technical**
- Canonicals, sitemap and every internal link now use the trailing-slash URLs GitHub Pages actually serves (previously canonicals pointed at URLs that 301).
- Sitemap `lastmod` is per-page and only moves when content changes (was: every URL = build time on every deploy).
- Titles ≤ 65, metas ≤ 160 on every page; internal linking between boroughs, guides and services; header gains Guides + Prices.
- Mobile sticky "Book · £149 flat / Call" bar.
- `scripts/seo-check.mjs` runs in CI before deploy and fails the build on: long titles/metas, missing canonicals, broken internal links, bad JSON-LD, placeholders, any AggregateRating, hidden FAQ questions, banned claims, pages missing from the sitemap.
- `package-lock.json` re-synced (npm ci was failing locally).

## Only Sat can do these (in priority order)

1. **Push** (see commands in chat). CI will build, lint, deploy, then ping IndexNow.
2. **Google Search Console** — add `https://kianlocks.com` (or the domain property), submit `https://kianlocks.com/sitemap-index.xml`, request indexing for `/`, `/guides/lock-change-cost-london/`, `/guides/best-anti-snap-euro-cylinders-uk/`, `/landlord-lock-change-london/`.
3. **Bing Webmaster Tools** — already verified; submit the sitemap there too.
4. **Google Business Profile** — the single biggest local lever. Category "Locksmith", service-area business (hide address), the 9 boroughs, hours Mon–Sat 9–6, phone 07707 071984, website https://kianlocks.com. Then put the GBP URL in `SITE.social.google` (it flows into `sameAs`).
5. **Reviews** — send every past customer the GBP review link. When real reviews exist, set `SITE.rating` (with source) and build with `ALLOW_RATING=1`. Never before.
6. **Apple Business Connect + Bing Places** — same NAP: `kianlocks` · 07707 071984 · https://kianlocks.com.
7. **Insurance** — confirm the public liability policy is live; the site says "certificate on request".
8. **MLA approval** — the site says we do not claim it. If you pursue it and get it, update `CLAIMS-REGISTER.md`, `llms.txt` and the choosing-a-locksmith guide.
9. **Re-verify** the competitor cylinder table and cost figures by March 2027 (and before Jan 2027, when the 2024 standards take full effect).
