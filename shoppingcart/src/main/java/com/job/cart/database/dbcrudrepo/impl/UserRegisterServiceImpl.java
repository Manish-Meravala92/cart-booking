package com.job.cart.database.dbcrudrepo.impl;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.job.cart.controller.ShoppingCartController;
import com.job.cart.database.dbcrudrepo.UserRegisterService;
import com.job.cart.database.dbcrudrepo.UserRepository;
import com.job.cart.database.entity.User;
import com.job.cart.logger.LoggerUtil;

@Service
public class UserRegisterServiceImpl implements UserRegisterService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	private static final Logger logger = LoggerUtil.getLogger(UserRegisterServiceImpl.class.getName());

	@Override
	public void save(User user) {
		try {
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
			userRepository.save(user);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
		}
	}

	@Override
	public User findByUsername(String emailId) {
		try {
			return userRepository.findByUsername(emailId);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
		}
		return null;
	}
}
