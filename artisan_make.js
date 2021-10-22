const nombreControllador = process.argv[2]
var nombreControllerLowerCase = nombreControllador.toLocaleLowerCase();
const fs = require('fs')

let controladores = (nombreControllador, nombreControllerLowerCase) => {

    var texto = "//va a la instancia de modelo y de sequelize del archivo bd\n\
//params es lo que viene en la URL, body es lo que viene como formulario osea x-www-form-urlenconded\n\
var { "+ nombreControllador + "} = require('../db');\n\
\n\
const listar = async (req, res) => {\n\
    try {\n\
        const "+ nombreControllerLowerCase + " = await " + nombreControllador + ".findAll();\n\
        return res.status(200).json({ "+ nombreControllerLowerCase + " });\n\
    } catch (error) {\n\
        //si nuestra consulta falla tira un mensaje de error\n\
        return res.status(500).send(error.message);\n\
    }\n\
};\n\
\n\
const buscar = async (req, res) => {\n\
    try {\n\
        //findByPk busca un elemento por la llave primaria de la tabla\n\
        const "+ nombreControllerLowerCase + " = await " + nombreControllador + ".findByPk(req.params." + nombreControllerLowerCase + "Id);\n\
        //si devuelve null, es porque no existe ese elemento\n\
        if ("+ nombreControllerLowerCase + " === null) {\n\
            return res.status(500).json({ error: \"No se ha encontrado\" });\n\
        } else {\n\
            //si nuestra consulta es exitosa devulve el array con el objeto\n\
            return res.status(200).json({ "+ nombreControllerLowerCase + " });\n\
        }\n\
\n\
    } catch (error) {\n\
        //si nuestra consulta falla tira un mensaje de error\n\
        return res.status(500).send(error.message);\n\
    }\n\
};\n\
\n\
\n\
const guardar = async (req, res) => {\n\
    try {\n\
        //pide los datos del body del req, va actualizar todos los parametros necesarios\n\
        //necesitan hacer comprobaciones sobre si existe o no en el body. \n\
        if (req.body.nombre"+ nombreControllador + " === \"\") {\n\
            return res.status(500).json({ error: \"no puede aceptar campos vacios\" });\n\
        } else {\n\
            //si la consulta viene bien con todo lo necesario se crea el nuevo elemento en la tabla\n\
            const "+ nombreControllerLowerCase + " = await " + nombreControllador + ".create(req.body);\n\
            return res.status(200).json({ "+ nombreControllerLowerCase + " });\n\
        }\n\
    } catch (error) {\n\
        //si hubo error se nos despliega un mensaje\n\
        return res.status(500).send(error.message);\n\
    }\n\
}\n\
\n\
const actualizar = async (req, res) => {\n\
    try { \n\
        //el primer if, pide que exista dentro del body el nombre de la columna.\n\
        if (req.body.nombre"+ nombreControllador + ") {\n\
            //este segundo if le indica que no tiene que venir vacío.\n\
            if (req.body.nombre"+ nombreControllador + " === \"\") {\n\
                return res.status(500).json({ error: \"El campo es obligatorio y no puede ir vacío\" });\n\
            }else{\n\
                //si cumple todas las condiciones entonces realiza la actualización.\n\
                await "+ nombreControllador + ".update(req.body, {\n\
                    where: { "+ nombreControllerLowerCase + "_id: req.params." + nombreControllerLowerCase + "Id }\n\
                })\n\
                //manda el mensaje de exito.\n\
                return res.status(200).json({ success: \"Se ha modificado\" });   \n\
            }\n\
        }\n\
        //si algo sale mal lo muestra.\n\
        return res.status(500).json({ error: \"faltan campos\" });\n\
        \n\
    } catch (error) {\n\
        return res.status(500).send(error.message);\n\
    }\n\
}\n\
\n\
const eliminar = async (req, res) => {\n\
    try {\n\
        await "+ nombreControllador + ".destroy({\n\
            where: { "+ nombreControllerLowerCase + "_id: req.params." + nombreControllerLowerCase + "Id }\n\
        }).then(x => {\n\
            //la promeso devulve 1 si la consulta se realiza con exito\n\
            if (x === 1) {\n\
                return res.status(200).json({ success: \"Se ha eliminado con exito\" });\n\
            } else {\n\
                return res.status(500).json({ error: \"No se ha eliminado\" });\n\
            }\n\
        })\n\
    } catch (error) {\n\
        return res.status(500).send(error.message);\n\
    }\n\
}\n\
// es necesario exportar todas las funciones\n\
module.exports = {\n\
    listar,\n\
    guardar,\n\
    actualizar,\n\
    eliminar,\n\
    buscar\n\
}\n\
"
    fs.writeFileSync('./Controller/' + nombreControllador + 'Controller.js', texto, { flag: 'a' })

    codigoParaDb = "\n\
const "+ nombreControllerLowerCase + "Model = require('./models/" + nombreControllador + "');\n\
//invocación al modelo que tiene la estructura de la tabla.\n\
const " + nombreControllador + " = " + nombreControllerLowerCase + "Model(sequelize, Sequelize);\n\
"

    fs.writeFileSync('./BDGeneradoUnitario.js', codigoParaDb, { flag: 'a' })
}

let rutas = (nombreRuta, nombreRutaLowerCase) => {
    var texto = "'use strict'\n\
    //aqui tambien usamos rutas\n\
    const router = require('express').Router();\n\
    //le pedimos que llame al controlador \n\
    var "+ nombreRuta + "Controller = require('../../controllers/" + nombreRuta + "Controller');\n\
    \n\
    //este es nuestro listado de rutas para los metodos\n\
    router.get('/', "+ nombreRuta + "Controller.listar);\n\
    //si recibe id, como en buscar se tiene que especificar\n\
    router.get('/:"+ nombreRutaLowerCase + "Id', " + nombreRuta + "Controller.buscar);\n\
    router.post('/', "+ nombreRuta + "Controller.guardar);\n\
    router.put('/:"+ nombreRutaLowerCase + "Id',  " + nombreRuta + "Controller.actualizar);\n\
    router.delete('/:"+ nombreRutaLowerCase + "Id', " + nombreRuta + "Controller.eliminar);\n\
    \n\
    \n\
    //porque esta ruta de genero ya tiene ese prefijo, lo indicamos en el api.js de la carpeta de rutas\n\
    //se exportan nuestros métodos del router.\n\
    module.exports=router;"

    fs.writeFileSync('./routes/api/' + nombreRuta + 'Router.js', texto, { flag: 'a' })

    //para api.js para añadir las rutas de cada tabla
    textoAPI = "\n\
var api"+ nombreRuta + "Router=require('./api/" + nombreRuta + "Router');\n\
//si una ruta viene con /"+ nombreRutaLowerCase + " el encargado de la ruta será api" + nombreRuta + "Router, y se concatena a router\n\
router.use('/"+ nombreRutaLowerCase + "', api" + nombreRuta + "Router);\n\
"
    fs.writeFileSync('./ApiRouterUnitario.js', textoAPI, { flag: 'a' })
}

controladores(nombreControllador, nombreControllerLowerCase)
rutas(nombreControllador, nombreControllerLowerCase)