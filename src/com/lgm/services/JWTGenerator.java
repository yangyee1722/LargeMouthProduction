package com.lgm.services;

import java.util.Date;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;

import com.lgm.models.LoginModel;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;

public class JWTGenerator {
	@Autowired
	public static LoginModel loginModel;

	public static String Tokenize() {
		Date now = new Date();
		JWTClaimsSet claimsSet = new JWTClaimsSet();
		claimsSet.setClaim("loginModel", loginModel);
		claimsSet.setSubject("lofttalk");
		claimsSet.setIssueTime(now);
		claimsSet.setIssuer("lofttalk.com");
		claimsSet.setExpirationTime(new DateTime().plusMinutes(7).toDate());
		claimsSet.setNotBeforeTime(now);
		String token = "Bearer "
				+ signAndSerializeJWT(claimsSet, "DB4AEF4719809709E560ED8DE2F9C77B886B963B28BA20E9A8A621BBD4ABA599");
		return token;
	}

	private static String signAndSerializeJWT(JWTClaimsSet claimsSet, String secret) {
		JWSSigner signer = new MACSigner(secret);
		SignedJWT signedJWT = new SignedJWT(new JWSHeader(JWSAlgorithm.HS512), claimsSet);
		try {
			signedJWT.sign(signer);
			return signedJWT.serialize();
		} catch (JOSEException e) {
			e.printStackTrace();
			return null;
		}
	}

}
