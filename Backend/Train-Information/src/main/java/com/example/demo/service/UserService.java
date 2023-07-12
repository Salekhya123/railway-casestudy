package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserModel;
import com.example.demo.repository.UserRepository;



@Service
public class UserService implements UserDetailsService{
	
	@Autowired
	UserRepository userrepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel foundedUser=userrepo.findByusername(username);
		if (foundedUser==null) {
			return null;
		}
		
		List<GrantedAuthority> auth = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_USER");
        if (username.equals("admin")) {
            auth = AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_ADMIN");
        }
        String user=foundedUser.getUsername();
        String pass=foundedUser.getPassword();
        return new User(user, pass,new ArrayList<>());
       
		/*
		 * String user=foundedUser.getUsername(); String pass=foundedUser.getPassword();
		 * return new User(user, pass,new ArrayList<>());
		 */
		
	}
	

}
