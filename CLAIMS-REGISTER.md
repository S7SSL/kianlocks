# kianlocks.com — Claims register

Every factual claim the site makes, where it comes from, and when it must be re-checked.
`scripts/seo-check.mjs` enforces the **banned** list on every build (CI fails the deploy).
Same discipline as the ClearLegacy claims register: if a claim can't be sourced, it doesn't ship.

_Last reviewed: 23 Sep 2026_

## Business facts (source: Sat / Companies House)

| Claim | Where | Source | Re-verify |
|---|---|---|---|
| £149 flat, planned, Mon–Sat 9am–6pm; cylinder + fitting + 3 keys + itemised invoice; no callout fee | Sitewide (`SITE.price`) | Sat (3 May 2026 positioning) | On any price change — edit `src/consts.ts` only |
| 24/7 emergency, quoted per job (no published price) | Sitewide | Sat (commit 15534e1) | — |
| Planned bookings usually 2–5 working days; reply within 2 hours in office hours | Sitewide | Sat (original copy) | If lead times change |
| Coverage: 9 boroughs | Sitewide | Sat | — |
| KIANLOCKS LTD, no. 11163189, reg. office 126 Osidge Lane N14 5DN, renamed from DAXMASTERS LTD on 27 Oct 2020 | Footer, About, schema | [Companies House](https://find-and-update.company-information.service.gov.uk/company/11163189) | Annually |
| "Traded as kianlocks since 2020" | About | Companies House rename date | — |
| Public liability insurance; certificate on request | FAQ, About | Sat | **Sat to confirm policy is live and send certificate on request** |
| Typical visit 30–45 minutes | Home, tenant page | Sat (original copy) | — |

## Product facts (Avocet ABS)

| Claim | Source | Re-verify |
|---|---|---|
| ABS Master: TS007-1:2024 3-star (KM 658144), SS312 Diamond, Secured by Design / Police Preferred Specification, key registration, £2,000 snap guarantee | [Avocet](https://avocetgroup.co.uk/products/abs-master-3-star-cylinder) | Every 6 months |
| ABS Master Sold Secure Diamond (2024) | [Sold Secure](https://soldsecure.com/product/avocet-master-diamond-rated-lock-cylinder) | Every 6 months |
| Avocet describes a cam that locks down in a hardened core under snap attack | Avocet product page | — |
| ABS Quantum thumbturn £54.00 retail | [Lock & Key](https://www.lockandkey.co.uk/product/avocet-abs-quantum-anti-snap-bs-ts007-3-star-euro-thumb-turn) | Every 6 months |

## Market facts (guides)

| Claim | Source (date) | Re-verify |
|---|---|---|
| Euro/rim cylinder £70–£80; anti-snap uPVC ~£150; London avg job £163.47; OOH callout £50–£150; OOH hourly £80–£200 | Checkatrade (May 2026) | **Mar 2027** |
| Euro cylinder £100–£150 fitted; OOH +£50–£100 | MyJobQuote (14 Sep 2026) | Mar 2027 |
| Emergency job £150–£250 | MyBuilder (21 Aug 2026) | Mar 2027 |
| Unrated 6-pin cylinder £13.99 | Screwfix (Sep 2026) | Mar 2027 |
| Competitor cylinder ratings/prices (Ultion, Yale, Mul-T-Lock, UAP, ERA) | Manufacturer, retailer and Sold Secure pages (Sep 2026) | **Every 6 months, and before Jan 2027** when the 2024 standards take full effect |
| Snapping 15.87% (2011) → 8.32% (2019) of burglaries | MLA FOI to West Yorkshire Police — **one force, not national** | Look for newer data annually |
| No specific legal duty on landlords to change locks (England) | CIA Landlords — no primary source found | Watch for Renters' Rights Act guidance |
| Tenants: depends on tenancy agreement (Shelter vs CIA Landlords disagree) | Shelter, CIA Landlords | Annually |
| LTA 1985 s.11(6): entry to view repair, reasonable times, 24h written notice | legislation.gov.uk | — |
| Renters' Rights Act: most provisions in force 1 May 2026 | NRLA, Shelter, SI 2026/421 | — |
| Locksmiths unlicensed; MLA approval voluntary for companies | MLA, Hansard 22 Sep 2021 | — |
| Allianz: TS007 3-star for uPVC/composite; BS3621 for timber | Allianz | Annually |

## Banned (enforced by `scripts/seo-check.mjs`)

- **Any AggregateRating / star score** unless it mirrors a real independent source (GBP/Trustpilot) — the old 5.0/47 was fabricated. Set `SITE.rating` with its source and run with `ALLOW_RATING=1`.
- **"Same day"** for the £149 job (it is 2–5 working days).
- **"The only (3-star) cylinder"** — Ultion, Yale Platinum Ultra, Mul-T-Lock, UAP etc. hold the same grades.
- **"Every UK insurer accepts"** — policies differ.
- **"Licensed locksmith"** — there is no UK licence.
- **MLA approval** — not held (update this file and `llms.txt` if that changes).
- **"We don't do emergencies"** — contradicts the 24/7-by-quote service.
- Invented local statistics, insurer/freeholder behaviour, response times in minutes, partner networks.
- Fake testimonials. `src/data/reviews.ts` placeholders must never be rendered.
