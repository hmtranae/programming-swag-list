package com.launchacademy.programmingswaglist.dtos;

import com.launchacademy.programmingswaglist.models.Product;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
  private List<Double> aggregateReviews;
  private Iterable<Product> products;
}
