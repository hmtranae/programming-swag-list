ALTER TABLE users
ADD COLUMN first_name VARCHAR(255) NOT NULL,
ADD COLUMN last_name VARCHAR(255) NOT NULL,
ADD FOREIGN KEY (categories_id) REFERENCES categories(categories_id) NOT NULL;