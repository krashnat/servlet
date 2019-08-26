package com.bridgelab.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bridgelab.service.Services;
import com.bridgelab.serviceimplementation.ServiceImplementation;

//@WebServlet("/Services")
public class Registration extends HttpServlet {
	
	//Registration Service
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

	
    //Login Service
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Services implement=	new ServiceImplementation();
		System.out.println("in login");
		String email=request.getParameter("username");
		boolean result=implement.doLogin(request, response);
		if(result==true)
		{
			HttpSession session=request.getSession();//creating session
			session.setAttribute("email",email);
			session.setMaxInactiveInterval(10);//session interval
			//Cookie cookie=new Cookie("email",email);
			//cookie.setMaxAge(20);
			//response.addCookie(cookie);
			response.sendRedirect("LoginSuccess.jsp");
			
		}
		else
		{
			response.sendRedirect("Login.jsp");
		}
		
	}

}
