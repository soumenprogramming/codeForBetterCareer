package com.codeforbettercareer.elearning.modules.notes.controller;

import com.codeforbettercareer.elearning.modules.notes.dto.NoteResponse;
import com.codeforbettercareer.elearning.modules.notes.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/notes")
@RequiredArgsConstructor
public class NoteController {

    private final NoteService noteService;

    @GetMapping
    public ResponseEntity<List<NoteResponse>> listNotes(
            @RequestParam(required = false) String subject,
            @RequestParam(required = false, defaultValue = "false") boolean featured
    ) {
        List<NoteResponse> notes;
        if (featured) {
            notes = noteService.listFeatured();
        } else if (subject != null && !subject.isEmpty()) {
            notes = noteService.listBySubject(subject);
        } else {
            notes = noteService.listAll();
        }
        return ResponseEntity.ok(notes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<NoteResponse> getNote(@PathVariable Long id) {
        return ResponseEntity.ok(noteService.getById(id));
    }
}

