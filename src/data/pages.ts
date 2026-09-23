/**
 * Registry of content pages (guides + landing pages).
 * - Drives the /guides hub, llms.txt, and per-URL sitemap <lastmod>.
 * - `updated` must ONLY change when the page content really changes
 *   (house rule carried over from ClearLegacy: no fake freshness).
 */
export interface PageEntry {
  path: string;
  title: string;       // <title> body, ≤ 52 chars (site name appended)
  h1: string;
  description: string; // meta description, ≤ 160 chars
  summary: string;     // one line for hubs / llms.txt
  published: string;   // YYYY-MM-DD
  updated: string;     // YYYY-MM-DD
  kind: 'guide' | 'landing';
}

export const PAGES: PageEntry[] = [
  {
    path: '/guides/lock-change-cost-london/',
    kind: 'guide',
    title: 'Lock Change Cost London (2026 Prices)',
    h1: 'How much does a lock change cost in London?',
    description: 'What changing a euro cylinder lock costs in London in 2026: typical fitted prices, callout and emergency fees, what should be included, with dated sources.',
    summary: 'Typical London prices for a euro cylinder lock change, callout and emergency fees, with dated sources.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/guides/best-anti-snap-euro-cylinders-uk/',
    kind: 'guide',
    title: 'Best Anti-Snap Euro Cylinders UK Compared',
    h1: 'Anti-snap euro cylinders compared: the 3-star, Diamond-rated options',
    description: 'Avocet ABS, Ultion, Yale Platinum Ultra, Mul-T-Lock, UAP Kinetica and ERA compared on TS007 3-star, Sold Secure Diamond, guarantees and price. Checked Sep 2026.',
    summary: 'Side-by-side comparison of TS007 3-star / Sold Secure Diamond euro cylinders sold in the UK.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/guides/ts007-3-star-explained/',
    kind: 'guide',
    title: 'TS007 3-Star Locks Explained',
    h1: 'TS007 3-star explained: what the stars on your lock mean',
    description: 'What TS007 1-star, 2-star and 3-star mean for euro cylinder locks, why 1-star + 2-star handle is fragile, the 2024 update, and how to check your own door.',
    summary: 'Plain-English guide to the TS007 star ratings for euro cylinders and handles, including the 2024 revision.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/guides/lock-snapping-explained/',
    kind: 'guide',
    title: 'Lock Snapping Explained — and How to Stop It',
    h1: 'Lock snapping explained, and how to stop it',
    description: 'What lock snapping is, why euro cylinders on uPVC and composite doors are exposed, what the evidence says, and how an anti-snap 3-star cylinder prevents it.',
    summary: 'How lock snapping works, what the data shows, and which cylinders resist it.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/guides/do-landlords-have-to-change-locks/',
    kind: 'guide',
    title: 'Do Landlords Have to Change Locks? (England)',
    h1: 'Do landlords have to change the locks between tenants?',
    description: 'Is a landlord in England legally required to change locks between tenancies? What the law says, why most do it anyway, and what the Renters’ Rights Act changed.',
    summary: 'England: no specific legal duty to change locks between tenants, but strong duty-of-care and insurance reasons to.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/guides/can-tenants-change-locks/',
    kind: 'guide',
    title: 'Can Tenants Change the Locks? (England)',
    h1: 'Can a tenant change the locks in England?',
    description: 'Can you change the locks as a tenant in England? What Shelter and landlord bodies say, what your tenancy agreement decides, and how to do it without a dispute.',
    summary: 'England: depends on the tenancy agreement; keep the old lock and give the landlord a key.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/guides/insurance-approved-locks/',
    kind: 'guide',
    title: 'Insurance-Approved Locks: BS3621 vs TS007',
    h1: 'Insurance-approved locks: what your home insurer means',
    description: 'What UK home insurers mean by “British Standard” locks: BS 3621 for mortice locks, TS007 3-star for euro cylinders on uPVC and composite doors. How to check.',
    summary: 'BS 3621 vs TS007 3-star: which locks home insurers ask for on timber vs uPVC/composite doors.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/guides/how-to-choose-a-locksmith-london/',
    kind: 'guide',
    title: 'How to Choose a Locksmith in London',
    h1: 'How to choose a locksmith in London (and avoid being overcharged)',
    description: 'Locksmiths are unlicensed in the UK. Seven checks before you book in London: a written price, the cylinder rating, insurance, company details and more.',
    summary: 'Checklist for choosing a trustworthy locksmith in an unlicensed trade.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/landlord-lock-change-london/',
    kind: 'landing',
    title: 'Landlord Lock Change London — £149 Per Door',
    h1: 'Landlord lock changes in London. £149 per door.',
    description: 'Change locks between tenancies in North & Central London: Avocet ABS 3-star cylinder, 3 keys and an itemised invoice for your records. £149 flat per door.',
    summary: 'Tenancy-change lock replacement for landlords and letting agents, £149 per door.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/new-tenant-lock-change-london/',
    kind: 'landing',
    title: 'Change Locks After Moving In — London £149',
    h1: 'Just moved in? Get keys only you hold.',
    description: 'New flat or house in London? Change the euro cylinder so previous keys stop working: Avocet ABS 3-star, 3 keys, £149 flat. Guidance for tenants and new owners.',
    summary: 'Lock change for tenants and new owners after moving in, £149 flat.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/3-star-lock-upgrade-london/',
    kind: 'landing',
    title: '3-Star Anti-Snap Lock Upgrade London — £149',
    h1: 'Upgrade to a 3-star anti-snap lock. £149 fitted.',
    description: 'Upgrade your euro cylinder to an Avocet ABS (TS007 3-star, Sold Secure Diamond) in North & Central London. £149 fitted with 3 keys and an itemised invoice.',
    summary: 'Homeowner upgrade to a TS007 3-star anti-snap cylinder, £149 fitted.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
  {
    path: '/emergency-locksmith-london/',
    kind: 'landing',
    title: 'Emergency Locksmith North London — 24/7',
    h1: '24/7 emergency locksmith — quoted before we set off.',
    description: 'Locked out, snapped cylinder or door insecure after a break-in in North or Central London? 24/7 emergency callout, price quoted per job before we travel.',
    summary: '24/7 emergency callouts (lockouts, break-ins, snapped cylinders), quoted per job.',
    published: '2026-09-23',
    updated: '2026-09-23',
  },
];

const norm = (p: string) => (p.endsWith('/') ? p : p + '/');
export const pageByPath = (path: string) => PAGES.find((p) => p.path === norm(path))!;
export const GUIDES = PAGES.filter((p) => p.kind === 'guide');
