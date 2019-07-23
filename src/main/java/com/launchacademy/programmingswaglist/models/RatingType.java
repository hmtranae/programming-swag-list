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
@Table(name = "rating_type")
public class RatingType {
  @Id
  @SequenceGenerator(name = "rating_type_generator",
      sequenceName = "rating_type_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE,
      generator = "rating_type_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name = "name", nullable = false)
  public String name;

  @OneToMany(mappedBy = "ratingType")
  private List<Rating> ratings = new ArrayList<>();
}
