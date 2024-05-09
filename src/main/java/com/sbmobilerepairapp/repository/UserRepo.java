package com.sbmobilerepairapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sbmobilerepairapp.entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	
	@Query("select u.uEmail from User u")
	List<String> getAlluEmail();
	
	User getByuEmail(String uEmail);

	
}
