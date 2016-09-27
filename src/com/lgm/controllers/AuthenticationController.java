package com.lgm.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class AuthenticationController {
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String Login(@RequestParam String name) {
		return name;
	}
}
