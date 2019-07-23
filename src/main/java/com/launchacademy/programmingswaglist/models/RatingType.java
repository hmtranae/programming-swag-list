package com.launchacademy.programmingswaglist.models;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

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

  @OneToMany(mappedBy = "rating_type")
  private List<RatingType> ratingTypes = new ArrayList<>();
}
