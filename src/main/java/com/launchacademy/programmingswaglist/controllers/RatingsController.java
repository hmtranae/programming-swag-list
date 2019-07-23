package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class RatingsController {
  private RatingRepository ratingRepository;

  @Autowired
  public RatingsController(
      RatingRepository ratingRepository) {
    this.ratingRepository = ratingRepository;
  }
}
