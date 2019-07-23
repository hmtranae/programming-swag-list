package com.launchacademy.programmingswaglist.repositories;

import com.launchacademy.programmingswaglist.models.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Integer> {
  User findByUsername(String username);
}
