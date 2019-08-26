package com.bridgelab.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.bridgelab.model.LoginModel;
import com.bridgelab.model.UserDetail;

public class UserDao {
	static Connection con = null;
	public static Connection getConnection() {
			
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			System.out.println("registered database");
			
		} catch (ClassNotFoundException e) {

			System.out.println("Not regisrtering database");
			
		}
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/information", "root", "root");
			System.out.println("database connected");
		} catch (SQLException e) {
			
			System.out.println("Not connecting to data base");
		}
		return con;
	}
	
	public int register(UserDetail detail)
	{

		int status=0;
		
		con=UserDao.getConnection();
		try {
		
			PreparedStatement statement=con.prepareStatement("insert into student values(?,?,?,?)");
			statement.setString(1, detail.getUsername());
			statement.setString(2, detail.getMobno());
			statement.setString(3, detail.getEmail());
			statement.setString(4, detail.getPassword());
			status=statement.executeUpdate();
			statement.close();
			con.close();
		
			
		} catch (SQLException e) {
			System.out.println("Exception in inserting");
		}
		return status;
		
	}
	public boolean login(LoginModel userdata)
	{

		
		String email=userdata.getEmail();
		String password=userdata.getPassword();
		Connection con;
		con=UserDao.getConnection();
		try {
			PreparedStatement statement=con.prepareStatement("select name,password,email from student where email=?");
			statement.setString(1, email);
			ResultSet result=statement.executeQuery();
        			
			while(result.next())
			{
				String dbname=result.getString(1);
				System.out.println("username db"+" "+dbname);
				String dbpassword=result.getString(2);
				System.out.println("password db"+" "+dbpassword);
				System.out.println((password.equals(dbpassword)));
				if(password.equals(dbpassword))
				{
					System.out.println("Log in success");
					return true;
					
				}
				else
				{
					
					System.out.println("password is wrong");
				}
			}
			
		} catch (SQLException e) {
			
			System.out.println("Error while fetching data");
			
		}
		
		return false;
		
		
	}

}
