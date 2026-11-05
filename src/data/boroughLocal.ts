/**
 * Extra local copy for each /locksmith/{slug} page, so every area page is mostly unique.
 * Facts here are general, publicly known features of each area (neighbourhoods, housing
 * types, building management). Same rules as boroughs.ts / CLAIMS-REGISTER.md:
 *  - no invented jobs, customers, travel times or local crime statistics
 *  - no "same day" for planned work; emergencies are quoted
 *  - no comma before "and"
 */
import type { FAQ } from './faqs';

export interface BoroughLocal {
  /** Heading for the local guide section. */
  guideHeading: string;
  /** Two short paragraphs about the area's doors and buildings. */
  guide: [string, string];
  /** Practical booking note specific to the area. */
  bookingNote: string;
  /** One extra area-specific question, shown in the visible FAQ (and its schema). */
  faq: FAQ;
}

export const BOROUGH_LOCAL: Record<string, BoroughLocal> = {
  camden: {
    guideHeading: 'Doors we see across Camden',
    guide: [
      'Belsize Park and Primrose Hill have many mansion blocks and large Victorian houses split into flats, where each flat has its own front door off a shared hallway. Those flat doors are often older timber doors fitted with a cylinder nightlatch, which is the lock an intruder in the common parts will try first.',
      'Around Kentish Town, Gospel Oak and Somers Town there are council and housing association blocks as well as newer private developments. Leaseholders in managed blocks may need the managing agent to agree before the communal entrance lock is changed. Your own flat door is normally yours to upgrade.',
    ],
    bookingNote: 'Most Camden streets are in controlled parking zones. Tell us if your building has a loading bay or visitor parking and we will plan the visit around it.',
    faq: {
      q: 'Can you change the lock on my flat door in a Camden mansion block?',
      a: 'Yes. We change the cylinder on your own flat entrance door. The communal street door is usually the freeholder or managing agent\'s responsibility, so check with them before anything is changed there.',
    },
  },
  islington: {
    guideHeading: 'Doors we see across Islington',
    guide: [
      'Barnsbury and Canonbury are known for Georgian and early Victorian terraces, many in conservation areas. These houses usually keep their original panelled front doors, so a cylinder upgrade is a good fit: it raises security without replacing a door that may need to stay as it is.',
      'Closer to Angel, Old Street and the Holloway Road there are more purpose-built flats and conversions, many with composite or fire-rated flat entrance doors. On a fire door the cylinder must be the right type and size so the door still closes and latches properly. We measure before fitting.',
    ],
    bookingNote: 'Parking across Islington is mostly controlled. If you live on Upper Street or another red route, let us know a side street we can use.',
    faq: {
      q: 'I live in an Islington conservation area. Can I still upgrade my lock?',
      a: 'Usually yes. Changing the euro cylinder does not change how the door looks from outside. If your house is listed, check with the council before changing the door itself. A like-for-like cylinder swap is normally not an issue.',
    },
  },
  haringey: {
    guideHeading: 'Doors we see across Haringey',
    guide: [
      'The streets between Green Lanes and Wightman Road (often called the Harringay Ladder) are long rows of Victorian terraces. Many have been split into upper and lower flats, so there are often two front doors side by side, each with its own lock.',
      'Muswell Hill and Crouch End have a lot of Edwardian houses and flats with timber doors. Tottenham and Wood Green have more uPVC and composite doors, plus newer blocks around Tottenham Hale. On a uPVC or composite door the euro cylinder runs the whole multipoint lock, so it is the part worth upgrading first.',
    ],
    bookingNote: 'Some Haringey streets have controlled parking at set hours. Let us know the restrictions on your road when you book.',
    faq: {
      q: 'My Haringey house is split into two flats. Can you do both doors?',
      a: 'Yes. Each flat door gets its own cylinder and keys. If the two flats share a main front door, agree with the other owner or the freeholder before that lock is changed.',
    },
  },
  hackney: {
    guideHeading: 'Doors we see across Hackney',
    guide: [
      'Stoke Newington, Clapton and De Beauvoir have many Victorian terraces, often converted into flats. Hackney Wick and the streets near Shoreditch have warehouse and industrial conversions, where flat doors are often heavy fire-rated doors fitted by the developer.',
      'Dalston and Hackney Central have a large number of newer blocks. Developers often fit a basic cylinder as standard, so owners and landlords upgrade to a 3-star cylinder after buying. Hackney also has a lot of rented homes, so lock changes between tenancies are common.',
    ],
    bookingNote: 'Parking in Hackney is mostly controlled and some streets are low-traffic neighbourhoods with filtered access. Tell us the best way into your road when you book.',
    faq: {
      q: 'Can you upgrade the lock on a new-build flat in Hackney?',
      a: 'Yes. On most new-build flat doors the euro cylinder can be swapped for an ABS 3-star cylinder of the right size. If the door is under a building warranty, check whether the developer needs to be told about hardware changes.',
    },
  },
  barnet: {
    guideHeading: 'Doors we see across Barnet',
    guide: [
      'Finchley, Mill Hill, Edgware and High Barnet are mainly family houses, many of them 1930s semis and terraces. A lot of these homes now have uPVC or composite front and back doors with euro cylinders, which are the doors a snap attack targets.',
      'Hampstead Garden Suburb is a conservation area with its own rules on how houses look, while areas such as Colindale have large newer developments of flats. Back doors and side gates are easy to forget: if the back door uses a euro cylinder it needs upgrading too.',
    ],
    bookingNote: 'Most Barnet homes have driveway or street parking. Tell us if your road has a controlled parking zone near a station or high street.',
    faq: {
      q: 'Should I change the back door lock as well as the front in Barnet?',
      a: 'If the back door uses a euro cylinder, yes. Back and patio doors are often less visible from the street, so they are a common way in. We can fit matching ABS cylinders so one key works both doors.',
    },
  },
  enfield: {
    guideHeading: 'Doors we see across Enfield',
    guide: [
      'Southgate, Palmers Green and Winchmore Hill have many 1930s semis and Edwardian houses. Bush Hill Park and parts of Enfield Town have older Victorian and Edwardian streets, while Edmonton and Ponders End have a mix of terraces, estates and newer flats.',
      'Many Enfield homes have had their original doors replaced with uPVC or composite doors. Those doors usually came with a standard cylinder, so the door itself is sound but the lock is the weak point. A correctly sized ABS cylinder fixes that without changing the door.',
    ],
    bookingNote: 'Most Enfield roads have driveways or street parking. If you are near a station or high street, let us know about any parking controls.',
    faq: {
      q: 'Can you match the keys for front and back doors in Enfield?',
      a: 'Yes. We can supply ABS cylinders keyed alike, so one key opens both doors. Say so when you book so we bring the right sizes.',
    },
  },
  westminster: {
    guideHeading: 'Doors we see across Westminster',
    guide: [
      'Maida Vale, Marylebone and St John\'s Wood have many mansion blocks and period houses converted into flats. Pimlico has long stucco terraces, many of them split into flats. In these buildings each flat door matters as much as the street door.',
      'A lot of Westminster buildings are managed, with porters or managing agents and their own rules for contractors. Many flat entrance doors are fire-rated, so the replacement cylinder must suit the door and keep it closing properly.',
    ],
    bookingNote: 'Parking in Westminster is tightly controlled. Tell us if your building has a porter, a contractor sign-in or a loading bay and we will arrange the visit to suit.',
    faq: {
      q: 'Do I need permission to change my flat lock in a Westminster mansion block?',
      a: 'For your own flat door, usually not, but your lease or building rules may say contractors must be booked in. The street door and any master-key system are normally controlled by the managing agent.',
    },
  },
  'city-of-london': {
    guideHeading: 'Homes we cover in the City of London',
    guide: [
      'The City is mostly offices, but a few thousand people live there, mainly in the Barbican, Golden Lane and the residential blocks around Smithfield and the Temple. Almost all of these homes are flats in managed buildings.',
      'Flat entrance doors in these blocks are often fire-rated and some estates have their own rules on door hardware. We change the cylinder on your own flat door to an ABS 3-star cylinder of the right size, so the door keeps working as designed.',
    ],
    bookingNote: 'Most City buildings need contractors to sign in. Tell us your building\'s arrangements and we will book a time that works with the estate office.',
    faq: {
      q: 'Can you change my flat lock in the Barbican or another City estate?',
      a: 'We can change the cylinder on your own flat door. Some estates set rules on door hardware, so check with the estate office first. We can provide the cylinder details for them in advance.',
    },
  },
  'kensington-and-chelsea': {
    guideHeading: 'Doors we see across Kensington and Chelsea',
    guide: [
      'Notting Hill, South Kensington and Chelsea are known for stucco and brick townhouses, many divided into flats. Earl\'s Court has a large number of converted flats and mansion blocks. Original front doors are common and often in conservation areas.',
      'Many homes here have high-value contents, so insurers may ask for specific locks. A 3-star cylinder helps on euro-cylinder doors. If your policy names a British Standard mortice lock for timber doors, check that too: a cylinder alone may not cover it.',
    ],
    bookingNote: 'Parking in the borough is controlled. Tell us if your street has resident-only bays or a mews with restricted access.',
    faq: {
      q: 'Will an ABS cylinder meet my insurer\'s lock requirements in Kensington?',
      a: 'It meets TS007 3-star for euro-cylinder doors. Some policies also ask for a British Standard mortice deadlock on timber doors. Check your policy wording. We can tell you what your door currently has.',
    },
  },
  hertsmere: {
    guideHeading: 'Doors we see across Hertsmere',
    guide: [
      'Hertsmere covers Borehamwood, Potters Bar, Bushey, Radlett and Elstree. Most homes are family houses, from older semis to newer estates. A lot of them have uPVC or composite front, back and patio doors.',
      'On those doors the euro cylinder drives the whole multipoint lock, so one weak cylinder undermines a strong door. Many households have several cylinders on one property. We can fit ABS cylinders to each door and key them alike. Garages with a door through to the house are worth including, as that internal door often has the weakest lock in the home.',
    ],
    bookingNote: 'Shenley, Elstree village and the roads off the M25 junctions are all covered. Mention a gate code or shared drive in your email so the fitter can get straight to the door.',
    faq: {
      q: 'Do you cover Borehamwood, Potters Bar and Bushey?',
      a: 'Yes. We cover the whole of Hertsmere, including Borehamwood, Potters Bar, Bushey, Radlett and Elstree. Email your postcode and we will confirm a booking window.',
    },
  },
  broxbourne: {
    guideHeading: 'Doors we see across Broxbourne',
    guide: [
      'Broxbourne covers Cheshunt, Hoddesdon, Waltham Cross, Broxbourne and Wormley along the A10 and the Lea Valley. There is a mix of older town-centre streets and large newer estates.',
      'Most homes have uPVC or composite doors with euro cylinders. Newer estates are often fitted with a standard cylinder when built, so upgrading to a 3-star cylinder is a common first job after moving in.',
    ],
    bookingNote: 'Most Broxbourne homes have driveway or street parking. Let us know if you are on a new estate with permit parking.',
    faq: {
      q: 'I have just moved into a new-build home in Cheshunt. Should I change the locks?',
      a: 'It is a good idea. You cannot be sure how many keys were cut during the build and sale. Changing the cylinders to ABS 3-star gives you new keys and a higher security rating.',
    },
  },
  'welwyn-hatfield': {
    guideHeading: 'Doors we see across Welwyn Hatfield',
    guide: [
      'Welwyn Garden City was built as a planned garden city from the 1920s, so many streets have homes of a similar age and style, with many older doors since replaced by uPVC or composite. Hatfield has a large number of newer homes and student lets near the University of Hertfordshire.',
      'In shared and student houses each bedroom or flat may have its own lock. Landlords change these locks between tenancies. On euro-cylinder doors an ABS cylinder is a simple upgrade that suits both owners and landlords. Brookmans Park, Welham Green and Woolmer Green are covered too, with their mix of village houses and post-war homes.',
    ],
    bookingNote: 'Term-time changeovers in Hatfield get busy for landlords, so email early in the summer with the list of rooms and doors you need changed.',
    faq: {
      q: 'Do you change locks for student lets in Hatfield?',
      a: 'Yes. We change cylinders between tenancies for landlords and letting agents. Each lock comes with three keys and an itemised invoice for your records.',
    },
  },
  'st-albans': {
    guideHeading: 'Doors we see across St Albans',
    guide: [
      'The St Albans district includes the city itself, Harpenden, London Colney and nearby villages. Around the city centre there are many Victorian and Edwardian houses, while the outer areas have more modern family homes.',
      'Period homes often keep a timber front door with a mortice lock and nightlatch, while back and side doors may be uPVC with a euro cylinder. We check each door and upgrade the euro cylinders to ABS 3-star. Converted outbuildings, garden offices and annexes with their own uPVC door are common in the district and can be keyed to match the house.',
    ],
    bookingNote: 'Central St Albans and Harpenden have permit streets near the stations. Tell us whether there is off-street space at the property.',
    faq: {
      q: 'Do you cover Harpenden and London Colney?',
      a: 'Yes. We cover the St Albans district, including Harpenden, London Colney and the surrounding villages. Email your postcode to confirm.',
    },
  },
};
