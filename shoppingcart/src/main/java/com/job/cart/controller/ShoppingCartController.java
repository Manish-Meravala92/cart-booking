package com.job.cart.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.job.cart.bean.CartConstants;
import com.job.cart.bean.ShippingBean;
import com.job.cart.database.dbcrudrepo.OrderService;
import com.job.cart.database.dbcrudrepo.ProductRepository;
import com.job.cart.database.dbcrudrepo.UserLoginService;
import com.job.cart.database.dbcrudrepo.UserRegisterService;
import com.job.cart.database.entity.ProductBean;
import com.job.cart.database.entity.User;
import com.job.cart.logger.LoggerUtil;

@RestController
@RequestMapping(value = "/api")
public class ShoppingCartController {

	@Autowired
	private UserRegisterService registerService;

	@Autowired
	private UserLoginService loginService;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private OrderService orderService;
	
	private static final Logger logger = LoggerUtil.getLogger(ShoppingCartController.class.getName());

	@RequestMapping(method = RequestMethod.POST, value = CartConstants.API_REGISTER)
	public ArrayList<ProductBean> register(@RequestBody User userForm, HttpSession session) {
		ArrayList<ProductBean> alProductList = null;
		try {
			String password = userForm.getPassword();
			userForm.setUsername(userForm.getEmailId());
			User existUser = registerService.findByUsername(userForm.getUsername());

			if (existUser != null) {
				return new ArrayList<ProductBean>();
			}
			registerService.save(userForm);

			loginService.autoLogin(userForm.getEmailId(), password);
			session.setAttribute("username", userForm.getEmailId());
			alProductList = (ArrayList<ProductBean>) this.productRepository.findAll();
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
		}

		return alProductList;
	}

	@RequestMapping(method = RequestMethod.POST, value = CartConstants.API_LOGIN)
	public ArrayList<ProductBean> login(@RequestBody User userForm, HttpSession session) {
		ArrayList<ProductBean> alProductList = new ArrayList<ProductBean>();
		try {
			String password = userForm.getPassword();
			userForm.setUsername(userForm.getEmailId());
			session.setAttribute("username", userForm.getEmailId());
			loginService.autoLogin(userForm.getEmailId(), password);
			alProductList = (ArrayList<ProductBean>) this.productRepository.findAll();
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
		}

		return alProductList;
	}

	@RequestMapping(method = RequestMethod.POST, value = CartConstants.API_ADD_TO_CART)
	public void addToCart(@RequestBody ArrayList<ProductBean> alProductList,HttpSession httpSession) {
		try {
			httpSession.setAttribute("cart_" + httpSession.getId(), alProductList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
		}
		
	}

	@RequestMapping(method = RequestMethod.POST, value = CartConstants.API_ORDER)
	public ArrayList<ProductBean> booking(@RequestBody ShippingBean shippingBean, HttpSession httpSession) {
		ArrayList<ProductBean> alProductList = null;
		try {
			alProductList = (ArrayList<ProductBean>) httpSession
					.getAttribute("cart_" + httpSession.getId());

			orderService.save(shippingBean,alProductList);
			logout(httpSession);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
		}
		return alProductList;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = CartConstants.API_LOGOUT)
	public void logout(HttpSession httpSession) {
		try {
			httpSession.invalidate();
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
		}
	}
}
