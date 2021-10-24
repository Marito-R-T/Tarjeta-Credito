'use strict'
    //aqui tambien usamos rutas
    const router = require('express').Router();
    //le pedimos que llame al controlador 
    var ComentarioController = require('../../Controller/ComentarioController');
    
    //este es nuestro listado de rutas para los metodos
    router.get('/', ComentarioController.listar);
    //si recibe id, como en buscar se tiene que especificar
    router.get('/:comentarioId', ComentarioController.buscar);
    router.post('/', ComentarioController.guardar);
    router.put('/:comentarioId',  ComentarioController.actualizar);
    router.delete('/:comentarioId', ComentarioController.eliminar);
    
    
    //porque esta ruta de genero ya tiene ese prefijo, lo indicamos en el api.js de la carpeta de rutas
    //se exportan nuestros métodos del router.
    module.exports=router;