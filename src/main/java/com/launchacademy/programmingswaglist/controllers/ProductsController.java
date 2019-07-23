package com.launchacademy.programmingswaglist.controllers;

import com.launchacademy.programmingswaglist.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ProductsController {
    @Autowired
    private ProductRepository productRepository;

    public ProductsController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
}
