package com.ruralmarket.service;

import com.ruralmarket.exception.ResourceNotFoundException;
import com.ruralmarket.model.*;
import com.ruralmarket.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    private User getUser(Authentication auth) {
        return userRepository.findByEmail(auth.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public Order checkout(Authentication auth, String paymentMethod) {
        User user = getUser(auth);
        Cart cart = cartRepository.findByUserId(user.getId())
                .orElseThrow(() -> new RuntimeException("Cart is empty"));
        if (cart.getItems().isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }

        List<OrderItem> items = cart.getItems().stream()
                .map(ci -> new OrderItem(ci.getProductId(), ci.getName(),
                        ci.getPrice(), ci.getQty(), ci.getImage(), ci.getFarmerId()))
                .collect(Collectors.toList());

        double total = cart.getItems().stream()
                .mapToDouble(ci -> ci.getPrice() * ci.getQty())
                .sum();

        Order order = new Order();
        order.setUserId(user.getId());
        order.setItems(items);
        order.setTotal(total);
        order.setPaymentMethod(paymentMethod != null ? paymentMethod : "RAZORPAY");
        order.setStatus("PENDING");

        Order saved = orderRepository.save(order);

        // Clear cart after successful checkout
        cart.getItems().clear();
        cartRepository.save(cart);

        return saved;
    }

    public List<Order> getUserOrders(Authentication auth) {
        User user = getUser(auth);
        return orderRepository.findByUserIdOrderByCreatedAtDesc(user.getId());
    }

    public List<Order> getFarmerOrders(Authentication auth) {
        User farmer = getUser(auth);
        // Return all orders that contain items sold by this farmer
        return orderRepository.findAll().stream()
                .filter(order -> order.getItems().stream()
                        .anyMatch(item -> farmer.getId().equals(item.getFarmerId())))
                .sorted((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()))
                .collect(Collectors.toList());
    }

    public Order getOrderById(String orderId, Authentication auth) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found: " + orderId));
        User user = getUser(auth);
        // Allow admin or order owner
        if (!order.getUserId().equals(user.getId()) && !user.getRole().equals("ADMIN")) {
            throw new RuntimeException("Access denied");
        }
        return order;
    }

    public Order updateStatus(String orderId, String status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found: " + orderId));
        order.setStatus(status.toUpperCase());
        return orderRepository.save(order);
    }
}
