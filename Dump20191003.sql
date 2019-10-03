-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: productcart
-- ------------------------------------------------------
-- Server version	5.5.62-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_details` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `total_quantity` int(11) NOT NULL,
  `total_price` double NOT NULL,
  `email_id` varchar(45) NOT NULL,
  `card_no` varchar(45) DEFAULT NULL,
  `exp_dt` varchar(45) DEFAULT NULL,
  `cvv` varchar(45) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `address` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `email_id_idx` (`email_id`),
  CONSTRAINT `email_id` FOREIGN KEY (`email_id`) REFERENCES `user_details` (`email_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,1,100,'manishmeravala@gmail.com','342342','534534','3243','2019-10-02 19:50:27',NULL,''),(13,1,100,'manishmeravala@gmail.com','5646','4654','45646','2019-10-03 01:44:05','11005 Floral Park Dr','13157908646'),(14,1,100,'manishmeravala@gmail.com','5646','4654','45646','2019-10-03 01:45:06','11005 Floral Park Dr','13157908646'),(15,1,100,'manishmeravala@gmail.com','5646','4654','45646','2019-10-03 01:47:54','11005 Floral Park Dr','13157908646'),(16,1,100,'manishmeravala@gmail.com','5646','4654','45646','2019-10-03 01:49:17','11005 Floral Park Dr','13157908646'),(17,2,170,'manishmeravala@gmail.com','21313','23324','234324','2019-10-03 01:52:15','11005 Floral Park Dr','13157908646');
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product_dtl`
--

DROP TABLE IF EXISTS `order_product_dtl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_product_dtl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` varchar(45) NOT NULL,
  `total_quantity` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product_dtl`
--

LOCK TABLES `order_product_dtl` WRITE;
/*!40000 ALTER TABLE `order_product_dtl` DISABLE KEYS */;
INSERT INTO `order_product_dtl` VALUES (1,1,'21',1,'2019-10-02 19:50:29'),(2,2,'21',1,'2019-10-02 20:00:42'),(3,3,'21',1,'2019-10-02 20:01:07'),(4,4,'21',1,'2019-10-02 20:01:48'),(5,5,'21',1,'2019-10-02 20:01:59'),(6,6,'21',1,'2019-10-02 20:04:20'),(7,7,'21',1,'2019-10-02 20:04:39'),(8,8,'21',1,'2019-10-02 20:04:51'),(9,9,'21',1,'2019-10-02 20:05:08'),(10,10,'21',1,'2019-10-02 20:05:24'),(11,11,'21',1,'2019-10-02 20:05:44'),(12,12,'21',1,'2019-10-02 20:05:56'),(13,13,'21',1,'2019-10-03 01:44:05'),(14,14,'21',1,'2019-10-03 01:45:06'),(15,15,'21',1,'2019-10-03 01:47:55'),(16,16,'21',1,'2019-10-03 01:49:17'),(17,17,'21',1,'2019-10-03 01:52:15'),(18,17,'22',1,'2019-10-03 01:52:15');
/*!40000 ALTER TABLE `order_product_dtl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_list`
--

DROP TABLE IF EXISTS `product_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_list` (
  `product_id` varchar(45) NOT NULL,
  `product_name` varchar(45) NOT NULL,
  `product_image` varchar(200) DEFAULT 'NA',
  `product_price` double NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_list`
--

LOCK TABLES `product_list` WRITE;
/*!40000 ALTER TABLE `product_list` DISABLE KEYS */;
INSERT INTO `product_list` VALUES ('21','Samsung','https://images.samsung.com/is/image/samsung/p5/ph/support/home/support-kv-pc.png?$ORIGIN_PNG$',400,'2019-10-03 05:04:51'),('22','Redmi','https://i.gadgets360cdn.com/products/large/1552901002_635_redmi_7.jpg',200,'2019-10-03 05:04:51'),('23','Samsung X1','https://azcd.harveynorman.com.au/media/catalog/product/cache/21/small_image/400x225/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_galaxy_s10e_128gb_-_prism_green.png',500,'2019-10-03 05:04:51'),('24','Motorola','http://dbstvstlucia.com/wp-content/uploads/2019/05/Gionee-A1-64GB-Black-SDL352791824-1-ff379.jpeg',150,'2019-10-03 05:05:41'),('25','Motorola X4','https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1566933877/client/v2/images/Moto-e6-NPI/e6-NPI-shop-banner-desktop.png',250,'2019-10-03 05:09:04'),('26','Realme','https://www.91-img.com/pictures/133710-v6-realme-c2-mobile-phone-large-1.jpg',100,'2019-10-03 05:09:04'),('27','Apple','https://assets.mspimages.in/c/tr:w-200,h-320,cm-pad_resize/15392-34-1.jpg',700,'2019-10-03 05:09:04'),('28','Vivo','https://images-na.ssl-images-amazon.com/images/I/71MTGX72UGL._SY879_.jpg',500,'2019-10-03 05:09:04');
/*!40000 ALTER TABLE `product_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_details` (
  `email_id` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `password` varchar(250) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES ('','null','null','$2a$10$A.ezOfZIijvUURJRtBpMvu3WUA6wOA.hK.j3Vjq2KbDpfBjc0OWYy','2019-10-02 20:51:53'),('madsfdsnishmeravala@gmail.com','Manishsd','dsvfds','$2a$10$Bu1y13be3Fwx1i2o1orVj.JPj4NuHe9T9w3iUUeWXHIBnkdQTf5Yu','2019-10-02 17:03:23'),('manishmeravala123@gmail.com','Manish','Meravala','$2a$10$MG77VTgyilWCHtP5xL/zlu9Urvm8qDpu3vOnM7ubXAVKs1xq/BYOO','2019-10-03 02:10:31'),('manishmeravala@gmail.com','Manish','Meravala','$2a$10$EskXpWzGcnFBoL6OORyrq.WKuCeTR3XaOekBvcZxWVg3bBg7JF6sW','2019-10-02 08:18:12');
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-03  0:21:52
