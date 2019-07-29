ALTER TABLE reviews ADD COLUMN  value NUMERIC(1, 0) NOT NULL;

DROP TABLE ratings;

DROP TABLE rating_type;