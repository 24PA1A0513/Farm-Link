package com.ruralmarket.controller;

import com.ruralmarket.model.Cart;
import com.ruralmarket.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<Cart> getCart(Authentication auth) {
        return ResponseEntity.ok(cartService.getCart(auth));
    }

    @PostMapping
    public ResponseEntity<Cart> addToCart(
            @RequestBody Map<String, Object> body, Authentication auth) {
        String productId = (String) body.get("productId");
        int qty = body.containsKey("quantity") ?
                (int) body.get("quantity") : 1;
        return ResponseEntity.ok(cartService.addToCart(productId, qty, auth));
    }

    @PutMapping("/{productId}")
    public ResponseEntity<Cart> updateItem(
            @PathVariable String productId,
            @RequestBody Map<String, Integer> body, Authentication auth) {
        return ResponseEntity.ok(cartService.updateCartItem(productId, body.get("quantity"), auth));
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Cart> removeItem(
            @PathVariable String productId, Authentication auth) {
        return ResponseEntity.ok(cartService.removeFromCart(productId, auth));
    }

    @DeleteMapping
    public ResponseEntity<Void> clearCart(Authentication auth) {
        cartService.clearCart(auth);
        return ResponseEntity.noContent().build();
    }
}
