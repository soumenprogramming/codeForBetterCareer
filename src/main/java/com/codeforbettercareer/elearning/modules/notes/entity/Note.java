package com.codeforbettercareer.elearning.modules.notes.entity;

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
@Table(name = "notes")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 100)
    private String subject; // e.g., "Computer Fundamentals", "DBMS", "Operating System"

    @Column(length = 500)
    private String shortDescription;

    @Column(nullable = false, length = 50)
    private String type; // "pdf", "video", "link", "handwritten"

    @Column(nullable = false, length = 500)
    private String url; // URL to the note/resource

    @Column(nullable = false)
    private boolean featured = false;
}

