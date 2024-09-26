-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 23 mars 2024 à 02:29
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `furiousgains`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonces`
--

CREATE TABLE `annonces` (
  `id_annonces` int(11) NOT NULL,
  `titre_annonces` varchar(255) NOT NULL,
  `description_annonces` varchar(255) NOT NULL,
  `imag` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `annonces`
--

INSERT INTO `annonces` (`id_annonces`, `titre_annonces`, `description_annonces`, `imag`, `id_user`) VALUES
(16, 'ya raby', 'offffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 'ed6c8698-6e36-47d5-b2d1-5ca4b00f6fdf.jpg', 33),
(17, 'souuussoouuu', 'nejhinnnn', '3366936c-6d19-4328-9d04-3d35eb2d6fb8.jpg', 33),
(18, 'annonce', 'nanananan', 'dc74cdde-1fbd-411b-a8ff-3ba7e4fd54a4.jpg', 33),
(19, 'ya raby', 'jaw', 'd6f1bd0f-c954-4f86-b863-a5c9962c1857.jpg', 33);

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

CREATE TABLE `avis` (
  `id_avis` int(11) NOT NULL,
  `note` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `avis`
--

INSERT INTO `avis` (`id_avis`, `note`, `id_user`, `id_produit`) VALUES
(7, 5, 33, 51),
(8, 5, 33, 51),
(9, 4, 33, 51),
(10, 4, 33, 51),
(11, 1, 33, 51);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(255) NOT NULL,
  `descriptionC` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `nom_categorie`, `descriptionC`) VALUES
(5, 'creatine', 'desc'),
(6, 'proteine', 'loot'),
(7, 'BCAA', 'ONLY');

-- --------------------------------------------------------

--
-- Structure de la table `codepromo`
--

CREATE TABLE `codepromo` (
  `id_code_promo` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `Montant_Reduction` int(11) NOT NULL,
  `Statut` varchar(255) NOT NULL,
  `Utilisations_Restantes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `codepromo`
--

INSERT INTO `codepromo` (`id_code_promo`, `code`, `Montant_Reduction`, `Statut`, `Utilisations_Restantes`) VALUES
(1, 555, 0, 'active', 15),
(2, 1551, 458, 'xdcfvghb', 12),
(3, 12358, 0, 'nadou', 5),
(5, 2544, 0, 'naa', 265);

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id_command` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `statut_commande` varchar(255) NOT NULL,
  `montant_total` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id_command`, `id_client`, `statut_commande`, `montant_total`, `id_produit`) VALUES
(8, 1, 'en cours', 13, 51),
(11, 3, 'aman ekhdem', 888, 51),
(13, 1, 'Livré', 567, 51);

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `marque_produit` varchar(60) NOT NULL,
  `prix_produit` double NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `customer`
--

INSERT INTO `customer` (`customer_id`, `prod_id`, `marque_produit`, `prix_produit`, `quantite`) VALUES
(1, 54, 'ON', 130, 1),
(2, 55, 'IMPACT', 198, 1);

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `id_event` int(11) NOT NULL,
  `nom_event` varchar(255) NOT NULL,
  `lieu_event` varchar(255) NOT NULL,
  `prix_event` float NOT NULL,
  `nb_participation` int(11) NOT NULL,
  `date_event` date NOT NULL,
  `heure_event` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`id_event`, `nom_event`, `lieu_event`, `prix_event`, `nb_participation`, `date_event`, `heure_event`, `description`) VALUES
(46, 'krjkr', 'rr', 154, 6, '2024-01-30', '2h', 'hh'),
(48, 'jaww', 'Ariana', 123, 10, '2024-03-05', '12', 'jw'),
(49, 'eventmasaretch', 'esprit', 15, 50, '2024-03-09', '2h', 'nnnn'),
(50, 'kkk', 'validation', 14, 7, '2024-03-07', '5h', 'qq');

-- --------------------------------------------------------

--
-- Structure de la table `forgetpwd`
--

CREATE TABLE `forgetpwd` (
  `id_res` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `time` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `forgetpwd`
--

INSERT INTO `forgetpwd` (`id_res`, `code`, `time`, `email`) VALUES
(1, 932140, '1709228932377', 'nadabha135@gmail.com'),
(2, 590190, '1709229075850', 'nadabha135@gmail.com'),
(3, 793430, '1709229377176', 'nadabha135@gmail.com'),
(4, 504537, '1709229613502', 'nadabha135@gmail.com'),
(5, 20447, '1709229845038', 'nadabha135@gmail.com'),
(6, 204061, '1709237591776', 'nadabha135@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `livraison`
--

CREATE TABLE `livraison` (
  `id_livraison` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL,
  `date_livraison` date NOT NULL,
  `statut_livraison` varchar(255) NOT NULL,
  `adresse_livraison` varchar(255) NOT NULL,
  `montant_paiement` float NOT NULL,
  `mode_livraison` varchar(255) NOT NULL,
  `id_client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `livraison`
--

INSERT INTO `livraison` (`id_livraison`, `id_commande`, `date_livraison`, `statut_livraison`, `adresse_livraison`, `montant_paiement`, `mode_livraison`, `id_client`) VALUES
(47, 8, '2024-03-12', 'Livré', 'Boumhal', 18, 'A domicile', 1),
(48, 8, '2024-03-12', 'En cours', 'Zahrouni', 16, 'Par poste', 1),
(52, 8, '2024-03-05', 'En cours', 'Khaznadar', 13, 'A domicile', 1),
(56, 8, '2024-03-05', 'En cours', 'Manouba', 56, 'A domicile', 1),
(57, 11, '2024-03-22', 'En cours', 'Ben Arous ,Mourouj', 99, 'Par poste', 1),
(58, 8, '2024-03-06', 'En cours', 'Ariana ,Esprit', 100, 'A domicile', 1),
(59, 8, '2024-03-07', 'En cours', 'Sfax 2', 88, 'A domicile', 1),
(61, 8, '2024-03-07', 'en cours', 'Kef', 88, 'Par poste', 1),
(62, 8, '2024-03-07', 'Annule', 'Manouba ,Oued Lil', 44, 'Par poste', 1),
(63, 8, '2024-03-08', 'Annulé', 'Zaghouan', 35, 'Par poste', 1),
(64, 8, '2024-08-28', 'Marié', 'Ariana', 97, 'Avion', 1),
(65, 8, '2024-03-15', 'Annulé', 'Mallasin', 34, 'A domicile', 1),
(66, 8, '2024-03-14', 'Annulé', 'Sfax 1', 876, 'POSTE', 1),
(67, 8, '2024-03-16', 'en cours', 'Ariana', 16, 'a dom', 33),
(69, 8, '2024-03-07', 'Annue', 'Tunis', 55, 'Par poste', 33);

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id_produit` int(11) NOT NULL,
  `marque_produit` varchar(255) NOT NULL,
  `quantite` int(11) NOT NULL,
  `prix_produit` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `id_categorie` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id_produit`, `marque_produit`, `quantite`, `prix_produit`, `description`, `id_categorie`, `image_name`) VALUES
(51, 'Redcon', 4, 70, 'BCAA', 7, 'C:\\\\Users\\\\nada\\\\Desktop\\\\integration\\\\FuriousGains\\\\src\\\\main\\\\java\\\\assets\\\\redcon.jpg'),
(52, 'GOLD', 35, 100, 'KEVInLEVRONe', 7, 'C:\\\\Users\\\\nada\\\\Desktop\\\\integration\\\\FuriousGains\\\\src\\\\main\\\\java\\\\assets\\\\Levrone.jpg'),
(53, 'BIOTECH', 44, 150, 'MONOHYDRATE', 5, 'C:\\\\Users\\\\nada\\\\Desktop\\\\integration\\\\FuriousGains\\\\src\\\\main\\\\java\\\\assets\\\\BioTech.png'),
(54, 'ON', 25, 130, 'MONOHYDRATE', 5, 'C:\\\\Users\\\\nada\\\\Desktop\\\\integration\\\\FuriousGains\\\\src\\\\main\\\\java\\\\assets\\\\creatine.png'),
(55, 'IMPACT', 51, 198, 'CREATINE TN', 5, 'C:\\\\Users\\\\nada\\\\Desktop\\\\integration\\\\FuriousGains\\\\src\\\\main\\\\java\\\\assets\\\\impact.jpg'),
(56, 'BIOTECH', 20, 180, 'ISO WHEY', 6, 'C:\\\\Users\\\\nada\\\\Desktop\\\\integration\\\\FuriousGains\\\\src\\\\main\\\\java\\\\assets\\\\BIOT.jpg'),
(57, 'DYMATIZE', 28, 150, 'ISOWHEY', 6, 'C:\\\\Users\\\\nada\\\\Desktop\\\\integration\\\\FuriousGains\\\\src\\\\main\\\\java\\\\assets\\\\dymatize.png'),
(58, 'MachineB', 48, 200, 'hlow', 6, 'C:\\\\Users\\\\nada\\\\Desktop\\\\integration\\\\FuriousGains\\\\src\\\\main\\\\java\\\\assets\\\\Levrone.jpg'),
(59, 'fhfhf', 12, 123, 'fhhff', 5, 'C:\\\\Users\\\\nada\\\\Desktop\\\\piDev-Java-rocketDev2023-gestionUser\\\\src\\\\Images\\\\istockphoto-658590900-170667a.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_Recette` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ratings`
--

INSERT INTO `ratings` (`id`, `id_user`, `id_Recette`, `rating`) VALUES
(24, 1, 60, 1),
(25, 1, 60, 5),
(26, 1, 60, 10),
(27, 1, 65, 5),
(28, 1, 65, 5),
(29, 1, 65, 10),
(31, 1, 1, 9),
(32, 1, 1, 6),
(33, 1, 1, 1),
(34, 1, 1, 5),
(35, 1, 1, 6),
(36, 1, 1, 6),
(37, 1, 3, 10),
(38, 1, 3, 5),
(39, 1, 3, 3);

-- --------------------------------------------------------

--
-- Structure de la table `receipt`
--

CREATE TABLE `receipt` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `prix_produit` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `receipt`
--

INSERT INTO `receipt` (`id`, `customer_id`, `prix_produit`) VALUES
(45, 1, 1352),
(46, 2, 354),
(47, 3, 310),
(48, 4, 299),
(49, 5, 244),
(50, 6, 398),
(51, 7, 398),
(52, 8, 476),
(53, 1, 600),
(54, 1, 600),
(55, 1, 600),
(56, 1, 1432),
(57, 1, 1782),
(58, 1, 5646),
(59, 1, 6246),
(60, 1, 200),
(61, 1, 328);

-- --------------------------------------------------------

--
-- Structure de la table `recette`
--

CREATE TABLE `recette` (
  `id_Recette` int(11) NOT NULL,
  `nom_Recette` varchar(255) NOT NULL,
  `ingredients` varchar(255) NOT NULL,
  `temps_preparation` varchar(255) NOT NULL,
  `id_regime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `recette`
--

INSERT INTO `recette` (`id_Recette`, `nom_Recette`, `ingredients`, `temps_preparation`, `id_regime`) VALUES
(1, 'bnb', 'ft', 'fvg', 0),
(3, 'bnina', 'barcha banan', '1h', 14);

-- --------------------------------------------------------

--
-- Structure de la table `regime`
--

CREATE TABLE `regime` (
  `id_regime` int(11) NOT NULL,
  `type_regime` varchar(255) NOT NULL,
  `nom_regime` varchar(255) NOT NULL,
  `instruction` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `regime`
--

INSERT INTO `regime` (`id_regime`, `type_regime`, `nom_regime`, `instruction`) VALUES
(1, 'bbbb', 'fgf', 'fgf');

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id_Res` int(11) NOT NULL,
  `nb_place` int(11) NOT NULL,
  `status_Res` varchar(255) NOT NULL,
  `id_event` int(11) NOT NULL,
  `id_client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id_Res`, `nb_place`, `status_Res`, `id_event`, `id_client`) VALUES
(36, 1, 'res', 48, 33);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `cin` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `dateuser` date DEFAULT NULL,
  `num_tel` int(11) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'Client',
  `image` varchar(255) NOT NULL,
  `ban` tinyint(1) NOT NULL DEFAULT 0,
  `id_code_promo` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `cin`, `nom`, `prenom`, `dateuser`, `num_tel`, `adresse`, `email`, `password`, `role`, `image`, `ban`, `id_code_promo`) VALUES
(1, 14519193, 'nadouuu', 'nadaa', '2002-02-06', 5505050, 'nnnn', 'nadabha135@gmail.com', '$2a$10$fOv4iNcFXZ7tM6RbNb58hum1L0BabvOHcD7tXriTNltQh3yjcUfMK', 'Admin', '7baf0a66-8909-49db-9afd-9c92e964743a.jpg', 0, 1),
(17, 15634, 'nadouu', 'nada', '2002-02-06', 50541688, 'nada', 'nn@esprit.tn', '$2a$10$2p4Nll8U.J4dQMiFa87oeumWL0YxItTCEliWa5nyjBpqkUWE8IPFC', 'Client', '73a9a0a6-bcf1-4690-a3df-129c82de6b64.jpg', 0, 1),
(18, 155634, 'nadouu', 'nada', NULL, 55, 'nada', 'nn@esprit.tn', '125', 'Client', '', 0, 1),
(19, 50545219, 'nnn', 'nnn', NULL, 50545219, 'gh', 'nadaaabha@esprit.tn', '52', 'Client', '', 0, 1),
(21, 12841, 'cfvgbhnj', 'cfvgbhnj', NULL, 205485, 'vbhnj', 'nadou@esprit.tn', '$2a$10$Hy4YM06.cAuPbYCw5i1Dzunm9909K6k0AMO6FC3P0yvLzArEfvohC', 'Client', '', 1, 1),
(22, 255125, 'naddaa', 'bhaaa', '2002-02-06', 50141688, 'xdcfvghbnj', 'nada35@gmail.com', '$2a$10$XC8KtxwuGNLCfxkjHSHJUekJ0YZoDohF/TqEB/M2DpqzeDKSlzVB6', 'Admin', '', 0, 1),
(23, 1451451, 'nada', 'bha', NULL, 505050, 'fvgbhnj,', 'n@bha.com', '$2a$10$88ZbTRJvs2NM3ssxs8wqGeSj.g7LVsn.NbBEfSATtlB.TFHa9HeM6', 'bdf8b7d7-cb19-4dc0-93d1-1731f4402b2e.png', 'Client', 0, 1),
(25, 78965412, 'fadyt', 'allekher', NULL, 85526, 'rvef', 'nadafadyt@esprit.tn', '$2a$10$N9tHJVrNGLSLH3ErJtf1DOC2YNbvs1mlzqEAbDJDcwlNG/1eQh/se', 'Client', 'f4df9008-44cb-491a-a948-94b4c738fb54.jpg', 0, 1),
(26, 12345, 'nada', 'bha', NULL, 123456, 'nn', 'nadabha@esprit.tn', '$2a$10$yqtLls0qT.yZJrjtJ4szGOeIkc8hLOmidG5c1SPC68ZbgzofGjQpe', 'Admin', '73a9a0a6-bcf1-4690-a3df-129c82de6b64.jpg', 0, 1),
(27, 505050, 'nour', 'nour', '2024-02-06', 50505, 'nnn', 'nour@esprit.tn', '$2a$10$/x88Lv6enE1VZu212CPW/.wcEtGreKEKFyIEkAf8DLhjTZGwKWMWC', 'Client', 'ba6a6678-7eee-4dd0-98c8-50932ba0e862.jpg', 0, 1),
(30, 12345678, 'Guedria', 'Khaled', '2024-03-08', 50541688, 'Boumhal', 'khaled@esprit.tn', '$2a$10$3zpeF2zTn9Kmc6sq0EtWS.xHnI/wOkdPq5hEQKg7AHo91Nen69an6', 'Client', '7baf0a66-8909-49db-9afd-9c92e964743a.jpg', 0, 1),
(31, 14519196, 'siwar', 'saidi', '2024-02-26', 50545219, 'kalaat', '555555', '$2a$10$MWrXnj/aZWLtaC0MYAARvu8/GmFrciMPUHPkpIZ.afMEH8IZQhHYm', 'Client', '74a03f80-7860-42f1-a278-1231d75fd6fd.jpg', 0, 1),
(33, 14513132, 'nadou', 'anada', '2024-03-05', 2563147, 'ka', 'mahmoudkhm71@gmail.com', '$2a$10$F9h9errM7z1h9NFEd59uX.UVDLyMD07EMFutFQ8teseQwdL14XDMC', 'Client', '0281a4ce-37eb-4d87-9b9b-a5a4126600db.png', 0, 1),
(34, 14563288, 'siwar', 'nefzi', '2001-03-14', 50555555, 'manouba', 'siwar@esprit.tn', '$2a$10$Y7lSQImjFwnqLMLhfvTxvuMR39oXdkZ4cyeeEw/XoGTBG6T5V5Dva', 'Client', 'c09c4bac-9f27-49ba-8217-c0b6f21ea1bd.jpg', 0, 1),
(35, 12548521, 'naada', 'naddaa', '2027-11-18', 1123548, 'tehhhhhte', 'nada1df111@esprit.tn', 'gfdsq', '\'Client\'', 'C:\\xampp\\tmp\\phpF257.tmp', 0, 1),
(36, 12548521, 'naada', 'naddaa', '2025-12-16', 151456, 'juhygtf', 'nada@esprit.tn', 'cf0a530b34f4296a56a28c19f164b3457a5446061a534a37273e1b3dd3eec458', 'Client', 'icons8-delete-48-65fcc03a5f9bc.png', 0, 1),
(37, 9999999, 'naada', 'naddaa', '2029-10-20', 12155158, 'nadouuuu', 'nada1111@esprit.tn', '$2y$10$JlRWupE5ZY6id92Tx3vTOuvtKLkh0LmccPPax7OFJLfSE1pDjs/Qy', 'Client', 'icons8-delete-48-65fcc2069dd64.png', 0, 1),
(38, 12548521, 'nada', 'naddaa', '2019-12-22', 1123548, 'nadouuuu', 'rzsfg@rgvrszg0rgr0.rh', '$2y$10$hm44wBhH0nZEVhVlmbmA6.g3ayGZhBnz3OgKk87rEvt6JnEXzZJM.', 'Client', 'icons8-crowdfunding-80-65fcc532eb59f.png', 0, 1),
(39, 888888888, 'naada', 'bha', '2019-09-27', 505050, 'nadouuuu', 'nadoun@esprit.tn', '$2y$10$XfkP4U6aOmCexOA2qCZ0fePKffQVI569KGau75E1d3cgTVAv8oFmW', 'Client', 'diagramme-circulaire-65fda71365b29.png', 1, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annonces`
--
ALTER TABLE `annonces`
  ADD PRIMARY KEY (`id_annonces`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`id_avis`),
  ADD KEY `id_produit` (`id_produit`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `codepromo`
--
ALTER TABLE `codepromo`
  ADD PRIMARY KEY (`id_code_promo`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id_command`),
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_produit` (`id_produit`);

--
-- Index pour la table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`id_event`);

--
-- Index pour la table `forgetpwd`
--
ALTER TABLE `forgetpwd`
  ADD PRIMARY KEY (`id_res`);

--
-- Index pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD PRIMARY KEY (`id_livraison`),
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_commande` (`id_commande`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id_produit`),
  ADD KEY `produit_ibfk_1` (`id_categorie`);

--
-- Index pour la table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Recette` (`id_Recette`);

--
-- Index pour la table `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `recette`
--
ALTER TABLE `recette`
  ADD PRIMARY KEY (`id_Recette`);

--
-- Index pour la table `regime`
--
ALTER TABLE `regime`
  ADD PRIMARY KEY (`id_regime`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id_Res`),
  ADD KEY `reservation_ibfk_1` (`id_event`),
  ADD KEY `reservation_ibfk_2` (`id_client`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_code_promo` (`id_code_promo`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annonces`
--
ALTER TABLE `annonces`
  MODIFY `id_annonces` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `avis`
--
ALTER TABLE `avis`
  MODIFY `id_avis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `codepromo`
--
ALTER TABLE `codepromo`
  MODIFY `id_code_promo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id_command` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT pour la table `forgetpwd`
--
ALTER TABLE `forgetpwd`
  MODIFY `id_res` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `livraison`
--
ALTER TABLE `livraison`
  MODIFY `id_livraison` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id_produit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT pour la table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT pour la table `receipt`
--
ALTER TABLE `receipt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT pour la table `recette`
--
ALTER TABLE `recette`
  MODIFY `id_Recette` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `regime`
--
ALTER TABLE `regime`
  MODIFY `id_regime` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id_Res` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annonces`
--
ALTER TABLE `annonces`
  ADD CONSTRAINT `annonces_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `avis_ibfk_3` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id_produit`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD CONSTRAINT `livraison_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `livraison_ibfk_2` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id_command`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `produit_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`id_event`) REFERENCES `evenement` (`id_event`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
