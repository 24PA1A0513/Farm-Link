package com.ruralmarket.dto;

import lombok.Data;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Data
public class ReviewRequest {
    @Min(1) @Max(5)
    private int rating;

    @NotBlank(message = "Comment is required")
    private String comment;
}
