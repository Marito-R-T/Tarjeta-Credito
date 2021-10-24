'use strict'
    //aqui tambien usamos rutas
    const router = require('express').Router();
    //le pedimos que llame al controlador 
    var MonedaController = require('../../Controller/MonedaController');
    
    //este es nuestro listado de rutas para los metodos
    router.get('/', MonedaController.listar);
    //si recibe id, como en buscar se tiene que especificar
    router.get('/:monedaId', MonedaController.buscar);
    router.post('/', MonedaController.guardar);
    router.put('/:monedaId',  MonedaController.actualizar);
    router.delete('/:monedaId', MonedaController.eliminar);
    
    
    //porque esta ruta de genero ya tiene ese prefijo, lo indicamos en el api.js de la carpeta de rutas
    //se exportan nuestros métodos del router.
    module.exports=router;