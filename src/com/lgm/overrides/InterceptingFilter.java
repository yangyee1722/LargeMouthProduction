package com.lgm.overrides;

import java.io.IOException;
import java.text.ParseException;

import javax.security.sasl.AuthenticationException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.Assert;
import org.springframework.web.filter.GenericFilterBean;

import com.lgm.services.JWTToken;
import com.nimbusds.jwt.JWT;
import com.nimbusds.jwt.JWTParser;

public class InterceptingFilter extends GenericFilterBean {
	// private AuthenticationEntryPoint entryPoint;
	public InterceptingFilter(){
		
	}
	private AuthenticationManager authenticationManager;
	private static String message;
	
	public InterceptingFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
		// this.entryPoint = entryPoint;
	}

	@Override
	public void afterPropertiesSet() throws ServletException {
		Assert.notNull(authenticationManager);
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		try {
			String stringToken = req.getHeader("Authorization");
			
			if (stringToken == null) {
				// throw new InsufficientAuthenticationException("Authorization
				// header not found");
				System.out.println("Authorization Header was not found");
			}

			// remove schema from token
			String authorizationSchema = "Bearer";
			if (stringToken.indexOf(authorizationSchema) == -1) {
				// throw new InsufficientAuthenticationException("Authorization
				// schema not found");
				message = "Authorization Header incorrect format";
			}
			stringToken = stringToken.substring(authorizationSchema.length()).trim();

			try {
				JWT jwt = JWTParser.parse(stringToken);
				JWTToken token = new JWTToken(jwt);

				Authentication auth = authenticationManager.authenticate(token);
				SecurityContextHolder.getContext().setAuthentication(auth);
				chain.doFilter(request, response);
			} catch (ParseException e) {
				System.out.println("Invalid Token");
			}
		} catch (AuthenticationException e) {
			SecurityContextHolder.clearContext();
			/*
			 * if (entryPoint != null) { entryPoint.commence(req, res, e); }
			 */
		}catch(Exception e){
			System.out.println(e.getMessage());
		}

	}

	public static String getMessage() {
		return message;
	}

	public static void setMessage(String message) {
		InterceptingFilter.message = message;
	}

}
