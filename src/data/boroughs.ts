/**
 * Borough data drives the location landing pages at /locksmith/{slug}
 * Each borough gets its own page with unique copy, postcodes, landmarks, and schema.
 * Unique per-page content is what stops Google flagging these as thin/duplicate location pages.
 */

export interface Borough {
  slug: string;
  name: string;
  region: 'North London' | 'Central London';
  /** Short SEO meta description (150–160 chars). */
  metaDescription: string;
  /** H1 heading. */
  h1: string;
  /** Lead paragraph (under H1). 2–3 sentences. */
  lead: string;
  /** Postcodes covered, displayed and used in copy. */
  postcodes: string[];
  /** Local landmarks / neighbourhoods — used in body copy for genuine local relevance. */
  landmarks: string[];
  /** Typical response time from base. */
  responseTime: string;
  /** Latitude/longitude — for LocalBusiness geo schema. */
  geo: { latitude: number; longitude: number };
  /** Two unique paragraphs of borough-specific body copy. */
  bodyParagraphs: [string, string];
  /** A common local door/lock issue — adds credibility. */
  commonIssue: string;
}

export const BOROUGHS: Borough[] = [
  {
    slug: 'camden',
    name: 'Camden',
    region: 'North London',
    metaDescription:
      'ABS locksmith in Camden NW1. Avocet ABS 3-star anti-snap cylinders fitted same day. Victorian terraces, period doors and uPVC welcome. Fully insured.',
    h1: 'ABS Locksmith in Camden',
    lead:
      'High-security Avocet ABS cylinders fitted across Camden Town, Kentish Town, Primrose Hill and Belsize Park. We change locks — properly — and we only fit the cylinder a burglar cannot snap, bump, pick or drill.',
    postcodes: ['NW1', 'NW3', 'NW5', 'N7', 'WC1H'],
    landmarks: ['Camden Town', 'Kentish Town', 'Primrose Hill', 'Belsize Park', 'Chalk Farm', 'Bloomsbury'],
    responseTime: '20–40 minutes typical',
    geo: { latitude: 51.5413, longitude: -0.1426 },
    bodyParagraphs: [
      'Camden has one of the highest concentrations of Victorian and Edwardian housing stock in London — period timber doors, mortice locks and original brass furniture sit alongside modern uPVC conversions in Kentish Town and Chalk Farm. Whatever the door, the cylinder is the weak point. We replace the existing euro cylinder with an Avocet ABS 3-star — the same kit fitted to police-approved Secured by Design properties.',
      'Most Camden callouts are post-purchase lock changes (new flat, want the previous owner\'s keys made worthless), break-in repairs after an attempted snap, and landlord-mandated upgrades to meet British Standard TS007. We carry the full Avocet ABS range on the van — euro-profile, thumbturn variants, and lengths to fit anything from a 60mm flat door to an 85mm period front door.',
    ],
    commonIssue:
      'Camden\'s older flat doors often have undersized cylinders sticking out beyond the handle escutcheon — that 5mm overhang is exactly what a snap attack grips. Sized correctly, the ABS sits flush.',
  },
  {
    slug: 'islington',
    name: 'Islington',
    region: 'North London',
    metaDescription:
      'ABS locksmith covering Islington N1, N5, N7. Anti-snap Avocet 3-star cylinders fitted same day. Georgian doors, uPVC and high-rise alike. Fully insured.',
    h1: 'ABS Locksmith in Islington',
    lead:
      'Avocet ABS lock changes across Islington, Angel, Highbury, Canonbury and Holloway. One product, fitted properly — the only cylinder rated 3-star against snap, bump, pick and drill attack.',
    postcodes: ['N1', 'N5', 'N7', 'EC1V', 'EC1R'],
    landmarks: ['Angel', 'Highbury', 'Canonbury', 'Holloway', 'Barnsbury', 'Finsbury'],
    responseTime: '15–35 minutes typical',
    geo: { latitude: 51.5362, longitude: -0.1033 },
    bodyParagraphs: [
      'Islington\'s Georgian terraces and converted warehouses near Old Street present two very different locking jobs — heavy timber front doors needing oval cylinders and traditional mortice deadlocks, versus modern flats with thin uPVC entrance doors that depend entirely on the euro cylinder for their security. We fit ABS on both.',
      'Lock-snapping became the dominant break-in method in N1 and N5 around 2014 and remains the single biggest cause of forced entry in the borough. A 3-star ABS cylinder defeats it outright. We also handle the post-burglary insurance work — same-day attendance, fitted to British Standard, with a written invoice insurers accept.',
    ],
    commonIssue:
      'Many Islington new-build flats were fitted with the cheapest off-the-shelf euro cylinders by the developer. They often fail the snap test in under 30 seconds. ABS swap is a one-hour job.',
  },
  {
    slug: 'haringey',
    name: 'Haringey',
    region: 'North London',
    metaDescription:
      'ABS locksmith in Haringey N4, N8, N15, N17, N22. Avocet 3-star anti-snap cylinders fitted same day across Crouch End, Muswell Hill, Tottenham. Fully insured.',
    h1: 'ABS Locksmith in Haringey',
    lead:
      'Same-day Avocet ABS lock changes across Crouch End, Muswell Hill, Hornsey, Wood Green and Tottenham. The high-security cylinder fitted by police-approved installers nationwide.',
    postcodes: ['N4', 'N6', 'N8', 'N10', 'N15', 'N17', 'N22'],
    landmarks: ['Crouch End', 'Muswell Hill', 'Hornsey', 'Wood Green', 'Tottenham', 'Highgate'],
    responseTime: '25–45 minutes typical',
    geo: { latitude: 51.5906, longitude: -0.1110 },
    bodyParagraphs: [
      'Haringey covers a mix of suburban semis in N10, period conversions in N8, and tower blocks and terraces in N15 and N17. Each has different lock requirements — but the principle is the same: if your euro cylinder is not 3-star rated, it can be snapped in well under a minute. We replace it with Avocet ABS, which cannot.',
      'Crouch End and Muswell Hill in particular have long timber doors with original mortice locks supplemented by a euro nightlatch — we upgrade the cylinder without changing the look of the door. Tottenham and Wood Green see more uPVC and composite doors where the multipoint mechanism remains, but the cylinder is the snap target.',
    ],
    commonIssue:
      'After Haringey burglary clusters in 2023, insurers in N8 and N10 started asking for proof of TS007 3-star cylinders on lapse renewals. ABS satisfies that automatically.',
  },
  {
    slug: 'barnet',
    name: 'Barnet',
    region: 'North London',
    metaDescription:
      'ABS locksmith covering Barnet — High Barnet, Finchley, Hendon, Edgware, Whetstone. Avocet 3-star cylinders fitted same day. Fully insured.',
    h1: 'ABS Locksmith in Barnet',
    lead:
      'Avocet ABS lock changes across the London Borough of Barnet — High Barnet, Finchley, Hendon, Edgware, Mill Hill and Whetstone. One cylinder, fitted right.',
    postcodes: ['EN4', 'EN5', 'N2', 'N3', 'N11', 'N12', 'N20', 'NW4', 'NW7', 'NW9', 'HA8'],
    landmarks: ['High Barnet', 'Finchley', 'Hendon', 'Edgware', 'Mill Hill', 'Whetstone', 'Cockfosters'],
    responseTime: '30–60 minutes typical',
    geo: { latitude: 51.6252, longitude: -0.1517 },
    bodyParagraphs: [
      'Barnet is a large outer-London borough with predominantly suburban housing — semi-detached and detached homes with composite or hardwood front doors, often fitted with a euro cylinder and multipoint locking strip. A standard cylinder in this configuration is the single point of failure. ABS removes it.',
      'We cover EN4, EN5, the Finchley postcodes (N2, N3, N12), Hendon and Edgware (NW4, HA8) and the Mill Hill area (NW7). Same-day appointments are the norm. Stock kept on the van for the most common cylinder lengths so we rarely need a return visit.',
    ],
    commonIssue:
      'Composite doors in Barnet new-builds frequently come with a TS007 1-star cylinder by default — meaning the door is rated 1-star without a 2-star handle. Swap to a 3-star ABS and the cylinder alone passes British Standard.',
  },
  {
    slug: 'enfield',
    name: 'Enfield',
    region: 'North London',
    metaDescription:
      'ABS locksmith in Enfield EN1, EN2, EN3. Avocet 3-star anti-snap cylinders fitted same day across Enfield Town, Palmers Green, Southgate. Fully insured.',
    h1: 'ABS Locksmith in Enfield',
    lead:
      'Avocet ABS lock changes across Enfield Town, Palmers Green, Southgate, Edmonton and Winchmore Hill. Premium British Standard cylinders, fitted same day.',
    postcodes: ['EN1', 'EN2', 'EN3', 'N9', 'N13', 'N14', 'N18', 'N21'],
    landmarks: ['Enfield Town', 'Palmers Green', 'Southgate', 'Edmonton', 'Winchmore Hill', 'Bush Hill Park'],
    responseTime: '30–60 minutes typical',
    geo: { latitude: 51.6523, longitude: -0.0807 },
    bodyParagraphs: [
      'Enfield\'s housing is a mix of inter-war semis, post-war estates, and a growing stock of new-build flats around Edmonton and Meridian Water. Across all of these, the euro cylinder is the lock that matters. We fit Avocet ABS — and only Avocet ABS — because nothing else delivers a verified 3-star rating against the four real attack methods.',
      'Common Enfield jobs include post-completion lock changes on N13/N21 family homes, landlord upgrades on Edmonton flats, and emergency callouts after attempted snap break-ins in EN1. Quotes given in advance, no callout fee surprises.',
    ],
    commonIssue:
      'EN3 sees a higher rate of opportunistic break-ins. Upgrading from a basic 6-pin to an ABS effectively eliminates the snap method that accounts for most of them.',
  },
  {
    slug: 'hackney',
    name: 'Hackney',
    region: 'North London',
    metaDescription:
      'ABS locksmith in Hackney E5, E8, E9, N1, N16. Avocet 3-star cylinders fitted same day across Hackney Central, Stoke Newington, Dalston. Fully insured.',
    h1: 'ABS Locksmith in Hackney',
    lead:
      'Avocet ABS lock changes across Hackney Central, Stoke Newington, Dalston, Hoxton, Clapton and London Fields. Anti-snap, anti-bump, anti-pick, anti-drill — fitted properly.',
    postcodes: ['E5', 'E8', 'E9', 'N1', 'N16', 'EC2A'],
    landmarks: ['Hackney Central', 'Stoke Newington', 'Dalston', 'Hoxton', 'Clapton', 'London Fields'],
    responseTime: '20–40 minutes typical',
    geo: { latitude: 51.5450, longitude: -0.0553 },
    bodyParagraphs: [
      'Hackney runs the full spectrum — Victorian terraces in De Beauvoir, ex-local-authority blocks in Clapton, warehouse conversions in Hoxton, and modern developments around Hackney Wick. The lock that actually stops a forced entry, in every one of these, is the cylinder. ABS is the only one we fit.',
      'Stoke Newington and Dalston see a disproportionate number of post-burglary callouts — usually within hours of the incident. We attend, secure the property the same day, and provide an itemised invoice for the insurer. If the door itself is damaged, we can arrange repair through trusted partners.',
    ],
    commonIssue:
      'A common N16 setup is a sash-window front door with a Yale-pattern nightlatch and a separate mortice — leaving the euro cylinder on the inner door as the snap target. Upgrading that cylinder gets you 3-star without changing anything else.',
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    region: 'Central London',
    metaDescription:
      'ABS locksmith in Westminster SW1, W1, W2, NW1, WC1, WC2. Avocet 3-star anti-snap cylinders fitted same day across Mayfair, Marylebone, Pimlico. Fully insured.',
    h1: 'ABS Locksmith in Westminster',
    lead:
      'Premium Avocet ABS lock changes across the City of Westminster — Mayfair, Marylebone, Pimlico, Belgravia, Soho, Fitzrovia and Bayswater. The lock police-approved properties trust.',
    postcodes: ['SW1', 'W1', 'W2', 'NW1', 'WC1', 'WC2'],
    landmarks: ['Mayfair', 'Marylebone', 'Pimlico', 'Belgravia', 'Soho', 'Fitzrovia', 'Bayswater', 'Victoria'],
    responseTime: '15–30 minutes typical',
    geo: { latitude: 51.4975, longitude: -0.1357 },
    bodyParagraphs: [
      'Westminster has the most expensive door-to-door real estate in the country. Mayfair townhouses, Pimlico mansion blocks, Marylebone mews properties — they share an unforgiving security threshold. A 3-star Avocet ABS cylinder is the minimum our clients here accept on a front door.',
      'We work to listed-building constraints where required: like-for-like cylinder swaps that preserve the historic ironmongery, no visible modification to period escutcheons, and complete documentation for the freeholder or managing agent. Discreet attendance, no branded vehicles, written quotes in advance.',
    ],
    commonIssue:
      'Belgravia and Mayfair freeholds frequently require any cylinder change to be 3-star Kitemarked and documented in the building log. ABS satisfies this and we provide the certificate.',
  },
  {
    slug: 'city-of-london',
    name: 'City of London',
    region: 'Central London',
    metaDescription:
      'ABS locksmith in the City of London EC1–EC4. Avocet 3-star cylinders fitted same day. Residential conversions, mansion blocks, commercial. Fully insured.',
    h1: 'ABS Locksmith in the City of London',
    lead:
      'Avocet ABS lock changes across the Square Mile — Barbican, Smithfield, Aldgate and the EC1–EC4 residential conversions. High-security cylinders, fitted properly.',
    postcodes: ['EC1', 'EC2', 'EC3', 'EC4'],
    landmarks: ['Barbican', 'Smithfield', 'Aldgate', 'Bank', 'Farringdon', 'Cannon Street'],
    responseTime: '15–30 minutes typical',
    geo: { latitude: 51.5155, longitude: -0.0922 },
    bodyParagraphs: [
      'The City\'s residential population is small but distinctive — Barbican leaseholders, Smithfield loft owners, and the converted commercial stock around Farringdon and Liverpool Street. Many of these doors are non-standard sizes that need a precisely-cut ABS cylinder rather than an off-the-shelf swap.',
      'We measure on site, cut to size, and fit the same day. Where managing agents require 3-star compliance documentation for the building\'s insurance schedule, we provide it. Discreet attendance and full insurance for commercial premises.',
    ],
    commonIssue:
      'Barbican flat doors are a non-standard size — generic cylinders either stick out (making them snap-vulnerable) or sit recessed (jamming the handle). Cut-to-length ABS solves both.',
  },
  {
    slug: 'kensington-and-chelsea',
    name: 'Kensington & Chelsea',
    region: 'Central London',
    metaDescription:
      'ABS locksmith in Kensington & Chelsea SW3, SW5, SW7, SW10, W8, W10, W11. Avocet 3-star cylinders fitted same day. Period and contemporary doors. Fully insured.',
    h1: 'ABS Locksmith in Kensington & Chelsea',
    lead:
      'Avocet ABS lock changes across Kensington, Chelsea, Notting Hill, Earl\'s Court, South Kensington and North Kensington. The cylinder fitted in police-approved Secured by Design properties.',
    postcodes: ['SW3', 'SW5', 'SW7', 'SW10', 'W8', 'W10', 'W11', 'W14'],
    landmarks: ['Kensington', 'Chelsea', 'Notting Hill', 'Earl\'s Court', 'South Kensington', 'North Kensington', 'World\'s End'],
    responseTime: '15–30 minutes typical',
    geo: { latitude: 51.4988, longitude: -0.1749 },
    bodyParagraphs: [
      'RBKC contains some of London\'s most security-sensitive residential addresses — stucco-fronted Kensington terraces, Chelsea mews houses, Notting Hill garden flats. The fitments range from heavy oak front doors with traditional mortice locks supplemented by a euro nightlatch, to high-end composite doors on new-build flats off Earl\'s Court Road.',
      'Across all of them, the euro cylinder is what holds the door shut against a snap attack. Avocet ABS is what we fit. We work discreetly, provide written certification, and where the freeholder mandates a particular keying system we can master-suite the cylinders so one key opens shared entrance and flat doors.',
    ],
    commonIssue:
      'Older Notting Hill flats often have a Banham keying scheme inherited from previous owners. We can change the cylinders to ABS and re-issue keys without affecting the existing Banham mortice if you wish to keep it.',
  },
];

export const NORTH_LONDON = BOROUGHS.filter((b) => b.region === 'North London');
export const CENTRAL_LONDON = BOROUGHS.filter((b) => b.region === 'Central London');
