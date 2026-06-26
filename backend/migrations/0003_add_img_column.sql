-- Migration 0003: add the `img` column and backfill cover images.
-- Append-only migration so it runs safely on databases that already had
-- 0001/0002 applied (e.g. the existing remote D1 instance).

ALTER TABLE books ADD COLUMN img TEXT;

UPDATE books SET img = '/img/books/Dot_Com.jpeg' WHERE id = 1;
UPDATE books SET img = '/img/books/LeeCopeland.jpg' WHERE id = 2;
UPDATE books SET img = 'https://placehold.co/120x180?text=The+Pragmatic+Programmer' WHERE id = 3;
UPDATE books SET img = 'https://placehold.co/120x180?text=Clean+Code' WHERE id = 4;
UPDATE books SET img = 'https://placehold.co/120x180?text=Clean+Architecture' WHERE id = 5;
UPDATE books SET img = 'https://placehold.co/120x180?text=Refactoring' WHERE id = 6;
UPDATE books SET img = 'https://placehold.co/120x180?text=Domain-Driven+Design' WHERE id = 7;
UPDATE books SET img = 'https://placehold.co/120x180?text=Thinking,+Fast+and+Slow' WHERE id = 8;
UPDATE books SET img = 'https://placehold.co/120x180?text=Atomic+Habits' WHERE id = 9;
UPDATE books SET img = 'https://placehold.co/120x180?text=Continuous+Delivery' WHERE id = 10;
