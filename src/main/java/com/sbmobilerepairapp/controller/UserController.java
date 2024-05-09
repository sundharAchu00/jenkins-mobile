package com.sbmobilerepairapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sbmobilerepairapp.entity.User;
import com.sbmobilerepairapp.repository.UserDAO;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000/")
public class UserController {

	private UserDAO dao;

	public UserController() {
		super();
	}

	@Autowired
	public UserController(UserDAO dao) {
		super();
		this.dao = dao;
	}

	@PostMapping
	public User SaveUser(@RequestBody User user) {
		return dao.SaveUser(user);

	}

	@GetMapping("{id}")
	public User getById(@PathVariable("id") int id) {
		return dao.getUserById(id);

	}

	@GetMapping
	public List<User> getAllUsers() {
		return dao.getAllUsers();

	}
	
	@GetMapping("mail")
	public List<String> getAlluEmail() {
		return dao.getAlluEmail();
		
	}
	
	@PostMapping("{uEmail}")
	public User getByuEmail(@PathVariable("uEmail") String uEmail) {
		return dao.getByuEmail(uEmail);
		
	}

}
