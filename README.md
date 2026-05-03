# Kian Locks — kianlocks.com

The marketing site for **Kian Locks Ltd** — a North & Central London locksmith fitting Avocet ABS 3-star high-security cylinders only.

Built with [Astro](https://astro.build), styled with vanilla CSS, deployed to GitHub Pages with a custom domain.

---

## What's in the box

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Hero + ABS pitch + process + areas + FAQ |
| Why ABS | `/why-abs` | Long-form rationale for the product choice |
| Process | `/process` | Four-step service explanation |
| About | `/about` | Company background |
| Areas | `/areas` | All boroughs covered |
| Contact | `/contact` | Phone, email, what to have ready before calling |
| Borough pages × 9 | `/locksmith/{slug}` | Per-borough landing pages — Camden, Islington, Haringey, Barnet, Enfield, Hackney, Westminster, City of London, Kensington & Chelsea |
| Privacy | `/privacy` | UK GDPR notice |
| 404 | `/404` | Custom not-found page |

**16 indexable pages, 17 routes** (404 is noindex by design).

## What you need to do before launching

Open `src/consts.ts` and replace the placeholders:

```ts
phone: '[PHONE]',          // e.g. '020 0000 0000'
phoneHref: 'tel:+44PHONE', // e.g. 'tel:+447700900123'
email: '[EMAIL]',          // e.g. 'info@kianlocks.com'
address: { ... },          // street, postcode
```

Optional but worth doing:

- Drop a real Open Graph image at `public/og-default.png` (1200×630). Right now the meta tag points to a missing file.
- Add real customer reviews to `src/data/reviews.ts` (currently placeholders) — and only then enable a Reviews section on the site.
- Add real social profile URLs to `src/consts.ts` `social` object — schema picks them up as `sameAs`.
- Once you have real Google reviews, update `rating` in `src/consts.ts` to reflect the true count.

## How SEO is wired up

| Lever | Where |
|---|---|
| **LocalBusiness JSON-LD** | `src/lib/schema.ts` → injected on every page |
| **FAQPage JSON-LD** | Homepage and every borough page → eligible for FAQ rich results |
| **BreadcrumbList JSON-LD** | Every interior page |
| **Per-borough Service schema** | Each `/locksmith/{slug}` page |
| **Sitemap** | Auto-generated on build to `/sitemap-index.xml` |
| **robots.txt** | `public/robots.txt` |
| **Canonical URLs** | Set in `BaseLayout.astro` from page path |
| **Open Graph + Twitter** | All pages, set in `BaseLayout.astro` |
| **Web manifest** | `public/site.webmanifest` |
| **Mobile-first responsive** | All breakpoints in `src/styles/global.css` |
| **Skip link, focus styles, semantic HTML** | Throughout |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/ locally
```

> **OneDrive note:** if you're running builds from inside the OneDrive folder, you may see "Operation not permitted" errors during cleanup because OneDrive locks files mid-sync. Either pause OneDrive sync during builds, or just rely on GitHub Actions (which builds in a clean Ubuntu environment on every push).

## Deployment

See [`DEPLOY.md`](./DEPLOY.md) for the step-by-step GitHub Pages walkthrough.

## File map

```
website/
├── astro.config.mjs       # Astro config (site URL, sitemap)
├── package.json
├── public/                # Static files served as-is
│   ├── CNAME              # GitHub Pages custom domain
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── consts.ts          # Site-wide constants (NAP, brand, social)
│   ├── components/        # Header, Footer, Logo, Breadcrumbs, CtaStrip
│   ├── data/              # boroughs.ts, faqs.ts, reviews.ts
│   ├── layouts/
│   │   └── BaseLayout.astro  # Master template — meta, OG, schema, header, footer
│   ├── lib/
│   │   └── schema.ts      # JSON-LD builders
│   ├── pages/             # One file per route (Astro convention)
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── areas.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── process.astro
│   │   ├── why-abs.astro
│   │   ├── 404.astro
│   │   └── locksmith/
│   │       └── [slug].astro  # Dynamic borough pages
│   └── styles/
│       └── global.css     # Design system + components
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions → GitHub Pages
```

## License

© Kian Locks Ltd. All rights reserved.
