package com.launchacademy.programmingswaglist.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
