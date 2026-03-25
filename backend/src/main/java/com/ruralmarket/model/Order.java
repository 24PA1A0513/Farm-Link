package com.ruralmarket.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "orders")
public class Order {

    @Id
    private String id;

    private String userId;
    private List<OrderItem> items;
    private double total;

    // PENDING | PROCESSING | SHIPPED | DELIVERED | CANCELLED
    private String status = "PENDING";

    private String paymentMethod;
    private String razorpayOrderId;
    private String razorpayPaymentId;

    private LocalDateTime createdAt = LocalDateTime.now();
}
