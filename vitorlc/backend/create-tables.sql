CREATE DATABASE `desafio_irancho`;
USE `desafio_irancho`;

CREATE TABLE IF NOT EXISTS `pessoa` (
    `id` INT(6) AUTO_INCREMENT PRIMARY KEY,
    `no_pessoa` VARCHAR(30) NOT NULL,
    `no_email` VARCHAR(30) NOT NULL,
    `endereco` VARCHAR(100) NOT NULL,
    `sexo` enum('HOMEM','MULHER') NOT NULL,
    `ic_ativo` tinyint(1) DEFAULT '1');

CREATE TABLE IF NOT EXISTS `animal` (
    `id` INT(6) AUTO_INCREMENT PRIMARY KEY,
    `no_animal` VARCHAR(30) NOT NULL,
    `no_raca` VARCHAR(30) NOT NULL,
    `sexo` enum('FEMEA','MACHO') NOT NULL,
    `dt_nascimento` DATE NOT NULL,
    `vr_peso` INT NULL,
    `fk_id_pessoa` INT(6) NOT NULL,
    CONSTRAINT `fk_animal_pessoa`
    FOREIGN KEY (`fk_id_pessoa`)
    REFERENCES `pessoa` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `animal_lote` (
    `id` INT(6) AUTO_INCREMENT PRIMARY KEY,
    `no_lote` VARCHAR(30) NOT NULL,
    `ds_lote` VARCHAR(100)  NULL);

CREATE TABLE IF NOT EXISTS `animal_x_lote` (
    `fk_id_animal` INT(6) NOT NULL, 
    `fk_id_lote` INT(6) NOT NULL,
    `dt_entrada` DATE,
    `dt_saida` DATE,
    CONSTRAINT `fk_animal_x_lote_animal`
    FOREIGN KEY (`fk_id_animal`)
    REFERENCES `animal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_animal_x_lote_lote`
    FOREIGN KEY (`fk_id_lote`)
    REFERENCES `animal_lote` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);