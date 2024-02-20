-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 20, 2024 at 07:23 AM
-- Server version: 8.3.0
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arcf_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `aboutARCFs`
--

CREATE TABLE `aboutARCFs` (
  `Id` int NOT NULL,
  `title` text NOT NULL,
  `heading` text NOT NULL,
  `text` text NOT NULL,
  `point1` text NOT NULL,
  `point2` text NOT NULL,
  `point3` text NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `aboutBanners`
--

CREATE TABLE `aboutBanners` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `abouts`
--

CREATE TABLE `abouts` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assistantViceChairmans`
--

CREATE TABLE `assistantViceChairmans` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chairmans`
--

CREATE TABLE `chairmans` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `Id` int NOT NULL,
  `mailAddress` varchar(255) NOT NULL,
  `senderPhone` varchar(255) NOT NULL,
  `mailerName` varchar(255) NOT NULL,
  `mailerSubject` varchar(255) NOT NULL,
  `mailerMessage` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ContactSliders`
--

CREATE TABLE `ContactSliders` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `currentChairmans`
--

CREATE TABLE `currentChairmans` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `directors`
--

CREATE TABLE `directors` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `donationCategoryDescriptions`
--

CREATE TABLE `donationCategoryDescriptions` (
  `Id` int NOT NULL,
  `title` text,
  `text` text,
  `category` varchar(255) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `page` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `eventsBanners`
--

CREATE TABLE `eventsBanners` (
  `Id` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `eventsCategoryDescriptions`
--

CREATE TABLE `eventsCategoryDescriptions` (
  `Id` int NOT NULL,
  `title` text,
  `text` text,
  `category` varchar(255) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `eventId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `eventsDetails`
--

CREATE TABLE `eventsDetails` (
  `Id` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `Id` int NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `galleryCategoryDescriptions`
--

CREATE TABLE `galleryCategoryDescriptions` (
  `Id` int NOT NULL,
  `title` text,
  `text` text,
  `category` varchar(255) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `imageGalleries`
--

CREATE TABLE `imageGalleries` (
  `Id` int NOT NULL,
  `page` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `management`
--

CREATE TABLE `management` (
  `Id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `designation` varchar(30) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsBanners`
--

CREATE TABLE `newsBanners` (
  `Id` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsCategoryDescriptions`
--

CREATE TABLE `newsCategoryDescriptions` (
  `Id` int NOT NULL,
  `title` text,
  `text` text,
  `category` varchar(255) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `newsId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsDetails`
--

CREATE TABLE `newsDetails` (
  `Id` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projectBanners`
--

CREATE TABLE `projectBanners` (
  `Id` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projectDetails`
--

CREATE TABLE `projectDetails` (
  `Id` int NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `Id` int NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `page` varchar(255) DEFAULT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projectSubCategories`
--

CREATE TABLE `projectSubCategories` (
  `Id` int NOT NULL,
  `title` text,
  `text` text,
  `category` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `projectId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectSubCategoryDescriptions`
--

CREATE TABLE `ProjectSubCategoryDescriptions` (
  `Id` int NOT NULL,
  `title` text,
  `text` text,
  `category` varchar(255) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `projectId` int DEFAULT NULL,
  `projectSubCategoryId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projectSubCategoryDetails`
--

CREATE TABLE `projectSubCategoryDetails` (
  `Id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `text` text,
  `category` varchar(255) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `projectSubCategoryId` int DEFAULT NULL,
  `projectId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projectSubCategoryDetailsHeaders`
--

CREATE TABLE `projectSubCategoryDetailsHeaders` (
  `Id` int NOT NULL,
  `title` text,
  `text` text,
  `category` varchar(255) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `projectId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projectSubCategoryHeaders`
--

CREATE TABLE `projectSubCategoryHeaders` (
  `Id` int NOT NULL,
  `title` text,
  `text` text,
  `category` varchar(255) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `projectId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `Id` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `text` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usertbls`
--

CREATE TABLE `usertbls` (
  `Id` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(64) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `image` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `viceChairmans`
--

CREATE TABLE `viceChairmans` (
  `Id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `VideoGalleries`
--

CREATE TABLE `VideoGalleries` (
  `Id` int NOT NULL,
  `video` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `volunteers`
--

CREATE TABLE `volunteers` (
  `Id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `designation` varchar(30) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutARCFs`
--
ALTER TABLE `aboutARCFs`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `aboutBanners`
--
ALTER TABLE `aboutBanners`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `abouts`
--
ALTER TABLE `abouts`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `assistantViceChairmans`
--
ALTER TABLE `assistantViceChairmans`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `chairmans`
--
ALTER TABLE `chairmans`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ContactSliders`
--
ALTER TABLE `ContactSliders`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `currentChairmans`
--
ALTER TABLE `currentChairmans`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `donationCategoryDescriptions`
--
ALTER TABLE `donationCategoryDescriptions`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `eventsBanners`
--
ALTER TABLE `eventsBanners`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `eventsCategoryDescriptions`
--
ALTER TABLE `eventsCategoryDescriptions`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `eventId` (`eventId`);

--
-- Indexes for table `eventsDetails`
--
ALTER TABLE `eventsDetails`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `answer` (`answer`);

--
-- Indexes for table `galleryCategoryDescriptions`
--
ALTER TABLE `galleryCategoryDescriptions`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `imageGalleries`
--
ALTER TABLE `imageGalleries`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `management`
--
ALTER TABLE `management`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `newsBanners`
--
ALTER TABLE `newsBanners`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `newsCategoryDescriptions`
--
ALTER TABLE `newsCategoryDescriptions`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `newsId` (`newsId`);

--
-- Indexes for table `newsDetails`
--
ALTER TABLE `newsDetails`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `projectBanners`
--
ALTER TABLE `projectBanners`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `projectDetails`
--
ALTER TABLE `projectDetails`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `projectSubCategories`
--
ALTER TABLE `projectSubCategories`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `ProjectSubCategoryDescriptions`
--
ALTER TABLE `ProjectSubCategoryDescriptions`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `projectId` (`projectId`),
  ADD KEY `projectSubCategoryId` (`projectSubCategoryId`);

--
-- Indexes for table `projectSubCategoryDetails`
--
ALTER TABLE `projectSubCategoryDetails`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `projectSubCategoryId` (`projectSubCategoryId`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `projectSubCategoryDetailsHeaders`
--
ALTER TABLE `projectSubCategoryDetailsHeaders`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `projectSubCategoryHeaders`
--
ALTER TABLE `projectSubCategoryHeaders`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `usertbls`
--
ALTER TABLE `usertbls`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Password` (`Password`);

--
-- Indexes for table `viceChairmans`
--
ALTER TABLE `viceChairmans`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `VideoGalleries`
--
ALTER TABLE `VideoGalleries`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `volunteers`
--
ALTER TABLE `volunteers`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutARCFs`
--
ALTER TABLE `aboutARCFs`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `aboutBanners`
--
ALTER TABLE `aboutBanners`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `abouts`
--
ALTER TABLE `abouts`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assistantViceChairmans`
--
ALTER TABLE `assistantViceChairmans`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chairmans`
--
ALTER TABLE `chairmans`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ContactSliders`
--
ALTER TABLE `ContactSliders`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `currentChairmans`
--
ALTER TABLE `currentChairmans`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `directors`
--
ALTER TABLE `directors`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `donationCategoryDescriptions`
--
ALTER TABLE `donationCategoryDescriptions`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `eventsBanners`
--
ALTER TABLE `eventsBanners`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `eventsCategoryDescriptions`
--
ALTER TABLE `eventsCategoryDescriptions`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `eventsDetails`
--
ALTER TABLE `eventsDetails`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `galleryCategoryDescriptions`
--
ALTER TABLE `galleryCategoryDescriptions`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `imageGalleries`
--
ALTER TABLE `imageGalleries`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `management`
--
ALTER TABLE `management`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsBanners`
--
ALTER TABLE `newsBanners`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsCategoryDescriptions`
--
ALTER TABLE `newsCategoryDescriptions`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsDetails`
--
ALTER TABLE `newsDetails`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projectBanners`
--
ALTER TABLE `projectBanners`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projectDetails`
--
ALTER TABLE `projectDetails`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projectSubCategories`
--
ALTER TABLE `projectSubCategories`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProjectSubCategoryDescriptions`
--
ALTER TABLE `ProjectSubCategoryDescriptions`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projectSubCategoryDetails`
--
ALTER TABLE `projectSubCategoryDetails`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projectSubCategoryDetailsHeaders`
--
ALTER TABLE `projectSubCategoryDetailsHeaders`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projectSubCategoryHeaders`
--
ALTER TABLE `projectSubCategoryHeaders`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usertbls`
--
ALTER TABLE `usertbls`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `viceChairmans`
--
ALTER TABLE `viceChairmans`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `VideoGalleries`
--
ALTER TABLE `VideoGalleries`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `volunteers`
--
ALTER TABLE `volunteers`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `eventsCategoryDescriptions`
--
ALTER TABLE `eventsCategoryDescriptions`
  ADD CONSTRAINT `eventsCategoryDescriptions_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `events` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `newsCategoryDescriptions`
--
ALTER TABLE `newsCategoryDescriptions`
  ADD CONSTRAINT `newsCategoryDescriptions_ibfk_1` FOREIGN KEY (`newsId`) REFERENCES `news` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `projectSubCategories`
--
ALTER TABLE `projectSubCategories`
  ADD CONSTRAINT `projectSubCategories_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ProjectSubCategoryDescriptions`
--
ALTER TABLE `ProjectSubCategoryDescriptions`
  ADD CONSTRAINT `ProjectSubCategoryDescriptions_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectSubCategoryDescriptions_ibfk_2` FOREIGN KEY (`projectSubCategoryId`) REFERENCES `projectSubCategories` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `projectSubCategoryDetails`
--
ALTER TABLE `projectSubCategoryDetails`
  ADD CONSTRAINT `projectSubCategoryDetails_ibfk_1` FOREIGN KEY (`projectSubCategoryId`) REFERENCES `projectSubCategories` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `projectSubCategoryDetails_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `projects` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `projectSubCategoryDetailsHeaders`
--
ALTER TABLE `projectSubCategoryDetailsHeaders`
  ADD CONSTRAINT `projectSubCategoryDetailsHeaders_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `projectSubCategoryHeaders`
--
ALTER TABLE `projectSubCategoryHeaders`
  ADD CONSTRAINT `projectSubCategoryHeaders_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
