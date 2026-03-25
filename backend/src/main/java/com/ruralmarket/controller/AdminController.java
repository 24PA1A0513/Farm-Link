package com.ruralmarket.controller;

import com.ruralmarket.model.Order;
import com.ruralmarket.model.Product;
import com.ruralmarket.model.User;
import com.ruralmarket.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    // ─── Stats ───────────────────────────────────────────────────
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStats() {
        return ResponseEntity.ok(adminService.getStats());
    }

    // ─── Users ───────────────────────────────────────────────────
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(adminService.getAllUsers());
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        adminService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    // ─── Analytics ───────────────────────────────────────────────
    @GetMapping("/analytics/monthly")
    public ResponseEntity<List<Map<String, Object>>> getMonthly() {
        return ResponseEntity.ok(adminService.getMonthlyData());
    }

    @GetMapping("/analytics/top-products")
    public ResponseEntity<List<Map<String, Object>>> getTopProducts() {
        return ResponseEntity.ok(adminService.getTopProducts());
    }

    // ─── Orders ──────────────────────────────────────────────────
    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(adminService.getAllOrders());
    }

    @PutMapping("/orders/{id}/status")
    public ResponseEntity<Order> updateOrderStatus(
            @PathVariable String id,
            @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(adminService.updateOrderStatus(id, body.get("status")));
    }

    // ─── Products ────────────────────────────────────────────────
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(adminService.getAllProducts());
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        adminService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}
