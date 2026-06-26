# Books API — Cloudflare Worker + D1

A small Cloudflare Worker that serves a list of books as JSON from a Cloudflare D1 database.

## Endpoint

- `GET http://localhost:8787/api/books` → `200` with `Content-Type: application/json`, body = `Book[]`
- `GET http://localhost:8787/` → same `Book[]` (convenience)

### Book shape

```ts
type Book = {
  id: number;
  title: string;
  author: string;
  my_score: number;
  genre: string;
  my_comment: string;
  img: string;
};
```

CORS is enabled on every response (`Access-Control-Allow-Origin: *`, `Access-Control-Allow-Methods: GET, OPTIONS`, `Access-Control-Allow-Headers: Content-Type`) so the Next.js frontend on `http://localhost:3000` can fetch it.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create the D1 database:

```bash
npx wrangler d1 create books-db
```

3. Copy the `database_id` printed by the command above and paste it into `wrangler.jsonc`, replacing `REPLACE_WITH_D1_DATABASE_ID`.

4. Apply migrations locally (creates the table and seeds sample rows):

```bash
npm run db:migrate:local
```

5. Start the local dev server (defaults to port 8787):

```bash
npm run dev
```

The API is now available at `http://localhost:8787/api/books`.

## Type-check

```bash
npx tsc --noEmit
```

## Deploy (optional)

```bash
npm run db:migrate:remote   # apply migrations to the remote D1 database
npm run deploy
```

## Adding books

There is no genres list or hardcoded book data — books live as rows in the
`books` table, and the frontend derives the genre pills, search and sort
dynamically. "Adding a genre" just means using a new `genre` string on a book.

### Book columns

| Column       | Type    | Notes                                                   |
| ------------ | ------- | ------------------------------------------------------- |
| `id`         | INTEGER | Primary key — use the next free number, or omit to auto-assign |
| `title`      | TEXT    |                                                         |
| `author`     | TEXT    |                                                         |
| `my_score`   | INTEGER | 1–5 (rendered as stars)                                 |
| `genre`      | TEXT    | Free text — reuse exact spelling to group under one pill |
| `my_comment` | TEXT    | Your review                                             |
| `img`        | TEXT    | A URL, or a local path like `/img/books/Name.jpg`       |

### Recommended: add books via a migration (tracked + reproducible)

1. (Local cover image only) drop the file in `../public/img/books/` — e.g.
   `public/img/books/MyBook.jpg` — and reference it as `/img/books/MyBook.jpg`.
   For a remote cover, just use its URL and skip this step.

2. Create the next numbered migration in `migrations/` (highest number + 1),
   e.g. `migrations/0005_add_books.sql`:

   ```sql
   INSERT INTO books (title, author, my_score, genre, my_comment, img) VALUES
     ('The Phoenix Project', 'Gene Kim', 5, 'Software Development',
      'A novel that makes DevOps concepts click.',
      'https://example.com/phoenix.jpg'),
     ('My Other Book', 'Some Author', 4, 'Software Development',
      'Short review here.',
      '/img/books/MyBook.jpg');
   ```

   - Omitting `id` lets D1 assign it automatically (avoids collisions).
   - Escape an apostrophe by doubling it: `'A Practitioner''s Guide'`.

3. Apply the migration (from this `backend/` folder):

   ```bash
   npm run db:migrate:local    # local dev database (what localhost shows)
   npm run db:migrate:remote   # live Cloudflare database
   ```

4. Restart the Worker if it's running (Ctrl-C, then `npm run dev`) and refresh
   `http://localhost:3000/books`.

5. Verify (optional):

   ```bash
   npx wrangler d1 execute books-db --local --command "SELECT id, title, genre FROM books ORDER BY id;"
   ```

### Quick alternative: one-off insert (not tracked in migration history)

```bash
npx wrangler d1 execute books-db --remote --command \
  "INSERT INTO books (title, author, my_score, genre, my_comment, img) VALUES ('Book Title', 'Author', 5, 'Software Development', 'My review.', 'https://example.com/cover.jpg');"
```

Use `--local` instead of `--remote` to target the dev database (run both to keep
them in sync).

### Notes

- **Genres/filters are automatic** — a new `genre` string creates a new pill;
  reusing an existing one (exact spelling) groups books together. Search and
  score sort need no changes.
- **Local and remote are separate databases.** Apply to both so dev matches
  production.
