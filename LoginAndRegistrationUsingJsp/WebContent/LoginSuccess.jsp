<%@page import="org.apache.catalina.connector.Response"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<% 
response.setHeader("Cache-Control","no-cashe,no-store,must-revalidate");

%>
<body>

	you have successfully loggeed in.
	<a href="about.jsp"> About</a>
	 <form action="logout1" method="post"> 
<input type="submit" value="Logout">
</form>
	
	




</body>
</html>