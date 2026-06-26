/**
 * Books API — Cloudflare Worker backed by a D1 database.
 *
 * Routes:
 *   GET     /api/books  -> 200 JSON Book[]
 *   GET     /           -> 200 JSON Book[] (convenience)
 *   OPTIONS *           -> 204 CORS preflight
 *   *                   -> 404 JSON { error }
 *
 * CORS headers are applied to every response.
 */

export type Book = {
  id: number;
  title: string;
  author: string;
  my_score: number;
  genre: string;
  my_comment: string;
  img: string;
};

export interface Env {
  DB: D1Database;
}

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...CORS_HEADERS,
    },
  });
}

async function getBooks(env: Env): Promise<Response> {
  try {
    const { results } = await env.DB.prepare(
      "SELECT id, title, author, my_score, genre, my_comment, img FROM books ORDER BY id DESC",
    ).all<Book>();
    return jsonResponse(results);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown database error";
    return jsonResponse({ error: message }, 500);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const { pathname } = new URL(request.url);

    if (request.method === "GET" && (pathname === "/api/books" || pathname === "/")) {
      return getBooks(env);
    }

    return jsonResponse({ error: `Not found: ${request.method} ${pathname}` }, 404);
  },
} satisfies ExportedHandler<Env>;
