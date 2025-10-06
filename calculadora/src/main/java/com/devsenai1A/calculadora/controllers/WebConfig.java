package com.devsenai1A.calculadora.controllers;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
    @Bean
    
    WebMvcConfigurer corsConfigurer() {
        return (WebMvcConfigurer) new WebMvcConfigurer() {
            public void addCorsMapping(CorsRegistry registry ) {
                registry.addMapping("/**")
                .allowedMethods("HEAD","GET","POST","PUT","PATCH","DELETE");
            }
        };
    }

}