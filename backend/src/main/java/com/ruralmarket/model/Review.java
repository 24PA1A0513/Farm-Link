package com.ruralmarket.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "reviews")
public class Review {

    @Id
    private String id;

    private String productId;
    private String userId;
    private String userName;

    private int rating;      // 1–5
    private String comment;

    private LocalDate date = LocalDate.now();
}
