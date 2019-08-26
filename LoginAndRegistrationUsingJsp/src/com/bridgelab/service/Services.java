package com.bridgelab.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Services {
int doRegister(HttpServletRequest request);
	
	boolean doLogin(HttpServletRequest request, HttpServletResponse response);

}
