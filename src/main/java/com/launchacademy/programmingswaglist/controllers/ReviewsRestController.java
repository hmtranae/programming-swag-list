package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.controllers.ProductRestController.ProductNotFoundException;
import com.launchacademy.programmingswaglist.models.Product;
import com.launchacademy.programmingswaglist.models.Review;
import com.launchacademy.programmingswaglist.repositories.ProductRepository;
import com.launchacademy.programmingswaglist.repositories.ReviewRepository;
import java.util.Optional;
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

  @GetMapping("/api/v1/products/{productId}/reviews/{reviewId}/edit")
  public Review getReview(@PathVariable Integer productId, @PathVariable Integer reviewId) {
    return reviewRepository.findByIdAndProductId(reviewId, productId);
  }

  @PutMapping("/api/v1/edit/product/{productId}/review/{reviewId}")
  public void editReview(@RequestBody Review updatedReview, @PathVariable Integer productId, @PathVariable Integer reviewId) {
    Review review = reviewRepository.findByIdAndProductId(reviewId, productId);
    review.setDescription(updatedReview.getDescription());
    review.setValue(updatedReview.getValue());

    reviewRepository.save(review);
  }
}
