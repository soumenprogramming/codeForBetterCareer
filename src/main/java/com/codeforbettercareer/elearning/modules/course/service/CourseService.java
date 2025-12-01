package com.codeforbettercareer.elearning.modules.course.service;

import com.codeforbettercareer.elearning.modules.course.dto.CourseResponse;
import com.codeforbettercareer.elearning.modules.course.entity.Course;
import com.codeforbettercareer.elearning.modules.course.repository.CourseRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    @Transactional(readOnly = true)
    public List<CourseResponse> listPublished() {
        return courseRepository.findByPublishedTrue().stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public CourseResponse getById(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Course not found"));
        return toResponse(course);
    }

    private CourseResponse toResponse(Course course) {
        return CourseResponse.builder()
                .id(course.getId())
                .title(course.getTitle())
                .shortDescription(course.getShortDescription())
                .category(course.getCategory())
                .level(course.getLevel())
                .price(course.getPrice())
                .build();
    }
}


