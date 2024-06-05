var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT erros, acertos FROM quiz WHERE fkUsuario = ${idUsuario} ORDER BY dtTentativa DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasAulas(idUsuario) {

    var instrucaoSql = `SELECT sum(qtdAulas) as Total, dtAula as Dia FROM aula  WHERE fkUsuario = ${idUsuario} GROUP BY dtAula;;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT erros, acertos FROM quiz WHERE fkUsuario = ${idUsuario} ORDER BY dtTentativa DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarAula(idUsuario, aulas_assistidas){
    var instrucaoSql = `INSERT INTO aula VALUES(default, ${aulas_assistidas},${idUsuario},curdate());`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarAulas(idUsuario) {

    var instrucaoSql = `SELECT sum(qtdAulas)FROM aula WHERE fkUsuario = ${idUsuario} `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarUltimasMedidas,
    buscarUltimasAulas,
    buscarMedidasEmTempoReal,
    atualizarAula,
    mostrarAulas
}