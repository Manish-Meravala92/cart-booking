package com.job.cart.database.dbcrudrepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.job.cart.database.entity.ProductBean;

public interface ProductRepository extends JpaRepository<ProductBean, String> {

}
