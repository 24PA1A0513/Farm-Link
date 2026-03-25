package com.ruralmarket.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")
public class Product {

    @Id
    private String id;

    private String name;
    private String category;
    private double price;
    private String unit;
    private int quantity;
    private String image;
    private String description;

    // Farmer details (denormalized for fast reads)
    private String farmerId;
    private String farmerName;

    // Computed / updated via reviews
    private double rating = 0.0;
    private int reviewCount = 0;

    private LocalDateTime createdAt = LocalDateTime.now();
}
