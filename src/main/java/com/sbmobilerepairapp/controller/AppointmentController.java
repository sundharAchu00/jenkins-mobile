package com.sbmobilerepairapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sbmobilerepairapp.entity.Appointment;
import com.sbmobilerepairapp.repository.AppointmentDAO;
import com.sbmobilerepairapp.repository.ShopsRepoDAO;

@RestController
@RequestMapping("/appointment")
@CrossOrigin("http://localhost:3000/")
public class AppointmentController {

	private AppointmentDAO dao;
	
	private ShopsRepoDAO dao2;

	public AppointmentController() {
		super();
	}

	@Autowired
	public AppointmentController(AppointmentDAO dao) {
		super();
		this.dao = dao;
	}

	@PostMapping
	public boolean saveAppointment(@RequestBody Appointment appointment) {

		System.out.println(appointment.getUsers().getuId());
		System.out.println(appointment.getShops().getsId() + " : Sid");
		return dao.saveAppointment(appointment);

	}

}
