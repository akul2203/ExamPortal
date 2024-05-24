package com.exam;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.exam.entity.Role;
import com.exam.entity.User;
import com.exam.entity.UserRole;
import com.exam.service.UserService;

@SpringBootApplication
public class ExamServerApplication implements CommandLineRunner{

//	@Autowired
//	private UserService userservice;
//	
//	@Autowired
//	private BCryptPasswordEncoder bPasswordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(ExamServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("starting apk");
////		
//		User  user=new User();
//		
//		user.setFirstName("akul");
//		user.setLastName("gehlot");
//		user.setUsername("akul09");
//		user.setPhone("9179783646");
//		 user.setUserpassword(this.bPasswordEncoder.encode("1234"));
//		user.setEmail("akul@gmail.com");
//		user.setProfileIMG("default.png");
//	
//		Role role1=new Role();
//		role1.setRoleId(11L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet =new HashSet<>();
//		UserRole userRole=new UserRole();
//		
//		userRole.setRole(role1);
//		userRole.setUser(user);
//	    
//		userRoleSet.add(userRole);
//		
//		User user1 =this.userservice.createuser(user, userRoleSet);                         
//		System.out.println(user1.getUsername());
//	
//	
//		
	}

}
