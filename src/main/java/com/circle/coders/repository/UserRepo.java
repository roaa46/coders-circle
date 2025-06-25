package com.circle.coders.repository;


import com.circle.coders.entity.Review;
import com.circle.coders.entity.User;
import com.circle.coders.projection.UserNameView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    List<UserNameView> findAllBy();

}
