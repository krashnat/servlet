package com.bridgelabz.serviceimplement;

import org.springframework.stereotype.Service;

import com.bridgelabz.model.StudentLogin;
import com.bridgelabz.model.StudentRegistration;
@Service
public interface Services {
	int register(StudentRegistration registration);
	int login(StudentLogin dao );

}
