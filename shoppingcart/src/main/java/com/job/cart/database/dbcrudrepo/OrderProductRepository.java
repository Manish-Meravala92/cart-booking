package com.job.cart.database.dbcrudrepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.job.cart.database.entity.OrderProductDtl;

public interface OrderProductRepository extends JpaRepository<OrderProductDtl, String> {

}
