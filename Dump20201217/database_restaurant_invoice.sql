-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: database_restaurant
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` float DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `count` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,300,'ปลา',2,'2020-12-15 14:25:22','2020-12-15 14:25:22'),(2,100,'เส้น',2,'2020-12-15 14:25:22','2020-12-15 14:25:22'),(3,300,'ปลา',2,'2020-12-14 14:27:34','2020-12-14 14:27:34'),(4,100,'เส้น',2,'2020-12-14 14:27:34','2020-12-15 14:27:34'),(5,300,'ปลา',2,'2020-12-15 14:35:49','2020-12-15 14:35:49'),(6,100,'เส้น',2,'2020-12-15 14:35:49','2020-12-15 14:35:49'),(7,300,'ปลา',2,'2020-12-15 14:39:34','2020-12-15 14:39:34'),(8,1000,'เส้น',1,'2020-12-15 14:39:34','2020-12-15 14:39:34'),(9,150,'ปลา',1,'2020-12-15 14:41:48','2020-12-15 14:41:48'),(10,50,'เส้น',1,'2020-12-15 14:41:48','2020-12-15 14:41:48'),(11,300,'ปลา',2,'2020-12-15 14:49:51','2020-12-15 14:49:51'),(12,100,'เส้น',2,'2020-12-15 14:49:51','2020-12-15 14:49:51'),(13,300,'ปลา',2,'2020-12-15 14:51:22','2020-12-15 14:51:22'),(14,300,'ปลา',2,'2020-12-15 14:51:34','2020-12-15 14:51:34'),(15,50,'เส้น',1,'2020-12-17 12:55:49','2020-12-17 12:55:49'),(16,150,'เล็กแห้ง',1,'2020-12-17 12:55:49','2020-12-17 12:55:49'),(17,50,'เส้น',1,'2020-12-17 15:31:29','2020-12-17 15:31:29');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-17 23:02:26
