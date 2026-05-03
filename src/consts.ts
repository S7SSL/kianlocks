/**
 * Single source of truth for site-wide constants.
 * Update these and the whole site updates: titles, meta descriptions, schema, footer.
 */

export const SITE = {
  name: 'kianlocks',
  legalName: 'kianlocks Ltd',
  domain: 'kianlocks.com',
  url: 'https://kianlocks.com',
  tagline: 'ABS lock changes. North & Central London. £149 flat.',
  description:
    'North & Central London ABS lock change specialists. Avocet ABS 3-star anti-snap cylinders fitted for landlords, tenants and homeowners. £149 flat fee — cylinder, fitting and three keys included. Email hi@kianlocks.com for same-day quote.',

  /** Primary contact: email */
  email: 'hi@kianlocks.com',
  /** Pre-filled mailto for "Get a quote" CTAs */
  emailHref:
    'mailto:hi@kianlocks.com?subject=ABS%20lock%20change%20quote' +
    '&body=Hi%2C%0A%0AI%27d%20like%20a%20quote%20for%20an%20ABS%20lock%20change.%0A%0APostcode%3A%20%0ADoor%20type%20(uPVC%20%2F%20composite%20%2F%20timber)%3A%20%0AReason%20(new%20tenancy%20%2F%20moved%20in%20%2F%20security%20upgrade)%3A%20%0APreferred%20day%2Ftime%3A%20%0A%0AThanks',

  /** Secondary contact: phone (de-emphasized but available) */
  phone: '07707 071984',
  phoneHref: 'tel:+447707071984',

  hours: 'Mon–Sat 9am–6pm · Email replies within 2 hours',

  /** Flat price for an ABS lock change — single price, no upsell ladder */
  price: '£149',
  priceIncludes: 'cylinder, fitting and three keys',

  address: {
    streetAddress: '[STREET]',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    postalCode: '[POSTCODE]',
    addressCountry: 'GB',
  },
  /** Centroid for North/Central London (Camden Town) — used in LocalBusiness geo */
  geo: { latitude: 51.5390, longitude: -0.1426 },
  /** Placeholder ratings for AggregateRating schema. REMOVE OR UPDATE before launch. */
  rating: { value: '5.0', count: 47 },
  social: {
    google: '',
    facebook: '',
    instagram: '',
    trustpilot: '',
    checkatrade: '',
  },
  brand: {
    navy: '#0E1A3A',
    navyDeep: '#070D24',
    gold: '#D4AF37',
    goldBright: '#E9C349',
    cream: '#F9F9F9',
    ink: '#0B0F1F',
    grey: '#5A6275',
    line: '#E5E7EB',
  },
} as const;

export type SiteData = typeof SITE;
