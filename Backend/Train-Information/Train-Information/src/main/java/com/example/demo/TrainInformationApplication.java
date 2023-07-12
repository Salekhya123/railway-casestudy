package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

import com.example.demo.controller.SearchController;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication(exclude = {ErrorMvcAutoConfiguration.class})

@ComponentScan(basePackages= {"com.example"})
@EnableEurekaClient
@EnableSwagger2
public class TrainInformationApplication {
 

	public static void main(String[] args) {
		SpringApplication.run(TrainInformationApplication.class, args);
	}
	@Bean
	//@LoadBalanced
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
}
