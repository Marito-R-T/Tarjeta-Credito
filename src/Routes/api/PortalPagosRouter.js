//aqui tambien usamos rutas
const router = require('express').Router();
//le pedimos que llame al controlador 
var ControladorPortalPago = require('../../Controller/ControladorPortalPago');

router.post('/autenticarPortalPago', ControladorPortalPago.autenticar)

module.exports=router;