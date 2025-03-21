-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-03-2025 a las 08:49:17
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lotes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foto`
--

CREATE TABLE `foto` (
  `id` int(11) NOT NULL,
  `ruta` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_ext` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `foto`
--

INSERT INTO `foto` (`id`, `ruta`, `id_ext`) VALUES
(8, 'foto_Capa_24_8.jpg', 'Capa_24'),
(9, 'foto_Capa_287_1.jpg', 'Capa_287'),
(10, 'foto_Capa_24_9.jpg', 'Capa_24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lote`
--

CREATE TABLE `lote` (
  `id` int(11) NOT NULL,
  `capa` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `direccion` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `manzana` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `lote` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `calle` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `superficie` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `estatus` int(11) NOT NULL,
  `tipo_lote` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `lote`
--

INSERT INTO `lote` (`id`, `capa`, `nombre`, `direccion`, `telefono`, `manzana`, `lote`, `calle`, `superficie`, `estatus`, `tipo_lote`) VALUES
(1, 'Capa_782', 'JEsusRlv', 'Tulipanes 12 a', '4915000', '3', '5', 'Conocida', '100mts', 1, 0),
(2, 'Capa_288', 'Jesusrlv', 'Tulipanes 12 a', '4915000', '12', '1234', 'Tulipanes', '12', 0, 0),
(3, 'Capa_293', 'w', 'w', 'w', '3', 'w', 'w', '2', 1, 0),
(4, 'Capa_2', 'no tiene aún', 'si tiene', '999999', 'Datos nuevos', '1', 'calee', '23', 1, 0),
(5, 'Capa_9', 'dsds', 'dsd', 'sdsd', 'sds', 'sdsd', 'sds', 'sdsd', 1, 0),
(6, 'Capa_24', '2', '2', '2', 'datos', '2', '2', '2', 0, 0),
(7, 'Capa_228', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 0, 1),
(8, 'Capa_125', 'Rodolfo Leaños', 'Tulipanes 12 a', '9236222', '7', '9', 'Calle x', '70mts', 1, 0),
(9, 'Capa_256', '3', '3', '3', '2', '3', '3', '3', 0, 1),
(10, 'Capa_287', '4', '4', '4', '4', '4', '4', '4', 0, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usr`
--

CREATE TABLE `usr` (
  `id` int(11) NOT NULL,
  `usr` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `pwd` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `perfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usr`
--

INSERT INTO `usr` (`id`, `usr`, `pwd`, `perfil`) VALUES
(1, 'admin', '123456789', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `foto`
--
ALTER TABLE `foto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lote`
--
ALTER TABLE `lote`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usr`
--
ALTER TABLE `usr`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `foto`
--
ALTER TABLE `foto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `lote`
--
ALTER TABLE `lote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usr`
--
ALTER TABLE `usr`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
