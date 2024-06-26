var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var nick = req.body.nickServer;
    var senha = req.body.senhaServer;

    if (nick == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else{

        usuarioModel.autenticar(nick, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
{
                                if (resultadoAutenticar.length > 0) {
                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        email: resultadoAutenticar[0].email,
                                        nick: resultadoAutenticar[0].nick,
                                        senha: resultadoAutenticar[0].senha,
                                        horas: resultadoAutenticar[0].horas
                                    });
                                } else {
                                    res.status(204).json();
                                }
                            }
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Nome e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nick = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var horas = req.body.horasServer;

    // Faça as validações dos valores
    if (nick == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (horas == undefined) {
        res.status(400).send("Sua hora está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nick, email, senha, horas)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function jogarbanco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var capitulo = req.body.capituloServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (capitulo == undefined) {
        res.status(400).send("Seu capitulo está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seu erros está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Sua erros está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.jogarbanco(capitulo, acertos, erros, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    jogarbanco
}