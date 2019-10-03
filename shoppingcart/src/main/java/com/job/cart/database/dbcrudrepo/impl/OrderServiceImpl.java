package com.job.cart.database.dbcrudrepo.impl;

import java.util.ArrayList;

import org.apache.commons.lang3.SerializationUtils;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.job.cart.bean.ShippingBean;
import com.job.cart.controller.ShoppingCartController;
import com.job.cart.database.dbcrudrepo.OrderProductRepository;
import com.job.cart.database.dbcrudrepo.OrderRepository;
import com.job.cart.database.dbcrudrepo.OrderService;
import com.job.cart.database.entity.OrderDetails;
import com.job.cart.database.entity.OrderProductDtl;
import com.job.cart.database.entity.ProductBean;
import com.job.cart.database.entity.User;
import com.job.cart.logger.LoggerUtil;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private OrderProductRepository orderProductRepository;
	
	private static final Logger logger = LoggerUtil.getLogger(ShoppingCartController.class.getName());

	@Override
	public void save(ShippingBean shippingBean, ArrayList<ProductBean> alProductBean) {

		try {
			OrderDetails orderDetails = new OrderDetails();
			orderDetails.setCardNo(shippingBean.getCardNo());
			orderDetails.setExpDt(shippingBean.getExpDt());
			orderDetails.setCvv(shippingBean.getCvv());
			orderDetails.setTotalQuantity(shippingBean.getTotalQuantity());
			orderDetails.setTotalPrice(shippingBean.getTotalPrice());
			orderDetails.setAddress(shippingBean.getAddress());
			orderDetails.setPhone(shippingBean.getPhone());

			User user = orderDetails.getUser();

			if (user == null) {
				user = new User();
			}
			user.setUsername(shippingBean.getEmailId());

			orderDetails.setUser(user);

			orderRepository.save(orderDetails);

			OrderProductDtl orderProductDtl = new OrderProductDtl();
			orderProductDtl.setOrderDetails(orderDetails);

			for (ProductBean bean : alProductBean) {
				OrderProductDtl cloned = (OrderProductDtl)SerializationUtils.clone(orderProductDtl);
				cloned.setProductDtl(bean);
				cloned.setTotalQuantity(bean.getQuantity());
				orderProductRepository.save(cloned);
			}

		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e.getMessage());
		}

	}

}
