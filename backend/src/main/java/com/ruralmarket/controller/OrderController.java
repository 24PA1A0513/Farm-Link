package com.ruralmarket.controller;

import com.ruralmarket.model.Order;
import com.ruralmarket.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/checkout")
    public ResponseEntity<Order> checkout(
            @RequestBody(required = false) Map<String, String> body,
            Authentication auth) {
        String paymentMethod = body != null ? body.get("paymentMethod") : "RAZORPAY";
        return ResponseEntity.ok(orderService.checkout(auth, paymentMethod));
    }

    @GetMapping
    public ResponseEntity<List<Order>> myOrders(Authentication auth) {
        return ResponseEntity.ok(orderService.getUserOrders(auth));
    }

    @GetMapping("/farmer")
    public ResponseEntity<List<Order>> farmerOrders(Authentication auth) {
        return ResponseEntity.ok(orderService.getFarmerOrders(auth));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(
            @PathVariable String id, Authentication auth) {
        return ResponseEntity.ok(orderService.getOrderById(id, auth));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Order> updateStatus(
            @PathVariable String id,
            @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(orderService.updateStatus(id, body.get("status")));
    }
}
