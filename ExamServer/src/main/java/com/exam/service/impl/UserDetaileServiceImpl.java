package com.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exam.entity.User;
import com.exam.repo.UserRepo;

@Service
public class UserDetaileServiceImpl implements UserDetailsService {
@Autowired
	private UserRepo userRepo;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
     User user = this.userRepo.findByUsername(username);
     if(user==null) {
    	 System.out.println("User not FOund !!");
    	 throw new UsernameNotFoundException("Not User Found !!");
     }
		return user;
	}

}
