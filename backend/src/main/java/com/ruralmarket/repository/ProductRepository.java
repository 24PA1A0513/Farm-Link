package com.ruralmarket.repository;

import com.ruralmarket.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findByCategory(String category);
    List<Product> findByFarmerId(String farmerId);

    @Query("{ 'name': { $regex: ?0, $options: 'i' } }")
    List<Product> searchByName(String keyword);
}
