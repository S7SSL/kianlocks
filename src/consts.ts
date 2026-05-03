/**
 * Single source of truth for site-wide constants.
 * Update these and the whole site updates: titles, meta descriptions, schema, footer.
 */

export const SITE = {
  name: 'kianlocks',
  legalName: 'kianlocks Ltd',
  domain: 'kianlocks.com',
  url: 'https://kianlocks.com',
  tagline: 'ABS lock change · £149 flat · North London',
  description:
    'North & Central London ABS lock specialists. £149 flat for planned bookings, 24/7 emergency by quote. Email hi@kianlocks.com to book.',

  /** Primary contact: email */
  email: 'hi@kianlocks.com',
  /** Pre-filled mailto for booking CTAs */
  emailHref:
    'mailto:hi@kianlocks.com?subject=ABS%20lock%20change%20booking' +
    '&body=Hi%2C%0A%0AI%27d%20like%20to%20book%20an%20ABS%20lock%20change.%0A%0APostcode%3A%20%0ADoor%20type%20(uPVC%20%2F%20composite%20%2F%20timber)%3A%20%0AReason%20(new%20tenancy%20%2F%20moved%20in%20%2F%20security%20upgrade)%3A%20%0APreferred%20day%2Ftime%3A%20%0A%0AThanks',

  /** Secondary contact: phone (de-emphasized but available) */
  phone: '07707 071984',
  phoneHref: 'tel:+447707071984',

  hours: 'Standard: Mon–Sat 9am–6pm · 24/7 emergency available, subject to quote',
  hoursShort: 'Mon–Sat 9–6 · 24/7 emergency by quote',

  /** Flat price for a planned ABS lock change — single price, no upsell ladder */
  price: '£149',
  priceIncludes: 'cylinder, fitting and three keys',
  /** Emergency / out-of-hours pricing — quoted per job */
  priceEmergency: 'Quoted on request',

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
