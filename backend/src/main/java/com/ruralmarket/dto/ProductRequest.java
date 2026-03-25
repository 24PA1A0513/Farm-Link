package com.ruralmarket.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

@Data
public class ProductRequest {
    @NotBlank(message = "Product name is required")
    private String name;

    @NotBlank(message = "Category is required")
    private String category;

    @Positive(message = "Price must be positive")
    private double price;

    @NotBlank(message = "Unit is required")
    private String unit;

    @Positive(message = "Quantity must be positive")
    private int quantity;

    private String image;
    private String description;
}
