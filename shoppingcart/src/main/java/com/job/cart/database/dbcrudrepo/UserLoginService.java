package com.job.cart.database.dbcrudrepo;

public interface UserLoginService {

	String findLoggedInUsername();

	void autoLogin(String username, String password);
}
