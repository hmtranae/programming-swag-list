package com.launchacademy.programmingswaglist.dtos;

import com.launchacademy.programmingswaglist.models.Product;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
  private Map<Integer, Double> aggregateReviews;
  private Iterable<Product> products;
}
