<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Registration Page</title>
</head>
<body>
 <h2>Registration Page</h2>
    <form action="<%=request.getContextPath()%>/Services " method="get"> 
      UserName <input type="text" name="username" required>
      Password <input type="password" name="password" required>
      Email <input type="text" name="email" required>
       MobNo <input type="text" name="mobno" required>
      <input type="submit" value="submit">
      </form>

</body>
</html>