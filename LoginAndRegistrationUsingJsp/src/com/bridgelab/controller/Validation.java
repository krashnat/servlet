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


@WebServlet("/Validation")
public class Validation extends HttpServlet {
	

	@SuppressWarnings("unused")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email=request.getParameter("email");
		String useremail=request.getParameter("email");
		System.out.println("useremail"+" "+useremail);
		UserDao access=new UserDao();
		Connection con = UserDao.getConnection();
		String select_query="select name from student where email=?";
	try {
		PreparedStatement statement=con.prepareStatement(select_query);
		statement.setString(1, email);
		ResultSet result=statement.executeQuery();
		email=result.getString("email");	
		System.out.println("user email"+" "+email);
		System.out.println(result);
		if(result==null)
		{
			Services implement=	new ServiceImplementation();
			int status=implement.doRegister(request);
		}
		else
		{
			System.out.println("already present");
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
