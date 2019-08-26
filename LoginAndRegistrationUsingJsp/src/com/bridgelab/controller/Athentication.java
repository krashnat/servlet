package com.bridgelab.controller;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Athentication implements Filter {


	
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest request1=(HttpServletRequest)request;
		
		HttpServletResponse response1=(HttpServletResponse) response;
		HttpSession session=request1.getSession();
		System.out.println("in filter");
		if(session.getAttribute("email")==null)
		{
			response1.sendRedirect("Login.jsp");
		}
		else
		{
			chain.doFilter(request1, response1);
		}
		
		
	}

	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
