package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Rating;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface RatingRepository extends PagingAndSortingRepository<Rating, Integer> {

}
