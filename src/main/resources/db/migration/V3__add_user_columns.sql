ALTER TABLE users
ADD COLUMN first_name VARCHAR(255) NOT NULL,
ADD COLUMN last_name VARCHAR(255) NOT NULL,
ADD COLUMN category_id INTEGER NOT NULL,
ADD CONSTRAINT users_categories_fkey FOREIGN KEY (category_id) REFERENCES categories(id);