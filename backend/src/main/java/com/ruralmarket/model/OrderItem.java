package com.ruralmarket.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    private String productId;
    private String name;
    private double price;
    private int qty;
    private String image;
    private String farmerId; // enables farmer-specific order filtering
}
