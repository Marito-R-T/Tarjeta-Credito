'use strict'
//libreria de express para las rutas
const router = require('express').Router();

var apiTarjetaRouter = require('./api/TarjetaRouter');
//si una ruta viene con /tarjeta el encargado de la ruta será apiTarjetaRouter, y se concatena a router
router.use('/tarjeta', apiTarjetaRouter);


var apiMonedaRouter = require('./api/MonedaRouter');
//si una ruta viene con /moneda el encargado de la ruta será apiMonedaRouter, y se concatena a router
router.use('/moneda', apiMonedaRouter);

var apiUsuarioRouter = require('./api/UsuarioRouter');
//si una ruta viene con /usuario el encargado de la ruta será apiUsuarioRouter, y se concatena a router
router.use('/usuario', apiUsuarioRouter);

var apiTipo_cuentaRouter = require('./api/Tipo_cuentaRouter');
//si una ruta viene con /tipo_cuenta el encargado de la ruta será apiTipo_cuentaRouter, y se concatena a router
router.use('/tipo_cuenta', apiTipo_cuentaRouter);

var apiComentarioRouter = require('./api/ComentarioRouter');
//si una ruta viene con /comentario el encargado de la ruta será apiComentarioRouter, y se concatena a router
router.use('/comentario', apiComentarioRouter);

var apiComentarioRouter = require('./api/PortalPagosRouter');
//si una ruta viene con /comentario el encargado de la ruta será apiComentarioRouter, y se concatena a router
router.use('/portal', apiComentarioRouter);


module.exports = router;
