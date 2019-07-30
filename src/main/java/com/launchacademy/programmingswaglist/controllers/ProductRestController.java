package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.dtos.ProductDTO;
import com.launchacademy.programmingswaglist.models.Product;
import com.launchacademy.programmingswaglist.models.Review;
import com.launchacademy.programmingswaglist.repositories.*;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductRestController {
  private final ProductRepository productRepository;
  private final CategoryRepository categoryRepository;
  private final ReviewRepository reviewRepository;
  private final RoleRepository roleRepository;
  private final UserRepository userRepository;

  @NoArgsConstructor
  static class ProductNotFoundException extends RuntimeException {};

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
  public ProductRestController(ProductRepository productRepository, CategoryRepository categoryRepository, ReviewRepository reviewRepository, RoleRepository roleRepository, UserRepository userRepository) {
    this.productRepository = productRepository;
    this.categoryRepository = categoryRepository;
    this.reviewRepository = reviewRepository;
    this.roleRepository = roleRepository;
    this.userRepository = userRepository;
  }

  @GetMapping("/api/v1/products")
  public ResponseEntity<?> getList(){
    
    Iterable<Product> products = productRepository.findAll(Sort.by("id").ascending());
    List<Double> aggregateReviews = new ArrayList<>();

    for (Product product : products) {
      List<Review> reviews = reviewRepository.findAllByProductId(product.getId());
      if (reviews.size() == 0) {
        aggregateReviews.add(0.00);
      } else {
        Double count = 0.00;
        for (Review review : reviews) {
          count += review.getValue();
        }
        aggregateReviews.add((count / reviews.size()));
      }
    }

    ProductDTO productDTO = new ProductDTO();
    productDTO.setAggregateReviews(aggregateReviews);
    productDTO.setProducts(products);

    return new ResponseEntity<ProductDTO>(productDTO, HttpStatus.OK);
  }

  @GetMapping("/api/v1/products/{productId}/show")
  public Product getProduct(@PathVariable Integer productId) {
    return productRepository.findById(productId).orElseThrow(() -> new ProductNotFoundException());
  }

  @PostMapping("/api/v1/products")
  public Product createProduct(@RequestBody Product product) {
    return productRepository.save(product);
  }

  @DeleteMapping("/api/v1/products/{productId}")
  public void deleteProductAndReviews(@PathVariable Integer productId) {
    productRepository.deleteById(productId);
  }

  @GetMapping("/api/v1/edit/{productId}")
  public Product getEditProduct(@PathVariable Integer productId) {
    return productRepository.findById(productId).orElseThrow(() -> new ProductNotFoundException());
  }

  @PutMapping("/api/v1/edit/{productId}")
  public void saveProductEditUpdate(@RequestBody Product updateProduct, @PathVariable Integer productId){
    Product product = productRepository.findById(productId).orElseThrow(() -> new ProductNotFoundException());
    product.setName(updateProduct.getName());
    product.setPrice(updateProduct.getPrice());
    product.setDescription(updateProduct.getDescription());
    product.setUrl(updateProduct.getUrl());
    product.setImageUrl(updateProduct.getImageUrl());

    productRepository.save(product);
  }
}