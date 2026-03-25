package com.ruralmarket.repository;

import com.ruralmarket.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {
    List<Review> findByProductId(String productId);
    boolean existsByProductIdAndUserId(String productId, String userId);
}
