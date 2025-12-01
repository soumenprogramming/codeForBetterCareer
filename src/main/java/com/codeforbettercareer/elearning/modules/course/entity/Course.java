package com.codeforbettercareer.elearning.modules.course.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(nullable = false, length = 300)
    private String shortDescription;

    @Column(length = 2000)
    private String longDescription;

    @Column(length = 80)
    private String category;

    @Column(length = 40)
    private String level; // Beginner, Intermediate, Advanced

    @Column
    private Double price;

    @Column(nullable = false)
    private boolean published = true;
}


