package com.ruralmarket.service;

import com.ruralmarket.exception.ResourceNotFoundException;
import com.ruralmarket.model.*;
import com.ruralmarket.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    private User getUser(Authentication auth) {
        return userRepository.findByEmail(auth.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public Cart getCart(Authentication auth) {
        User user = getUser(auth);
        return cartRepository.findByUserId(user.getId())
                .orElseGet(() -> { Cart c = new Cart(); c.setUserId(user.getId()); return cartRepository.save(c); });
    }

    public Cart addToCart(String productId, int qty, Authentication auth) {
        User user = getUser(auth);
        Product p = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found: " + productId));

        Cart cart = cartRepository.findByUserId(user.getId())
                .orElseGet(() -> { Cart c = new Cart(); c.setUserId(user.getId()); return c; });

        boolean found = false;
        for (CartItem item : cart.getItems()) {
            if (item.getProductId().equals(productId)) {
                item.setQty(item.getQty() + qty);
                found = true; break;
            }
        }
        if (!found) {
            cart.getItems().add(new CartItem(p.getId(), p.getName(),
                    p.getPrice(), p.getUnit(), p.getImage(), qty, p.getFarmerId()));
        }
        return cartRepository.save(cart);
    }

    public Cart updateCartItem(String productId, int qty, Authentication auth) {
        Cart cart = getCart(auth);
        cart.getItems().removeIf(i -> i.getProductId().equals(productId) && qty <= 0);
        cart.getItems().stream()
                .filter(i -> i.getProductId().equals(productId))
                .findFirst()
                .ifPresent(i -> i.setQty(qty));
        return cartRepository.save(cart);
    }

    public Cart removeFromCart(String productId, Authentication auth) {
        Cart cart = getCart(auth);
        cart.getItems().removeIf(i -> i.getProductId().equals(productId));
        return cartRepository.save(cart);
    }

    public void clearCart(Authentication auth) {
        User user = getUser(auth);
        cartRepository.deleteByUserId(user.getId());
    }
}
