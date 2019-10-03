package com.job.cart.database.dbcrudrepo;

import com.job.cart.database.entity.User;

public interface UserRegisterService {

	void save(User user);

	User findByUsername(String username);

}
