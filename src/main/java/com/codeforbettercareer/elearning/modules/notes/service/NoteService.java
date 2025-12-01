package com.codeforbettercareer.elearning.modules.notes.service;

import com.codeforbettercareer.elearning.modules.notes.dto.NoteResponse;
import com.codeforbettercareer.elearning.modules.notes.entity.Note;
import com.codeforbettercareer.elearning.modules.notes.repository.NoteRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NoteService {

    private final NoteRepository noteRepository;

    @Transactional(readOnly = true)
    public List<NoteResponse> listAll() {
        return noteRepository.findAll().stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<NoteResponse> listFeatured() {
        return noteRepository.findByFeaturedTrue().stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<NoteResponse> listBySubject(String subject) {
        return noteRepository.findBySubject(subject).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public NoteResponse getById(Long id) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Note not found"));
        return toResponse(note);
    }

    private NoteResponse toResponse(Note note) {
        return NoteResponse.builder()
                .id(note.getId())
                .title(note.getTitle())
                .subject(note.getSubject())
                .shortDescription(note.getShortDescription())
                .type(note.getType())
                .url(note.getUrl())
                .featured(note.isFeatured())
                .build();
    }
}

