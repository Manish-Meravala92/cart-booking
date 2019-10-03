package com.job.cart.database.dbcrudrepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.job.cart.database.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

	User findByUsername(String emailId);

}
