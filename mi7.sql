-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 28, 2023 at 04:08 PM
-- Server version: 5.7.42-0ubuntu0.18.04.1
-- PHP Version: 5.6.40-65+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mi7`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL DEFAULT '',
  `password` text NOT NULL,
  `otp` varchar(100) NOT NULL DEFAULT '0',
  `expiry` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `islogin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`, `otp`, `expiry`, `islogin`, `created_at`, `updated_at`) VALUES
(1, 'info@arcube.org', '$2a$12$9ZCEVIBXTRCKPS4yiwcKNuGLXrl6xqmO4jkpGN4cv4ypDdvBejTKq', '0qnwnrm', '2022-09-08 09:09:45', 1, '2022-04-27 07:07:36', '2022-09-08 09:09:45'),
(4, 'pawan.t@cisinlabs.com', '$2a$12$U4oruECXxzWFR7YOfJ/qceOOAzpPfYGnct4m39uTVAukNWvYv1.Xy', 'q7s8aos', '2023-07-06 06:47:20', 1, '2022-05-25 14:56:45', '2023-07-06 06:47:20'),
(5, 'harvey@arcube.org', '$2a$12$9ZCEVIBXTRCKPS4yiwcKNuGLXrl6xqmO4jkpGN4cv4ypDdvBejTKq', '0', '2022-07-18 17:13:51', 0, '2022-06-03 07:27:40', '2022-07-18 17:13:51');

-- --------------------------------------------------------

--
-- Table structure for table `arcube_unique_codes`
--

CREATE TABLE `arcube_unique_codes` (
  `id` int(11) NOT NULL,
  `unique_code` varchar(100) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `buyers`
--

CREATE TABLE `buyers` (
  `id` int(11) NOT NULL,
  `full_name` varchar(200) NOT NULL DEFAULT '',
  `email` text NOT NULL,
  `Etihad_guest_number` bigint(20) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buyers`
--

INSERT INTO `buyers` (`id`, `full_name`, `email`, `Etihad_guest_number`, `status`, `created_at`, `updated_at`) VALUES
(1, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454545, 0, '2023-07-12 07:09:49', '2023-07-12 07:09:49'),
(2, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454545, 0, '2023-07-12 07:10:41', '2023-07-12 07:10:41'),
(3, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-19 09:22:59', '2023-07-19 09:22:59'),
(4, 'sandeep', 'sandeep@gmail.com', 4545454, 0, '2023-07-19 09:51:45', '2023-07-19 09:51:45'),
(5, 'sandeep', 'sandeep', 45454, 0, '2023-07-19 12:45:39', '2023-07-19 12:45:39'),
(6, 'sandeep', 'sandeep', 45454, 0, '2023-07-19 12:45:53', '2023-07-19 12:45:53'),
(7, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-19 12:57:48', '2023-07-19 12:57:48'),
(8, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-20 05:52:23', '2023-07-20 05:52:23'),
(9, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-20 05:54:21', '2023-07-20 05:54:21'),
(10, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-20 06:42:29', '2023-07-20 06:42:29'),
(11, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-20 10:21:39', '2023-07-20 10:21:39'),
(12, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-20 10:34:24', '2023-07-20 10:34:24'),
(13, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-21 07:35:03', '2023-07-21 07:35:03'),
(14, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-21 07:35:10', '2023-07-21 07:35:10'),
(15, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-21 07:35:21', '2023-07-21 07:35:21'),
(16, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-21 09:29:40', '2023-07-21 09:29:40'),
(17, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-21 09:50:41', '2023-07-21 09:50:41'),
(18, 'sandeep', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-21 12:37:45', '2023-07-21 12:37:45'),
(19, 'sandeep', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-21 12:40:40', '2023-07-21 12:40:40'),
(20, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-21 12:44:31', '2023-07-21 12:44:31'),
(21, 'My App', 'sandip.pa@cisinlabs.com', 45454564, 0, '2023-07-24 06:03:14', '2023-07-24 06:03:14'),
(22, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-25 11:46:29', '2023-07-25 11:46:29'),
(23, 'sandeep parmar', 'sandip.pa@cisinlabs.com', 45454564, 0, '2023-07-26 07:05:31', '2023-07-26 07:05:31'),
(24, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:09:55', '2023-07-26 07:09:55'),
(25, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:11:33', '2023-07-26 07:11:33'),
(26, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:16:40', '2023-07-26 07:16:40'),
(27, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:21:21', '2023-07-26 07:21:21'),
(28, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:22:51', '2023-07-26 07:22:51'),
(29, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:23:06', '2023-07-26 07:23:06'),
(30, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:23:22', '2023-07-26 07:23:22'),
(31, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:29:47', '2023-07-26 07:29:47'),
(32, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:36:53', '2023-07-26 07:36:53'),
(33, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:38:04', '2023-07-26 07:38:04'),
(34, 'sandeep parmar', 'sandip.pa@cisinlabs.com', 45454564, 0, '2023-07-26 07:41:33', '2023-07-26 07:41:33'),
(35, 'sandeep parmar', 'sandip.pa@cisinlabs.com', 45454564, 0, '2023-07-26 07:42:43', '2023-07-26 07:42:43'),
(36, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:45:57', '2023-07-26 07:45:57'),
(37, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:49:57', '2023-07-26 07:49:57'),
(38, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:53:36', '2023-07-26 07:53:36'),
(39, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:55:06', '2023-07-26 07:55:06'),
(40, 'sandeep parmar', 'sandip.pa@cisinlabs.com', 45454564, 0, '2023-07-26 07:58:02', '2023-07-26 07:58:02'),
(41, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:58:32', '2023-07-26 07:58:32'),
(42, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 07:59:51', '2023-07-26 07:59:51'),
(43, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 09:09:48', '2023-07-26 09:09:48'),
(44, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 09:13:46', '2023-07-26 09:13:46'),
(45, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 09:20:41', '2023-07-26 09:20:41'),
(46, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 09:38:24', '2023-07-26 09:38:24'),
(47, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 09:41:29', '2023-07-26 09:41:29'),
(48, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 10:48:30', '2023-07-26 10:48:30'),
(49, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 10:49:46', '2023-07-26 10:49:46'),
(50, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 10:53:45', '2023-07-26 10:53:45'),
(51, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:06:21', '2023-07-26 12:06:21'),
(52, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:06:45', '2023-07-26 12:06:45'),
(53, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:11:19', '2023-07-26 12:11:19'),
(54, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:13:29', '2023-07-26 12:13:29'),
(55, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:17:42', '2023-07-26 12:17:42'),
(56, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:19:16', '2023-07-26 12:19:16'),
(57, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:21:56', '2023-07-26 12:21:56'),
(58, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:22:14', '2023-07-26 12:22:14'),
(59, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:28:05', '2023-07-26 12:28:05'),
(60, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:28:55', '2023-07-26 12:28:55'),
(61, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:30:15', '2023-07-26 12:30:15'),
(62, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:30:51', '2023-07-26 12:30:51'),
(63, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:33:34', '2023-07-26 12:33:34'),
(64, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:34:26', '2023-07-26 12:34:26'),
(65, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:35:33', '2023-07-26 12:35:33'),
(66, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:37:03', '2023-07-26 12:37:03'),
(67, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:39:58', '2023-07-26 12:39:58'),
(68, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:41:16', '2023-07-26 12:41:16'),
(69, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:42:13', '2023-07-26 12:42:13'),
(70, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:43:59', '2023-07-26 12:43:59'),
(71, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:49:09', '2023-07-26 12:49:09'),
(72, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:51:31', '2023-07-26 12:51:31'),
(73, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:52:08', '2023-07-26 12:52:08'),
(74, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:52:48', '2023-07-26 12:52:48'),
(75, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:53:36', '2023-07-26 12:53:36'),
(76, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 12:55:37', '2023-07-26 12:55:37'),
(77, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 13:03:57', '2023-07-26 13:03:57'),
(78, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 15:04:51', '2023-07-26 15:04:51'),
(79, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 16:38:54', '2023-07-26 16:38:54'),
(80, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 16:42:11', '2023-07-26 16:42:11'),
(81, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 16:43:02', '2023-07-26 16:43:02'),
(82, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 17:42:37', '2023-07-26 17:42:37'),
(83, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 17:43:00', '2023-07-26 17:43:00'),
(84, 'pawan', 'pawan.t@cisinlabs.com', 454465454, 0, '2023-07-26 18:09:25', '2023-07-26 18:09:25'),
(85, 'pawan', 'pawan.t@cisinlabs.com', 4545454, 0, '2023-07-26 19:05:15', '2023-07-26 19:05:15'),
(86, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:37:08', '2023-07-26 19:37:08'),
(87, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:38:08', '2023-07-26 19:38:08'),
(88, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:38:33', '2023-07-26 19:38:33'),
(89, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:40:35', '2023-07-26 19:40:35'),
(90, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:43:11', '2023-07-26 19:43:11'),
(91, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:43:40', '2023-07-26 19:43:40'),
(92, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:44:12', '2023-07-26 19:44:12'),
(93, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:50:32', '2023-07-26 19:50:32'),
(94, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 19:50:50', '2023-07-26 19:50:50'),
(95, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 20:21:09', '2023-07-26 20:21:09'),
(96, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 20:21:28', '2023-07-26 20:21:28'),
(97, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 20:21:46', '2023-07-26 20:21:46'),
(98, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 20:24:40', '2023-07-26 20:24:40'),
(99, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 20:25:56', '2023-07-26 20:25:56'),
(100, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-26 20:26:17', '2023-07-26 20:26:17'),
(101, 'GravityX Capital', 'kingfishymc@gmail.com', 1234567890123, 0, '2023-07-26 20:37:33', '2023-07-26 20:37:33'),
(102, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-27 08:19:31', '2023-07-27 08:19:31'),
(103, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-27 08:38:30', '2023-07-27 08:38:30'),
(104, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-27 08:57:44', '2023-07-27 08:57:44'),
(105, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-27 09:59:56', '2023-07-27 09:59:56'),
(106, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-27 10:02:02', '2023-07-27 10:02:02'),
(107, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-28 05:10:00', '2023-07-28 05:10:00'),
(108, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-28 06:09:52', '2023-07-28 06:09:52'),
(109, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-28 06:47:03', '2023-07-28 06:47:03'),
(110, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-28 06:51:16', '2023-07-28 06:51:16'),
(111, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-28 06:54:26', '2023-07-28 06:54:26'),
(112, 'sandeep parmar', 'sandeepparmar2606@gmail.com', 45454564, 0, '2023-07-28 08:52:57', '2023-07-28 08:52:57');

-- --------------------------------------------------------

--
-- Table structure for table `contactUS`
--

CREATE TABLE `contactUS` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `subject` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `historyLogs`
--

CREATE TABLE `historyLogs` (
  `id` int(11) NOT NULL,
  `table` varchar(20) NOT NULL DEFAULT '',
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `loginHistory`
--

CREATE TABLE `loginHistory` (
  `id` int(11) NOT NULL,
  `ip` varchar(70) NOT NULL DEFAULT '',
  `login_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `subscription_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `email` text NOT NULL,
  `wallet_address` text,
  `full_address` text NOT NULL,
  `city` varchar(200) NOT NULL DEFAULT '',
  `state` varchar(200) NOT NULL DEFAULT '',
  `country` varchar(200) NOT NULL DEFAULT '',
  `postal_code` text NOT NULL,
  `etihad_guest_number` text NOT NULL,
  `phone_number` text NOT NULL,
  `quantity` int(11) DEFAULT '0',
  `source_amount` double DEFAULT '0',
  `terms` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `transaction_hash` text NOT NULL,
  `auth_token` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `presale`
--

CREATE TABLE `presale` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `email` text NOT NULL,
  `wallet_address` text NOT NULL,
  `full_address` text NOT NULL,
  `country` varchar(50) NOT NULL DEFAULT '''''',
  `state` varchar(100) NOT NULL DEFAULT '''''',
  `city` varchar(100) NOT NULL DEFAULT '''''',
  `postal_code` text NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '0',
  `source_amount` double DEFAULT '0',
  `unique_code` text NOT NULL,
  `etihad_guest_number` bigint(20) NOT NULL DEFAULT '0',
  `phone_number` text NOT NULL,
  `terms` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `transaction_hash` text NOT NULL,
  `auth_token` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL DEFAULT '0',
  `order_type` varchar(100) NOT NULL DEFAULT '',
  `transaction_id` varchar(100) NOT NULL DEFAULT '',
  `reservation_id` varchar(100) NOT NULL DEFAULT '',
  `transaction_details` varchar(255) NOT NULL DEFAULT '{"status":0,"message":"Payment initiated"}',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `order_id`, `order_type`, `transaction_id`, `reservation_id`, `transaction_details`, `status`, `created_at`, `updated_at`) VALUES
(1, 3, 'purchase.succeeded', '0xc0edec17922603a7f5630c13ca81238de2a42d0792cb375261d7b2fc50603192', '6db097e0-19bd-4c8b-ae86-8a140b54df27', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-13 14:22:40', '2023-07-13 19:52:40'),
(2, 4, 'purchase.succeeded', '0x8393ef3467f8d460d720f82bb87a3f2d6695c6d7932a466b34daacc291f16083', '6db097e0-19bd-4c8b-ae86-8a140b54df27', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-13 14:32:01', '2023-07-13 20:02:01'),
(3, 0, 'purchase.succeeded', '0x62a0bc4924c0d82cbf349bd2f16ca3c35843ab0e347464454facd615457771cb', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-14 06:34:59', '2023-07-14 12:04:59'),
(4, 1, 'purchase.succeeded', '0x9c6c21b8ab6e84355092d5253ecc6f6e00f0d57fe29dfa7aea02315e732e5fce', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-14 06:48:10', '2023-07-14 12:18:10'),
(5, 2, 'purchase.succeeded', '0x56c6b911d6e9f471bce62fb291a3b60b576f4736bd4069f69df5ebce661e131d', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-17 10:19:13', '2023-07-17 15:49:13'),
(6, 3, 'purchase.succeeded', '0x27335eabe904fd7f6d67c4014ef36334c47ba4e3ea073f1778b16976550de183', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-17 10:46:57', '2023-07-17 16:16:57'),
(7, 4, 'purchase.succeeded', '0x719dd0c79d37ec86255a76ceb451f1b3b49a383059f795a3fbe7e8aafad2b7be', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-19 06:00:50', '2023-07-19 11:30:50'),
(8, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-19 13:29:09', '2023-07-19 18:59:09'),
(9, 7, 'purchase.succeeded', '0xe68c3197bd353493a9e8573a7f4977a8e8ba9a33c663972c8a5e2dc2f125ddc1', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-19 13:41:53', '2023-07-19 19:11:53'),
(10, 8, 'purchase.succeeded', '0xa737c1a821a98ac578126b0b4718a825262f09554e3d5db38bd7a917bf256ebd', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-21 09:53:58', '2023-07-21 15:23:58'),
(11, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:29:11', '2023-07-26 10:59:11'),
(12, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:32:20', '2023-07-26 11:02:20'),
(13, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:44:56', '2023-07-26 11:14:56'),
(14, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:45:45', '2023-07-26 11:15:45'),
(15, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:45:50', '2023-07-26 11:15:50'),
(16, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:45:54', '2023-07-26 11:15:54'),
(17, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:46:10', '2023-07-26 11:16:10'),
(18, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:46:50', '2023-07-26 11:16:50'),
(19, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:46:57', '2023-07-26 11:16:57'),
(20, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:47:09', '2023-07-26 11:17:09'),
(21, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:47:29', '2023-07-26 11:17:29'),
(22, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:47:50', '2023-07-26 11:17:50'),
(23, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:47:58', '2023-07-26 11:17:58'),
(24, 5, 'purchase.succeeded', '0x044e382edcf9fb7b248d1b6c76ff5bc586dc6bfe311f98a0996b5fda9f17f5c0', 'ba5b0ea1-6fb2-4daa-ba0f-f90a4b3756ff', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 05:48:31', '2023-07-26 11:18:31'),
(25, 0, 'purchase.succeeded', '0x146422c974d2da1c40954d8f7fc1fb91e1176053c4994094d668da44c1e08c2d', '27c01cc2-16c0-4ad8-bc25-40f326b51aaa', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 09:15:17', '2023-07-26 14:45:17'),
(26, 1, 'purchase.succeeded', '0x866a9e206e484cb6cb5626589a018f228460595c5ef34b9c54c27599626d0003', '27c01cc2-16c0-4ad8-bc25-40f326b51aaa', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 09:40:51', '2023-07-26 15:10:51'),
(27, 0, 'purchase.succeeded', '0x5df749bd98df7cdb4875e2885931580ab294dd9fe90caa6762557fe805c9cc4e', '3569b9dc-0c08-4ffb-8c96-3b64e65fcb8d', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 12:23:59', '2023-07-26 17:53:59'),
(28, 2, 'purchase.succeeded', '0x5a3163d87ced58534b818c9e93c836aaa3feaec246ff7be0563bdda7d463ee07', 'e54e641b-8907-42f1-b32e-a2f1d18a1302', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 20:11:46', '2023-07-27 01:41:46'),
(29, 3, 'purchase.succeeded', '0x19bea582dda64e44a97378f6f487e716aef174689fe961ecdca3652f8c349fef', 'e54e641b-8907-42f1-b32e-a2f1d18a1302', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 20:17:03', '2023-07-27 01:47:03'),
(30, 4, 'purchase.succeeded', '0x3b0b1a1a021573636d6f720ddae9b977fafec3ab19f1a63c3ebfd9d04d428462', 'e54e641b-8907-42f1-b32e-a2f1d18a1302', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 20:23:12', '2023-07-27 01:53:12'),
(31, 5, 'purchase.succeeded', '0xa6274b7da113a140119795ced0d6703a65d745c1ecfe8fcc26f1f298c4bd3152', 'e54e641b-8907-42f1-b32e-a2f1d18a1302', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-26 20:27:06', '2023-07-27 01:57:06'),
(32, 0, 'purchase.succeeded', '0x6d011c58d1c2c594a1dc683e27078b41466cc27d784f57d53c76ac475de47565', '30d44521-4318-45cc-ac99-56fc7df014b4', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-28 09:23:22', '2023-07-28 14:53:22'),
(33, 1, 'purchase.succeeded', '0x3bb85b8e6172e7f2e7351e7ca3b761b77bf741ff956a02183179dacd4a3f6186', '30d44521-4318-45cc-ac99-56fc7df014b4', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-28 09:44:03', '2023-07-28 15:14:03'),
(34, 2, 'purchase.succeeded', '0x207d69f37f0d59fd33fd576d2c9a89038bcefece8e17711defa2ca9416f3ba32', '30d44521-4318-45cc-ac99-56fc7df014b4', '{\"status\":0,\"message\":\"Payment initiated\"}', 1, '2023-07-28 09:54:05', '2023-07-28 15:24:05');

-- --------------------------------------------------------

--
-- Table structure for table `unique_codes`
--

CREATE TABLE `unique_codes` (
  `id` int(11) NOT NULL,
  `unique_code` varchar(100) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `used` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `whitelistaddress`
--

CREATE TABLE `whitelistaddress` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `category` varchar(256) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `whitelistaddress1`
--

CREATE TABLE `whitelistaddress1` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `category` varchar(256) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `whitelistaddress1`
--

INSERT INTO `whitelistaddress1` (`id`, `address`, `category`, `status`, `created_at`, `updated_at`) VALUES
(1, '0x8DE853e3F21c13Ab8B77acE70ef7Ddd07B32d98b', 'guaranteed', 0, '2023-07-25 08:19:11', '2023-07-25 08:19:11'),
(2, '0x0597DaF81C1E81f15ec55607DA94aA484964718b', 'guaranteed', 0, '2023-07-25 08:19:11', '2023-07-25 08:19:11'),
(3, '0xd34c0Fc2e243553AD5dCA343825a3c447E58B248', 'guaranteed', 0, '2023-07-25 08:19:11', '2023-07-25 08:19:11'),
(4, '0x06f0b16a78c763E147043D1BA2A35cf581863579', 'whitelist', 0, '2023-07-25 08:19:11', '2023-07-25 08:19:11'),
(5, '0x7a429a41A7D52e4b55e3B6C234d9c051b21e5AF8', 'whitelist', 0, '2023-07-25 08:19:11', '2023-07-25 08:19:11'),
(6, '0x8fc108953Bf0B4d0fe8bfDBe41563159B5ADF5C3', 'holder', 0, '2023-07-25 08:19:11', '2023-07-25 08:19:11'),
(7, '0x111B451aa8E990370F145cC158a76168A082a384', 'holder', 0, '2023-07-25 08:19:11', '2023-07-25 08:19:11'),
(8, '0x2E55dc62869D67386bBDB6DB528BfC26ED01C27b', 'whitelist', 0, '2023-07-26 12:02:14', '2023-07-26 12:02:14'),
(9, '0x4246BC6E30D7F995674CCdeC0C1885f62C6d9D26', 'guaranteed', 0, '2023-07-26 12:03:10', '2023-07-26 12:03:10'),
(10, '0xF648414426739cdcb69b5e936a112F6256fa9001', 'holder', 0, '2023-07-26 20:03:55', '2023-07-26 20:03:55'),
(11, '0x6152D275A8021be710ac4e094bE198bCC49E5CAB', 'guaranteed', 0, '2023-07-26 20:03:55', '2023-07-26 20:03:55'),
(12, '0x6182A3aD5985B5c0a96a426E8aFec92750a50659', 'whitelist', 0, '2023-07-28 09:49:04', '2023-07-28 09:49:04');

-- --------------------------------------------------------

--
-- Table structure for table `whitelistaddress2`
--

CREATE TABLE `whitelistaddress2` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `whitelistaddress2`
--

INSERT INTO `whitelistaddress2` (`id`, `address`, `status`) VALUES
(1, '0x111B451aa8E990370F145cC158a76168A082a384', 0);

-- --------------------------------------------------------

--
-- Table structure for table `whitelistaddress3`
--

CREATE TABLE `whitelistaddress3` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `whitelistaddress3`
--

INSERT INTO `whitelistaddress3` (`id`, `address`, `status`) VALUES
(1, '0x111B451aa8E990370F145cC158a76168A082a384', 0);

-- --------------------------------------------------------

--
-- Table structure for table `whitelistorders`
--

CREATE TABLE `whitelistorders` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `email` text NOT NULL,
  `wallet_address` varchar(255) DEFAULT '''''',
  `full_address` text NOT NULL,
  `city` varchar(200) NOT NULL DEFAULT '',
  `state` varchar(200) NOT NULL DEFAULT '',
  `country` varchar(200) NOT NULL DEFAULT '',
  `postal_code` text NOT NULL,
  `etihad_guest_number` text NOT NULL,
  `phone_number` text NOT NULL,
  `quantity` int(11) DEFAULT '0',
  `source_amount` double DEFAULT '0',
  `terms` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `transaction_hash` text NOT NULL,
  `auth_token` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `arcube_unique_codes`
--
ALTER TABLE `arcube_unique_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buyers`
--
ALTER TABLE `buyers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactUS`
--
ALTER TABLE `contactUS`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `historyLogs`
--
ALTER TABLE `historyLogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loginHistory`
--
ALTER TABLE `loginHistory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `presale`
--
ALTER TABLE `presale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unique_codes`
--
ALTER TABLE `unique_codes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_code` (`unique_code`);

--
-- Indexes for table `whitelistaddress`
--
ALTER TABLE `whitelistaddress`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whitelistaddress1`
--
ALTER TABLE `whitelistaddress1`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Un_address` (`address`(255));

--
-- Indexes for table `whitelistaddress2`
--
ALTER TABLE `whitelistaddress2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whitelistaddress3`
--
ALTER TABLE `whitelistaddress3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whitelistorders`
--
ALTER TABLE `whitelistorders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `arcube_unique_codes`
--
ALTER TABLE `arcube_unique_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `buyers`
--
ALTER TABLE `buyers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;
--
-- AUTO_INCREMENT for table `contactUS`
--
ALTER TABLE `contactUS`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `historyLogs`
--
ALTER TABLE `historyLogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `loginHistory`
--
ALTER TABLE `loginHistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `presale`
--
ALTER TABLE `presale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `unique_codes`
--
ALTER TABLE `unique_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `whitelistaddress`
--
ALTER TABLE `whitelistaddress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `whitelistaddress1`
--
ALTER TABLE `whitelistaddress1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `whitelistaddress2`
--
ALTER TABLE `whitelistaddress2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `whitelistaddress3`
--
ALTER TABLE `whitelistaddress3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `whitelistorders`
--
ALTER TABLE `whitelistorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
