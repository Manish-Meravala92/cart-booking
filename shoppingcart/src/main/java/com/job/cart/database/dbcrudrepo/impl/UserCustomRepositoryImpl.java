package com.job.cart.database.dbcrudrepo.impl;

import java.util.HashSet;
import java.util.Set;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.job.cart.database.dbcrudrepo.UserRepository;
import com.job.cart.database.entity.User;
import com.job.cart.logger.LoggerUtil;

@Service
public class UserCustomRepositoryImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	private static final Logger logger = LoggerUtil.getLogger(UserCustomRepositoryImpl.class.getName());

	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String username) {
		try {
			User user = userRepository.findByUsername(username);
			if (user == null)
				throw new UsernameNotFoundException(username);

			Set<GrantedAuthority> grantedAuthorities = new HashSet<>();

			grantedAuthorities.add(new SimpleGrantedAuthority("User"));

			return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
					grantedAuthorities);
		} catch (Exception ex) {
			ex.printStackTrace();
			logger.error(ex.getMessage());
		}

		return null;

	}

}
