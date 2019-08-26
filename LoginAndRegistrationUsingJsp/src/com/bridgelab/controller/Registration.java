package com.bridgelab.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bridgelab.service.Services;
import com.bridgelab.serviceimplementation.ServiceImplementation;

@WebServlet("/Services")
public class Registration extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher req=request.getRequestDispatcher("Validation");
		req.forward(request, response);
	
	/*Services implement=	new ServiceImplementation();

	int status=implement.doRegister(request);
		if(status>=1)
		{
			response.sendRedirect("RegistationSuccess.jsp");
		}*/
	}

	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Services implement=	new ServiceImplementation();
		boolean result=implement.doLogin(request, response);
		if(result==true)
		{
			response.sendRedirect("LoginSuccess.jsp");
		}
		else
		{
			
		}
		
	}

}
