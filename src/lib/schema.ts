/**
 * Helpers that build JSON-LD structured data objects.
 * Schema is the single biggest local-SEO lever for service-area businesses
 * — it powers the Google Knowledge Panel, the map pack listing, and FAQ
 * rich results in search.
 */

import { SITE } from '../consts';
import type { Borough } from '../data/boroughs';
import type { FAQ } from '../data/faqs';

const ALL_BOROUGH_NAMES = [
  'Camden', 'Islington', 'Haringey', 'Barnet', 'Enfield', 'Hackney',
  'Westminster', 'City of London', 'Kensington and Chelsea',
];

/** Top-level LocalBusiness schema — the most important block on the site. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${SITE.url}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/og-default.png`,
    logo: `${SITE.url}/logo.svg`,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
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
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      geoRadius: '12000', // metres
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: Object.values(SITE.social).filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Avocet ABS cylinder lock change',
            description: 'High-security TS007 3-star anti-snap, anti-bump, anti-pick, anti-drill euro cylinder fitted to existing door.',
          },
        },
      ],
    },
  };
}

/** Borough-specific Service schema — strengthens local relevance. */
export function boroughServiceSchema(borough: Borough) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/locksmith/${borough.slug}#service`,
    name: `ABS Locksmith — ${borough.name}`,
    description: borough.metaDescription,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: borough.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Greater London' },
    },
    serviceType: 'Locksmith — high-security cylinder change',
    audience: { '@type': 'Audience', audienceType: 'Homeowners and landlords' },
  };
}

/** FAQPage schema — qualifies for FAQ rich results (collapsible Q&A in SERPs). */
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

/** WebSite schema with SearchAction (enables sitelinks searchbox eventually). */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#business` },
    inLanguage: 'en-GB',
  };
}
