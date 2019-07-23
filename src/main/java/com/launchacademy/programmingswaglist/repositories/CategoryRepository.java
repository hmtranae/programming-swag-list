package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Integer> {
}
