
CREATE TABLE products(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(6,2) NOT NULL,
    description TEXT NOT NULL
);


CREATE TABLE categories(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL

);

CREATE TABLE products_categories(
    product_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    PRIMARY KEY(product_id, category_id)
);