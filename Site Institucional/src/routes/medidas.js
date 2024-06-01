var express = require("express");
var router = express.Router();

var medidasController = require("../controllers/medidasController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidasController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidasController.buscarMedidasEmTempoReal(req, res);
})



module.exports = router;