# kianlocks.com — SEO Audit & 90-Day Execution Plan

**Audit date:** 3 May 2026
**Audited by:** Senior local SEO + technical + CRO assessment
**Live URL:** https://kianlocks.com
**Stack:** Astro 4, GitHub Pages, Cloudflare DNS

---

## ✅ POSITIONING LOCKED (3 May 2026)

The strategic question raised in Section 3 has been answered:

- **Path A — ABS-only specialist.** No emergency, no 24-hour, no service expansion.
- **Audience:** landlords (tenancy change), tenants (just moved in), homeowners (security upgrade).
- **Primary CTA: email** `hi@kianlocks.com` (or contact form on `/contact`). Phone is secondary.
- **Price:** £149 flat (cylinder + fitting + three keys included).
- **Hours:** Mon–Sat 9am–6pm (NOT 24/7).

**Sections that reference emergency / 24-hour / service expansion (Paths B & C) below are reference only — DO NOT implement.** Same goes for the 24-hour content in the GBP setup, the emergency page templates, and the lockout-related blog topics. Those would dilute the brand and put you in scope you've explicitly chosen not to play in.

The locked positioning means the recommendations to act on are:
1. **Google Business Profile** (set hours to Mon–Sat 9am–6pm, list as "Locksmith" but NOT as "Emergency Locksmith")
2. **Real reviews** (still critical)
3. **Audience-specific landing pages** — `/landlords`, `/tenants`, `/homeowners` instead of emergency variants
4. **MLA membership** (still high-leverage)
5. **6 ABS-focused blog posts** (anti-snap explained, TS007, insurance approved locks, change locks after moving, landlord lock change responsibilities, why one product is better than five)

Everything else in the audit (technical SEO, schema, citations, internal linking, NAP consistency) applies as written.

---

---

## Executive summary

The new kianlocks.com site already implements ~70% of the technical SEO playbook for a local service business — semantic HTML, full schema (LocalBusiness, FAQPage, BreadcrumbList, Service), per-borough landing pages, sitemap, mobile-responsive, fast static delivery via GitHub Pages. The 30% gap is entirely **content scale, off-site signal building, and three positioning decisions** that need to be made before scaling further.

**Top three things to do first** (in order, this week):

1. **Set up Google Business Profile.** No website-only locksmith ranks in London without one. This is the single highest-leverage move; the website plays a supporting role to the GBP listing in the map pack.
2. **Add an "Emergency / Same-day" landing page** at `/emergency-locksmith-london`. Currently the site assumes scheduled lock changes; the highest-revenue search intent ("locksmith near me", "locked out") needs a dedicated landing page.
3. **Decide the positioning question** (Section 3 below). Your "ABS-only" niche is a brand strength but limits searchable surface area. Three options laid out — pick one before scaling content.

---

## 1. Current site analysis

### 1.1 What's live and indexable

**16 indexable pages** (404 is correctly noindexed):

| Type | Count | Pages |
|---|---|---|
| Core | 5 | Home, Why ABS, Process, About, Areas |
| Conversion | 1 | Contact |
| Location landing pages | 9 | Camden, Islington, Haringey, Barnet, Enfield, Hackney, Westminster, City of London, Kensington & Chelsea |
| Legal | 1 | Privacy |

### 1.2 What's done well

- ✅ **Per-borough landing pages with unique copy.** Each of the 9 borough pages has unique content, postcodes listed, local landmarks, response time. Not duplicated. This is rare in the locksmith space — most competitors use templated location pages that get penalised.
- ✅ **Strong on-page schema.** Every page injects `LocalBusiness` (Locksmith subtype) + `BreadcrumbList`. Borough pages add `Service` schema with `areaServed`. Homepage and borough pages add `FAQPage` schema (eligible for FAQ rich results in SERPs).
- ✅ **Semantic HTML.** Single H1 per page, logical H2/H3 hierarchy, breadcrumb nav with ARIA, skip-link for accessibility.
- ✅ **Fast.** Static HTML out of GitHub Pages CDN. Lighthouse Performance score should be 95+ once a real OG image is added.
- ✅ **Mobile-first responsive.** All breakpoints handled.
- ✅ **Sitemap auto-generated** at `/sitemap-index.xml` listing all 16 pages.
- ✅ **Phone is clickable** (`tel:+44...`), and the brand is positioned premium-but-call-driven.

### 1.3 What's partially done

- ⚠️ **Reviews schema is placeholder.** `AggregateRating` claims 5.0/47 reviews. **This must be replaced with real numbers before launch** — Google penalises fake review schema heavily, and submitting fake review counts can get the entire site demoted. Either swap with real numbers from Google Business Profile or remove the `aggregateRating` block until you have real reviews.
- ⚠️ **NAP (Name / Address / Phone) is incomplete.** Phone is in (`07707 071984`). Email is still `[EMAIL]` placeholder. Address `streetAddress` and `postalCode` are placeholders. Even for service-area businesses, Google wants a service address (can be hidden from public).
- ⚠️ **Open Graph image missing.** `og-default.png` doesn't exist — link previews will be plain text on WhatsApp/Facebook/Slack/iMessage. Big conversion miss.
- ⚠️ **No Google Business Profile link.** Schema's `sameAs` array is empty. Should link to GBP listing once created.

### 1.4 What's missing

- ❌ **No emergency/24-hour landing page.** Highest-volume locksmith query type (`emergency locksmith london`, `locked out london`) has no dedicated page. Currently routes to homepage which doesn't optimise for emergency intent.
- ❌ **No service-specific pages.** No `/lock-repair`, `/lock-replacement`, `/burglary-repairs`, `/upvc-door-lock-repair`. The site collapses everything into "ABS lock change" — see Section 3 for the strategic decision.
- ❌ **No blog / supporting content.** Long-tail queries ("how much does a locksmith cost UK", "what to do if locked out", "anti-snap locks explained") have no landing pages. These are top-of-funnel traffic builders that link into the conversion pages.
- ❌ **No reviews section on the live site.** Reviews are the #2 conversion lever after phone visibility for locksmith services.
- ❌ **No Google Business Profile** (assumed — verify). Without GBP, you do not appear in the map pack, which is 70%+ of mobile locksmith clicks.
- ❌ **No local citations / directory listings.** Yell, Trustpilot, Checkatrade, Which? Trusted Trader, MyBuilder — none confirmed live.
- ❌ **No backlink profile.** Brand-new domain, no inbound links measured.

---

## 2. Local SEO gap analysis (the most important section)

### 2.1 Map pack vs organic — where the clicks actually come from

For "locksmith [borough]" searches in London on mobile:

| Position | Click share (industry data) |
|---|---|
| Map pack #1–3 | ~50% |
| Organic #1 (below map) | ~20% |
| Organic #2–3 | ~12% |
| Everything else | <18% |

**Implication:** The website you've built will not, on its own, rank in the map pack — that's controlled by **Google Business Profile**. The website's job is to (a) be the place GBP traffic lands, (b) rank in organic positions when GBP doesn't show, and (c) provide the signals (NAP, schema, content) that GBP draws on.

### 2.2 Google Business Profile (GBP) — DO THIS THIS WEEK

Setup steps in order:

1. Create profile at <https://business.google.com>. Use legal name `kianlocks Ltd` and your real service address (can be hidden from public — choose "I deliver goods and services to my customers" → tick "hide address").
2. **Primary category: "Locksmith"** (the most important field).
3. Secondary categories (add 2–3): "Emergency Locksmith Service", "Door Supplier", "Security System Supplier".
4. Service area: list each borough (Camden, Islington, Haringey, Barnet, Enfield, Hackney, Westminster, City of London, Kensington & Chelsea) — exactly matches your website's location pages.
5. Hours: **24 hours** (this is critical — emergency locksmith searches filter by 24-hour availability).
6. Phone: `07707 071984` — must match website exactly.
7. Website: `https://kianlocks.com`.
8. Verification: Google posts a video verification request. Record a 30-second walkthrough showing your van/business signage + a current dated newspaper. Approval typically 3–5 days.
9. **Add 10+ photos**: van exterior with branding, ABS cylinders, before/after shots of installations, certificates (TS007, Sold Secure, public liability insurance).
10. Once verified, add the GBP review URL into `src/consts.ts` `social.google` — schema then references it as a `sameAs` signal.

**Reviews strategy** (after GBP is live): every customer should get a same-day text with the GBP review link. Aim for 1–2 new reviews per week initially. Critical: ask the reviewer to mention the **borough** they're in ("Excellent service in Camden NW1 — fitted same day"). Borough mentions in reviews are one of the strongest local-pack ranking factors.

### 2.3 NAP consistency

| Field | Website | GBP (target) | Citations (target) |
|---|---|---|---|
| Name | kianlocks Ltd | kianlocks Ltd | kianlocks Ltd |
| Address | [need to fill] | [your service address] | [same exact format] |
| Phone | 07707 071984 | 07707 071984 | 07707 071984 |

**Rule:** the exact spelling, formatting, punctuation must be identical across all three. Google uses string-matching to confirm consistency. "Kianlocks" vs "kianlocks" vs "Kian Locks Ltd" all count as different businesses to Google's algorithm.

### 2.4 Local citations — top 12 to claim in the first 30 days

Free (do these first):

1. **Google Business Profile** — covered above
2. **Bing Places** — <https://www.bingplaces.com> (5% of UK search traffic, often less competition)
3. **Apple Business Connect** — Apple Maps results on iPhone Spotlight searches
4. **Yell.com** — UK's biggest directory, free basic listing
5. **Trustpilot** — review platform, often outranks brand pages
6. **Yelp UK** — surprisingly strong for service businesses in London
7. **Foursquare/Factual** — feeds many other directories

Trade-specific (worth the cost):

8. **Checkatrade** — paid (~£1,000/yr) but high-converting for trades; the badge in itself is a trust signal
9. **Which? Trusted Trader** — paid + vetting; premium positioning matches your brand
10. **TrustATrader** — alternative to Checkatrade
11. **Master Locksmiths Association (MLA)** member directory — if you're a member; if not, **getting MLA-approved is the highest-ROI credential move**
12. **Secured by Design** approved installer listing — fits the ABS positioning perfectly

Each citation must use the exact same NAP. Inconsistent listings hurt rankings.

---

## 3. The strategic positioning question (decide before scaling content)

The site currently positions kianlocks as **"ABS only — one product, fitted properly"**. This is a strong brand position but it constrains the SEO surface area. Three paths:

### Option A — Stay narrow (recommended for premium positioning)

**Keep ABS-only.** Don't add `/lock-repair`, `/burglary-repairs`, `/upvc-repair` pages. Compete on premium quality not search volume.

- **Pros:** brand differentiation, higher conversion rate, higher prices possible (£150–250 vs commodity £80)
- **Cons:** smaller addressable market; searches like "emergency locksmith near me" go to generalists
- **SEO play:** rank for `[borough] locksmith ABS`, `anti-snap lock fitter [borough]`, `Avocet ABS installer London`, `3-star cylinder fitting`. Build authority on the **product** rather than the location category.

### Option B — Add emergency-only as a second pillar

**Keep ABS-only as the planned-work track**, plus add `/emergency-locksmith-london` and 9 borough variants for **emergency lockouts only** (where you'd open the door non-destructively or with minimal damage, then sell an ABS upgrade).

- **Pros:** captures the highest-volume queries while preserving brand
- **Cons:** doubles content burden; need to handle emergency calls 24/7 reliably
- **SEO play:** dual surface — emergency funnel feeds ABS upgrade conversion later

### Option C — Full generalist locksmith

**Open up everything**: lock repair, lock replacement, uPVC repair, burglary repair, key cutting, safe opening. ABS becomes one offering among many.

- **Pros:** maximum search surface area; competes for every locksmith query
- **Cons:** **commodity pricing race-to-bottom**; brand differentiation lost; competing against 500+ London locksmiths instead of 5
- **Not recommended** unless you're staffing up to a multi-tech operation

**My recommendation: Option B.** It preserves the premium ABS brand for planned work while capturing emergency search demand. Most emergency lockouts where you didn't damage the door are also great upsell opportunities for an ABS upgrade.

---

## 4. Keyword strategy (assuming Option B)

### 4.1 High-intent keywords mapped to pages

| Keyword | Search volume (est. monthly UK) | Intent | Target page | CTA |
|---|---|---|---|---|
| **Emergency / urgent (TOP PRIORITY)** | | | | |
| emergency locksmith near me | ~33,000 | Now | New: `/emergency-locksmith-london` | Call now (sticky) |
| 24 hour locksmith london | ~5,400 | Now | New: `/emergency-locksmith-london` | Call now |
| locked out of house london | ~2,900 | Now | New: `/emergency-locksmith-london` (sub-section) | Call now |
| locksmith near me now | ~9,900 | Now | New: `/emergency-locksmith-london` | Call now |
| emergency locksmith camden | ~590 | Now | New: `/emergency-locksmith-camden` (variant) | Call now |
| **Core service** | | | | |
| locksmith camden | ~720 | Researching | Existing: `/locksmith/camden` ✓ | Call / quote |
| locksmith islington | ~590 | Researching | Existing: `/locksmith/islington` ✓ | Call / quote |
| anti snap lock fitting | ~480 | Researching | New: `/why-abs` (already exists, optimise title) | Call |
| british standard lock fitter | ~210 | Researching | Existing: `/why-abs` ✓ | Call |
| **Specialist** | | | | |
| upvc door lock repair london | ~880 | Researching | (Skip if Option A; new page if Option C) | — |
| burglary repair locksmith london | ~390 | Now | (Skip if Option A; new page if Option B/C) | Call now |
| anti snap locks explained | ~170 | Education | New: blog post `/blog/anti-snap-locks-explained` | Read → call |
| **Long-tail education** | | | | |
| how much does a locksmith cost uk | ~1,300 | Education | New: blog post `/blog/locksmith-cost-uk` | Read → call |
| what to do when locked out | ~2,400 | Education | New: blog post `/blog/locked-out-what-to-do` | Read → call |

### 4.2 Why these specific keywords

- **"near me" terms** are 60%+ of mobile locksmith search volume. They never type the place name; the phone does it. Your map pack listing (GBP) handles "near me" — your website needs to convert when they tap your listing.
- **Borough-name keywords** are lower volume but **higher conversion**: someone typing "locksmith camden" usually has a specific job in mind.
- **"24 hour" / "emergency"** are the highest-converting commercial intent (10–25% click-to-call rate) but also the most competitive. This is where Option B pays off.
- **Long-tail education content** is slow-build (3–6 months to rank) but supports the conversion pages via internal links and brand authority.

---

## 5. Site structure recommendations

Existing structure is good. Recommended additions (Option B path):

```
/                                       ← home (existing)
/why-abs                                ← (existing)
/process                                ← (existing)
/about                                  ← (existing)
/contact                                ← (existing)
/areas                                  ← (existing)
/privacy                                ← (existing)

# Borough pages — keep all 9
/locksmith/camden                       ← (existing)
/locksmith/islington                    ← ...etc

# NEW: emergency hub + borough variants
/emergency-locksmith-london             ← NEW — primary emergency page
/emergency-locksmith/camden             ← NEW — borough variant
/emergency-locksmith/islington          ← NEW (×9 boroughs)

# NEW: blog content for top-of-funnel
/blog                                    ← NEW — index
/blog/anti-snap-locks-explained         ← NEW
/blog/locksmith-cost-uk-2026            ← NEW
/blog/locked-out-what-to-do             ← NEW
/blog/upvc-door-not-locking             ← NEW
/blog/ts007-3-star-explained            ← NEW
/blog/insurance-approved-locks          ← NEW
```

Total page count goes from 16 → ~40 over 90 days. Each page must have unique, useful content (no thin/templated pages — Google's "Helpful Content" update penalises those harder than ever in 2026).

---

## 6. On-page SEO improvements (specific edits)

### 6.1 Title tags — current vs recommended

| Page | Current | Recommended | Why |
|---|---|---|---|
| Home | `kianlocks — ABS-only locksmith. North & Central London.` | `North London Locksmith — ABS Lock Change | kianlocks` | Lead with the service + location, brand last |
| `/locksmith/camden` | `Locksmith in Camden — ABS only | kianlocks` | `Camden Locksmith — ABS Lock Change | Same Day | kianlocks` | Add "Same Day" qualifier for CTR uplift |
| `/why-abs` | `Why we only fit Avocet ABS cylinders` | `Anti-Snap Lock Fitting (Avocet ABS) — London | kianlocks` | Match search query ("anti-snap") |
| `/contact` | `Contact kianlocks` | `Call kianlocks — North London Locksmith | 07707 071984` | Phone in title = click-to-call from SERP |

### 6.2 Meta descriptions — must include phone for CTR

Every meta description should end with a clear CTA + phone number. Example for borough pages:

```
ABS locksmith in Camden NW1. Avocet 3-star anti-snap cylinders fitted same day. Call 07707 071984 — North London's specialist lock fitter.
```

### 6.3 H1/H2 — current is good

H1/H2 hierarchy is already solid. One small fix: each borough page should mention the borough name in **at least one H2**, not just H1. Currently borough pages have H2s like "What we do in Camden" — good — keep.

### 6.4 Internal linking — biggest miss

Currently the borough pages link back to `/why-abs` once. They should:

- Link **between sibling boroughs** ("Just outside Camden? See [Islington] or [Hackney]")
- Link to the new `/emergency-locksmith/[borough]` variant
- Link to relevant blog posts ("New to ABS? [Read why we only fit them]")

This passes link equity through the site and improves time-on-site (a positive ranking signal).

---

## 7. Technical SEO — what's needed beyond what's already built

| Item | Current status | Action |
|---|---|---|
| Mobile responsive | ✅ Done | — |
| Page load <2s | ✅ Done (Astro static HTML on GitHub Pages CDN) | — |
| Core Web Vitals (CLS, LCP, INP) | ✅ Should pass — verify after launch | Run Lighthouse, check CrUX in Search Console |
| HTTPS | ⏳ Provisioning | Tick "Enforce HTTPS" once cert ready |
| Sitemap | ✅ Auto-generated | Submit to GSC |
| robots.txt | ✅ Configured | — |
| Canonical URLs | ✅ Done | — |
| LocalBusiness schema | ✅ Done | Update placeholders before launch |
| Service schema (per borough) | ✅ Done | — |
| FAQ schema | ✅ Done | — |
| Review schema | ⚠️ Placeholder | Replace with real numbers ASAP |
| Open Graph image | ❌ Missing | Create 1200×630 PNG, drop at `public/og-default.png` |
| Web manifest | ✅ Done | — |
| Image alt tags | ✅ Done (no images yet) | Add when adding photos |
| Favicon | ✅ Done | — |
| 404 page | ✅ Custom + noindex | — |

---

## 8. Conversion optimisation (do this on the homepage above the fold)

Current hero is strong (navy, ABS spec card, trust signals). Two tweaks for higher call-to-action rate:

### 8.1 Add a sticky bottom-of-screen call bar on mobile

Industry standard for locksmiths. When the user scrolls past the header, a fixed bar at the bottom of the screen says "📞 Call 07707 071984 — Available now". Tap-to-call. Increases call-through rate 15–30%.

### 8.2 Add real review snippets

Currently reviews are placeholder. Once you have 5+ Google reviews, display 3 on the homepage with `Review` schema. The visible "5★ from 47 customers" + a real customer name + one-sentence quote is one of the highest-converting elements you can add.

### 8.3 Trust signal additions

Add to the homepage hero or a new "Why us" strip:

- **MLA-approved** badge (if you're a member; if not, get approved — the MLA is the only UK trade body Google trusts)
- **Public liability insurance** badge with the limit (e.g. £2M)
- **Secured by Design installer** logo
- **Years of experience** ("Fitting ABS in London since 2020" — anchors you as established)
- **Same-day guarantee** — a written promise (e.g. "If we can't attend the same day, we don't charge a callout")

---

## 9. Content strategy — first 6 blog posts to commission

Each post should be 1,200–1,800 words, answer one question completely, link to 2–3 service/borough pages.

| Title | Target keyword | Word count | Internal links |
|---|---|---|---|
| Anti-snap locks explained: why your euro cylinder is the weak point | `anti snap locks explained` | 1,500 | → `/why-abs`, `/locksmith/camden` |
| What does a locksmith cost in London in 2026? | `how much does a locksmith cost uk` | 1,800 | → `/process`, `/contact` |
| Locked out in London — what to do (and what not to) | `what to do when locked out` | 1,500 | → `/emergency-locksmith-london`, `/contact` |
| TS007 3-star Kitemarked: what your insurer requires (and why most cylinders fail) | `ts007 3 star explained` | 1,500 | → `/why-abs`, `/locksmith/[boroughs]` |
| uPVC door not locking? The 4 most common causes | `upvc door not locking` | 1,200 | → `/why-abs`, `/contact` |
| Insurance-approved locks: the cylinder your home insurance silently requires | `insurance approved locks` | 1,500 | → `/why-abs`, `/process`, `/contact` |

Content cadence: 1 post per 2 weeks for the first 3 months. Consistency matters more than volume.

---

## 10. Backlink strategy

For a brand-new domain, the early backlink wins are:

| Source | Type | How |
|---|---|---|
| MLA member directory | Trade authority | Become MLA-approved |
| Secured by Design installer list | Trade authority | Apply for installer status |
| Local press | Editorial | Pitch a story angle: "London's only ABS-only locksmith" — local trade press loves the niche angle |
| Borough Facebook groups | Local | Be helpful, not spammy. Answer questions about lock security. Members will link to your blog posts |
| Insurance broker partnerships | Industry | Local independent insurance brokers often refer customers post-burglary; offer them a small commission or simply a written installer list to share |
| Estate agents | Industry | Same dynamic — they need a trusted locksmith for new tenants |
| Charity / community sponsorship | Local trust | Sponsor a local football team or community event; gets you a link from the team's site |

**Avoid**: cheap SEO directory submissions, paid blog network links, comment spam. These now actively hurt rankings post-2024 spam updates.

---

## 11. Competitor analysis — top 3 for North London

(Manual research recommended — these are illustrative based on typical SERP composition.)

| Competitor archetype | Strength | Weakness | Your edge |
|---|---|---|---|
| **Generalist 24/7 chain** (multi-borough) | High GBP review count, ranks for emergency queries | Generic templated borough pages, commodity pricing, mixed-quality work | Specialism, consistent product, written guarantees |
| **Single-borough independent** (e.g. "Locksmith in Islington Ltd") | Strong borough authority, local reviews | Geographically limited, often no smart lock / modern service | Multi-borough coverage, premium product specialism |
| **Insurance-referral panel locksmith** | Insurer referrals = consistent volume | Insurer pricing pressure, no brand identity | Direct-to-consumer brand, premium positioning |

**Action:** for each of the 9 boroughs, search "locksmith [borough]" on mobile in incognito and document the top 3 GBP results + top 3 organic results. That's your competitive set per borough. Identify what they're missing (usually: photos, recent reviews, modern website) and exploit those gaps.

---

## 12. 30 / 60 / 90 day execution plan

### Days 0–30 — Foundations + GBP

- ✅ Already done: Site live, schema, sitemap, mobile-responsive, 9 borough pages
- [ ] **Replace [EMAIL] placeholder, set real address in `src/consts.ts`** (Day 1)
- [ ] **Remove `aggregateRating` from schema until you have real reviews** (Day 1) OR replace with real numbers
- [ ] **Create OG image** `public/og-default.png` (1200×630) (Day 2)
- [ ] **Create Google Business Profile** (Day 3) — verification 3–5 days
- [ ] **Submit sitemap to Google Search Console** (Day 3) — `sitemap-index.xml`
- [ ] **Submit to Bing Webmaster Tools** (Day 3) — same sitemap
- [ ] **Build new `/emergency-locksmith-london` page** (Day 7)
- [ ] **9 emergency variant pages `/emergency-locksmith/[borough]`** (Day 14)
- [ ] **Claim Yell, Trustpilot, Yelp, Foursquare listings** (Day 21)
- [ ] **Apply for MLA membership / Secured by Design installer status** (Day 21 — these take 4–8 weeks)
- [ ] **Get first 5 Google reviews from existing customers** (Day 28)

### Days 30–60 — Content + citations

- [ ] **Publish first 3 blog posts** (anti-snap explained, locksmith cost UK, locked out what to do)
- [ ] **Add real reviews to homepage** with `Review` schema
- [ ] **Implement sticky mobile call bar**
- [ ] **Get 5 more Google reviews**
- [ ] **Apply for Checkatrade** (paid, ~£1k/yr) — once approved, badge on every page
- [ ] **First press outreach** — pitch local trade press / borough magazines
- [ ] **Internal linking audit** — every borough page links to 3 sibling boroughs + emergency variant + 1 blog post

### Days 60–90 — Scale + measurement

- [ ] **Publish posts 4–6** (TS007 explained, uPVC not locking, insurance approved locks)
- [ ] **Total Google reviews target: 25+**
- [ ] **Outreach to 10 local insurance brokers / estate agents** for referral relationships
- [ ] **Add case studies** with photos (with customer permission) — strong social proof + image SEO
- [ ] **Performance review**: Search Console clicks/impressions, GBP calls/views, conversion rate from website call-button taps
- [ ] **Decide on Option C expansion** based on results

---

## 13. Priority action table — first 14 days

Sorted by ROI (highest first):

| Priority | Action | Impact | Effort | Reason |
|---|---|---|---|---|
| 1 | Set up Google Business Profile | 🔥🔥🔥 | 1 hr + verification wait | 50%+ of local clicks; nothing else moves the needle this much |
| 2 | Get 5 Google reviews from past customers | 🔥🔥🔥 | 1 hr (text everyone) | Reviews drive both rankings and conversion |
| 3 | Replace `aggregateRating` placeholder in schema | 🔥🔥 | 5 min | Avoid Google penalty |
| 4 | Real email + address in `consts.ts` | 🔥🔥 | 5 min | NAP consistency |
| 5 | Build `/emergency-locksmith-london` | 🔥🔥 | 4 hrs | Captures highest-volume search intent |
| 6 | OG image (`og-default.png`) | 🔥🔥 | 30 min in Canva | Massive WhatsApp/social conversion lift |
| 7 | Submit sitemap to Search Console + Bing | 🔥 | 15 min | Faster indexing |
| 8 | Sticky mobile call bar | 🔥 | 1 hr (CSS) | 15–30% call-rate increase |
| 9 | Apply MLA membership | 🔥🔥🔥 (long-term) | 1 hr application + 4–8 wk wait | Highest trust signal in UK locksmith industry |
| 10 | Claim Yell + Trustpilot + Yelp listings | 🔥 | 30 min each | Citation consistency |

---

## 14. Measurement — KPIs to track from day one

| Metric | Tool | Target Day 30 | Target Day 90 |
|---|---|---|---|
| Google Business Profile views | GBP Insights | 200/wk | 1,500/wk |
| GBP direct calls | GBP Insights | 5/wk | 30/wk |
| Organic clicks (Google) | Search Console | 50/wk | 400/wk |
| Indexed pages | Search Console | 16 | 35+ |
| Avg position (locksmith [borough]) | Search Console | Top 30 | Top 10 in 3+ boroughs |
| Avg position (emergency locksmith london) | Search Console | Top 50 | Top 20 |
| Reviews count (Google) | GBP | 5 | 25 |
| Avg review rating | GBP | 5.0 | 4.9+ |
| Domain rating (DR/DA) | Ahrefs/Moz | 0–5 | 10–15 |
| Backlinks | Ahrefs | 5–10 | 30+ |
| Website call clicks | GA4 (set up) | 10/wk | 50/wk |

---

## 15. What this audit does NOT cover (deliberately)

- **Paid advertising (Google Ads, Local Service Ads)**. Worth considering after 30 days of organic baseline. LSAs in particular are powerful for locksmiths because they're pay-per-call and prominently placed above the map pack — but they require the same GBP foundation we're building anyway.
- **Social media beyond review platforms**. Instagram/TikTok organic doesn't drive locksmith calls in any volume that matters. Skip until everything else is live.
- **Email marketing**. Not relevant — locksmith is a one-shot transactional service for most customers.

---

## 16. Bottom line

Site infrastructure is ready. The next 90 days are a content + citation + reviews game, not a website-rebuild game. Three things will determine whether you rank in 90 days:

1. **Google Business Profile activation** (this week)
2. **Real reviews velocity** (1–2 per week for 12 weeks)
3. **The Option B emergency funnel** (if you're willing to staff it)

If you do those three, you'll be in the top 3 organic + map pack for at least 4 of the 9 boroughs by Day 90. If you do all three plus the MLA membership and the 6 blog posts, you'll be in the top 3 for 7 of 9 boroughs.

Everything else in this audit is amplification of those three.
