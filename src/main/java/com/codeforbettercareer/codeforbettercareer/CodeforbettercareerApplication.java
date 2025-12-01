package com.codeforbettercareer.codeforbettercareer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {
		"com.codeforbettercareer.codeforbettercareer",
		"com.codeforbettercareer.elearning"
})
@EnableJpaRepositories(basePackages = "com.codeforbettercareer.elearning")
@EntityScan(basePackages = "com.codeforbettercareer.elearning")
public class CodeforbettercareerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeforbettercareerApplication.class, args);
	}

}
