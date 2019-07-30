package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ProductsController {
    @Autowired
    private ProductRepository productRepository;

    public ProductsController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/products/show/{productId}")
    public String specificProduct(@PathVariable Integer productId, Model model){
      return "products/show";
    }

    @GetMapping("/products")
    public String getProductList() {
      return "products/index";
    }

    @GetMapping("/products/new")
    public String getProductForm() {
      return "products/new";
    }

    @GetMapping("/products/edit/{productId}")
    public String getProductEditForm() {
      return "products/edit";
    }
}
