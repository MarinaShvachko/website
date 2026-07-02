-- Migration 0005: add a currently-reading book (not part of the original
-- website migration/seed data).

INSERT INTO books (title, author, my_score, genre, my_comment, img) VALUES
  ('101 Essays That Will Change The Way You Think', 'Brianna Wiest', 5, 'Non-Fiction/Essays',
   'Even though I''m only halfway through, I can already say I absolutely love this book! First of all, I''ve been a fan of the English essay structure since I prepared for the TOEFL, so reading this is a real pleasure. Secondly, the topics are incredibly diverse. You constantly stumble upon something unusual and unexpected, forcing you to analyze things you normally wouldn''t consider. True to its title, it is highly thought-provoking and really can change the way you think about certain things. I just wish I had it in paperback to enjoy it even more!',
   '/img/books/101_essay.jpg');
