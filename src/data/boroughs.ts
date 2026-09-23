/**
 * Borough data drives the location landing pages at /locksmith/{slug}.
 * Each borough gets unique copy, postcodes, neighbourhoods, nearby-borough links
 * and its own visible FAQ (rendered with <FaqBlock>, so schema == visible).
 *
 * COPY RULES (see CLAIMS-REGISTER.md):
 *  - Planned bookings are 2–5 working days. Do NOT say "same day" for the £149 job.
 *  - Emergencies are 24/7 and quoted per job — say "quoted", never a price.
 *  - No invented local statistics, insurer behaviour or freeholder rules.
 *  - Never say ABS is "the only" 3-star cylinder — other brands hold the same grade.
 */

export interface Borough {
  slug: string;
  name: string;
  region: 'North London' | 'Central London';
  /** Page <title> body (site name is appended). Keep ≤ 52 chars. */
  title: string;
  /** Meta description, ≤ 160 chars. */
  metaDescription: string;
  h1: string;
  lead: string;
  postcodes: string[];
  landmarks: string[];
  geo: { latitude: number; longitude: number };
  bodyParagraphs: [string, string];
  commonIssue: string;
  /** Slugs of neighbouring boroughs we also cover — internal links. */
  nearby: string[];
}

export const BOROUGHS: Borough[] = [
  {
    slug: 'camden',
    name: 'Camden',
    region: 'North London',
    title: 'Locksmith Camden — ABS Lock Change £149',
    metaDescription:
      'ABS lock change in Camden (NW1, NW3, NW5): Avocet 3-star anti-snap cylinder, fitted with 3 keys for £149 flat. Landlords, tenants, homeowners. Email to book.',
    h1: 'ABS Locksmith in Camden',
    lead:
      'Avocet ABS lock changes across Camden Town, Kentish Town, Primrose Hill and Belsize Park. One cylinder, fitted properly: TS007 3-star rated against snapping, bumping, picking and drilling.',
    postcodes: ['NW1', 'NW3', 'NW5', 'N7', 'WC1H'],
    landmarks: ['Camden Town', 'Kentish Town', 'Primrose Hill', 'Belsize Park', 'Chalk Farm', 'Bloomsbury'],
    geo: { latitude: 51.5413, longitude: -0.1426 },
    bodyParagraphs: [
      'Camden mixes Victorian and Edwardian terraces, converted flats and modern uPVC doors in Kentish Town and Chalk Farm. Whatever the door, if it locks with a euro cylinder, that cylinder is what a burglar attacks. We replace it with an Avocet ABS — Kitemarked TS007 3-star and Sold Secure Diamond.',
      'Most Camden jobs are lock changes after buying or renting a flat (so the previous occupant\'s keys stop working), landlord changes between tenancies, and upgrades after a neighbour\'s break-in. We carry the common ABS lengths and thumbturn versions, and measure on site so the cylinder sits flush.',
    ],
    commonIssue:
      'On older Camden flat doors the cylinder often sticks out past the handle plate. That overhang is what a snap attack grips. A correctly sized ABS sits flush, leaving nothing to grab.',
    nearby: ['islington', 'haringey', 'westminster', 'barnet'],
  },
  {
    slug: 'islington',
    name: 'Islington',
    region: 'North London',
    title: 'Locksmith Islington — ABS Lock Change £149',
    metaDescription:
      'ABS lock change in Islington (N1, N5, N7, EC1): Avocet 3-star anti-snap cylinder, fitted with 3 keys for £149 flat. Georgian doors to new-build flats.',
    h1: 'ABS Locksmith in Islington',
    lead:
      'Avocet ABS lock changes across Angel, Highbury, Canonbury, Barnsbury and Holloway. One product, fitted properly — TS007 3-star rated against snapping, bumping, picking and drilling.',
    postcodes: ['N1', 'N5', 'N7', 'EC1V', 'EC1R'],
    landmarks: ['Angel', 'Highbury', 'Canonbury', 'Holloway', 'Barnsbury', 'Finsbury'],
    geo: { latitude: 51.5362, longitude: -0.1033 },
    bodyParagraphs: [
      'Islington\'s Georgian terraces and the newer blocks around Angel and Old Street are two very different jobs. Heavy timber front doors often combine a mortice deadlock with a cylinder nightlatch; modern flat entrance doors usually depend entirely on a euro cylinder and multipoint strip. Where there is a euro cylinder, we fit ABS.',
      'Typical Islington work is landlords changing locks between tenancies, tenants who have just moved in, and owners upgrading the cylinder a developer originally supplied. Every job comes with an itemised invoice naming the cylinder and its rating, for your insurer, landlord or managing agent.',
    ],
    commonIssue:
      'New-build flats are often handed over with a basic or 1-star cylinder. If the handle is not a 2-star security handle, the door is below the TS007 3-star level. Swapping in an ABS fixes that without touching the handle.',
    nearby: ['camden', 'hackney', 'haringey', 'city-of-london'],
  },
  {
    slug: 'haringey',
    name: 'Haringey',
    region: 'North London',
    title: 'Locksmith Haringey — ABS Lock Change £149',
    metaDescription:
      'ABS lock change in Haringey (N4, N8, N10, N15, N17, N22): Avocet 3-star anti-snap cylinder with 3 keys, £149 flat. Crouch End to Tottenham. Email to book.',
    h1: 'ABS Locksmith in Haringey',
    lead:
      'Avocet ABS lock changes across Crouch End, Muswell Hill, Hornsey, Wood Green and Tottenham. A Police Preferred Specification cylinder, fitted to your existing door.',
    postcodes: ['N4', 'N6', 'N8', 'N10', 'N15', 'N17', 'N22'],
    landmarks: ['Crouch End', 'Muswell Hill', 'Hornsey', 'Wood Green', 'Tottenham', 'Highgate'],
    geo: { latitude: 51.5906, longitude: -0.1110 },
    bodyParagraphs: [
      'Haringey covers suburban semis in N10, period conversions in N8, and terraces and blocks in N15 and N17. The principle is the same everywhere: if your euro cylinder is not 3-star rated (or a 1-star cylinder protected by a 2-star handle), it is the easiest way through the door. We replace it with an Avocet ABS.',
      'Crouch End and Muswell Hill timber doors often have a mortice lock plus a cylinder nightlatch; Tottenham and Wood Green see more uPVC and composite doors, where the euro cylinder drives the whole multipoint lock. We change the cylinder without changing the look of the door.',
    ],
    commonIssue:
      'Converted houses often have a shared street door and individual flat doors on different lock types. Tell us which door you mean when you email — we quote £149 per euro cylinder.',
    nearby: ['islington', 'enfield', 'barnet', 'hackney'],
  },
  {
    slug: 'barnet',
    name: 'Barnet',
    region: 'North London',
    title: 'Locksmith Barnet — ABS Lock Change £149',
    metaDescription:
      'ABS lock change across Barnet — Finchley, Hendon, Edgware, Whetstone, Mill Hill. Avocet 3-star anti-snap cylinder with 3 keys, £149 flat. Email to book.',
    h1: 'ABS Locksmith in Barnet',
    lead:
      'Avocet ABS lock changes across the London Borough of Barnet — High Barnet, Finchley, Hendon, Edgware, Mill Hill and Whetstone. One cylinder, fitted right.',
    postcodes: ['EN4', 'EN5', 'N2', 'N3', 'N11', 'N12', 'N20', 'NW4', 'NW7', 'NW9', 'HA8'],
    landmarks: ['High Barnet', 'Finchley', 'Hendon', 'Edgware', 'Mill Hill', 'Whetstone', 'Cockfosters'],
    geo: { latitude: 51.6252, longitude: -0.1517 },
    bodyParagraphs: [
      'Barnet is mostly suburban housing — semi-detached and detached homes with composite or uPVC front doors, typically a euro cylinder driving a multipoint locking strip. In that set-up the cylinder is the single point of failure. An ABS removes it.',
      'We cover EN4 and EN5, the Finchley postcodes (N2, N3, N12), Hendon and Edgware (NW4, HA8) and Mill Hill (NW7). Planned bookings are usually within 2–5 working days, and we carry the common cylinder lengths so a return visit is rarely needed.',
    ],
    commonIssue:
      'Composite doors are often supplied with a 1-star cylinder and a standard handle — so the door is below the TS007 3-star level. A 3-star ABS meets the standard by itself.',
    nearby: ['enfield', 'haringey', 'camden'],
  },
  {
    slug: 'enfield',
    name: 'Enfield',
    region: 'North London',
    title: 'Locksmith Enfield — ABS Lock Change £149',
    metaDescription:
      'ABS lock change in Enfield (EN1–EN3, N13, N14, N21): Avocet 3-star anti-snap cylinder with 3 keys, £149 flat. Palmers Green to Enfield Town. Email to book.',
    h1: 'ABS Locksmith in Enfield',
    lead:
      'Avocet ABS lock changes across Enfield Town, Palmers Green, Southgate, Edmonton and Winchmore Hill. A British Standard 3-star cylinder at one fixed price.',
    postcodes: ['EN1', 'EN2', 'EN3', 'N9', 'N13', 'N14', 'N18', 'N21'],
    landmarks: ['Enfield Town', 'Palmers Green', 'Southgate', 'Edmonton', 'Winchmore Hill', 'Bush Hill Park'],
    geo: { latitude: 51.6523, longitude: -0.0807 },
    bodyParagraphs: [
      'Enfield\'s housing runs from inter-war semis to newer flats around Edmonton and Meridian Water. Across all of them, the euro cylinder is the lock that matters. We fit Avocet ABS, which holds TS007 3-star and Sold Secure SS312 Diamond.',
      'Common Enfield jobs are lock changes after completing on a house in N13 or N21, landlord changes on Edmonton flats between tenancies, and replacements after an attempted break-in. The planned price is agreed in writing before we attend.',
    ],
    commonIssue:
      'A basic cylinder on a uPVC back door is easy to overlook. If you are changing the front, consider the back door too — each euro cylinder is £149.',
    nearby: ['barnet', 'haringey', 'hackney'],
  },
  {
    slug: 'hackney',
    name: 'Hackney',
    region: 'North London',
    title: 'Locksmith Hackney — ABS Lock Change £149',
    metaDescription:
      'ABS lock change in Hackney (E5, E8, E9, N16): Avocet 3-star anti-snap cylinder with 3 keys, £149 flat. Dalston, Stoke Newington, Clapton. Email to book.',
    h1: 'ABS Locksmith in Hackney',
    lead:
      'Avocet ABS lock changes across Hackney Central, Stoke Newington, Dalston, Hoxton, Clapton and London Fields. Anti-snap, anti-bump, anti-pick, anti-drill — fitted properly.',
    postcodes: ['E5', 'E8', 'E9', 'N1', 'N16', 'EC2A'],
    landmarks: ['Hackney Central', 'Stoke Newington', 'Dalston', 'Hoxton', 'Clapton', 'London Fields'],
    geo: { latitude: 51.5450, longitude: -0.0553 },
    bodyParagraphs: [
      'Hackney runs the full spectrum — Victorian terraces in De Beauvoir, ex-local-authority blocks in Clapton, warehouse conversions in Hoxton and new developments around Hackney Wick. Wherever a euro cylinder holds the door, that cylinder decides how secure it is.',
      'After a break-in, call rather than email: urgent securing is part of our 24/7 emergency service, quoted before we set off. Once the door is secure we fit an ABS and give you an itemised invoice for your insurer. If the door itself is damaged, we will tell you what it needs before any work is done.',
    ],
    commonIssue:
      'Many N16 conversions have a street door with a nightlatch and a separate flat door with a euro cylinder. The flat door cylinder is usually the one worth upgrading first.',
    nearby: ['islington', 'haringey', 'city-of-london', 'enfield'],
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    region: 'Central London',
    title: 'Locksmith Westminster — ABS Lock Change £149',
    metaDescription:
      'ABS lock change in Westminster (W1, W2, SW1, NW8): Avocet 3-star anti-snap cylinder with 3 keys, £149 flat. Marylebone, Pimlico, Bayswater. Email to book.',
    h1: 'ABS Locksmith in Westminster',
    lead:
      'Avocet ABS lock changes across the City of Westminster — Marylebone, Mayfair, Pimlico, Soho, Fitzrovia and Bayswater. A Secured by Design, Police Preferred Specification cylinder.',
    postcodes: ['SW1', 'W1', 'W2', 'NW1', 'NW8', 'WC2'],
    landmarks: ['Mayfair', 'Marylebone', 'Pimlico', 'Belgravia', 'Soho', 'Fitzrovia', 'Bayswater', 'Victoria'],
    geo: { latitude: 51.4975, longitude: -0.1357 },
    bodyParagraphs: [
      'Westminster has a high share of mansion-block and converted flats, where each flat entrance door is usually a euro cylinder behind a shared street door. That flat-door cylinder is what an intruder who gets into the common parts will try. We replace it with an Avocet ABS.',
      'Many blocks have managing agents who want a record of what was fitted. Every job comes with an itemised invoice naming the cylinder, its TS007 and Sold Secure ratings and the door it was fitted to — ready to forward to the agent or freeholder.',
    ],
    commonIssue:
      'Period doors with decorative ironmongery can still take a euro cylinder. We swap the cylinder only, so the handles and plates you see stay exactly as they are.',
    nearby: ['camden', 'kensington-and-chelsea', 'city-of-london'],
  },
  {
    slug: 'city-of-london',
    name: 'City of London',
    region: 'Central London',
    title: 'Locksmith City of London — ABS Lock Change',
    metaDescription:
      'ABS lock change in the City of London (EC1–EC4): Avocet 3-star anti-snap cylinder with 3 keys, £149 flat. Barbican, Smithfield, Aldgate flats. Email to book.',
    h1: 'ABS Locksmith in the City of London',
    lead:
      'Avocet ABS lock changes across the Square Mile — the Barbican, Smithfield, Aldgate and the EC1–EC4 residential conversions. High-security cylinders, cut and fitted properly.',
    postcodes: ['EC1', 'EC2', 'EC3', 'EC4'],
    landmarks: ['Barbican', 'Smithfield', 'Aldgate', 'Bank', 'Farringdon', 'Cannon Street'],
    geo: { latitude: 51.5155, longitude: -0.0922 },
    bodyParagraphs: [
      'The City\'s residential population is small but distinctive — Barbican leaseholders, Smithfield loft owners and the converted commercial buildings around Farringdon and Liverpool Street. Doors in converted buildings are often non-standard thicknesses, which is why we measure before fitting rather than guessing.',
      'Where a managing agent needs evidence of what was fitted, the itemised invoice names the cylinder and its ratings. Our service is residential: flat and house doors, not commercial master-key systems.',
    ],
    commonIssue:
      'A cylinder that is too long sticks out and is easier to snap; one that is too short can jam the handle. Measured, correctly sized ABS avoids both.',
    nearby: ['islington', 'hackney', 'westminster'],
  },
  {
    slug: 'kensington-and-chelsea',
    name: 'Kensington & Chelsea',
    region: 'Central London',
    title: 'Locksmith Kensington & Chelsea — ABS Lock Change',
    metaDescription:
      'ABS lock change in Kensington & Chelsea (SW3, SW5, SW7, W8, W10, W11): Avocet 3-star anti-snap cylinder with 3 keys, £149 flat. Email hi@kianlocks.com.',
    h1: 'ABS Locksmith in Kensington & Chelsea',
    lead:
      'Avocet ABS lock changes across Kensington, Chelsea, Notting Hill, Earl\'s Court and South Kensington. The cylinder specified under the police Secured by Design scheme.',
    postcodes: ['SW3', 'SW5', 'SW7', 'SW10', 'W8', 'W10', 'W11', 'W14'],
    landmarks: ['Kensington', 'Chelsea', 'Notting Hill', 'Earl\'s Court', 'South Kensington', 'North Kensington', 'World\'s End'],
    geo: { latitude: 51.4988, longitude: -0.1749 },
    bodyParagraphs: [
      'RBKC ranges from stucco-fronted terraces and mews houses to garden flats and new-build blocks off Earl\'s Court Road. Front doors vary from heavy timber with a mortice lock plus cylinder nightlatch to composite doors with a multipoint lock. Where there is a euro cylinder, we fit Avocet ABS.',
      'For flats in converted houses, the flat entrance door is usually the priority. If your building uses a restricted or master-keyed system for the shared doors, tell us before booking — we change the cylinder on your own door and leave shared-door systems alone.',
    ],
    commonIssue:
      'Older flats often have a separate mortice deadlock alongside the cylinder. We leave a working mortice in place and upgrade the cylinder, so you keep both locks.',
    nearby: ['westminster', 'camden'],
  },
];

export const NORTH_LONDON = BOROUGHS.filter((b) => b.region === 'North London');
export const CENTRAL_LONDON = BOROUGHS.filter((b) => b.region === 'Central London');
export const boroughBySlug = (slug: string) => BOROUGHS.find((b) => b.slug === slug);
