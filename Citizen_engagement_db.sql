-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: citizen_engagement
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `forums`
--

DROP TABLE IF EXISTS `forums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `petitionId` int NOT NULL,
  `comments` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `petitionId` (`petitionId`),
  CONSTRAINT `forums_ibfk_1` FOREIGN KEY (`petitionId`) REFERENCES `petitions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forums`
--

LOCK TABLES `forums` WRITE;
/*!40000 ALTER TABLE `forums` DISABLE KEYS */;
INSERT INTO `forums` VALUES (1,1,'[\"Discussion on road infrastructure.\", \"Any updates on this petition?\"]'),(2,2,'[\"We need better internet access.\", \"Agreed, rural development matters!\"]'),(3,3,'[\"Traffic has become unbearable.\", \"This needs immediate attention.\"]'),(4,4,'[\"The education system really needs an overhaul.\", \"I hope the government listens to this.\"]'),(5,5,'[\"Rural healthcare is in dire need of improvement.\", \"Access to healthcare should not be limited by geography.\"]'),(6,6,'[\"Protecting wildlife is not just about animals, it’s about our future too.\", \"This petition is so important for preserving nature.\"]');
/*!40000 ALTER TABLE `forums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `petitions`
--

DROP TABLE IF EXISTS `petitions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `petitions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `votes` int DEFAULT '0',
  `comments` json DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `petitions`
--

LOCK TABLES `petitions` WRITE;
/*!40000 ALTER TABLE `petitions` DISABLE KEYS */;
INSERT INTO `petitions` VALUES (1,'Improve Road Infrastructure','Petition to improve road infrastructure in Nairobi.',150,'[\"Great idea!\", \"We need this.\"]','https://unsplash.com/photos/a-close-up-of-a-flag-of-the-country-of-kenya-YED0yXFLCoU'),(2,'Increase Internet Access','Petition to improve internet access in rural areas.',100,'[\"Important for development.\", \"Rural areas deserve better connectivity.\"]','https://unsplash.com/photos/a-flag-on-a-pole-4oiCd8XckK8'),(3,'Reduce Traffic Congestion','Petition to reduce traffic congestion in Mombasa.',200,'[\"This is long overdue!\", \"It would improve quality of life.\"]','https://unsplash.com/photos/a-flag-with-two-crossed-swords-on-it-LFm1bIYmB_c'),(4,'Reform the Education System','The education system in our country is outdated and fails to address the needs of modern society. We need a curriculum that prepares students for the future, emphasizes critical thinking, problem-solving, and creativity rather than rote memorization. This petition calls for a thorough review of the existing education policies, the inclusion of technological advancements, and the reduction of unnecessary exams that put undue pressure on students. By investing in education reform, we can create a more competent workforce that will drive economic growth and innovation.',500,'[\"Absolutely agree!\", \"Education reform is key to our future.\"]','https://unsplash.com/photos/a-flag-on-a-pole-4oiCd8XckK8'),(5,'Improve Healthcare Services in Rural Areas','Healthcare in rural areas has long been neglected, leaving millions of people without access to essential services. Clinics and hospitals are understaffed, under-equipped, and often inaccessible due to poor infrastructure. This petition calls for an increase in funding for rural healthcare, the training of more healthcare professionals, and the establishment of mobile health units to reach remote areas. No one should be denied healthcare because of where they live. Improving rural healthcare will reduce mortality rates and improve the overall well-being of our nation.',350,'[\"Healthcare is a basic human right.\", \"Rural areas have been ignored for too long!\"]','https://unsplash.com/photos/a-close-up-of-a-flag-of-the-country-of-kenya-YED0yXFLCoU'),(6,'Protect Endangered Wildlife','Our country is home to some of the world’s most incredible wildlife, but many species are now on the brink of extinction due to poaching, habitat loss, and human-wildlife conflict. This petition calls for stronger laws to protect endangered species, more funding for wildlife conservation efforts, and public education campaigns to raise awareness about the importance of biodiversity. By protecting our wildlife, we not only preserve the beauty of our natural world but also ensure the balance of ecosystems that are vital to our survival.',700,'[\"We need to act now before it’s too late.\", \"This is a very important issue for future generations.\"]','https://unsplash.com/photos/a-flag-with-two-crossed-swords-on-it-LFm1bIYmB_c');
/*!40000 ALTER TABLE `petitions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `county` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1','password1','Nairobi'),(2,'user2','password2','Mombasa'),(3,'user3','password3','Kisumu'),(4,'user4','password4','Machakos'),(5,'user5','password5','Eldoret'),(6,'user6','password6','Nakuru');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-07 14:42:18
