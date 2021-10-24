'use strict'
//aqui tambien usamos rutas
const router = require('express').Router();
//le pedimos que llame al controlador 
var TarjetaController = require('../../Controller/TarjetaController');

//este es nuestro listado de rutas para los metodos
router.get('/', TarjetaController.listar);
//si recibe id, como en buscar se tiene que especificar
router.get('/:tarjetaId', TarjetaController.buscar);
router.post('/', TarjetaController.guardar);
router.put('/:tarjetaId', TarjetaController.actualizar);
router.delete('/:tarjetaId', TarjetaController.eliminar);


//porque esta ruta de genero ya tiene ese prefijo, lo indicamos en el api.js de la carpeta de rutas
//se exportan nuestros métodos del router.
module.exports = router;