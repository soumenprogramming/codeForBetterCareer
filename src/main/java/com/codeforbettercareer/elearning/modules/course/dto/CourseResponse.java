package com.codeforbettercareer.elearning.modules.course.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {

    private Long id;
    private String title;
    private String shortDescription;
    private String category;
    private String level;
    private Double price;
}


