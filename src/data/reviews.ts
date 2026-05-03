/**
 * Reviews displayed on the homepage and used in Review schema.
 * Replace with real customer reviews before launch — Google penalises fake reviews
 * and review schema must reflect genuinely-collected feedback.
 */
export interface Review {
  author: string;
  borough: string;
  rating: 5;
  date: string; // YYYY-MM-DD
  body: string;
}

export const REVIEWS: Review[] = [
  // Placeholders — REPLACE with real reviews before launch.
  {
    author: '[Customer name]',
    borough: 'Camden',
    rating: 5,
    date: '2026-04-12',
    body: '[Real review here. Until you swap these out, leave reviews off the live site or include only ones you actually have permission to publish.]',
  },
  {
    author: '[Customer name]',
    borough: 'Islington',
    rating: 5,
    date: '2026-03-28',
    body: '[Real review here.]',
  },
  {
    author: '[Customer name]',
    borough: 'Westminster',
    rating: 5,
    date: '2026-02-15',
    body: '[Real review here.]',
  },
];
