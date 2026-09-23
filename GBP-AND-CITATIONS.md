# Google Business Profile + citations — copy-paste pack

Use **exactly** this NAP everywhere (Google string-matches it):

- **Name:** kianlocks
- **Phone:** 07707 071984
- **Website:** https://kianlocks.com
- **Email:** hi@kianlocks.com
- **Address:** hide it (service-area business). Registered office for forms that insist: 126 Osidge Lane, London N14 5DN.

## Google Business Profile (business.google.com)

- **Primary category:** Locksmith
- **Additional categories:** none. Keep it to *Locksmith* only — extra categories dilute an ABS-only listing.
- **Service areas (add all 13):** Camden, Islington, Haringey, Barnet, Enfield, Hackney, Westminster, City of London, Kensington and Chelsea, Potters Bar, Borehamwood, Cheshunt, Hatfield, Welwyn Garden City, St Albans, Harpenden (GBP caps at 20 — these are 16).
- **Hours:** Mon–Sat 09:00–18:00. (Do not set 24 hours — emergency is by quote; say so in the description.)
- **Opening date:** October 2020.

**Business description (≤ 750 chars):**

> kianlocks fits one euro cylinder, properly: the Avocet ABS — BSI Kitemark TS007 3-star, Sold Secure SS312 Diamond and Secured by Design. A planned lock change is £149 flat: cylinder sized to your door, fitting, three keys and an itemised invoice naming the product and its rating. No callout fee, no hourly labour. We work for landlords changing locks between tenancies, tenants who want their own keys after moving in, and homeowners upgrading to a 3-star anti-snap lock, across North & Central London and Hertfordshire (Potters Bar, Borehamwood, Cheshunt, Hatfield, Welwyn Garden City, St Albans). Planned bookings Mon–Sat 9am–6pm; 24/7 emergency callouts are quoted per job before we travel. Email hi@kianlocks.com to book.

**Services (name — price — description):**

| Service | Price | Description |
|---|---|---|
| ABS lock change (planned) | £149 | Avocet ABS 3-star cylinder, fitting, three keys, itemised invoice. Mon–Sat 9–6. |
| Landlord lock change between tenancies | £149 per door | Old keys made useless; invoice for your property file. |
| Lock change after moving in | £149 | New cylinder and three keys; old cylinder can be left with you. |
| 3-star anti-snap lock upgrade | £149 | TS007 3-star, Sold Secure Diamond. |
| 24/7 emergency callout | Quote | Lockouts, snapped cylinders, doors insecure after a break-in. Quoted before travel. |

**Q&A to pre-seed (post from your own account, answer immediately):**
1. *How much is a lock change?* — £149 flat for a planned booking: Avocet ABS 3-star cylinder, fitting, three keys and an itemised invoice. No callout fee.
2. *Do you do emergencies?* — Yes, 24/7, quoted per job before we travel. Call 07707 071984.
3. *Do you cover Hertfordshire?* — Yes: Potters Bar, Borehamwood, Bushey, Radlett, Cheshunt, Waltham Cross, Hoddesdon, Hatfield, Welwyn Garden City, St Albans and Harpenden.
4. *What lock do you fit?* — Only the Avocet ABS: TS007 3-star, Sold Secure Diamond, Secured by Design.

**Photos (aim for 10+ in month one):** ABS cylinders and packaging, before/after cylinder swaps (door close-ups, no house numbers), the van (if branded), the itemised invoice (redacted), you at work.

**Review request text (send same day, every job, every customer — no cherry-picking, no incentives):**

> Thanks for having us today. If you've a minute, a short Google review really helps a small business — mentioning your area (e.g. "Cheshunt" or "Camden") helps neighbours find us: [GBP review link]. — kianlocks

Once the profile is live, put its URL in `src/consts.ts` → `SITE.social.google`. It flows into schema `sameAs` automatically.

## Free citations (same NAP, 15–30 min each)

1. **Bing Places** — bingplaces.com (can import from GBP once live). Bing feeds Copilot and ChatGPT search.
2. **Apple Business Connect** — businessconnect.apple.com (Apple Maps / Siri).
3. **Yell** — free basic listing.
4. **Trustpilot** — claim the free business profile; use AFS BCC invitations like ClearLegacy does.
5. **Facebook Page** — name, phone, website, service area.
6. **Foursquare** — feeds several other directories.
7. **Checkatrade / TrustATrader** — paid; decide after GBP reviews start.

After each, add its public URL to `SITE.social` so it appears in `sameAs`.
