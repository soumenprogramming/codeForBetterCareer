package com.codeforbettercareer.elearning.config;

import com.codeforbettercareer.elearning.modules.course.entity.Course;
import com.codeforbettercareer.elearning.modules.course.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final CourseRepository courseRepository;

    @Bean
    public CommandLineRunner initDemoData() {
        return args -> {
            if (courseRepository.count() == 0) {
                courseRepository.save(Course.builder()
                        .title("Full-Stack Developer Roadmap")
                        .shortDescription("Master React, Spring Boot, databases and deployment.")
                        .longDescription("End-to-end path from basics to production deployment.")
                        .category("Web Development")
                        .level("Intermediate")
                        .price(149.0)
                        .published(true)
                        .build());

                courseRepository.save(Course.builder()
                        .title("Data Structures & Algorithms for Interviews")
                        .shortDescription("Practice DSA questions for product-company interviews.")
                        .longDescription("Covers arrays, trees, graphs, DP and system design basics.")
                        .category("Interview Prep")
                        .level("Intermediate")
                        .price(129.0)
                        .published(true)
                        .build());

                courseRepository.save(Course.builder()
                        .title("System Design Fundamentals")
                        .shortDescription("Learn to design scalable systems with real case studies.")
                        .longDescription("Hands-on approach to high-level design for backend roles.")
                        .category("System Design")
                        .level("Advanced")
                        .price(179.0)
                        .published(true)
                        .build());
            }
        };
    }
}


