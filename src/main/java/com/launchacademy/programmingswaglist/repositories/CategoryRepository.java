package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Category;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CategoryRepository extends PagingAndSortingRepository<Category, Integer> {
}
