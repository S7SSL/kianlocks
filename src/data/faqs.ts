/**
 * Frequently asked questions — used on the homepage and serialised
 * into FAQPage JSON-LD for rich result eligibility on Google.
 */
export interface FAQ {
  q: string;
  a: string;
}

export const FAQS: FAQ[] = [
  {
    q: 'What is an ABS lock and why do you only fit them?',
    a: 'ABS is a high-security euro-profile cylinder made by Avocet. It carries the British Standard TS007 3-star rating — the only rating that certifies a cylinder against all four real-world attack methods: snapping, bumping, picking and drilling. We fit ABS exclusively because anything less means leaving one of those four attacks open. There is no advantage to mixing brands when one product covers everything.',
  },
  {
    q: 'How is a 3-star cylinder different from what came with my door?',
    a: 'Most off-the-shelf doors and many new-builds ship with a 1-star cylinder, which relies on a 2-star handle to make up the rating. If the handle is replaced, the rating collapses. A 3-star cylinder — like the Avocet ABS — is rated independently and meets the British Standard on its own. It is the only safe assumption.',
  },
  {
    q: 'Do you cover all of London?',
    a: 'We cover North & Central London — the boroughs of Camden, Islington, Haringey, Barnet, Enfield, Hackney, Westminster, the City of London, and Kensington & Chelsea. If you are in or close to those areas we can almost certainly attend.',
  },
  {
    q: 'How quickly can you attend?',
    a: 'Same-day across our service area. Typical response is 15–45 minutes in central boroughs and 30–60 minutes in outer ones. For confirmed emergencies we prioritise.',
  },
  {
    q: 'Will an ABS cylinder fit my existing door?',
    a: 'In almost every case, yes. ABS comes in a complete range of euro-profile lengths and configurations, including thumbturn variants for fire-escape compliance. If a non-standard length is needed, we measure on site and cut to fit before fitting — usually within the same visit.',
  },
  {
    q: 'Will my insurance accept the new cylinder?',
    a: 'Yes — every UK home insurer accepts a TS007 3-star Kitemarked cylinder as meeting the security clause of standard policies. We provide an itemised written invoice that names the product and its rating, which you can pass directly to your insurer if requested.',
  },
  {
    q: 'How much does a lock change cost?',
    a: 'A standard ABS cylinder change starts from a fixed call-out plus parts — quoted in advance, in writing, before any work begins. There are no hidden surprises and no per-minute charges. Call for a price specific to your door.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes. Kian Locks Ltd carries full public liability insurance. Documentation available on request.',
  },
];
