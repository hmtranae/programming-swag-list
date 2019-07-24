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
        productRepository.findById(productId).ifPresent(o -> model.addAttribute("product", o));
        return "products/show";
    }

    @GetMapping("/products")
    public String getProductList(Model model){
        model.addAttribute("products", productRepository.findAll());
        return "products/index";
    }
}
