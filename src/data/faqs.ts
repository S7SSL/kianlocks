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
    q: 'How much does it cost?',
    a: '£149 flat for a planned booking during standard hours (Mon–Sat 9am–6pm). That covers an Avocet ABS cylinder, fitting, three keys cut to the new cylinder, and a written invoice. No callout fee. No per-minute labour. No upsell ladder. Out-of-hours and 24/7 emergency callouts are available but quoted separately — email or call us with the details and we will price it on the spot.',
  },
  {
    q: 'What is an ABS lock and why do you only fit them?',
    a: 'ABS is a high-security euro-profile cylinder made by Avocet. It carries the British Standard TS007 3-star rating — the only rating that certifies a cylinder against all four real-world attack methods: snapping, bumping, picking and drilling. We fit ABS exclusively because anything less means leaving one of those four attacks open. There is no advantage to mixing brands when one product covers everything.',
  },
  {
    q: 'How is a 3-star cylinder different from what came with my door?',
    a: 'Most off-the-shelf doors and many new-builds ship with a 1-star cylinder, which relies on a 2-star handle to make up the rating. If the handle is replaced, the rating collapses. A 3-star cylinder — like the Avocet ABS — is rated independently and meets the British Standard on its own. It is the only safe assumption.',
  },
  {
    q: 'Are you the right locksmith for me?',
    a: 'We fit ABS lock changes for landlords (tenancy change), tenants (wanting their own keys after moving in), and homeowners (upgrading to a 3-star cylinder). If you are locked out, need a key copy, want a smart lock, need a safe opened, or anything other than a planned ABS cylinder change — we are not the right locksmith. We will tell you that and recommend someone else.',
  },
  {
    q: 'How do I book?',
    a: 'Email hi@kianlocks.com with your postcode, door type (uPVC, composite, timber), and the reason for the change. We reply within 2 hours with a slot and confirm the £149 price. No phone calls required, but you can call 07707 071984 if you prefer.',
  },
  {
    q: 'Do you cover all of London?',
    a: 'We cover North & Central London — the boroughs of Camden, Islington, Haringey, Barnet, Enfield, Hackney, Westminster, the City of London, and Kensington & Chelsea. If you are in or close to those areas we can almost certainly attend.',
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
    q: 'How quickly can you attend?',
    a: 'Planned bookings are typically slotted within 2–5 working days of the email — that is the £149 flat-fee path. We also offer a 24/7 emergency callout for genuine urgencies (locked out, attempted snap attack, urgent tenancy access) — that is quoted per job because the price depends on the time of day, your location and what we find on arrival. Call 07707 071984 or email hi@kianlocks.com with EMERGENCY in the subject line and we will respond.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes. kianlocks Ltd carries full public liability insurance. Documentation available on request.',
  },
];
