'use strict'
    //aqui tambien usamos rutas
    const router = require('express').Router();
    //le pedimos que llame al controlador 
    var Tipo_cuentaController = require('../../Controller/Tipo_cuentaController');
    
    //este es nuestro listado de rutas para los metodos
    router.get('/', Tipo_cuentaController.listar);
    //si recibe id, como en buscar se tiene que especificar
    router.get('/:tipo_cuentaId', Tipo_cuentaController.buscar);
    router.post('/', Tipo_cuentaController.guardar);
    router.put('/:tipo_cuentaId',  Tipo_cuentaController.actualizar);
    router.delete('/:tipo_cuentaId', Tipo_cuentaController.eliminar);
    
    
    //porque esta ruta de genero ya tiene ese prefijo, lo indicamos en el api.js de la carpeta de rutas
    //se exportan nuestros métodos del router.
    module.exports=router;