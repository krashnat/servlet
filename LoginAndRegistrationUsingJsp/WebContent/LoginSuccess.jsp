<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
you have successfully loggeed in.
<form action="<%=request.getContextPath()%>/Services " method="get"> 
      
    
      <input type="submit" value="Logout">
      
 
      </form>


</body>
</html>