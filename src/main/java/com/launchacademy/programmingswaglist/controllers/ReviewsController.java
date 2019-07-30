package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.controllers.ProductRestController.ProductNotFoundException;
import com.launchacademy.programmingswaglist.models.Product;
import com.launchacademy.programmingswaglist.models.Review;
import com.launchacademy.programmingswaglist.repositories.ProductRepository;
import com.launchacademy.programmingswaglist.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewsController {
  private ReviewRepository reviewRepository;
  private ProductRepository productRepository;

  @Autowired
  public ReviewsController(
      ReviewRepository reviewRepository, ProductRepository productRepository) {
    this.reviewRepository = reviewRepository;
    this.productRepository = productRepository;
  }

  @PostMapping("/api/v1/reviews/{productId}")
  public Review createReview(@RequestBody Review review, @PathVariable Integer productId) {
    Product product = productRepository.findById(productId).orElseThrow(() -> new ProductNotFoundException());
    List<Review> reviews = product.getReviewsList();
    review.setProduct(product);

    reviews.add(review);
    product.setReviewsList(reviews);

    productRepository.save(product);
    return reviewRepository.save(review);
  }

  @GetMapping("/api/v1/reviews/sum/{productId}")
  public long getAggregateReviews(@PathVariable Integer productId) {
    List<Review> reviews = reviewRepository.findAllByProductId(productId);

    if (reviews.size() == 0) {
      return 0;
    } else {
      long count = 0;
      for (Review review : reviews) {
        count += review.getValue();
      }
      return count / reviews.size();
    }
  }

}
