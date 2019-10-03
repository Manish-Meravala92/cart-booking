package com.job.cart.database.dbcrudrepo;

import java.util.ArrayList;

import com.job.cart.bean.ShippingBean;
import com.job.cart.database.entity.ProductBean;

public interface OrderService {

	void save(ShippingBean shippingBean, ArrayList<ProductBean> alProductBean);

}
