package com.ruralmarket.controller;

import com.ruralmarket.dto.PaymentInitiateRequest;
import com.ruralmarket.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/initiate")
    public ResponseEntity<?> initiatePayment(@RequestBody PaymentInitiateRequest request) {
        try {
            Map<String, Object> orderResponse = paymentService.createOrder(request.getAmount());
            return ResponseEntity.ok(orderResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Error creating Razorpay order: " + e.getMessage()));
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, String> payload) {
        boolean isValid = paymentService.verifySignature(payload);
        if (isValid) {
            return ResponseEntity.ok(Map.of("status", "success", "message", "Payment verified successfully"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("status", "failed", "message", "Payment signature verification failed"));
        }
    }
}
