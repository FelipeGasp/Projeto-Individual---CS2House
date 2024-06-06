
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
SELECT * FROM usuario;

CREATE TABLE aula (
idAula INT PRIMARY KEY AUTO_INCREMENT,
qtdAulas INT,
fkUsuario INT,
dtAula DATE,
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


DELETE FROM aula WHERE fkUsuario = 6;

INSERT INTO aula VALUES
(default, 2,6,'2024-06-06');
SELECT * FROM aula;
truncate TABLE aula;
SELECT sum(qtdAulas) as Total, dtAula as Dia FROM aula  WHERE fkUsuario = 6 GROUP BY dtAula;
SELECT SUM(qtdAulas) AS Total, dtAula AS Dia FROM aula WHERE fkUsuario = 6 GROUP BY dtAula ORDER BY dtAula DESC LIMIT 7;