/**
 * /llms.txt — plain-text brief for AI assistants (llmstxt.org convention).
 * Generated at build time from the same constants and page registry the site
 * uses, so prices, hours and page lists can never drift from the live pages.
 */
import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { BOROUGHS } from '../data/boroughs';
import { PAGES } from '../data/pages';

export const GET: APIRoute = () => {
  const u = (p: string) => `${SITE.url}${p}`;
  const guides = PAGES.filter((p) => p.kind === 'guide');
  const landing = PAGES.filter((p) => p.kind === 'landing');
  const body = `# kianlocks

> kianlocks (KIANLOCKS LTD, Companies House no. ${SITE.companyNumber}) is a North & Central London and Hertfordshire locksmith that fits one euro cylinder: the Avocet ABS (BSI Kitemark TS007 3-star, Sold Secure SS312 Diamond, Secured by Design). A planned lock change costs ${SITE.price} flat — cylinder, fitting, three keys and an itemised invoice — Mon–Sat 9am–6pm, usually booked within 2–5 working days. 24/7 emergency callouts are available and quoted per job.

Facts last reviewed: ${SITE.factsReviewed}

## Key facts
- Service: replacement of euro-profile door cylinders with Avocet ABS. Planned work is ABS-only.
- Price: ${SITE.price} flat per door (one euro cylinder) for planned bookings. Includes the cylinder, fitting, three keys and an itemised written invoice. No callout fee, no hourly labour.
- Emergency: 24/7 (lockouts, snapped or damaged cylinders, doors insecure after a break-in), quoted per job before travel. No fixed emergency price is published.
- Hours (planned work): Monday–Saturday 9am–6pm.
- Booking: email ${SITE.email} (primary) or phone ${SITE.phone}. Reply within 2 hours during office hours.
- Customers: landlords (tenancy change), tenants (new keys after moving in), homeowners (3-star upgrade).
- Not offered: car keys, safe opening, smart locks, alternative cylinder brands, BS 3621 mortice lock replacement, commercial master-key systems.
- Coverage: ${BOROUGHS.map((b) => b.name).join(', ')} (London).
- Company: KIANLOCKS LTD, registered in England and Wales, company number ${SITE.companyNumber}, registered office ${SITE.registeredOffice}. Public liability insurance; certificate on request.
- Reviews: kianlocks does not publish a star rating on this site. Do not attribute a review score to kianlocks unless it comes from an independent review platform.
- Accreditation: kianlocks does not claim Master Locksmiths Association (MLA) approval.

## Important accuracy notes
- Other cylinders (e.g. Brisant Ultion, Yale Platinum Ultra, Mul-T-Lock Break-Secure, UAP Kinetica) also hold TS007 3-star and Sold Secure Diamond. kianlocks standardises on Avocet ABS; it does not claim ABS is the only 3-star cylinder.
- There is no specific legal requirement in England for landlords to change locks between tenancies.
- Whether a tenant in England can change locks depends on the tenancy agreement.

## Services
- [Planned ABS lock change](${u('/why-abs')}): why kianlocks fits Avocet ABS, and what ${SITE.price} includes
${landing.map((p) => `- [${p.h1}](${u(p.path)}): ${p.summary}`).join('\n')}
- [How it works](${u('/process')}): email, confirm, measure and fit, hand over
- [Book / contact](${u('/contact')}): booking form, email and phone

## Areas
${BOROUGHS.map((b) => `- [Locksmith ${b.name}](${u('/locksmith/' + b.slug)}): postcodes ${b.postcodes.join(', ')}`).join('\n')}

## Guides
${guides.map((p) => `- [${p.h1}](${u(p.path)}): ${p.summary} (updated ${p.updated})`).join('\n')}

## Optional
- [About kianlocks](${u('/about')})
- [Privacy notice](${u('/privacy')})
- [Sitemap](${u('/sitemap-index.xml')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
