// Self-contained mock data for the books functional tests.
// The shape mirrors the SHARED CONTRACT Book type used by the /books page.
export type Book = {
  id: number;
  title: string;
  author: string;
  my_score: number;
  genre: string;
  my_comment: string;
  img: string;
};

/**
 * Fixture crafted so every filter dimension is testable.
 *
 * Authors:
 *   - "Frank Herbert" -> 2 books (ids 3, 4)
 *   - "Andrew Hunt"      -> 1 book  (id 1)
 *   - "Robert C. Martin" -> 1 book  (id 2)
 *   - "J.R.R. Tolkien"   -> 1 book  (id 5)
 *   - "Yuval Noah Harari"-> 1 book  (id 6)
 *
 * Genres:
 *   - "Tech"    -> 2 books (ids 1, 2)
 *   - "Sci-Fi"  -> 1 book  (id 3)
 *   - "Thriller"-> 1 book  (id 4)
 *   - "Fantasy" -> 1 book  (id 5)
 *   - "History" -> 1 book  (id 6)
 *
 * Scores (my_score):
 *   - 5 -> 3 books (ids 1, 2, 5)
 *   - 4 -> 2 books (ids 3, 6)
 *   - 3 -> 1 book  (id 4)
 *
 * Combined AND example:
 *   - author "Frank Herbert" + genre "Sci-Fi" -> 1 book (id 3)
 *     (Frank Herbert has 2 books, but only one is Sci-Fi, so this proves AND logic.)
 *
 * No-results combination:
 *   - author "Frank Herbert" + score 5 -> 0 books
 *     (Frank Herbert's books score 4 and 3, never 5.)
 */
export const books: Book[] = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    my_score: 5,
    genre: "Tech",
    my_comment: "A timeless guide to becoming a better developer.",
    img: "https://placehold.co/120x180?text=Pragmatic",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    my_score: 5,
    genre: "Tech",
    my_comment: "Changed how I think about readable code.",
    img: "https://placehold.co/120x180?text=Clean+Code",
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    my_score: 4,
    genre: "Sci-Fi",
    my_comment: "Epic world-building and political intrigue.",
    img: "https://placehold.co/120x180?text=Dune",
  },
  {
    id: 4,
    title: "Soul Catcher",
    author: "Frank Herbert",
    my_score: 3,
    genre: "Thriller",
    my_comment: "A darker, lesser-known Herbert novel.",
    img: "https://placehold.co/120x180?text=Soul+Catcher",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    my_score: 5,
    genre: "Fantasy",
    my_comment: "The cozy adventure that started it all.",
    img: "https://placehold.co/120x180?text=The+Hobbit",
  },
  {
    id: 6,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    my_score: 4,
    genre: "History",
    my_comment: "A sweeping look at human history.",
    img: "https://placehold.co/120x180?text=Sapiens",
  },
];

/** Expected counts used across the filter assertions. */
export const expectedCounts = {
  total: books.length, // 6
  author: {
    "Frank Herbert": 2,
    "Andrew Hunt": 1,
    "Robert C. Martin": 1,
    "J.R.R. Tolkien": 1,
    "Yuval Noah Harari": 1,
  },
  genre: {
    Tech: 2,
    "Sci-Fi": 1,
    Thriller: 1,
    Fantasy: 1,
    History: 1,
  },
  score: {
    5: 3,
    4: 2,
    3: 1,
  },
  // author "Frank Herbert" AND genre "Sci-Fi"
  combinedAuthorGenre: 1,
} as const;

/** A valid author + score selection that matches zero books. */
export const noResultsCombo = {
  author: "Frank Herbert",
  score: 5,
} as const;
