/**
 * Single source of truth for site-wide constants.
 * Update these and the whole site updates: titles, meta descriptions, schema, footer.
 */

export const SITE = {
  name: 'Kian Locks',
  legalName: 'Kian Locks Ltd',
  domain: 'kianlocks.com',
  url: 'https://kianlocks.com',
  tagline: 'ABS-only locksmith. North & Central London.',
  description:
    'North & Central London locksmith fitting Avocet ABS high-security cylinders only. Anti-snap, anti-bump, anti-pick, anti-drill — British Standard TS007 3-star. Same-day callout, fully insured.',
  // Replace these placeholders before launch.
  phone: '[PHONE]', // e.g. '020 0000 0000' or mobile '07700 900123'
  phoneHref: 'tel:+44PHONE', // change to e.g. 'tel:+447700900123'
  email: '[EMAIL]', // e.g. 'info@kianlocks.com'
  hours: '24/7 emergency callout · Office: Mon–Sun 7am–10pm',
  address: {
    streetAddress: '[STREET]',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    postalCode: '[POSTCODE]',
    addressCountry: 'GB',
  },
  // Centroid for North/Central London (Camden Town) — used in LocalBusiness geo
  geo: { latitude: 51.5390, longitude: -0.1426 },
  // Placeholder ratings for AggregateRating schema. Update once you collect real reviews.
  rating: { value: '5.0', count: 47 },
  social: {
    // Add real URLs as you create profiles. Schema picks these up as sameAs.
    google: '', // Google Business Profile review URL
    facebook: '',
    instagram: '',
    trustpilot: '',
    checkatrade: '',
  },
  brand: {
    navy: '#0E1A3A',
    navyDeep: '#070D24',
    gold: '#D4A93A',
    goldBright: '#F0C04A',
    cream: '#FAF7F1',
    ink: '#0B0F1F',
    grey: '#5A6275',
    line: '#E5E2DA',
  },
} as const;

export type SiteData = typeof SITE;
