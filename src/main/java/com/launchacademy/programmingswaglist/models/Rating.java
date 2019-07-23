package com.launchacademy.programmingswaglist.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Component
@Table(name = "ratings")
public class Rating {
  @Id
  @SequenceGenerator(name = "rating_generator",
      sequenceName = "ratings_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE,
      generator = "rating_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name = "value", columnDefinition = "NUMERIC(1, 1)", nullable = false)
  private Long value;

  @ManyToOne
  @JoinColumn(name = "review_id", nullable = false)
  private Review review;

  @ManyToOne
  @JoinColumn(name = "rating_type_id", nullable = false)
  private RatingType ratingType;
}
