package com.ruralmarket.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {
    private String productId;
    private String name;
    private double price;
    private String unit;
    private String image;
    private int qty;
    private String farmerId; // tracked for farmer order filtering
}
