"use client";

import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import type { Book } from "./books.types";
import "../css/books.css";

const BOOKS_API_URL =
  process.env.NEXT_PUBLIC_BOOKS_API_URL ?? "http://localhost:8787/api/books";

const MAX_SCORE = 5;

type FetchState = "loading" | "error" | "ready";
type SortOrder = "" | "desc" | "asc";

function ScoreStars({ score }: { score: number }) {
  const rounded = Math.max(0, Math.min(MAX_SCORE, Math.round(score)));
  return (
    <span className="bookCardScore" data-testid="book-score">
      <span className="bookCardStars" aria-hidden="true">
        {Array.from({ length: MAX_SCORE }, (_, index) => (
          <span
            key={index}
            className={
              index < rounded ? "bookStar bookStarFull" : "bookStar"
            }
          >
            ★
          </span>
        ))}
      </span>
      <span className="bookCardScoreText">{score}/{MAX_SCORE}</span>
    </span>
  );
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [status, setStatus] = useState<FetchState>("loading");

  const [search, setSearch] = useState<string>("");
  const [genreFilter, setGenreFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("");

  useEffect(() => {
    let cancelled = false;

    async function loadBooks(): Promise<void> {
      setStatus("loading");
      try {
        const response = await fetch(BOOKS_API_URL);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data: Book[] = await response.json();
        if (!cancelled) {
          setBooks(data);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    loadBooks();

    return () => {
      cancelled = true;
    };
  }, []);

  const genreOptions = useMemo<string[]>(
    () =>
      Array.from(new Set(books.map((book) => book.genre))).sort((a, b) =>
        a.localeCompare(b),
      ),
    [books],
  );

  const visibleBooks = useMemo<Book[]>(() => {
    const query = search.trim().toLowerCase();

    const filtered = books.filter((book) => {
      const matchesSearch =
        query === "" ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);
      const matchesGenre = genreFilter === "" || book.genre === genreFilter;
      return matchesSearch && matchesGenre;
    });

    if (sortOrder === "desc") {
      return [...filtered].sort((a, b) => b.my_score - a.my_score);
    }
    if (sortOrder === "asc") {
      return [...filtered].sort((a, b) => a.my_score - b.my_score);
    }
    return filtered;
  }, [books, search, genreFilter, sortOrder]);

  const hasActiveFilter =
    search !== "" || genreFilter !== "" || sortOrder !== "";

  function resetFilters(): void {
    setSearch("");
    setGenreFilter("");
    setSortOrder("");
  }

  return (
    <div className="container">
      <SiteHeader />

      <div className="projectWrapper">
        <h4>Books that I would advise everybody to read.</h4>

        <div className="booksControls">
          <div className="booksSearchField">
            <label htmlFor="books-search">Search</label>
            <input
              id="books-search"
              type="search"
              data-testid="search-input"
              className="booksSearchInput"
              placeholder="Search by title or author…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="booksSortField">
            <label htmlFor="books-sort">Sort by score</label>
            <select
              id="books-sort"
              data-testid="sort-score"
              className="booksSortSelect"
              value={sortOrder}
              onChange={(event) =>
                setSortOrder(event.target.value as SortOrder)
              }
            >
              <option value="">Default order</option>
              <option value="desc">Highest first</option>
              <option value="asc">Lowest first</option>
            </select>
          </div>

          <button
            type="button"
            className="booksResetButton"
            data-testid="filter-reset"
            onClick={resetFilters}
            disabled={!hasActiveFilter}
          >
            Reset
          </button>
        </div>

        <div className="booksGenreBar" role="group" aria-label="Filter by genre">
          <button
            type="button"
            className={`genrePill ${genreFilter === "" ? "genrePillActive" : ""}`}
            data-testid="genre-pill"
            data-genre=""
            aria-pressed={genreFilter === ""}
            onClick={() => setGenreFilter("")}
          >
            All genres
          </button>
          {genreOptions.map((genre) => (
            <button
              key={genre}
              type="button"
              className={`genrePill ${genreFilter === genre ? "genrePillActive" : ""}`}
              data-testid="genre-pill"
              data-genre={genre}
              aria-pressed={genreFilter === genre}
              onClick={() => setGenreFilter(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        {status === "loading" && (
          <div className="booksStateMessage" data-testid="books-loading">
            <span className="booksSpinner" aria-hidden="true" />
            <div>Loading books…</div>
          </div>
        )}

        {status === "error" && (
          <div
            className="booksStateMessage booksStateError"
            data-testid="books-error"
          >
            Something went wrong while loading the books. Please try again later.
          </div>
        )}

        {status === "ready" && visibleBooks.length === 0 && (
          <div className="booksStateMessage" data-testid="books-empty">
            No books match your search.
          </div>
        )}

        {status === "ready" && visibleBooks.length > 0 && (
          <div className="booksList" data-testid="books-list">
            {visibleBooks.map((book) => (
              <article
                key={book.id}
                className="bookCard"
                data-testid="book-card"
                data-title={book.title}
                data-author={book.author}
                data-genre={book.genre}
                data-score={book.my_score}
              >
                {book.img && (
                  <img
                    className="bookCardImage"
                    data-testid="book-img"
                    src={book.img}
                    alt={`Cover of ${book.title}`}
                    loading="lazy"
                  />
                )}

                <div className="bookCardBody">
                  <div className="bookCardHeader">
                    <h5 className="bookCardTitle" data-testid="book-title">
                      {book.title}
                    </h5>
                    <ScoreStars score={book.my_score} />
                  </div>

                  <p className="bookCardAuthor" data-testid="book-author">
                    {book.author}
                  </p>

                  <span className="bookCardGenre" data-testid="book-genre">
                    {book.genre}
                  </span>

                  <p className="bookCardComment" data-testid="book-comment">
                    {book.my_comment}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
