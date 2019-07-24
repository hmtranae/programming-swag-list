package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.models.Product;
import com.launchacademy.programmingswaglist.repositories.CategoryRepository;
import com.launchacademy.programmingswaglist.repositories.ProductRepository;
import com.launchacademy.programmingswaglist.repositories.RatingRepository;
import com.launchacademy.programmingswaglist.repositories.RatingTypeRepository;
import com.launchacademy.programmingswaglist.repositories.ReviewRepository;
import com.launchacademy.programmingswaglist.repositories.RoleRepository;
import com.launchacademy.programmingswaglist.repositories.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductRestController {
  private final ProductRepository productRepository;
  private final CategoryRepository categoryRepository;
  private final RatingRepository ratingRepository;
  private final RatingTypeRepository ratingTypeRepository;
  private final ReviewRepository reviewRepository;
  private final RoleRepository roleRepository;
  private final UserRepository userRepository;

  @NoArgsConstructor
  private class ProductNotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class ProductNotFoundAdvice{
    @ResponseBody
    @ExceptionHandler(ProductNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String ProductNotFoundHandler(ProductNotFoundException ex) {
      return ex.getMessage();
    }
  }

  @Autowired
  public ProductRestController(ProductRepository productRepository, CategoryRepository categoryRepository, RatingRepository ratingRepository, RatingTypeRepository ratingTypeRepository, ReviewRepository reviewRepository, RoleRepository roleRepository, UserRepository userRepository) {
    this.productRepository = productRepository;
    this.categoryRepository = categoryRepository;
    this.ratingRepository = ratingRepository;
    this.ratingTypeRepository = ratingTypeRepository;
    this.reviewRepository = reviewRepository;
    this.roleRepository = roleRepository;
    this.userRepository = userRepository;
  }

  @GetMapping("/api/v1/products")
  public Iterable<Product> getList(Pageable pageable){
    return productRepository.findAll(pageable);
  }

  @GetMapping("/api/v1/products/{productId}/show")
  public Product getProduct(@PathVariable Integer productId) {
    return productRepository.findById(productId).orElseThrow(() -> new ProductNotFoundException());
  }
}








