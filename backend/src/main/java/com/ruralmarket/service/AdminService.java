package com.ruralmarket.service;

import com.ruralmarket.model.*;
import com.ruralmarket.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    public Map<String, Object> getStats() {
        List<Order> orders = orderRepository.findAll();
        double revenue = orders.stream().mapToDouble(Order::getTotal).sum();
        return Map.of(
                "totalUsers", userRepository.count(),
                "totalProducts", productRepository.count(),
                "totalOrders", orders.size(),
                "revenue", revenue
        );
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }

    public List<Map<String, Object>> getMonthlyData() {
        String[] months = {"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"};
        List<Order> all = orderRepository.findAll();

        Map<Integer, List<Order>> byMonth = all.stream()
                .collect(Collectors.groupingBy(o -> o.getCreatedAt().getMonthValue()));

        List<Map<String, Object>> result = new ArrayList<>();
        for (int m = 1; m <= 12; m++) {
            List<Order> mo = byMonth.getOrDefault(m, List.of());
            result.add(Map.of(
                    "month", months[m - 1],
                    "orders", mo.size(),
                    "revenue", mo.stream().mapToDouble(Order::getTotal).sum()
            ));
        }
        return result;
    }

    public List<Map<String, Object>> getTopProducts() {
        List<Order> all = orderRepository.findAll();
        Map<String, Long> counts = new HashMap<>();
        for (Order o : all) {
            for (OrderItem i : o.getItems()) {
                counts.merge(i.getName(), (long) i.getQty(), Long::sum);
            }
        }
        return counts.entrySet().stream()
                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
                .limit(5)
                .map(e -> Map.<String, Object>of("name", e.getKey(), "units", e.getValue()))
                .collect(Collectors.toList());
    }

    // ─── Order Management ───────────────────────────────────────

    public List<Order> getAllOrders() {
        return orderRepository.findAll().stream()
                .sorted(Comparator.comparing(Order::getCreatedAt).reversed())
                .collect(Collectors.toList());
    }

    public Order updateOrderStatus(String orderId, String status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        return orderRepository.save(order);
    }

    // ─── Product Management ──────────────────────────────────────

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public void deleteProduct(String productId) {
        productRepository.deleteById(productId);
    }
}
