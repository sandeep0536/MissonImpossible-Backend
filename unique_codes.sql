-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 19, 2022 at 09:53 PM
-- Server version: 10.3.34-MariaDB-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `LTE`
--

-- --------------------------------------------------------

--
-- Table structure for table `unique_codes`
--

CREATE TABLE `unique_codes` (
  `id` int(11) NOT NULL,
  `unique_code` varchar(100) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `used` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `unique_codes`
--

INSERT INTO `unique_codes` (`id`, `unique_code`, `status`, `used`) VALUES
(1, 'DoZC4J455rdGMT5kj9xu', 0, 0),
(2, 'TgYLYybZ0RlR6kYi4oui', 0, 0),
(3, 'X91LiaRZcb3VTxaiFZxm', 0, 0),
(4, 'ALnExCi84UmhF2IPAiSo', 0, 0),
(5, 'zjKxBZLIwZ6uzrKKGDXf', 0, 0),
(6, 'VnP43wWJqrj8EYZtiMS7', 0, 0),
(7, '920AWOyinm1262n1LpKs', 0, 0),
(8, 'lm0u8Exxnib1ZtilCO92', 0, 0),
(9, 'KWU7fjdvPQkNHGF4p9gr', 0, 0),
(10, '5duW5G9q8yYwZ9Ywp3u1', 0, 0),
(11, 'i5JDNxT17w9Xlb0lek6t', 0, 0),
(12, 'rTS7nebHDk1QXgmuiYvb', 0, 0),
(13, '722WkiyCDOSOnF4xAywx', 0, 0),
(14, '4iMnBZMyiOBNrweV3hJH', 0, 0),
(15, 'Q0fEqalwIdOhrNly2t8j', 0, 0),
(16, 'eZ5g6LEy54qtnCrpVDS6', 0, 0),
(17, 'jwVG36etUHLnWJTJWFpo', 0, 0),
(18, 'gvf1GpryTQeNJe3c3q3b', 0, 0),
(19, 'HngplxbHeai24Wv5nk6f', 0, 0),
(20, 'Pui7uznVr23UVKtX4pnf', 0, 0),
(21, '4MoIkUMh18McMYYi390V', 0, 0),
(22, 'LiG4C9zVBHhFrMWwijHP', 0, 0),
(23, 'mbk3IWX19BqAhxyQiRow', 0, 0),
(24, '5Ftr3gynaIYm9pCmAYEt', 0, 0),
(25, 'RSHTUNA2dW0B8ZnIEeg2', 0, 0),
(26, 'JxNcouwUhXi0vw2sMwBE', 0, 0),
(27, 'keLa219gvcbr6stq1kqt', 0, 0),
(28, 'oRFZ48rYBkzVNkANDs6O', 0, 0),
(29, 'p1QGuL8ad6p9hLuv8vQ8', 0, 0),
(30, 'IxjARYamnGEKFM9jR9Ax', 0, 0),
(31, 's5oApqYkDHdA47KiZd7T', 0, 0),
(32, '5EM8Ak9uHl0WapS0DCYf', 0, 0),
(33, 'J508NpLP6dCxUsmiKNVB', 0, 0),
(34, 'm22B1q7tSX4YjyNePveJ', 0, 0),
(35, 'Uj26JhLwZztCwsgjjkGV', 0, 0),
(36, 'gJzT8fpY9IaEURdhmGK5', 0, 0),
(37, 'NdVZPHf0rEdFzoj9RhEW', 0, 0),
(38, '1kXHMMzwED9DbLpSEWGi', 0, 0),
(39, 'WZObPJ5d55EtvsmgCZBQ', 0, 0),
(40, 'qydwp4pCNnN6jcGLM2Cq', 0, 0),
(41, '8oQoMwkcU9n7TuZQ66Dt', 0, 0),
(42, 'nlZTwluCZQ8tRpOGI09Z', 0, 0),
(43, 'qOVo8OL4cOi656YqS5tq', 0, 0),
(44, 'uMEwyyTjPUpINQHrGu5F', 0, 0),
(45, 'oWjJltpR5cBLHhbv6PeM', 0, 0),
(46, '8xwN9luPOWsaBoe2upT1', 0, 0),
(47, 'Gs5kVeey1azMPchOWTIY', 0, 0),
(48, 'b1dfmoBYqKfeaFhAxvrO', 0, 0),
(49, 'j15v8Vemcjoo5zuKeTzI', 0, 0),
(50, 't5ILcw45ydAVwnzbLur7', 0, 0),
(51, 'ks7hxUdjcuZtJziKJd5R', 0, 0),
(52, 'BnbpViXVzO3i9IZsk8DS', 0, 0),
(53, 'USENSZJmjxFHCM6OcCXk', 0, 0),
(54, 'MHOQfKiPguyoM9D9g6Wx', 0, 0),
(55, 'MquAaVigOtjSOcBk7mI6', 0, 0),
(56, 'd0sV7j2by37iW6cm7XhM', 0, 0),
(57, 'hARpTd3YvEi0jFrSIBcU', 0, 0),
(58, 'zkEF4aQaXXKEmWJHkvT7', 0, 0),
(59, 'hfILZoqPhMgh5rbC4nPu', 0, 0),
(60, 'gqKP17FTJlakyJrOR09s', 0, 0),
(61, '9l3aONenn0gftDGNtWl5', 0, 0),
(62, 'zq5rvWZwcWxxHr5IHUdj', 0, 0),
(63, 'O0f0TxCgE9v2NGXr09pl', 0, 0),
(64, 'HUdOuwQ6GcdxGcBwIYlK', 0, 0),
(65, 'xU0WFkRD8rgeAqH25FF3', 0, 0),
(66, 'YBmLIWps0sAy5M2Zldwg', 0, 0),
(67, 'Zxajwcfn3y69AwzLZylV', 0, 0),
(68, 'fsbWGzI2RvWrDy4LFpwJ', 0, 0),
(69, 'l12pYsP97erf80Kv9BFA', 0, 0),
(70, 'FL7cmAd9zGxSguFIstJz', 0, 0),
(71, 'bTP3UKoKawZdwyogdrxD', 0, 0),
(72, 'OOSzQlStAPGUZsJz53xY', 0, 0),
(73, 'sqmtUh3jXTrM8yJLiGl0', 0, 0),
(74, 'OgndNgL9ApdNosNpYOWL', 0, 0),
(75, '6f9DaysQ538mLR37Wy5y', 0, 0),
(76, '7ckocSZ8rQGD80dlS8qB', 0, 0),
(77, 'DKpe7z94q8Ote0yCXqvJ', 0, 0),
(78, 'SwybSL0Nnxilw8Bt0boT', 0, 0),
(79, 'dKli8zLrT3cVYFeyIjPI', 0, 0),
(80, '4cOllglUft4OZ2w4o9Au', 0, 0),
(81, 'GOL62dDryW5j5fGNqsz9', 0, 0),
(82, 'zrmbDmRaIrS1ATTio4B4', 0, 0),
(83, 'j0WTlSj50lEBjInKHbpf', 0, 0),
(84, '9nS8r13zTkKJd0vjLPvB', 0, 0),
(85, 'HTvOn3ONtSDtKdI0yRjk', 0, 0),
(86, 'd0WdAKWEThWxYeg23tFX', 0, 0),
(87, 'BiQVO3uI5ut2VFKqovsq', 0, 0),
(88, '6mJ6qu53x0xz5CFJlONK', 0, 0),
(89, 'n0p3lb0hvXkP6M0B52FL', 0, 0),
(90, 'UbpMqRz1uQ3hIv8i2Bcx', 0, 0),
(91, '4emyiydsjIyIZRkrHMaJ', 0, 0),
(92, 'O0lKrp7ZaYK2zycrVEoY', 0, 0),
(93, '68pik0uLKnXVxtXAIbZH', 0, 0),
(94, 'leeoRTXNkC7ZbR5ZiPt5', 0, 0),
(95, 'ZyyH8AGemRKtsikC2ne1', 0, 0),
(96, 'QljLT3x1p3FjLhY3zI8W', 0, 0),
(97, 'yEVbdTYWU8QETRvvfFEV', 0, 0),
(98, 'xIEfSrxo5mVccRdyQ5mZ', 0, 0),
(99, '3XfGQKRm3oYL2TRbhtHE', 0, 0),
(100, '6MZ8FU0c9iFGyBShyWtr', 0, 0),
(101, 'LcD3qptRoG93CaMb3NxW', 0, 0),
(102, 'RlGfN074hZucvqOzxxvV', 0, 0),
(103, 's7QJ4nNbJH2a3XVR1eBS', 0, 0),
(104, '0pGLS6RRYjj15EntzhnT', 0, 0),
(105, 'K6J0KqKJiaLjxfc8Je37', 0, 0),
(106, 'Te3KwNnFLPtAMQaDl7AE', 0, 0),
(107, 'T3KDiN1kgyHix5pPZYvw', 0, 0),
(108, 'qCi3bQdMdqmHvVCjq85h', 0, 0),
(109, '59JkUYCdOVcsdKkIKwYq', 0, 0),
(110, 'dt586pIA8zpSfjflfVHW', 0, 0),
(111, 'Ic9QewZXdr4F93P8aBmb', 0, 0),
(112, 'lJHdyrW6bzK7gmV7A0jN', 0, 0),
(113, 'GhCZnorNy50MC7UQgLGH', 0, 0),
(114, 'CwqzYJs9E7ktRtYp6L7j', 0, 0),
(115, 'CRYXawL8OP20cqykeHAV', 0, 0),
(116, 'yBDZMdehdFgdH6O604V7', 0, 0),
(117, '3o6PXUe62iEbIQXfhYKf', 0, 0),
(118, 'wcdUqNuM4ZZAxA3KbTU4', 0, 0),
(119, 'ikNfJMZ8tTvyDV3UKyv6', 0, 0),
(120, '8tnq9GnrD77PgWFiQkI9', 0, 0),
(121, 'cebYaDDKZK0iv425sJtA', 0, 0),
(122, 'tpd7Br1SOwjfAexl9xYS', 0, 0),
(123, 'iE4CYg32lOUFjJvxsgZG', 0, 0),
(124, 'OLb7xzmHjlEYCTWwO5ph', 0, 0),
(125, 'ChaDY308R8wYg1ddtjJ3', 0, 0),
(126, '4qLzaFtU6q0k8qpCPN0f', 0, 0),
(127, 'DBUW31lNrG0g3e5X6fbp', 0, 0),
(128, 'OBliQhvzizWvPs9e7a7A', 0, 0),
(129, '24eaHkpAGJaV0S1p4mec', 0, 0),
(130, 'ygdOmPi8SDBatn2badyh', 0, 0),
(131, 'BOQPmXFhByZmKYkYQC9m', 0, 0),
(132, 'oEiMu9Axi2DvPJnEYBvK', 0, 0),
(133, 'Ksc5dXu5cfZAs6ylJtpi', 0, 0),
(134, '9qJRxQ3uNma23Tl6jEov', 0, 0),
(135, 'VbYGZcG1cOiZm1SW3psf', 0, 0),
(136, 'NSvuW2S8kVwJTQeZRfr8', 0, 0),
(137, 'leMK9spNDPLz32h06TYG', 0, 0),
(138, 'p6Xm7LDd4fPfawhzxu6x', 0, 0),
(139, 'zvkXYFovtMqIun6gfWCG', 0, 0),
(140, 'haucd4bkphlfd1OE4SZ5', 0, 0),
(141, 'C8WN0s1OSVKkmEtLvbdS', 0, 0),
(142, 'UIufkGa287Y09G4gAnRL', 0, 0),
(143, '4muUdW97UK8hqaO9uG6a', 0, 0),
(144, 'MTS3SAigTf0blhgkQx6r', 0, 0),
(145, 'YLfmyM7ZPuvuglwNN739', 0, 0),
(146, 'IP5KcRgcaL2P3ZCjlUFG', 0, 0),
(147, 'UwHKI1qZznTA8Qpo2EhW', 0, 0),
(148, 'sX0ewnxhXGdNtRM7T069', 0, 0),
(149, 'SsXl2W32UUrX9qkRe5tA', 0, 0),
(150, 'pRhvQPkKJCCBaX6Q6xeJ', 0, 0),
(151, 'Q4JR5mgDuzSA1bskBO63', 0, 0),
(152, 'mFvB4AeUhA8FHdIAwgot', 0, 0),
(153, 'zLHpr06TDI1n3xHH94MI', 0, 0),
(154, 'mMEAVuCTyPmRgMvzODKf', 0, 0),
(155, '6keNRqYGxn0fhKI54aDZ', 0, 0),
(156, 'JeX0Cs9Bw08ciIMnKZjV', 0, 0),
(157, 'Uj5aDIDGb24873ZA67nn', 0, 0),
(158, 'cqkpOkyF41hrMuGj71Q2', 0, 0),
(159, 'xINARTBu0WZh9Osd45VO', 0, 0),
(160, 'HhrTfRx7ovY8sGn3SAXQ', 0, 0),
(161, 'N93P7bO3BxKOXMJXotXQ', 0, 0),
(162, 'kxPpIXEMgwJUK1uBcLuh', 0, 0),
(163, '96OTMzXMp6WLSbH8QXCv', 0, 0),
(164, 'rNt5pAOEGFL9hiEkG0O9', 0, 0),
(165, 'LbUY4cqAOamLZpCAcMbJ', 0, 0),
(166, '8bf87Vr05aVkZx0fUy5a', 0, 0),
(167, '16GoXpdJgMta10Age71B', 0, 0),
(168, 'ahVE1j4jlTCHzIO1h3u8', 0, 0),
(169, '64BbI1bCvrvdKLYNNL8e', 0, 0),
(170, 'd34ICEZqdfjZjYMtV70W', 0, 0),
(171, 'KghHykHTqV6QMt663yHZ', 0, 0),
(172, 'F3ldPcYcSRq88aC5kDhA', 0, 0),
(173, 'uCYmTHnRRjNgcyBkamdZ', 0, 0),
(174, '58FeMhtiktxbZmGbDwOc', 0, 0),
(175, 'VZ8k7IBy0saBQypSLDlQ', 0, 0),
(176, 'OQIVzQL9VKe3eg2O4CDT', 0, 0),
(177, 'pzdMmzMG1ChLKpkDQjhV', 0, 0),
(178, 'VW7jdGtTiu1LTKRUZh50', 0, 0),
(179, 'zQgke24LHt5YCiTcxnFB', 0, 0),
(180, 'JngWzrv54O4TgrvB0xD9', 0, 0),
(181, 'hjCOBHkWFl5WJ8ZEuRWQ', 0, 0),
(182, 'SWHVsiBKO0BbyoWWlw6K', 0, 0),
(183, 'wsQOy4wRlZh41qJ5d0sB', 0, 0),
(184, 'vwad6T6bU4TF7hHIg07s', 0, 0),
(185, 'UGHLZxgOFeX5nYBukZE4', 0, 0),
(186, 'K2xFlXfqUBYpDGj5YBHr', 0, 0),
(187, 'mLqe6tgYExZOiMeHkn4l', 0, 0),
(188, '2fBImkW8r42C8oc3DBJZ', 0, 0),
(189, '5oEN3VuZbJXXXUf7tTzM', 0, 0),
(190, 'OpwU3n6XszbyIFYzXY6s', 0, 0),
(191, '5Jjwnk1INPQF6HAem1mI', 0, 0),
(192, 'LrN9oMkuztSK5HHbJ8Fp', 0, 0),
(193, '3uEY5C3TgvXjSVVyIJnn', 0, 0),
(194, 'YnNk2PlnFPwT6PJyDSEf', 0, 0),
(195, 'UMtrNBdIVDE0R8cHQPWB', 0, 0),
(196, '58vOx4XjJnBhKbWlEHdz', 0, 0),
(197, 'wlDD0p3iSJ5OvJIBA1Dq', 0, 0),
(198, 'WZlsP9WPKqAfgmTlbdIg', 0, 0),
(199, '5tOBReui2m7EVo5ou86e', 0, 0),
(200, 'slL1WjMznBer0wPiXKSr', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `unique_codes`
--
ALTER TABLE `unique_codes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `unique_codes`
--
ALTER TABLE `unique_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
