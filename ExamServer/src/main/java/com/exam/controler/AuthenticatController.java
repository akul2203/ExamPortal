package com.exam.controler;

import java.security.Principal;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exam.config.JwtUtils;
import com.exam.entity.JwtRequest;
import com.exam.entity.JwtResponse;
import com.exam.entity.User;
import com.exam.service.impl.UserDetaileServiceImpl;




@RestController
@CrossOrigin("*")
public class AuthenticatController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetaileServiceImpl userDetaileService;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	
	//generate Token
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
        
		
		try {
	      System.out.println(jwtRequest.getUserName()+"hello");
			authenticate(jwtRequest.getUserName(), jwtRequest.getPassword());
		}catch(UsernameNotFoundException e) {
		    e.printStackTrace();
		    throw new Exception("User not Found"); 
		    
		}
		

		///authenticate 
		 
		
		UserDetails userDetails = this.userDetaileService.loadUserByUsername(jwtRequest.getUserName());
		String token = this.jwtUtils.generateToken(userDetails);
		
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	
	private void authenticate(String username,String password) throws Exception {
		
		try {
		
			System.out.println("at authenticate controrer");
			
			 authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}catch (DisabledException e) {
			// TODO: handle exception
			throw new Exception("User Disabled");
		}catch(BadCredentialsException e) {
			throw new Exception("Invalid credentials  " + e.getMessage()); 
			
		}
		
		
		
	}
	// return the detail of current user 
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		User us =(User)this.userDetaileService.loadUserByUsername(principal.getName());
		return us.isEnabled()?us:null;
	}
	}
	








