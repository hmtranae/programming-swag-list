package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReviewsController {
  private ReviewRepository reviewRepository;

  @Autowired
  public ReviewsController(
      ReviewRepository reviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  @GetMapping("/reviews/new")
  public String getReviewForm() {
    return "products/index";
  }
}
