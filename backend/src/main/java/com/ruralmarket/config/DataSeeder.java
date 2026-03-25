package com.ruralmarket.config;

import com.ruralmarket.model.Product;
import com.ruralmarket.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class DataSeeder {

    private final ProductRepository productRepository;

    @Bean
    public ApplicationRunner seedData() {
        return args -> {
            if (productRepository.count() > 0) return; // Already seeded

            List<Product> products = List.of(
                new Product(null, "Organic Basmati Rice", "Grains", 85.0, "kg", 500,
                    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
                    "Premium organic basmati rice grown without pesticides in the fertile fields of Punjab.",
                    "seed-farmer-1", "Ramesh Kumar", 4.8, 124, LocalDateTime.now()),

                new Product(null, "Fresh Alphonso Mangoes", "Fruits", 320.0, "dozen", 200,
                    "https://images.unsplash.com/photo-1601493700631-2851f4b46a16?w=400&q=80",
                    "World-famous Alphonso mangoes, hand-picked at peak ripeness from Ratnagiri orchards.",
                    "seed-farmer-2", "Savita Patil", 4.9, 87, LocalDateTime.now()),

                new Product(null, "Turmeric Powder", "Spices", 180.0, "kg", 150,
                    "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
                    "Pure sun-dried turmeric ground to fine powder, rich in curcumin.",
                    "seed-farmer-3", "Gopal Sharma", 4.7, 63, LocalDateTime.now()),

                new Product(null, "Farm Fresh Tomatoes", "Vegetables", 45.0, "kg", 300,
                    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
                    "Freshly harvested vine-ripened tomatoes, perfect for cooking or salads.",
                    "seed-farmer-4", "Lakshmi Devi", 4.5, 98, LocalDateTime.now()),

                new Product(null, "Raw Forest Honey", "Dairy & Honey", 650.0, "kg", 80,
                    "https://images.unsplash.com/photo-1607690424560-35d967d63f22?w=400&q=80",
                    "Unprocessed wildflower honey collected from Himalayan forest beehives.",
                    "seed-farmer-5", "Arjun Singh", 4.9, 41, LocalDateTime.now()),

                new Product(null, "Whole Wheat Flour", "Grains", 55.0, "kg", 600,
                    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
                    "Stone-ground whole wheat flour retaining all natural nutrients and bran.",
                    "seed-farmer-1", "Ramesh Kumar", 4.6, 75, LocalDateTime.now()),

                new Product(null, "Green Chillies", "Vegetables", 60.0, "kg", 120,
                    "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=80",
                    "Freshly harvested green chillies with vibrant colour and medium heat.",
                    "seed-farmer-2", "Savita Patil", 4.3, 34, LocalDateTime.now()),

                new Product(null, "Cold-Pressed Coconut Oil", "Oils", 420.0, "litre", 90,
                    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&q=80",
                    "Virgin cold-pressed coconut oil extracted from fresh coconuts without heat.",
                    "seed-farmer-6", "Meena Nair", 4.8, 56, LocalDateTime.now()),

                new Product(null, "Pomegranate", "Fruits", 140.0, "kg", 180,
                    "https://images.unsplash.com/photo-1552849397-1e133aaeff97?w=400&q=80",
                    "Sweet-tangy pomegranates bursting with antioxidant-rich arils.",
                    "seed-farmer-3", "Gopal Sharma", 4.7, 49, LocalDateTime.now()),

                new Product(null, "Coriander Seeds", "Spices", 120.0, "kg", 200,
                    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
                    "Aromatic whole coriander seeds, sun-dried and hand-cleaned.",
                    "seed-farmer-5", "Arjun Singh", 4.5, 28, LocalDateTime.now()),

                new Product(null, "Drumstick (Moringa)", "Vegetables", 70.0, "bundle", 160,
                    "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
                    "Fresh moringa drumsticks rich in iron, calcium and vitamins.",
                    "seed-farmer-4", "Lakshmi Devi", 4.6, 22, LocalDateTime.now()),

                new Product(null, "A2 Cow Ghee", "Dairy & Honey", 1200.0, "litre", 50,
                    "https://images.unsplash.com/photo-1631205793400-7ded8ac67736?w=400&q=80",
                    "Traditional bilona method A2 cow ghee — highest quality, golden in colour.",
                    "seed-farmer-6", "Meena Nair", 5.0, 93, LocalDateTime.now()),

                new Product(null, "Organic Red Chillies", "Spices", 150.0, "kg", 80,
                    "https://images.unsplash.com/photo-1599482813524-749e7555e090?w=400&q=80",
                    "Spicy and vibrant organic red chillies, perfect for grinding.",
                    "seed-farmer-2", "Savita Patil", 4.6, 42, LocalDateTime.now()),

                new Product(null, "Fresh Spinach", "Vegetables", 30.0, "bundle", 100,
                    "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
                    "Freshly picked iron-rich green spinach leaves.",
                    "seed-farmer-4", "Lakshmi Devi", 4.7, 56, LocalDateTime.now()),

                new Product(null, "Almonds (Mamra)", "Dry Fruits", 1800.0, "kg", 40,
                    "https://images.unsplash.com/photo-1508020963102-c6c723be5ad6?w=400&q=80",
                    "Premium Kashmiri Mamra almonds, rich in oils and nutrients.",
                    "seed-farmer-5", "Arjun Singh", 4.9, 112, LocalDateTime.now()),

                new Product(null, "Organic Bananas", "Fruits", 60.0, "dozen", 180,
                    "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80",
                    "Naturally ripened chemical-free bananas from south India.",
                    "seed-farmer-1", "Ramesh Kumar", 4.5, 67, LocalDateTime.now()),

                new Product(null, "Cold-Pressed Mustard Oil", "Oils", 250.0, "litre", 120,
                    "https://images.unsplash.com/photo-1620706122118-29ec7bcdba6f?w=400&q=80",
                    "Traditional wood-pressed mustard oil with pungent aroma.",
                    "seed-farmer-6", "Meena Nair", 4.8, 89, LocalDateTime.now()),

                new Product(null, "Black Pepper", "Spices", 900.0, "kg", 60,
                    "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&q=80",
                    "Premium Malabar black pepper known as King of Spices.",
                    "seed-farmer-3", "Gopal Sharma", 4.9, 34, LocalDateTime.now())
            );

            productRepository.saveAll(products);
            System.out.println("✅ FarmLink: Seeded " + products.size() + " sample products.");
        };
    }
}
