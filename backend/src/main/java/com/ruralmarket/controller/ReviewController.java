package com.ruralmarket.controller;

import com.ruralmarket.dto.ReviewRequest;
import com.ruralmarket.model.Review;
import com.ruralmarket.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products/{productId}/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> addReview(
            @PathVariable String productId,
            @Valid @RequestBody ReviewRequest req,
            Authentication auth) {
        return ResponseEntity.ok(reviewService.addReview(productId, req, auth));
    }

    @GetMapping
    public ResponseEntity<List<Review>> getReviews(@PathVariable String productId) {
        return ResponseEntity.ok(reviewService.getProductReviews(productId));
    }
}
