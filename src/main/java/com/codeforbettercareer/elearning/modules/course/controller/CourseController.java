package com.codeforbettercareer.elearning.modules.course.controller;

import com.codeforbettercareer.elearning.modules.course.dto.CourseResponse;
import com.codeforbettercareer.elearning.modules.course.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping
    public ResponseEntity<List<CourseResponse>> listCourses() {
        return ResponseEntity.ok(courseService.listPublished());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseResponse> getCourse(@PathVariable Long id) {
        return ResponseEntity.ok(courseService.getById(id));
    }
}


