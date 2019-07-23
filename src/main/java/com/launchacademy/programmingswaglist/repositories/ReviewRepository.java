package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Review;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ReviewRepository extends PagingAndSortingRepository<Review, Integer> {

}
