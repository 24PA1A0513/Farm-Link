package com.ruralmarket.service;

import com.ruralmarket.dto.ProductRequest;
import com.ruralmarket.exception.ResourceNotFoundException;
import com.ruralmarket.model.Product;
import com.ruralmarket.model.User;
import com.ruralmarket.repository.ProductRepository;
import com.ruralmarket.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public List<Product> getAllProducts(String category, String search) {
        if (category != null && !category.isBlank()) {
            return productRepository.findByCategory(category);
        }
        if (search != null && !search.isBlank()) {
            return productRepository.searchByName(search);
        }
        return productRepository.findAll();
    }

    public Product getProductById(String id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found: " + id));
    }

    public List<Product> getFarmerProducts(Authentication auth) {
        User user = getUser(auth);
        return productRepository.findByFarmerId(user.getId());
    }

    public Product addProduct(ProductRequest req, Authentication auth) {
        User farmer = getUser(auth);
        Product p = new Product();
        p.setName(req.getName());
        p.setCategory(req.getCategory());
        p.setPrice(req.getPrice());
        p.setUnit(req.getUnit());
        p.setQuantity(req.getQuantity());
        p.setImage(req.getImage());
        p.setDescription(req.getDescription());
        p.setFarmerId(farmer.getId());
        p.setFarmerName(farmer.getName());
        return productRepository.save(p);
    }

    public Product updateProduct(String id, ProductRequest req, Authentication auth) {
        Product p = getProductById(id);
        User farmer = getUser(auth);
        if (!p.getFarmerId().equals(farmer.getId())) {
            throw new RuntimeException("You can only edit your own products");
        }
        p.setName(req.getName());
        p.setCategory(req.getCategory());
        p.setPrice(req.getPrice());
        p.setUnit(req.getUnit());
        p.setQuantity(req.getQuantity());
        if (req.getImage() != null) p.setImage(req.getImage());
        if (req.getDescription() != null) p.setDescription(req.getDescription());
        return productRepository.save(p);
    }

    public void deleteProduct(String id, Authentication auth) {
        Product p = getProductById(id);
        User farmer = getUser(auth);
        if (!p.getFarmerId().equals(farmer.getId())) {
            throw new RuntimeException("You can only delete your own products");
        }
        productRepository.delete(p);
    }

    private User getUser(Authentication auth) {
        return userRepository.findByEmail(auth.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}
