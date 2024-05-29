CREATE DATABASE cs2house;
USE cs2house;
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nick VARCHAR(15),
email VARCHAR(45),
senha VARCHAR(16),
horas INT);

CREATE TABLE habilidades (
idHabilidade INT PRIMARY KEY AUTO_INCREMENT,
role VARCHAR(10),
fkUsuario INT,
CONSTRAINT fkUsuario foreign key (fkUsuario) REFERENCES usuario(idUsuario);

ALTER TABLE usuario MODIFY COLUMN senha VARCHAR(30);

SELECT * FROM usuario;
