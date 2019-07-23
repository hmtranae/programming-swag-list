package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.repositories.RatingTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class RatingTypesController {
  private RatingTypeRepository ratingTypeRepository;

  @Autowired
  public RatingTypesController(
      RatingTypeRepository ratingTypeRepository) {
    this.ratingTypeRepository = ratingTypeRepository;
  }
}
