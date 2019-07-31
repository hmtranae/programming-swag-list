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
public class ReviewsRestController {

  private ReviewRepository reviewRepository;
  private ProductRepository productRepository;

  @Autowired
  public ReviewsRestController(
      ReviewRepository reviewRepository, ProductRepository productRepository) {
    this.reviewRepository = reviewRepository;
    this.productRepository = productRepository;
  }

  @PostMapping("/api/v1/reviews/{productId}")
  public void createReview(@RequestBody Review review, @PathVariable Integer productId) {
    Product product = productRepository.findById(productId)
        .orElseThrow(() -> new ProductNotFoundException());
    List<Review> reviews = product.getReviewsList();
    review.setProduct(product);

    reviews.add(review);
    product.setReviewsList(reviews);

    productRepository.save(product);
  }

  @GetMapping("/api/v1/reviews/{productId}")
  public List<Review> getReviews(@PathVariable Integer productId) {
    return reviewRepository.findAllByProductId(productId);
  }

  @DeleteMapping("/api/v1/reviews/{reviewId}")
  public void deleteProductReviews(@PathVariable Integer reviewId) {
    reviewRepository.deleteById(reviewId);
  }
}
