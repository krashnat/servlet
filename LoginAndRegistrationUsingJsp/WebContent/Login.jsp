<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login Page</title>
</head>
<body>
 <form action="<%=request.getContextPath()%>/Services " method="post"> 
      UserName <input type="text" name="username" required>
      Password <input type="password" name="password" required>
    
      <input type="submit" value="Login">
      </form>
</body>
</html>