const sectorCtrl = require('../controllers/transaccion.controller');

const express = require('express');
const transaccion = require('../models/transaccion');
const transaccionCtrl = require('../controllers/transaccion.controller');

const router = express.Router();

router.post("/", transaccionCtrl.createTransaccion);
router.get("/", transaccionCtrl.getTransacciones);
router.get("/:email", transaccionCtrl.getTransaccion);
router.get("/:monedaOrigen/:monedaDestino", transaccionCtrl.getTransaccionesDivisas);



module.exports = router;
