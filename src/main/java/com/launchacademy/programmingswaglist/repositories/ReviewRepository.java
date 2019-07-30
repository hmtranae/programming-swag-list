package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Review;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends PagingAndSortingRepository<Review, Integer> {
    List<Review> findAllByProductId(Integer productId);
}
