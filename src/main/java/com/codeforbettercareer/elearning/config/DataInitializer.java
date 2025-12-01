package com.codeforbettercareer.elearning.config;

import com.codeforbettercareer.elearning.modules.course.entity.Course;
import com.codeforbettercareer.elearning.modules.course.repository.CourseRepository;
import com.codeforbettercareer.elearning.modules.notes.entity.Note;
import com.codeforbettercareer.elearning.modules.notes.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final CourseRepository courseRepository;
    private final NoteRepository noteRepository;

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

            if (noteRepository.count() == 0) {
                noteRepository.save(Note.builder()
                        .title("Computer Fundamentals Handwritten Notes")
                        .subject("Computer Fundamentals")
                        .shortDescription("Complete handwritten notes covering basics of computer architecture, hardware, and software.")
                        .type("handwritten")
                        .url("#")
                        .featured(true)
                        .build());

                noteRepository.save(Note.builder()
                        .title("Machine Learning Handwritten Notes")
                        .subject("Machine Learning")
                        .shortDescription("Comprehensive notes on ML algorithms, neural networks, and practical applications.")
                        .type("handwritten")
                        .url("#")
                        .featured(true)
                        .build());

                noteRepository.save(Note.builder()
                        .title("OOPs Handwritten Notes")
                        .subject("Object-Oriented Programming")
                        .shortDescription("Detailed notes on classes, inheritance, polymorphism, and design patterns.")
                        .type("handwritten")
                        .url("#")
                        .featured(true)
                        .build());

                noteRepository.save(Note.builder()
                        .title("Computer Networks Handwritten Notes")
                        .subject("Computer Networks")
                        .shortDescription("Complete guide to networking protocols, OSI model, and network security.")
                        .type("handwritten")
                        .url("#")
                        .featured(true)
                        .build());

                noteRepository.save(Note.builder()
                        .title("Operating System Handwritten Notes")
                        .subject("Operating System")
                        .shortDescription("In-depth notes on process management, memory, file systems, and scheduling.")
                        .type("handwritten")
                        .url("#")
                        .featured(true)
                        .build());

                noteRepository.save(Note.builder()
                        .title("DBMS Handwritten Notes")
                        .subject("Database Management System")
                        .shortDescription("Comprehensive notes on SQL, normalization, transactions, and database design.")
                        .type("handwritten")
                        .url("#")
                        .featured(true)
                        .build());
            }
        };
    }
}


