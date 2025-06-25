package com.circle.coders.service;

import com.circle.coders.dto.LoginRequest;
import com.circle.coders.entity.Review;
import com.circle.coders.entity.User;
import com.circle.coders.projection.UserNameView;
import com.circle.coders.repository.ReviewRepo;
import com.circle.coders.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ReviewRepo reviewRepo;

    public User register(User user) {
        return userRepo.save(user);
    }

    public User login(LoginRequest loginRequest) {
        User user = userRepo.findByUsername(loginRequest.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));

        if (!loginRequest.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return user;
    }

    public List<UserNameView> findAll() {
        return userRepo.findAllBy();
    }

    public List<Review> getMyReviews(Long id) {
        userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return reviewRepo.findByUserId(id);
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

}
