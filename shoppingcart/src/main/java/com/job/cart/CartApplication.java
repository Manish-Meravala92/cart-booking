package com.job.cart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class CartApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(CartApplication.class, args);
	}

}
