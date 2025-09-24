-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/09/2025 às 17:08
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `marketpro_campanhas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `campanha`
--

CREATE TABLE `campanha` (
  `id_campanha` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `data_inicio` datetime DEFAULT NULL,
  `data_fim` datetime DEFAULT NULL,
  `orcamento` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `campanha`
--

INSERT INTO `campanha` (`id_campanha`, `nome`, `data_inicio`, `data_fim`, `orcamento`) VALUES
(1, 'Dengue', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5000),
(2, 'AIds', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5000),
(3, 'HIV', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5000),
(4, 'Hepatite', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5000),
(5, 'Roblox', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5000),
(6, 'Dengue', NULL, NULL, 5000),
(7, 'AIds', NULL, NULL, 5000),
(8, 'HIV', NULL, NULL, 5000),
(9, 'Hepatite', NULL, NULL, 5000),
(10, 'Roblox', NULL, NULL, 5000);

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nome_cliente` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `cpf` char(11) DEFAULT NULL,
  `segmento` text DEFAULT NULL,
  `data_nascimento` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nome_cliente`, `email`, `cpf`, `segmento`, `data_nascimento`) VALUES
(1, 'joao', 'joaozinho@gmail.com', '333333-33', 'indo', '20072007'),
(2, 'oswaldo', 'oswaldo@gmail.com', '333333-33', 'indo', '20072007'),
(3, 'maria', 'mariacurrie@gmail.com', '333333-33', 'indo', '20072007'),
(4, 'roberto', 'robertocarlos@gmail.com', '333333-33', 'indo', '20072007'),
(5, 'michale jackson', 'robloxmichael@gmail.com', '333333-33', 'indo', '20072007');

-- --------------------------------------------------------

--
-- Estrutura para tabela `midia`
--

CREATE TABLE `midia` (
  `id_midia` int(11) NOT NULL,
  `tipo_midia` varchar(100) DEFAULT NULL,
  `custo_unitario` double DEFAULT NULL,
  `nome_midia` varchar(100) DEFAULT NULL,
  `id_campanha` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `midia`
--

INSERT INTO `midia` (`id_midia`, `tipo_midia`, `custo_unitario`, `nome_midia`, `id_campanha`) VALUES
(1, 'televisao', 1000, 'globe', NULL),
(2, 'televisao', 1000, 'globe', NULL),
(3, 'televisao', 1000, 'globe', NULL),
(4, 'televisao', 1000, 'globe', NULL),
(5, 'televisao', 1000, 'globe', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `campanha`
--
ALTER TABLE `campanha`
  ADD PRIMARY KEY (`id_campanha`);

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Índices de tabela `midia`
--
ALTER TABLE `midia`
  ADD PRIMARY KEY (`id_midia`),
  ADD KEY `id_campanha` (`id_campanha`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `campanha`
--
ALTER TABLE `campanha`
  MODIFY `id_campanha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `midia`
--
ALTER TABLE `midia`
  MODIFY `id_midia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `midia`
--
ALTER TABLE `midia`
  ADD CONSTRAINT `midia_ibfk_1` FOREIGN KEY (`id_campanha`) REFERENCES `campanha` (`id_campanha`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
