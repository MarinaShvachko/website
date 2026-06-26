-- Migration 0001: create the books table.
-- Schema is fixed by the shared contract; column order matches the Book type.
CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY,
  title TEXT,
  author TEXT,
  my_score INTEGER,
  genre TEXT,
  my_comment TEXT
);
