package com.sbmobilerepairapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sbmobilerepairapp.entity.Shops;
import com.sbmobilerepairapp.repository.ShopsRepoDAO;

@RestController
@RequestMapping("/shops")
@CrossOrigin("http://localhost:3000/")
public class ShopController {

	private ShopsRepoDAO dao;

	public ShopController() {
		super();
	}

	@Autowired
	public ShopController(ShopsRepoDAO dao) {
		super();
		this.dao = dao;
	}

	@PostMapping
	public Shops SaveShop(@RequestBody Shops shops) {
		return dao.SaveShop(shops);

	}

	@GetMapping
	public List<Shops> getAllShops() {
		return dao.getAllShops();

	}

}
