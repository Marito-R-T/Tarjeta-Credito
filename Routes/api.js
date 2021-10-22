'use strict'
//libreria de express para las rutas
const router = require('express').Router();

var apiTarjetaRouter = require('./api/TarjetaRouter');
//si una ruta viene con /tarjeta el encargado de la ruta será apiTarjetaRouter, y se concatena a router
router.use('/tarjeta', apiTarjetaRouter);

module.exports = router;
