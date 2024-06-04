CREATE DATABASE cs2house;
USE cs2house;
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nick VARCHAR(15),
email VARCHAR(45),
senha VARCHAR(16),
horas INT,
aulasAssistidas INT NOT NULL DEFAULT 0,
dtAulas date default NULL
);
UPDATE usuario SET aulasAssistidas = 3, dtAulas = curdate() WHERE idUsuario = 4;
SELECT * FROM usuario;
CREATE TABLE habilidades (
idHabilidade INT PRIMARY KEY AUTO_INCREMENT,
role VARCHAR(10),
fkUsuario INT,
CONSTRAINT fkUsuario foreign key (fkUsuario) REFERENCES usuario(idUsuario));

CREATE TABLE quiz(
idTentativa INT auto_increment,
idCapitulo INT,
dtTentativa TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fkUsuario INT,
acertos INT,
erros INT,
CONSTRAINT pkComposta PRIMARY KEY (idTentativa,idCapitulo),
CONSTRAINT fkUsuarioQuiz FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario));


SELECT * FROM usuario;