ALTER TABLE users
ADD COLUMN first_name VARCHAR(255) NOT NULL,
ADD COLUMN last_name VARCHAR(255) NOT NULL,
ADD FOREIGN KEY (category_id) REFERENCES Categories(category_id);