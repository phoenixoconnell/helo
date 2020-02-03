CREATE TABLE users2 (
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT);

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INTEGER);

ALTER TABLE posts
ADD FOREIGN KEY (author_id)
REFERENCES users2 (id);

ALTER TABLE users2
ALTER COLUMN password TYPE TEXT;