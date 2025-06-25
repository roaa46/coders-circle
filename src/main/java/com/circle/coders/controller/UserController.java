package com.circle.coders.controller;

import com.circle.coders.dto.LoginRequest;
import com.circle.coders.entity.Review;
import com.circle.coders.entity.User;
import com.circle.coders.projection.UserNameView;
import com.circle.coders.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest loginRequest) {
        return userService.login(loginRequest);
    }

    @GetMapping("find-all")
    public List<UserNameView> findAll(){
        return userService.findAll();
    }

    @GetMapping("/{id}/my-reviews")
    public List<Review> getmyReviews(@PathVariable Long id) {
        return userService.getMyReviews(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
