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
    a: 'ABS is a high-security euro-profile cylinder made by Avocet. It is Kitemarked to TS007 3-star — the top grade, which a cylinder can only reach on its own by resisting snapping, bumping, picking and drilling in testing — and it also holds Sold Secure SS312 Diamond. Other cylinders reach the same grades; we standardise on ABS so every door gets the same tested product, the same key-registration card and the same manufacturer guarantee.',
  },
  {
    q: 'How is a 3-star cylinder different from what came with my door?',
    a: 'Many doors are supplied with a 1-star cylinder, which only reaches the TS007 3-star level when it is paired with a 2-star handle or cylinder guard. If that handle is later swapped for an unrated one, the door quietly drops back to 1-star. A 3-star cylinder such as the Avocet ABS meets the standard on its own, whatever handle is fitted.',
  },
  {
    q: 'Are you the right locksmith for me?',
    a: 'Our planned work is one job: replacing a euro cylinder with an Avocet ABS 3-star, for landlords (tenancy change), tenants (their own keys after moving in) and homeowners (security upgrade). We also take genuine emergencies 24/7 — locked out, a snapped or damaged cylinder, or a door left insecure after a break-in — quoted per job before we set off. We do not cut car keys, open safes or fit smart locks; if that is what you need, we will say so and point you elsewhere.',
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
    a: 'Check your own policy wording, because lock clauses differ between insurers. Where a policy asks for British Standard locks on a uPVC or composite door, a TS007 3-star cylinder is what insurers such as Allianz describe as meeting it (wooden doors are usually covered by a separate BS 3621 mortice-lock requirement). Every job comes with an itemised invoice naming the cylinder and its rating, so you can show your insurer exactly what was fitted.',
  },
  {
    q: 'How quickly can you attend?',
    a: 'Planned bookings are typically slotted within 2–5 working days of your email — that is the £149 flat-fee path. For genuine urgencies (locked out, attempted snap attack, urgent tenancy access) we offer a 24/7 emergency callout, quoted per job because the price depends on the time of day, your location and what we find. Call 07707 071984, or email hi@kianlocks.com with EMERGENCY in the subject line.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes. kianlocks Ltd carries public liability insurance. The certificate is available on request before we book your job.',
  },
];
