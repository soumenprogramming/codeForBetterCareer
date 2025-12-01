package com.codeforbettercareer.elearning.modules.notes.repository;

import com.codeforbettercareer.elearning.modules.notes.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NoteRepository extends JpaRepository<Note, Long> {

    List<Note> findByFeaturedTrue();

    List<Note> findBySubject(String subject);

    Optional<Note> findById(Long id);
}

