package com.ruralmarket.controller;

import com.ruralmarket.dto.ProductRequest;
import com.ruralmarket.model.Product;
import com.ruralmarket.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAll(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(productService.getAllProducts(category, search));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable String id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @GetMapping("/my-products")
    public ResponseEntity<List<Product>> myProducts(Authentication auth) {
        return ResponseEntity.ok(productService.getFarmerProducts(auth));
    }

    @PostMapping
    public ResponseEntity<Product> create(
            @Valid @RequestBody ProductRequest req, Authentication auth) {
        return ResponseEntity.ok(productService.addProduct(req, auth));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(
            @PathVariable String id,
            @Valid @RequestBody ProductRequest req, Authentication auth) {
        return ResponseEntity.ok(productService.updateProduct(id, req, auth));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id, Authentication auth) {
        productService.deleteProduct(id, auth);
        return ResponseEntity.noContent().build();
    }
}
