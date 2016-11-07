package com.lgm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.lgm.models.LoginModel;
import com.lgm.services.JWTGenerator;

import net.sf.json.JSONObject;

@RestController
public class AuthenticationController {
	@Autowired
	private LoginModel loginModel;

	@RequestMapping(value = "/login", method = RequestMethod.GET,produces="application/json")
	@ResponseBody
	public ResponseEntity<JSONObject> Login(@RequestParam String name) {
		if (name != null) {
			JSONObject response = new JSONObject();
			loginModel.setId("jkdjfkdsjfkdsjf");
			loginModel.setUserName(name);
			JWTGenerator.loginModel = loginModel;
			response.put("token", JWTGenerator.Tokenize());
			return new ResponseEntity<JSONObject>(response, HttpStatus.OK);
		}
		return new ResponseEntity<JSONObject>(HttpStatus.FORBIDDEN);
	}
	

	@RequestMapping(value = "/api/login", method = RequestMethod.POST)
	public void LoginTest(@RequestParam String name) {

	}
}
