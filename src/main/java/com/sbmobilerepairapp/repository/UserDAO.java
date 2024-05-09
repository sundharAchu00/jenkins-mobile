package com.sbmobilerepairapp.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sbmobilerepairapp.entity.User;

@Repository
public class UserDAO {

	private UserRepo repo;

	public UserDAO() {
		super();
	}

	@Autowired
	public UserDAO(UserRepo repo) {
		super();
		this.repo = repo;
	}

	public User getUserById(int id) {
		return repo.findById(id).get();

	}

	public User SaveUser(User user) {
		return repo.save(user);

	}

	public List<User> getAllUsers() {
		return repo.findAll();

	}
	
	public List<String> getAlluEmail() {
		return repo.getAlluEmail();
		
	}
	
	public User getByuEmail(String email) {
		return repo.getByuEmail(email);
		
	}
}
