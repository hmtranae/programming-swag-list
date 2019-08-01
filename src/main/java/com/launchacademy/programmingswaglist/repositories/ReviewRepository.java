package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Review;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends PagingAndSortingRepository<Review, Integer> {
  List<Review> findAllByProductId(Integer productId);
  Review findByIdAndProductId(Integer reviewId, Integer productId);
  void deleteByIdAndProductId(Integer reviewId, Integer productId);
}
