package com.circle.coders.controller;

import com.circle.coders.entity.Review;
import com.circle.coders.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/add")
    public Review addReview(@RequestBody Review review){
        return reviewService.addReview(review);
    }

    @PutMapping("/update")
    public Review updateReview(@RequestBody Review review){
        return reviewService.updateReview(review);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
    }

    @GetMapping("/{id}")
    public Optional<Review> getReview(@PathVariable Long id) {
        return reviewService.findReview(id);
    }

    @GetMapping("/find-all")
    public List<Review> getAllReviews() {
        return reviewService.findAllReviews();
    }

}
