-- Migration 0002: seed sample book rows.
-- Authors repeat across rows (so author grouping/filtering is testable) and
-- genres + my_score values vary (3/4/5) so frontend filters are meaningful.
-- Explicit ids 1..10. Every my_comment is non-empty.

INSERT INTO books (id, title, author, my_score, genre, my_comment) VALUES
  (1, 'Testing Dot Com', 'Roman Savin', 5, 'QA',
   "While this book is widely regarded as an excellent resource for entry-level QA professionals, I highly recommend reading it before you even begin applying for jobs. It is packed with fundamental testing concepts that clarify a tester's daily responsibilities and outline the skills required for a junior role. This foundational knowledge will undoubtedly give you an edge in securing your first position"),
  (2, 'A Practitioner''s Guide to Software Test Design', 'Lee Copeland', 5, 'QA',
   'Must-read. Focused on test design techniques with great examples and end-of-chapter exercises. Worth re-reading at any experience level.'),
  (3, 'The Pragmatic Programmer', 'Andrew Hunt', 5, 'Programming',
   'Timeless advice on craftsmanship, automation, and pragmatic decision-making. Changed how I think about everyday coding.'),
  (4, 'Clean Code', 'Robert C. Martin', 4, 'Programming',
   'Strong opinions on naming, functions, and structure. Not gospel, but a solid baseline for writing readable code.'),
  (5, 'Clean Architecture', 'Robert C. Martin', 4, 'Programming',
   'Clear treatment of boundaries and dependency rules. Helped me reason about decoupling layers in larger systems.'),
  (6, 'Refactoring', 'Martin Fowler', 5, 'Programming',
   'The definitive catalog of refactorings. The worked examples make the mechanics click and build confidence in safe changes.'),
  (7, 'Domain-Driven Design', 'Eric Evans', 4, 'Software Architecture',
   'Dense but rewarding. The ubiquitous-language and bounded-context ideas reshaped how I model complex domains.'),
  (8, 'Thinking, Fast and Slow', 'Daniel Kahneman', 5, 'Psychology',
   'Fascinating tour of cognitive biases. Surprisingly relevant to test design and spotting bad assumptions.'),
  (9, 'Atomic Habits', 'James Clear', 3, 'Self-Help',
   'Practical, repetitive in places, but the small-systems-over-goals framing genuinely stuck with me.'),
  (10, 'Continuous Delivery', 'Martin Fowler', 4, 'DevOps',
   'A thorough look at deployment pipelines and automation. A great bridge between dev and ops mindsets.');
