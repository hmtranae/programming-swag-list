package com.launchacademy.programmingswaglist.security;

import com.launchacademy.programmingswaglist.models.Role;
import com.launchacademy.programmingswaglist.models.User;
import com.launchacademy.programmingswaglist.repositories.RoleRepository;
import com.launchacademy.programmingswaglist.repositories.UserRepository;
import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  @Autowired
  private BCryptPasswordEncoder bCryptPasswordEncoder;

  public void save(User user) {
    user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    Set roles = new HashSet<Role>();
    roles.add(roleRepository.findByName("user"));
    user.setRoles(roles);

    userRepository.save(user);
  }

  public User findByUsername(String username) {
    return userRepository.findByUsername(username);
  }
}
