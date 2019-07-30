package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.Review;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends PagingAndSortingRepository<Review, Integer> {
  void deleteByProductId(Integer productId);
  List<Review> findAllByProductId(Integer productId);
}
