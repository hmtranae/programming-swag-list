ALTER TABLE reviews
  DROP CONSTRAINT reviews_product_id_fkey,
  ADD CONSTRAINT reviews_product_id_fkey
    FOREIGN KEY (product_id)
    REFERENCES products(id)
    ON DELETE CASCADE;