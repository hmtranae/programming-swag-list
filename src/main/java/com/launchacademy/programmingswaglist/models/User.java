package com.launchacademy.programmingswaglist.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {
  @Id
  @SequenceGenerator(name = "user_generator",
      sequenceName = "users_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE,
      generator = "user_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @Column(name="username", unique = true)
  private String username;

  private String password;

  @Column(name="first_name", nullable = false)
  private String firstName;

  @Column(name="last_name", nullable = false)
  private String lastName;

  @ManyToMany
  @JoinTable(name="users_roles",
    joinColumns=
    @JoinColumn(name="user_id", referencedColumnName="id"),
    inverseJoinColumns=
    @JoinColumn(name="role_id", referencedColumnName="id")
  )
  private Set<Role> roles;

  @ManyToOne
  @JoinColumn(name="category_id")
  private Category category;

  @OneToMany (mappedBy="user")
  private List<Review> reviews = new ArrayList<Review>();
}
