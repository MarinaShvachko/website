-- Migration 0004: keep only the two QA/test-design books and re-label their
-- genre as "Software Development". Append-only so it runs on existing DBs.

UPDATE books SET genre = 'Software Development' WHERE id IN (1, 2);
DELETE FROM books WHERE id NOT IN (1, 2);
