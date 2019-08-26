package com.bridgelab.serviceimplementation;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bridgelab.dao.UserDao;
import com.bridgelab.model.LoginModel;
//import com.bridgelab.dao.UserDao;
import com.bridgelab.model.UserDetail;
import com.bridgelab.service.Services;

public class ServiceImplementation implements Services{

	UserDao access = new UserDao();

	public int doRegister(HttpServletRequest request) {
		UserDetail userdata = new UserDetail();
		String username = (String) request.getParameter("username");
		userdata.setUsername(username);
		System.out.println("username"+username);
		String password = (String) request.getParameter("password");
		userdata.setPassword(password);
		String mobno = (String) request.getParameter("mobno");
		userdata.setMobno(mobno);
		String email = (String) request.getParameter("email");
		System.out.println("email"+email);
		userdata.setEmail(email);
		int status = access.register(userdata);
		System.out.println("status" + status);
		return status;
		
	}

	@Override
	public boolean doLogin(HttpServletRequest request, HttpServletResponse response) {
		LoginModel userdata=new LoginModel();
		String username = request.getParameter("username");
		userdata.setEmail(username);
		String password = request.getParameter("password");
		userdata.setPassword(password);
		boolean loginResult=access.login(userdata);
		return loginResult;
	}

}
