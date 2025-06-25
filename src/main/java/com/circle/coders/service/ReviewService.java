package com.circle.coders.service;

import com.circle.coders.entity.Review;
import com.circle.coders.repository.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ReviewService {

    @Autowired
    private ReviewRepo reviewRepo;

    public Review addReview(Review review){
        return reviewRepo.save(review);
    }

    public Review updateReview(Review review) {

        Review current = reviewRepo.findById(review.getId()).orElseThrow();

        current.setContent(review.getContent());
        current.setTitle(review.getTitle());
        current.setResources(review.getResources());

        return reviewRepo.save(current);
    }

    public void deleteReview(Long id) {
        reviewRepo.deleteById(id);
    }

    public Optional<Review> findReview(Long id) {
        return reviewRepo.findById(id);
    }

    public List<Review> findAllReviews() {
        return reviewRepo.findAll();
    }

}
