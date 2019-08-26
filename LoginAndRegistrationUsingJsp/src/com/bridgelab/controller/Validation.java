package com.bridgelab.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bridgelab.dao.UserDao;
import com.bridgelab.service.Services;
import com.bridgelab.serviceimplementation.ServiceImplementation;

//Validation Servlet
@WebServlet("/Validation")
public class Validation extends HttpServlet {
	

	@SuppressWarnings("unused")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email=request.getParameter("email");
	
		System.out.println("useremail"+" "+email);
		UserDao access=new UserDao();
		Connection con = UserDao.getConnection();//it give database connection
		
	try {
		PreparedStatement statement=con.prepareStatement("select email from student where email=?");
		statement.setString(1, email);
		ResultSet result=statement.executeQuery();
		if(result.next()==true)
		{
			 //while(result.next()) //Verification of user already registered.
			    //{
				//if (result.getString(1).equals(email)) {
					
					response.sendRedirect("Login.jsp");//Login Service to already registered user
				//}
		  }
			else {

				Services implement=	new ServiceImplementation();

				int status=implement.doRegister(request);
					if(status>=1)
					{
						response.sendRedirect("RegistationSuccess.jsp");//giving registration to new user
					}
			}
		}
		
		
	
	catch(Exception E)
	{
		E.printStackTrace();
		System.out.println("Error while fetching data");
	}
		
		
		
		
		
		
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
