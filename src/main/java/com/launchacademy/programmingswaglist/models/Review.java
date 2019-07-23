package com.launchacademy.programmingswaglist.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Component
@Table(name = "reviews")
public class Review {
  @Id
  @SequenceGenerator(name = "review_generator",
      sequenceName = "reviews_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE,
      generator = "review_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name = "description")
  private String description;

  @ManyToOne
  @JoinColumn(name = "product_id", nullable = false)
  private Product product;

  @ManyToOne
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @OneToMany(mappedBy = "review")
  private List<Rating> ratings = new ArrayList<>();
}
