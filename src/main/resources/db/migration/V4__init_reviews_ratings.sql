CREATE TABLE rating_type
(
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE reviews
(
  id SERIAL NOT NULL PRIMARY KEY,
  description TEXT,
  product_id INTEGER REFERENCES products(id),
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE ratings
(
  id SERIAL NOT NULL PRIMARY KEY,
  value NUMERIC(1, 1) NOT NULL,
  review_id INTEGER REFERENCES reviews(id),
  rating_type_id INTEGER REFERENCES rating_type(id)
);
