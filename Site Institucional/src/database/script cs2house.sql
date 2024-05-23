CREATE DATABASE cs2house;
USE cs2house;
CREATE TABLE usuario(
idusuario INT PRIMARY KEY AUTO_INCREMENT,
nick VARCHAR(45),
horas VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(16),
fkHabilidades INT);

CREATE TABLE habilidades(
idhabilidades INT PRIMARY KEY AUTO_INCREMENT,
role VARCHAR(45),
style VARCHAR(45),
secondrole VARCHAR(45),
secondstyle VARCHAR(45));


