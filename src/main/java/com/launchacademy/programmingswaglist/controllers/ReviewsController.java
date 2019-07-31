package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.repositories.ProductRepository;
import com.launchacademy.programmingswaglist.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ReviewsController {

  private ReviewRepository reviewRepository;
  private ProductRepository productRepository;

  @Autowired
  public ReviewsController(
      ReviewRepository reviewRepository, ProductRepository productRepository) {
    this.reviewRepository = reviewRepository;
    this.productRepository = productRepository;
  }

  @GetMapping("/products/show/{productId}/reviews/{reviewId}")
  public String getReviewForm(@PathVariable Integer productId, @PathVariable Integer reviewId) {
    return "reviews/new";
  }
}
