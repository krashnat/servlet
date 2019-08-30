package com.bridgelabz.serviceimplement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bridgelabz.dao.StudentDao;
import com.bridgelabz.model.StudentLogin;
import com.bridgelabz.model.StudentRegistration;
import com.bridgelabz.util.Utility;

@Service
public class Registration implements Services {
	@Autowired
	StudentDao dao;
	
	public void setDao(StudentDao dao) {
		this.dao = dao;
		System.out.println("11111111");
	}

	public int register(StudentRegistration registration) {
		int temp = dao.register(registration);
		return temp;
	}

	public int login(StudentLogin login) {
		int result = dao.login(login);

		return result;

	}

}
