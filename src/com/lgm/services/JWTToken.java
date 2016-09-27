package com.lgm.services;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.nimbusds.jwt.JWT;
import com.nimbusds.jwt.ReadOnlyJWTClaimsSet;

public class JWTToken implements Authentication{

	private static final long serialVersionUID = 1L;
	
	private JWT jwt;
    private final Collection<GrantedAuthority> authorities;
    private boolean authenticated;
    private ReadOnlyJWTClaimsSet claims;
    
    public JWTToken(JWT jwt) throws ParseException {
        this.jwt = jwt;
        List<String> roles;
        try {
            roles = jwt.getJWTClaimsSet().getStringListClaim("roles");
        } catch (ParseException e) {
            roles = new ArrayList<>();
        }
        List<GrantedAuthority> tmp = new ArrayList<>();
        if (roles != null) {
            for (String role : roles) {
                tmp.add(new SimpleGrantedAuthority(role));
            }
        }
        this.authorities = Collections.unmodifiableList(tmp);
        this.claims = jwt.getJWTClaimsSet();
        authenticated = false;
    }
    
    public JWT getJwt() {
        return jwt;
    }

    public ReadOnlyJWTClaimsSet getClaims() {
        return claims;
    }

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return claims.getSubject();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public Object getCredentials() {
		// TODO Auto-generated method stub
		return "";
	}

	@Override
	public Object getDetails() {
		// TODO Auto-generated method stub
		return claims.toJSONObject();
	}

	@Override
	public Object getPrincipal() {
		// TODO Auto-generated method stub
		return claims.getSubject();
	}

	@Override
	public boolean isAuthenticated() {
		// TODO Auto-generated method stub
		return authenticated;
	}

	@Override
	public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
		this.authenticated = isAuthenticated;
		
	}

}
