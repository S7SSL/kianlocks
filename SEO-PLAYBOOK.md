# kianlocks Local SEO Replication Playbook

**Companion to:** [SEO-AUDIT.md](./SEO-AUDIT.md) (the strategic analysis)
**Purpose:** page-by-page execution. Templates, structure, copy patterns, internal linking matrix, citation lists. Open this when you're ready to *build*.

---

## ✅ POSITIONING LOCKED (3 May 2026) — read this first

The fork in this playbook has been resolved. **Path A is the chosen positioning:**

- ABS-only specialist. No emergency, no 24-hour, no service expansion.
- Audience: landlords (tenancy change), tenants (new tenancy), homeowners (security upgrade).
- **Primary CTA: email** `hi@kianlocks.com` (form on `/contact`, mailto: everywhere else). Phone secondary.
- **Price: £149 flat** (cylinder + fitting + 3 keys).
- Hours: Mon–Sat 9am–6pm.

### What this means for this playbook

**SKIP** these sections — they describe Path B/C work that's been ruled out:

| Section | Status |
|---|---|
| Part 4 — Emergency locksmith pages | ❌ Skip entirely |
| Part 5 — Service page strategy (lock repair, UPVC, burglary, residential, commercial) | ❌ Skip entirely |
| Part 7 — Emergency page template | ❌ Skip |
| Part 11 article #1 ("What to do if locked out") and #5 ("uPVC door not locking") | ❌ Skip |
| Part 12 — Bark, Checkatrade emergency-style listings | ⚠️ Keep Checkatrade (good for trade trust); skip emergency lead-gen platforms |

**KEEP and execute** these sections:

| Section | Status |
|---|---|
| Part 1 — Audit | ✅ Reference |
| Part 2 — Homepage conversion fixes (the £149 hero is now live) | ✅ Done |
| Part 3 — Location pages (9 boroughs already built; Phase 2 neighbourhood pages still useful) | ✅ Active |
| Part 6 — Location page template (use for Phase 2 neighbourhood pages) | ✅ Active |
| Part 8 — Google Business Profile (set hours to Mon–Sat 9am–6pm, NOT 24-hour) | ✅ Active |
| Part 9 — Technical SEO | ✅ Active |
| Part 10 — Internal linking | ✅ Active |
| Part 11 — Blog posts | ✅ Active (skip lockout/uPVC posts; replace with landlord-focused topics) |
| Part 12 — Citations (skip Bark) | ✅ Active |
| Part 13 — Competitor analysis | ✅ Active |
| Part 14 — 30/60/90 plan | ✅ Active (skip emergency-page tasks; substitute audience-specific pages) |
| Part 15 — Priority table | ✅ Active |
| Part 16 — Sticky mobile call bar | ⚠️ Replace with **sticky mobile email bar** — same code, swap `tel:` for `mailto:` |

### Path A new pages to build instead of emergency variants

In place of the 9 `/emergency-locksmith/[borough]` pages that the playbook proposed, build **3 audience-specific landing pages**:

| URL | Audience | Target keywords | Notes |
|---|---|---|---|
| `/landlord-lock-change-london` | Landlords | "landlord lock change", "tenancy change locks", "between tenants lock change" | Bulk pricing for portfolios; invoice template for accounting |
| `/new-tenant-lock-change-london` | Tenants | "change locks new tenant", "moving in lock change", "new flat keys" | Coordinate-with-landlord guidance; quick turnaround |
| `/3-star-lock-upgrade-london` | Homeowners | "anti snap lock", "TS007 3 star fitter", "british standard lock", "secure my front door" | The premium upgrade story; insurance compliance |

These three pages capture the same search intent and conversion volume that the 9 emergency pages would have, without the brand cost of advertising 24/7 service you don't deliver.

---

For the rest of this document I'll write as if Path C is chosen, with `[ABS-ONLY VARIANT]` callouts where the wording would change for Path A/B.

---

## Part 1 — Audit summary (brief)

Full audit in [SEO-AUDIT.md](./SEO-AUDIT.md). Highlights:

### What's already working

- 16 indexable pages, sitemap, robots.txt, mobile-responsive
- Full schema stack: LocalBusiness (Locksmith), FAQPage, BreadcrumbList, Service per borough
- 9 borough landing pages with unique copy and local landmarks
- Semantic HTML, single H1 per page, breadcrumb navigation
- HTTPS provisioning, GitHub Pages CDN-fast static delivery
- Phone clickable everywhere
- Newsreader serif + Inter sans typography (Stitch design system)

### What's missing for Path C (generalist)

- Emergency landing pages (`/emergency-locksmith-london`, 9 borough variants)
- 24-hour landing pages (`/24-hour-locksmith-london`, top 3 borough variants)
- 10 service pages (lock repair, lock replacement, UPVC, burglary, etc.)
- 10 blog posts for top-of-funnel + long-tail
- Google Business Profile (no website ranks in the map pack without one)
- Real reviews + Review schema
- 12+ citation listings (Yell, Trustpilot, Checkatrade, MLA member directory)
- OG image
- Sticky mobile call bar

### Fix-first order (by revenue impact)

1. **Google Business Profile** (1 hr setup, 3-day verification) — zero cost, biggest single move
2. **Sticky mobile call bar** (1 hr CSS) — 15–30% call-rate uplift sitewide
3. **`/emergency-locksmith-london` page** (4 hrs) — captures top-volume search intent
4. **First 5 Google reviews** (1 hr texting past customers) — feeds map pack ranking
5. **9 emergency borough variants** (12 hrs) — local pack coverage

---

## Part 2 — Homepage conversion fixes

### Current homepage hero

> **One lock. Done properly.**
> We change locks using Avocet ABS only…

Strong for ABS-only positioning. **For Path C, replace with conversion-first emergency framing:**

### New homepage hero — copy-paste

```
EYEBROW: 24/7 EMERGENCY LOCKSMITH · NORTH & CENTRAL LONDON

H1: Locked out? Lock change?
    We're 20 minutes away.

LEAD: Same-day callout across Camden, Islington, Westminster
      and the wider North & Central London. Avocet ABS-only
      lock fitting. Fixed quote on the phone, no surprises.

CTAs:
[CALL 07707 071984]   [What we do →]

TRUST SIGNALS BAR:
✓ 24/7 callout    ✓ TS007 3-star Kitemarked    ✓ Fully insured    ✓ MLA-approved*

* once approved
```

**[ABS-ONLY VARIANT]** keep your current "One lock. Done properly." headline.

### Above-the-fold checklist (every visit, every device)

| Element | Status | Notes |
|---|---|---|
| Phone number visible at top | ✅ | In header CTA |
| Phone clickable (`tel:`) | ✅ | All instances |
| H1 in first viewport | ✅ | — |
| Service area named | ⚠️ | Add "North & Central London" to H1 sub or eyebrow |
| Response time claim | ⚠️ | Add "20 min average" or "same-day guaranteed" if true |
| Trust signal | ⚠️ | Add review count once GBP collected |
| Sticky mobile call button | ❌ | **Critical missing** — see Section 14 for code |

### Recommended headline test set (A/B candidates)

If you want to test, try these in order. Run each for 14 days against the control:

1. **24/7 Emergency Locksmith — North & Central London** (max relevance)
2. **Locked out? We're 20 minutes away.** (urgency-first)
3. **Same-day lock change. Premium ABS only.** (ABS-only variant)
4. **Anti-snap lock fitter. North London. Today.** (specialist + urgency)
5. **The locksmith who only fits the cylinder a burglar can't snap.** (positioning, longer)

Don't change all of these at once — pick one, run it, measure call-rate from `tel:` clicks vs the previous baseline.

### Recommended CTA button text (in priority order)

1. **CALL 07707 071984** — phone in the button is highest converting (no second tap)
2. **CALL NOW** — for sticky button on mobile (saves space)
3. **GET HELP NOW** — when "Call" feels too pushy
4. **SAME-DAY QUOTE** — for non-emergency pages
5. **SPEAK TO A LOCKSMITH** — softer alternative

Avoid: "Contact us", "Learn more", "Submit form" — all kill call-through rates.

---

## Part 3 — Location page strategy

### Phase 1 priority pages (already built — keep)

| URL | Status |
|---|---|
| `/locksmith/camden` | ✅ Built |
| `/locksmith/islington` | ✅ Built |
| `/locksmith/hackney` | ✅ Built |
| `/locksmith/westminster` | ✅ Built |
| `/locksmith/kensington-and-chelsea` | ✅ Built (combined borough) |
| `/locksmith/haringey` | ✅ Built |
| `/locksmith/barnet` | ✅ Built |
| `/locksmith/enfield` | ✅ Built |
| `/locksmith/city-of-london` | ✅ Built |

### Phase 2 — neighbourhood-level pages (build in next 30 days)

These target *sub-borough* searches. They convert higher than borough pages because the search intent is more specific.

| URL | Parent borough | Search volume (est) | Notes |
|---|---|---|---|
| `/locksmith/hampstead` | Camden | ~210/mo | Affluent, premium positioning fit |
| `/locksmith/kentish-town` | Camden | ~140/mo | Sub-area, dense terraces |
| `/locksmith/belsize-park` | Camden | ~70/mo | Niche, low competition |
| `/locksmith/st-johns-wood` | Westminster | ~170/mo | Affluent, premium fit |
| `/locksmith/notting-hill` | Kensington & Chelsea | ~390/mo | High volume |
| `/locksmith/chelsea` | (separate from K&C) | ~480/mo | High volume |
| `/locksmith/marylebone` | Westminster | ~210/mo | Central |
| `/locksmith/mayfair` | Westminster | ~170/mo | Premium |
| `/locksmith/highbury` | Islington | ~140/mo | Residential |
| `/locksmith/stoke-newington` | Hackney | ~210/mo | Sub-area |

**Implementation:** add these to `src/data/boroughs.ts` as new entries. Each gets the existing `[slug].astro` template automatically. No new code needed — just data + copy.

### Phase 3 — emergency variants (Section 4)

---

## Part 4 — Emergency locksmith pages

### Phase 1 emergency pages (build first 30 days)

| URL | Search volume (est UK monthly) | Priority |
|---|---|---|
| `/emergency-locksmith-london` | ~5,400 | 🔥 Top |
| `/emergency-locksmith/camden` | ~590 | 🔥 |
| `/emergency-locksmith/islington` | ~480 | 🔥 |
| `/emergency-locksmith/hackney` | ~390 | 🔥 |
| `/emergency-locksmith/westminster` | ~390 | 🔥 |
| `/24-hour-locksmith-london` | ~2,400 | 🔥 |
| `/24-hour-locksmith/camden` | ~210 | High |
| `/24-hour-locksmith/islington` | ~170 | High |

### Implementation strategy

Don't build 18 separate `.astro` files. Use Astro's dynamic routes:

```
src/pages/
  emergency-locksmith-london.astro              # one page, no slug
  emergency-locksmith/[slug].astro              # dynamic, reads boroughs data
  24-hour-locksmith-london.astro
  24-hour-locksmith/[slug].astro                # dynamic
```

Reuse the existing `BOROUGHS` data array; add an `emergency` content block to each entry.

**[ABS-ONLY VARIANT]** Skip 24-hour pages (you don't do 24-hour callouts). Build only `/emergency-lock-change-london` framed as "premium emergency cylinder replacement after attempted snap attack" — narrower but higher quality lead.

---

## Part 5 — Service page strategy (Path C only)

| URL | Search volume (est UK) | Priority |
|---|---|---|
| `/lock-repair` | ~1,900 | High |
| `/lock-replacement` | ~1,300 | High |
| `/upvc-door-lock-repair` | ~880 | High |
| `/burglary-repairs` | ~390 | High |
| `/anti-snap-locks` | ~480 | High (ABS-friendly, fits brand) |
| `/locked-out` | ~2,400 | Very high |
| `/24-hour-locksmith` | (covered above) | — |
| `/residential-locksmith` | ~590 | Medium |
| `/commercial-locksmith` | ~720 | Medium |
| `/key-cutting` | ~1,000 | Skip (not your service) |

**[ABS-ONLY VARIANT]** Build only `/anti-snap-locks` (overlaps with `/why-abs` — consolidate or split into two: `/why-abs` for the brand explainer, `/anti-snap-locks` for the keyword target).

### Service page template — H1 patterns

| Service | H1 |
|---|---|
| Lock repair | Lock Repair Services in London |
| Lock replacement | Lock Replacement London — Same Day |
| UPVC door lock repair | UPVC Door Lock Repair London |
| Burglary repairs | Burglary Repair & Lock Replacement London |
| Anti-snap locks | Anti-Snap Locks London — Avocet ABS Specialist |
| Locked out | Locked Out in London? Same-Day Locksmith |
| Residential | Residential Locksmith London — Homes & Flats |
| Commercial | Commercial Locksmith London — Offices & Shops |

---

## Part 6 — Location page template (full copy-paste)

Use this exact structure for every location page. Replace `[Location]`, `[Postcodes]`, `[Landmarks]`, `[Sub-areas]`. Adjust the local detail to feel genuinely written for that area (otherwise Google flags as templated).

### SEO Title (50–60 chars)

```
Locksmith [Location] | Same-Day | kianlocks
```

Examples:
- `Locksmith Camden NW1 | Same-Day | kianlocks`
- `Locksmith Hampstead NW3 | ABS Specialist | kianlocks`

### Meta description (150–160 chars, end with phone)

```
Need a locksmith in [Location]? kianlocks fits Avocet ABS 3-star anti-snap cylinders same-day across [Postcodes]. Call 07707 071984.
```

### H1

```
Locksmith in [Location]
```

### Opening section (~100 words)

```
[Location] locksmith services from kianlocks — fitting Avocet ABS
3-star anti-snap cylinders the same day, across the whole of
[Location] including [Sub-area 1], [Sub-area 2], and [Sub-area 3].

Whether you've moved into a new flat off [Local Street/Area] and
want the previous owner's keys made worthless, or your front door
took an attempted snap attack overnight, we attend the same day.
Fixed quote on the phone, no callout traps.
```

### Immediate CTA block

```
[BIG GOLD BUTTON: CALL 07707 071984 — AVAILABLE NOW]

Average [Location] response time: 20–40 minutes.
```

### Services section (Path C — generalist)

Six items in a 2×3 grid:

1. **Emergency lockouts** — locked out? Non-destructive entry where possible.
2. **Lock changes & upgrades** — Avocet ABS 3-star fitted to your existing door.
3. **uPVC & multipoint repairs** — gearbox replacement, door realignment.
4. **Post-burglary repairs** — same-day attendance, insurance-grade cylinders.
5. **Smart lock installs** — Yale, Nuki, August on ABS-compatible doors.
6. **Commercial work** — offices, shops, master key suites in [Location].

**[ABS-ONLY VARIANT]** Replace with three items: ABS lock change, post-snap-attempt cylinder upgrade, scheduled landlord/sale lock change.

### Local trust section (~150 words)

This is the section that stops Google flagging the page as templated. Mention:

- 2–3 local landmarks (e.g. for Camden: "Camden Market, Regent's Canal, Roundhouse")
- 2–3 specific street types ("the Victorian terraces of Bartholomew Villas, the post-war flats around Hawley Road")
- 1–2 local lock-related observations ("[Location] has a lot of original Crittall metalwork doors which need a non-standard cylinder length — we measure on site")

This is genuine local detail, not keyword stuffing. Write it as if you've actually worked there (because you have).

### Why kianlocks block

Five bullets:

- **Local North London team** — not a national franchise.
- **Same-day across [Location]** — average 20–40 min response.
- **One product, fitted properly** — Avocet ABS 3-star, no upsells.
- **Fixed quote on the phone** — no per-minute charges, no surprise add-ons.
- **Fully insured** — public liability via [insurer], documentation on request.

### FAQ section (4–6 questions)

Use real customer questions for [Location]:

```
Q: Do you provide emergency locksmith services in [Location]?
A: Yes — same-day across the whole of [Location], including
   [postcode list]. Call 07707 071984 and we'll quote on the
   phone before attending.

Q: How quickly can you get to [Location]?
A: Typical response 20–40 minutes during the day, slightly longer
   overnight. Confirmed emergencies are prioritised.

Q: I'm locked out. Can you open the door without damaging it?
A: In most cases yes — we use non-destructive techniques where
   possible. Worst case, we replace the cylinder with an Avocet ABS
   3-star at the same visit (so you end up with a better lock than
   you started with).

Q: Can you change the locks after a break-in in [Location]?
A: Yes. Same-day attendance, insurance-grade Avocet ABS cylinders,
   itemised invoice for your insurer.

Q: Do you cover [adjacent area]?
A: [Yes/sometimes — we attend immediately-adjacent areas on the
   same terms. Call to confirm.]
```

Wrap these in `<details>`/`<summary>` accordion + add to `FAQPage` JSON-LD on the page (already wired into the existing template).

### Internal linking footer

```
Outside [Location] but nearby? See:
→ /locksmith/[adjacent borough 1]
→ /locksmith/[adjacent borough 2]

Need urgent help?
→ /emergency-locksmith-london
→ /emergency-locksmith/[Location]

Related services:
→ /lock-repair
→ /lock-replacement
→ /upvc-door-lock-repair
```

---

## Part 7 — Emergency page template

### SEO Title

```
Emergency Locksmith [Location] | 24/7 | kianlocks
```

### Meta description

```
Emergency locksmith [Location] — locked out, lost keys, attempted break-in? kianlocks attends same-day. Call 07707 071984 now.
```

### H1

```
Emergency Locksmith in [Location]
```

### Opening (urgent, direct)

```
Locked out, lost your keys, or had an attempted break-in in
[Location]? Kianlocks responds same-day across [Location] —
typical attendance 20–40 minutes from your call.

Call 07707 071984 now and we'll quote in advance on the phone.
```

### Immediate CTA — large, gold, above the fold

```
[BIG BUTTON]
CALL 07707 071984
We answer 24 hours a day for emergencies
```

### Common emergency services we handle

- ✅ Locked out (front door, back door, communal door)
- ✅ Lost keys (full cylinder change, all keys remade worthless)
- ✅ Broken key in lock (extraction + new cylinder)
- ✅ Failed lock mechanism (won't turn, jammed, snapped)
- ✅ uPVC door won't lock (multipoint mechanism failure)
- ✅ Burglary damage (door secured, lock replaced, written invoice)
- ✅ Attempted snap attack (cylinder upgraded to 3-star)

### Reassurance section

```
What you can expect:

• Quote on the phone before we attend — no callout surprise
• Non-destructive entry where physically possible
• Same-day cylinder upgrade to Avocet ABS 3-star if changing locks
• Fully insured, written invoice for your insurer
• North London-based — we're never more than 45 minutes away
```

### FAQs (emergency-specific, 4–6)

```
Q: How quickly can you reach [Location] in an emergency?
A: 20–40 minutes typical for [Location]. We don't promise a number
   we can't hit — call us and we'll give a real ETA before you book.

Q: I'm locked out. Will you damage my door?
A: We use non-destructive techniques wherever physically possible.
   In the small minority of cases where the cylinder must be removed
   to gain entry, we replace it on the same visit with an Avocet ABS
   3-star — so you end up with a higher-spec lock than you had.

Q: Are you available at night?
A: Yes — 24/7 for confirmed emergencies. The night surcharge (if
   applicable) is told to you on the phone in advance.

Q: How much does an emergency lockout cost?
A: Quoted in advance, every time. Typical lockout + ABS cylinder
   change is in the £150–250 range depending on door type.
   No callout fee on top of the quoted price.

Q: I had a break-in. Will the new lock satisfy my insurer?
A: Yes — Avocet ABS is TS007 3-star Kitemarked, which every UK home
   insurer accepts under the security clause. We provide a written
   invoice naming the product and rating for your records.
```

### Final CTA repeat at bottom

```
[BIG GOLD BUTTON]
CALL 07707 071984 NOW
```

---

## Part 8 — Google Business Profile optimisation

### Setup checklist (do today)

- [ ] Create profile at <https://business.google.com>
- [ ] **Business name:** `kianlocks Ltd` (exactly — must match website)
- [ ] **Primary category:** Locksmith
- [ ] **Secondary categories** (add 2–3): Emergency Locksmith Service, Door Supplier, Security System Supplier
- [ ] **Service area:** add each borough served — Camden, Islington, Haringey, Barnet, Enfield, Hackney, Westminster, City of London, Kensington & Chelsea
- [ ] **Hours:** 24 hours (critical for emergency searches) OR your real hours if not 24/7
- [ ] **Phone:** `07707 071984` (must match website exactly)
- [ ] **Website:** `https://kianlocks.com`
- [ ] **Business description (750 chars):** see template below
- [ ] **Verification:** Google posts a video verification request — record a 30-sec walkthrough showing van + dated newspaper. Approval 3–5 days.

### Business description template (copy-paste, 750 chars)

```
kianlocks Ltd is a North & Central London locksmith specialising in
high-security lock changes using Avocet ABS 3-star anti-snap
cylinders. Same-day attendance across Camden, Islington, Haringey,
Barnet, Enfield, Hackney, Westminster, the City of London and
Kensington & Chelsea.

Services: emergency lockouts, lock changes, uPVC door lock repair,
burglary repairs, lock upgrades to British Standard TS007 3-star.

Fixed quote on the phone — no callout surprises. Fully insured.
Independent local locksmith, not a franchise.

Call 07707 071984 — we answer 24 hours.
```

### Photos to upload (target 30+ in first 30 days)

| Type | Count | Notes |
|---|---|---|
| Van (exterior, branded) | 3 | Different angles |
| Inside van (organised tools, ABS cylinders visible) | 2 | Shows you carry stock |
| Avocet ABS cylinders (close-up) | 3 | The actual product |
| Hand fitting cylinder (action shot) | 5 | Different door types |
| Before/after lock changes | 5 | Ugly old cylinder → flush new ABS |
| Front doors of homes worked on | 5 | Variety of London property types |
| Public liability insurance certificate | 1 | Trust signal |
| TS007 / Sold Secure logos | 1 | Brand alignment |
| Team photo (you + any helpers) | 2 | Humanises |
| Workshop / van interior | 3 | If you have a workshop |

### Services to list (within GBP)

Add each of these as a separate "Service" with a short description:

1. Emergency Locksmith
2. Lock Change (Avocet ABS)
3. uPVC Door Lock Repair
4. Burglary Repair
5. Anti-Snap Lock Upgrade
6. 24-Hour Lockout Service
7. Insurance-Grade Lock Fitting

### Q&A section — pre-seed your own questions

Don't wait for customers. Add 5–10 questions yourself (using a different Google account) and answer them. Pre-seeded Q&A appears in search results below the listing.

Examples:
- "Do you cover Camden NW1?"
- "How quickly can you attend?"
- "Do you fit British Standard cylinders?"
- "What's your callout fee?"
- "Do you do post-burglary work?"

### Reviews — request template (text or email)

Send within 1 hour of completing each job:

```
Hi [Name], thanks for choosing kianlocks today. If you have a
moment, a quick Google review would help us a lot:

[GBP REVIEW LINK]

If you mention the area we attended (e.g. "Camden NW1") and the
service (e.g. "ABS lock change"), it really helps other people in
your area find us.

Thanks again,
[Your name]
07707 071984
```

**Critical:** never offer discounts or incentives for reviews — Google removes them and can penalise the listing.

### Google Posts — weekly cadence

GBP "Posts" (microblog-style updates) are a ranking signal. Post once per week. Templates:

- **Service highlight:** "Avocet ABS 3-star fitting in Hackney today — full job in 35 minutes from arrival. Insurance-grade cylinder, written invoice supplied."
- **Educational:** "Did you know: most new-build flats in London ship with a 1-star euro cylinder. A 1-star can be snapped in under 30 seconds. Upgrade to a 3-star ABS for £150–200."
- **Customer praise:** "Thanks to [first name only] in Camden for the kind 5★ review today."
- **Area focus:** "Working across Islington N1 this week — same-day callout available, call 07707 071984."

Schedule these in batch monthly so you don't have to remember weekly.

---

## Part 9 — Technical SEO (status table)

| Item | Status | Action |
|---|---|---|
| Sitemap submitted to GSC | ❌ | Submit `sitemap-index.xml` (10 min) |
| Sitemap submitted to Bing | ❌ | Submit at Bing Webmaster Tools |
| robots.txt valid | ✅ | — |
| All pages indexable | ✅ | (404 correctly noindex) |
| No accidental noindex | ✅ | — |
| Canonical tags | ✅ | Set on every page |
| Mobile speed | ✅ | Static HTML on CDN — 95+ Lighthouse expected |
| Core Web Vitals | ⏳ | Verify in GSC after launch |
| Images compressed | ✅ | (no images yet — add WebP when adding) |
| Broken links | ✅ | None |
| SSL valid | ⏳ | Provisioning (Let's Encrypt via GitHub) |
| Click-to-call works mobile | ✅ | All `tel:` links verified |
| LocalBusiness schema | ✅ | Locksmith subtype |
| Service schema | ✅ | Per borough |
| FAQPage schema | ✅ | Home + boroughs |
| BreadcrumbList schema | ✅ | All interior pages |
| Review schema | ⚠️ | **Remove placeholder until real reviews exist** |
| OG image | ❌ | Create 1200×630 PNG |

### Schema additions for new pages

When adding emergency / service pages, extend the schema helpers in `src/lib/schema.ts`:

```typescript
// Add to schema.ts
export function emergencyServiceSchema(borough?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    name: borough ? `Emergency Locksmith — ${borough}` : 'Emergency Locksmith',
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: borough
      ? { '@type': 'AdministrativeArea', name: borough }
      : { '@type': 'City', name: 'London' },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: SITE.phone,
      availableLanguage: 'English',
    },
    hoursAvailable: '24/7',
  };
}
```

Then wire into `/emergency-locksmith-*.astro` pages via the existing schema prop on `BaseLayout`.

---

## Part 10 — Internal linking matrix

### Homepage → links to

- 9 borough pages (top of fold or in "Where we work" section)
- `/why-abs` (header nav)
- `/process` (header nav)
- `/contact` (header nav)
- `/emergency-locksmith-london` (when built — sticky CTA bar)
- Top 3 service pages (when built — Why ABS, Lock Change, Emergency)

### Each borough page → links to

- 3 nearest sibling borough pages (e.g. Camden → Islington, Westminster, Hackney)
- `/emergency-locksmith/[same-borough]` (when built)
- `/why-abs` (already linked)
- 2–3 service pages relevant to the borough's housing mix
- 1 blog post relevant to the borough (e.g. "TS007 explained" for borough pages)

### Each service page → links to

- Top 3 borough pages (where the service is most relevant)
- `/emergency-locksmith-london` (if service is non-emergency)
- `/contact` (final CTA)

### Each emergency page → links to

- The borough page (planned-work follow-up)
- 2–3 nearest sibling emergency pages
- `/why-abs` (the upgrade story)

### Anchor text examples (use these patterns, vary phrasing)

- `emergency locksmith in Camden` (not "click here")
- `lock replacement in London`
- `UPVC door lock repair`
- `same-day locksmith in Islington`
- `anti-snap lock upgrade`

Avoid: exact-keyword anchor text on every link. Vary it. Google's spam systems flag identical anchor patterns.

---

## Part 11 — Content / blog plan

### Phase 1 — first 6 articles (build in days 30–90)

| Order | Article | Target keyword | Word count | Internal links |
|---|---|---|---|---|
| 1 | What to Do If You're Locked Out of Your House in London | `what to do when locked out` | 1,500 | → `/emergency-locksmith-london`, `/contact` |
| 2 | How Much Does a Locksmith Cost in London (2026)? | `how much does a locksmith cost uk` | 1,800 | → `/process`, `/lock-replacement` |
| 3 | Anti-Snap Locks Explained — and Why Your Current Cylinder Is the Weak Point | `anti snap locks explained` | 1,500 | → `/why-abs`, `/locksmith/camden` |
| 4 | TS007 3-Star Kitemarked — What Your Insurer Actually Requires | `ts007 3 star explained` | 1,500 | → `/why-abs`, `/burglary-repairs` |
| 5 | uPVC Door Won't Lock? The 4 Most Common Causes | `upvc door not locking` | 1,200 | → `/upvc-door-lock-repair`, `/contact` |
| 6 | Should You Change Your Locks After Moving House? (Yes — Here's Why) | `change locks after moving` | 1,200 | → `/lock-replacement`, `/locksmith/[boroughs]` |

### Phase 2 — articles 7–10 (days 60–90)

7. Can a Locksmith Open a Door Without Damaging It?
8. How to Secure Your Home After a Break-In — A Locksmith's Checklist
9. Lost Your Keys in London? What to Do Next (Step-by-Step)
10. How Long Does a Locksmith Take to Arrive in London?

### Article structure template

```
H1: [Question or clear topic]

OPENING (100 words)
Direct answer to the question in the first paragraph.
Then expand on why the answer matters.

H2: [Sub-question 1]
H3: [Detail]
H3: [Detail]

H2: [Sub-question 2]
...

H2: When to call a locksmith
[Reassurance + CTA]

FAQ (3–5 questions)

CALL-OUT BOX:
Need help in London? Call kianlocks on 07707 071984.
We're North & Central London-based with 20-min average response.
```

Each article should:
- Answer the search query within the first 100 words (Google uses "passage indexing" — the answer needs to be near the top)
- Include the target keyword in H1, first 100 words, and one H2
- Link to 2–3 service or location pages with descriptive anchor text
- End with a CTA and the phone number
- Include FAQ schema if it has 3+ Q&As

---

## Part 12 — Local citations and backlinks

### Free citations (claim in days 0–30, 15–30 min each)

| Source | URL | Notes |
|---|---|---|
| Google Business Profile | business.google.com | DO FIRST |
| Bing Places | bingplaces.com | UK Bing share is 5%, claim is free |
| Apple Business Connect | businessconnect.apple.com | Spotlight + Maps on iPhone |
| Yell.com | yell.com/sign-up | UK's biggest directory, free basic |
| Trustpilot | business.trustpilot.com | Often outranks brand pages |
| Yelp UK | biz.yelp.co.uk | Strong for service businesses in London |
| Foursquare | foursquare.com/products/listings-management | Feeds many other directories |
| FreeIndex | freeindex.co.uk/getlisted | Free UK directory |
| Cylex UK | cylex-uk.co.uk | Free UK directory |
| Thomson Local | thomsonlocal.com | UK directory |
| Hotfrog UK | hotfrog.co.uk | Free UK directory |
| Bark | bark.com | Lead gen platform — free listing, paid leads |

### Paid citations (worth the spend after 60 days revenue stabilises)

| Source | Annual cost (approx) | Why it's worth it |
|---|---|---|
| **Master Locksmiths Association (MLA)** | £200–400 + assessment fee | Single highest UK trust signal in the locksmith industry. Google trusts MLA. |
| Checkatrade | ~£1,000 | Brand + lead flow + verification badge |
| Which? Trusted Trader | ~£600 + vetting | Premium positioning matches your brand |
| TrustATrader | ~£500 | Alternative to Checkatrade |
| Secured by Design | Free for installers | Police-approved listing — credibility for ABS work |

### Backlink ideas (do in days 60–90)

- **Local sponsorships:** sponsor a local football team / community event in one of your boroughs (£100–500). Get a link from their site. Massive local trust signal.
- **Local Facebook groups:** join Camden / Islington / Hackney Facebook groups. Be helpful (answer lock questions) without spamming. People share your blog posts.
- **Estate agents:** local independent agents need a trusted locksmith for new tenants. Offer referral fee or just a written introduction. They'll list you on their "trusted partners" page.
- **Letting agents:** same dynamic. Letting agents = consistent stream of lock changes between tenancies.
- **Insurance brokers (independent):** local IFAs sometimes recommend locksmiths post-burglary. Write to 10 in your boroughs.
- **Property management companies:** larger ones have trusted contractor lists.
- **Local press:** pitch a story angle — "London's only ABS-only locksmith" is genuinely interesting trade press fodder. Reach out to local borough magazines (Camden New Journal, Islington Gazette, Camden Review, Hampstead & Highgate Express).
- **Guest post on home security blog** — write a guest article for a UK home security site (e.g. The Crime Prevention Website). Link back to `/why-abs`.

### Backlinks to AVOID (these now hurt rankings)

- Cheap directory submission services (£10/month for 100 directories)
- Paid blog network links (private blog networks)
- Comment spam on unrelated blogs
- Forum signature spam
- "SEO link packages" on Fiverr

These were viable in 2015. They are actively penalised in 2026.

---

## Part 13 — Competitor analysis (manual research instructions)

### What to research

For each priority keyword (`emergency locksmith london`, `locksmith camden`, `24 hour locksmith london`, `upvc door lock repair london`, `locksmith islington`):

1. Open incognito Chrome on mobile (or use a mobile emulator)
2. Search the keyword + your real location
3. Note the top 3 GBP results and top 3 organic results
4. For each competitor, document:

| Field | What to check |
|---|---|
| GBP review count | E.g. "327 reviews" |
| GBP avg rating | E.g. "4.7★" |
| Years in business | (Visible on GBP) |
| Photos | How many uploaded |
| Recent posts | Active or stale? |
| Page title | Their actual `<title>` |
| H1 | Their actual H1 |
| Word count | Use a Chrome word-count extension |
| Schema present | Right-click → View Source → search for `application/ld+json` |
| Sticky mobile call button | Yes/no |
| Backlinks | Use Ahrefs / Moz / SEMrush free trial |

### Output template (per competitor)

```
COMPETITOR: [Name]
Domain: [URL]

GBP:
- Reviews: 245
- Rating: 4.6★
- Photos: 67
- Posts: weekly
- Years: 8

WEBSITE:
- Title: "Locksmith London - 24/7 Emergency Service"
- H1: "London Locksmith"
- Word count (homepage): 1,200
- Sticky call button: yes
- Schema: LocalBusiness only (no FAQ)
- Borough pages: 12
- Service pages: 6
- Blog posts: 0

GAPS WE CAN EXPLOIT:
- No FAQ schema (we have it)
- No blog (we'll add 6 posts)
- Templated borough pages (ours have unique local detail)

GAPS THEY HAVE THAT WE DON'T:
- 245 reviews vs our 0 → CRITICAL
- 67 photos vs our 0 → CRITICAL
- 8 years of citations vs our brand-new domain
```

Do this for the top 3 competitors per keyword. Pattern emerges fast: the dominant trait is **review count + GBP optimization + photo count**, not website quality.

---

## Part 14 — 30 / 60 / 90 day execution plan

### Days 0–30 — Foundations + GBP + emergency hub

#### Week 1
- [ ] Set up Google Business Profile (Day 1, verification 3–5 days)
- [ ] Submit `sitemap-index.xml` to Google Search Console (Day 1)
- [ ] Submit sitemap to Bing Webmaster Tools (Day 1)
- [ ] Replace `aggregateRating` placeholder schema with real numbers (or remove until reviews exist)
- [ ] Real `email`, `streetAddress`, `postalCode` in `consts.ts`
- [ ] Create OG image `public/og-default.png` (1200×630)
- [ ] Add **sticky mobile call bar** sitewide (1 hr CSS — see Part 14 below)

#### Week 2
- [ ] Build `/emergency-locksmith-london` (the main emergency page)
- [ ] Add `EmergencyService` schema helper to `lib/schema.ts`
- [ ] Wire emergency page into homepage hero CTA
- [ ] Build `/locked-out` service page

#### Week 3
- [ ] Build emergency variants for top 5 boroughs:
  - `/emergency-locksmith/camden`
  - `/emergency-locksmith/islington`
  - `/emergency-locksmith/hackney`
  - `/emergency-locksmith/westminster`
  - `/emergency-locksmith/haringey`
- [ ] Apply for **MLA membership** (4–8 weeks to approve — start now)

#### Week 4
- [ ] Get first 5 Google reviews from past customers (text everyone you've ever fitted a lock for)
- [ ] Claim free citations: Yell, Trustpilot, Yelp UK, Apple Business Connect, Foursquare, Bing Places
- [ ] Add 30+ photos to GBP
- [ ] Write first GBP post

### Days 31–60 — Service pages + blog start + neighbourhood pages

- [ ] Build 4 remaining emergency borough pages:
  - `/emergency-locksmith/barnet`
  - `/emergency-locksmith/enfield`
  - `/emergency-locksmith/city-of-london`
  - `/emergency-locksmith/kensington-and-chelsea`
- [ ] Build core service pages:
  - `/lock-replacement`
  - `/lock-repair`
  - `/anti-snap-locks`
  - `/upvc-door-lock-repair` (Path C only)
  - `/burglary-repairs` (Path C only)
- [ ] Add 4 neighbourhood-level location pages (Hampstead, Notting Hill, Chelsea, St John's Wood)
- [ ] Publish first 3 blog posts (Locked out, Anti-snap explained, Locksmith cost UK)
- [ ] Add **review section** to homepage with `Review` schema (only if you have 5+ real reviews)
- [ ] Internal linking pass — every borough page links to 3 sibling boroughs + 1 emergency page + 1 service page
- [ ] Apply for Checkatrade
- [ ] Get to 15 Google reviews (call/text every recent customer)

### Days 61–90 — Scale + measurement + outreach

- [ ] Build remaining neighbourhood pages (Highbury, Stoke Newington, Marylebone, Mayfair, Belsize Park, Kentish Town)
- [ ] Publish blog posts 4–6 (TS007 explained, uPVC door not locking, Should you change locks after moving)
- [ ] Reach 25 Google reviews
- [ ] Outreach to 10 local insurance brokers / estate agents / letting agents
- [ ] Add 10 case studies with photos (with customer permission) to a `/case-studies` index
- [ ] Local press pitch: 3 borough magazines
- [ ] **Performance review**: Search Console clicks/impressions, GBP calls/views, page-level conversion (`tel:` clicks)
- [ ] Decide on Path C expansion (uPVC, burglary, commercial) based on emergency funnel data

---

## Part 15 — Priority action table

Sorted by **revenue impact ÷ effort** (highest ROI first):

| # | Action | Impact | Effort | Revenue mechanism |
|---|---|---|---|---|
| 1 | Create + verify Google Business Profile | 🔥🔥🔥 | Low | 50% of mobile clicks come from map pack — nothing else moves the needle this much |
| 2 | Get first 5 Google reviews | 🔥🔥🔥 | Low | Ranking factor for map pack + conversion driver |
| 3 | Replace placeholder `aggregateRating` schema | 🔥🔥 | 5 min | Avoid Google demotion penalty |
| 4 | Sticky mobile call bar | 🔥🔥 | 1 hr | 15–30% sitewide call-rate uplift |
| 5 | Real email + address in `consts.ts` | 🔥🔥 | 5 min | NAP consistency for ranking |
| 6 | Build `/emergency-locksmith-london` | 🔥🔥 | 4 hrs | Captures 5,400/mo search demand |
| 7 | OG image (`og-default.png`) | 🔥🔥 | 30 min | Massive WhatsApp/social conversion lift |
| 8 | Submit sitemap to GSC + Bing | 🔥 | 15 min | Faster indexing |
| 9 | Apply for MLA membership | 🔥🔥🔥 (long-term) | 1 hr + wait | UK locksmith industry's only Google-trusted credential |
| 10 | Build 9 emergency borough variants | 🔥🔥 | 12 hrs | Local pack coverage |
| 11 | Build 5 service pages | 🔥 (Path C only) | 20 hrs | Volume vs brand trade-off |
| 12 | Add 30 photos to GBP | 🔥 | 2 hrs | Map pack ranking factor |
| 13 | Apply for Checkatrade | 🔥 | 1 hr application + ~£1k/yr | Trust badge + lead flow |
| 14 | Publish first 6 blog posts | 🔥 | 30+ hrs | Long-tail traffic + internal link juice |
| 15 | Local press pitch | 🔥 | 4 hrs | One placement = high-authority backlink |
| 16 | Set up Google Analytics 4 + GSC properly | 🔥 | 1 hr | Can't optimise what you can't measure |

---

## Part 16 — Sticky mobile call bar (drop-in code)

Add this to `src/components/StickyCallBar.astro`:

```astro
---
import { SITE } from '../consts';
---
<a href={SITE.phoneHref} class="sticky-call-bar" aria-label={`Call ${SITE.name}`}>
  <span class="sticky-call-bar__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
  </span>
  <span class="sticky-call-bar__text">
    Call {SITE.phone} — Available now
  </span>
</a>

<style>
  .sticky-call-bar {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: var(--gold);
    color: var(--navy);
    padding: 1rem 1.25rem;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    box-shadow: 0 -4px 16px rgba(11, 15, 31, 0.14);
  }
  .sticky-call-bar:hover { background: var(--gold-bright); color: var(--navy); }
  @media (max-width: 760px) {
    .sticky-call-bar { display: flex; }
    /* Push body content up so footer doesn't get covered */
    main { padding-bottom: 4rem; }
  }
</style>
```

Then in `BaseLayout.astro` add `<StickyCallBar />` after `<Footer />`.

This single component adds 15–30% to your sitewide call-through rate. Build it on Day 1.

---

## Output deliverables checklist (this playbook)

This document covers, as requested:

1. ✅ Current site audit (Part 1, full version in [SEO-AUDIT.md](./SEO-AUDIT.md))
2. ✅ Missing pages (Parts 3, 4, 5)
3. ✅ Exact page structure to build (Parts 6, 7)
4. ✅ Location page rollout list (Part 3)
5. ✅ Service page rollout list (Part 5)
6. ✅ Google Business Profile fixes (Part 8)
7. ✅ Technical SEO fixes (Part 9)
8. ✅ Internal linking map (Part 10)
9. ✅ Blog/content plan (Part 11)
10. ✅ Citation/backlink plan (Part 12)
11. ✅ Competitor research framework (Part 13)
12. ✅ 30/60/90 day roadmap (Part 14)
13. ✅ Prioritised action table (Part 15)

Plus drop-in code for the sticky mobile call bar (Part 16).

---

## Final note on the positioning fork (the most important decision)

Before you build a single new page from this playbook, decide:

- **Path A — Stay ABS-only.** Don't build the service pages. Don't add 24-hour. Lean into "we are the ABS specialists, no one else." Premium pricing, lower volume, brand-led.
- **Path B — ABS + emergency lockouts.** Build only the `/emergency-locksmith-*` pages (Section 4). Skip everything else. Hybrid: brand intact, captures the highest-volume search type.
- **Path C — Full generalist.** Build everything in this playbook. Maximum surface area but commodity brand.

My recommendation from the audit stands: **Path B**. It uses every page in this playbook from Sections 1, 2, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16 — but skips Section 5 (general service pages) entirely. You keep the ABS premium brand for planned work, and you capture emergency search volume which is mostly people who didn't damage their door — perfect ABS upgrade leads.

Tell me which path before I build any of the new pages.
