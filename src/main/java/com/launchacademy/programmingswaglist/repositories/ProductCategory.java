package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Product;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductCategory extends PagingAndSortingRepository<Product, Integer> {
}
