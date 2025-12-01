package com.codeforbettercareer.elearning.modules.course.repository;

import com.codeforbettercareer.elearning.modules.course.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {

    List<Course> findByPublishedTrue();
}


