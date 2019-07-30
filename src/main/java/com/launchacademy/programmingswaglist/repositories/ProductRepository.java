package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Product;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Integer> {


}
