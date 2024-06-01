var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `SELECT erros, acertos FROM quiz WHERE fkUsuario = ${idUsuario} ORDER BY dtTentativa DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT erros, acertos FROM quiz WHERE fkUsuario = ${idUsuario} ORDER BY dtTentativa DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}