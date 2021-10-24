//va a la instancia de modelo y de sequelize del archivo bd
//params es lo que viene en la URL, body es lo que viene como formulario osea x-www-form-urlenconded
var { Comentario} = require('../Db');

const listar = async (req, res) => {
    try {
        const comentario = await Comentario.findAll();
        return res.status(200).json({ comentario });
    } catch (error) {
        //si nuestra consulta falla tira un mensaje de error
        return res.status(500).send(error.message);
    }
};

const buscar = async (req, res) => {
    try {
        //findByPk busca un elemento por la llave primaria de la tabla
        const comentario = await Comentario.findByPk(req.params.comentarioId);
        //si devuelve null, es porque no existe ese elemento
        if (comentario === null) {
            return res.status(500).json({ error: "No se ha encontrado" });
        } else {
            //si nuestra consulta es exitosa devulve el array con el objeto
            return res.status(200).json({ comentario });
        }

    } catch (error) {
        //si nuestra consulta falla tira un mensaje de error
        return res.status(500).send(error.message);
    }
};


const guardar = async (req, res) => {
    try {
        //pide los datos del body del req, va actualizar todos los parametros necesarios
        //necesitan hacer comprobaciones sobre si existe o no en el body. 
        if (req.body.nombreComentario === "") {
            return res.status(500).json({ error: "no puede aceptar campos vacios" });
        } else {
            //si la consulta viene bien con todo lo necesario se crea el nuevo elemento en la tabla
            const comentario = await Comentario.create(req.body);
            return res.status(200).json({ comentario });
        }
    } catch (error) {
        //si hubo error se nos despliega un mensaje
        return res.status(500).send(error.message);
    }
}

const actualizar = async (req, res) => {
    try { 
        //el primer if, pide que exista dentro del body el nombre de la columna.
        if (req.body.nombreComentario) {
            //este segundo if le indica que no tiene que venir vacío.
            if (req.body.nombreComentario === "") {
                return res.status(500).json({ error: "El campo es obligatorio y no puede ir vacío" });
            }else{
                //si cumple todas las condiciones entonces realiza la actualización.
                await Comentario.update(req.body, {
                    where: { comentario_id: req.params.comentarioId }
                })
                //manda el mensaje de exito.
                return res.status(200).json({ success: "Se ha modificado" });   
            }
        }
        //si algo sale mal lo muestra.
        return res.status(500).json({ error: "faltan campos" });
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const eliminar = async (req, res) => {
    try {
        await Comentario.destroy({
            where: { comentario_id: req.params.comentarioId }
        }).then(x => {
            //la promeso devulve 1 si la consulta se realiza con exito
            if (x === 1) {
                return res.status(200).json({ success: "Se ha eliminado con exito" });
            } else {
                return res.status(500).json({ error: "No se ha eliminado" });
            }
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// es necesario exportar todas las funciones
module.exports = {
    listar,
    guardar,
    actualizar,
    eliminar,
    buscar
}
