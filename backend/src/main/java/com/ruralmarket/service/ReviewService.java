package com.ruralmarket.service;

import com.ruralmarket.dto.ReviewRequest;
import com.ruralmarket.exception.ResourceNotFoundException;
import com.ruralmarket.model.*;
import com.ruralmarket.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public Review addReview(String productId, ReviewRequest req, Authentication auth) {
        User user = userRepository.findByEmail(auth.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Product p = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        Review review = new Review();
        review.setProductId(productId);
        review.setUserId(user.getId());
        review.setUserName(user.getName());
        review.setRating(req.getRating());
        review.setComment(req.getComment());
        Review saved = reviewRepository.save(review);

        // Update product average rating
        List<Review> allReviews = reviewRepository.findByProductId(productId);
        double avg = allReviews.stream().mapToInt(Review::getRating).average().orElse(0);
        p.setRating(Math.round(avg * 10.0) / 10.0);
        p.setReviewCount(allReviews.size());
        productRepository.save(p);

        return saved;
    }

    public List<Review> getProductReviews(String productId) {
        return reviewRepository.findByProductId(productId);
    }
}
