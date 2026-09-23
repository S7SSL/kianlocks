/**
 * JSON-LD builders. One business entity (@id /#business) is defined once and
 * everything else references it by @id, so Google and AI engines see a single
 * consistent entity across the site.
 *
 * HOUSE RULES (mirrors the ClearLegacy rules):
 *  - Every FAQPage question must also be VISIBLE on the page. Use the
 *    <FaqBlock> component, which renders the visible list AND the schema from
 *    the same array — never call faqSchema() on its own for a page.
 *  - No AggregateRating unless SITE.rating mirrors a real independent source.
 *  - No placeholder strings ("[STREET]" etc.) — scripts/seo-check.mjs fails the
 *    build check if a "[" placeholder appears inside JSON-LD.
 */

import { SITE } from '../consts';
import type { Borough } from '../data/boroughs';
import type { FAQ } from '../data/faqs';

const ALL_BOROUGH_NAMES = [
  'Camden', 'Islington', 'Haringey', 'Barnet', 'Enfield', 'Hackney',
  'Westminster', 'City of London', 'Kensington and Chelsea',
];

const BUSINESS_ID = `${SITE.url}/#business`;
const SERVICE_ID = `${SITE.url}/#abs-lock-change`;

/** The £149 planned-booking offer — reused by the business, service and borough blocks. */
export function plannedOffer(areaName?: string) {
  return {
    '@type': 'Offer',
    name: 'Planned Avocet ABS lock change',
    description: `Fixed ${SITE.price}: ${SITE.priceIncludes}, itemised written invoice. Mon–Sat 9am–6pm. No callout fee.`,
    price: SITE.priceValue,
    priceCurrency: SITE.priceCurrency,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: SITE.priceValue,
      priceCurrency: SITE.priceCurrency,
      unitText: 'per door (one euro cylinder)',
    },
    availability: 'https://schema.org/InStock',
    url: `${SITE.url}/contact`,
    seller: { '@id': BUSINESS_ID },
    areaServed: areaName
      ? { '@type': 'AdministrativeArea', name: areaName }
      : ALL_BOROUGH_NAMES.map((name) => ({ '@type': 'AdministrativeArea', name })),
  };
}

/** Top-level Locksmith (LocalBusiness) entity. */
export function localBusinessSchema() {
  const block: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': BUSINESS_ID,
    name: SITE.name,
    legalName: 'KIANLOCKS LTD',
    alternateName: ['kianlocks Ltd', 'Kian Locks'],
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Companies House company number',
      value: SITE.companyNumber,
    },
    description: SITE.description,
    url: SITE.url,
    telephone: '+447707071984',
    email: SITE.email,
    image: `${SITE.url}/og-default.png`,
    logo: `${SITE.url}/apple-touch-icon.png`,
    priceRange: `${SITE.price} planned lock change; emergency by quote`,
    currenciesAccepted: 'GBP',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: ALL_BOROUGH_NAMES.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
      containedInPlace: { '@type': 'City', name: 'London' },
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SITE.openingHours.days,
        opens: SITE.openingHours.opens,
        closes: SITE.openingHours.closes,
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'bookings',
        email: SITE.email,
        telephone: '+447707071984',
        areaServed: 'GB',
        availableLanguage: 'en-GB',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'emergency',
        telephone: '+447707071984',
        description: '24/7 emergency callout, quoted per job',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
    knowsAbout: [
      'Euro cylinder lock replacement',
      'Anti-snap locks',
      'TS007 3-star cylinders',
      'Sold Secure SS312 Diamond',
      'Avocet ABS cylinders',
      'Landlord lock changes between tenancies',
      'Lock changes after moving home',
    ],
    makesOffer: plannedOffer(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'kianlocks services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@id': SERVICE_ID },
          price: SITE.priceValue,
          priceCurrency: SITE.priceCurrency,
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 emergency locksmith callout',
            description: 'Out-of-hours and urgent callouts (locked out, after a break-in or snap attempt). Quoted per job before attendance.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'GBP',
            description: 'Quoted per job',
          },
        },
      ],
    },
  };
  const sameAs = [SITE.companyHouseUrl, ...Object.values(SITE.social).filter(Boolean)];
  if (sameAs.length) block.sameAs = sameAs;
  if (SITE.rating) {
    block.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
    };
  }
  return block;
}

/** The core service — Avocet ABS lock change — with its fixed-price Offer. */
export function coreServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': SERVICE_ID,
    name: 'Avocet ABS 3-star lock change',
    serviceType: 'Euro cylinder lock replacement',
    description:
      'Replacement of an existing euro-profile cylinder with an Avocet ABS cylinder (TS007 3-star Kitemarked, Sold Secure SS312 Diamond), sized to the door, with three keys and an itemised invoice naming the product and rating.',
    provider: { '@id': BUSINESS_ID },
    areaServed: ALL_BOROUGH_NAMES.map((name) => ({ '@type': 'AdministrativeArea', name })),
    audience: { '@type': 'Audience', audienceType: 'Landlords, tenants and homeowners' },
    offers: plannedOffer(),
  };
}

/** Borough-specific Service schema — strengthens local relevance. */
export function boroughServiceSchema(borough: Borough) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/locksmith/${borough.slug}#service`,
    name: `ABS lock change in ${borough.name}`,
    description: borough.metaDescription,
    provider: { '@id': BUSINESS_ID },
    isRelatedTo: { '@id': SERVICE_ID },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: borough.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Greater London' },
    },
    serviceType: 'Euro cylinder lock replacement',
    audience: { '@type': 'Audience', audienceType: 'Landlords, tenants and homeowners' },
    offers: plannedOffer(borough.name),
  };
}

/** Audience/landing-page Service block (landlords, tenants, homeowners, emergency). */
export function landingServiceSchema(opts: { path: string; name: string; description: string; audience: string; offer?: boolean }) {
  const block: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    provider: { '@id': BUSINESS_ID },
    isRelatedTo: { '@id': SERVICE_ID },
    areaServed: ALL_BOROUGH_NAMES.map((name) => ({ '@type': 'AdministrativeArea', name })),
    audience: { '@type': 'Audience', audienceType: opts.audience },
  };
  if (opts.offer !== false) block.offers = plannedOffer();
  return block;
}

/** Article schema for guides — dates must only move when content really changes. */
export function articleSchema(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = `${SITE.url}${opts.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: 'en-GB',
    image: `${SITE.url}/og-default.png`,
    author: { '@id': BUSINESS_ID },
    publisher: { '@id': BUSINESS_ID },
    about: { '@id': SERVICE_ID },
  };
}

/** FAQPage schema. Call ONLY via <FaqBlock> so the questions are also visible. */
export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Breadcrumb schema — helps Google show breadcrumbs under the URL. */
export interface Crumb { name: string; url: string }
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** WebSite schema. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    alternateName: 'Kian Locks',
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-GB',
  };
}
