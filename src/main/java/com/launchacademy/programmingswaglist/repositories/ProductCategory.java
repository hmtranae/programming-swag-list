package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductCategory extends CrudRepository<Product, Integer> {
}
