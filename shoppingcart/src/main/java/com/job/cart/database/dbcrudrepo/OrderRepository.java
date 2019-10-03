package com.job.cart.database.dbcrudrepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.job.cart.database.entity.OrderDetails;

public interface OrderRepository extends JpaRepository<OrderDetails, String> {

}
