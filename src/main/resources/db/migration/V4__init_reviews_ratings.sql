CREATE TABLE rating_type
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE reviews
(
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT,
  product_id INTEGER REFERENCES NOT NULL products(id),
  user_id INTEGER REFERENCES NOT NULL users(id)
);

CREATE TABLE ratings
(
  id SERIAL PRIMARY KEY NOT NULL,
  value NUMERIC(1, 1) NOT NULL,
  review_id INTEGER REFERENCES NOT NULL reviews(id),
  rating_type_id INTEGER REFERENCES NOT NULL rating_type(id)
);
