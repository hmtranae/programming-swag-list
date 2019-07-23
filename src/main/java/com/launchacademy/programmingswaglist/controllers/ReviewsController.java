package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ReviewsController {
  private ReviewRepository reviewRepository;

  @Autowired
  public ReviewsController(
      ReviewRepository reviewRepository) {
    this.reviewRepository = reviewRepository;
  }
}
