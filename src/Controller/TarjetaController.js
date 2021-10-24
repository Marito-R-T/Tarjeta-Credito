//va a la instancia de modelo y de sequelize del archivo bd
//params es lo que viene en la URL, body es lo que viene como formulario osea x-www-form-urlenconded
var { Tarjeta, Usuario, Tipo_cuenta, Moneda, Deshabilitacion, Eliminacion } = require('../Db');
Usuario.hasMany(Tarjeta, { foreignKey: 'usuario_id' })
Tarjeta.belongsTo(Usuario, { foreignKey: 'usuario_id' })

Tipo_cuenta.hasMany(Tarjeta, { foreignKey: 'tipo_cuenta_id' })
Tarjeta.belongsTo(Tipo_cuenta, { foreignKey: 'tipo_cuenta_id' })

Moneda.hasMany(Tipo_cuenta, { foreignKey: 'moneda_id' })
Tipo_cuenta.belongsTo(Moneda, { foreignKey: 'moneda_id' })

Tarjeta.hasMany(Deshabilitacion, { foreignKey: 'tarjeta_id' })
Deshabilitacion.belongsTo(Tarjeta, { foreignKey: 'tarjeta_id' })

Tarjeta.hasMany(Eliminacion, { foreignKey: 'tarjeta_id' })
Eliminacion.belongsTo(Tarjeta, { foreignKey: 'tarjeta_id' })

const listar = async (req, res) => {
    try {
        const tarjeta = await Tarjeta.findAll({
            attributes: ['tarjeta_id', 'numero_tarjeta', 'cvv', 'fecha_vencimiento', 'notifyme', 'saldo'],
            include: [
                Usuario,
                {
                    model: Tipo_cuenta,
                    include: [Moneda]
                },
                Deshabilitacion,
                Eliminacion
            ]
        });
        return res.status(200).json({ tarjeta });
    } catch (error) {
        //si nuestra consulta falla tira un mensaje de error
        return res.status(500).send(error.message);
    }
};

const buscar = async (req, res) => {
    try {
        //findByPk busca un elemento por la llave primaria de la tabla
        const tarjeta = await Tarjeta.findByPk(req.params.tarjetaId);
        //si devuelve null, es porque no existe ese elemento
        if (tarjeta === null) {
            return res.status(500).json({ error: "No se ha encontrado" });
        } else {
            //si nuestra consulta es exitosa devulve el array con el objeto
            return res.status(200).json({ tarjeta });
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
        if (req.body.nombreTarjeta === "") {
            return res.status(500).json({ error: "no puede aceptar campos vacios" });
        } else {
            //si la consulta viene bien con todo lo necesario se crea el nuevo elemento en la tabla
            const tarjeta = await Tarjeta.create(req.body);
            return res.status(200).json({ tarjeta });
        }
    } catch (error) {
        //si hubo error se nos despliega un mensaje
        return res.status(500).send(error.message);
    }
}

const actualizar = async (req, res) => {
    try {
        //el primer if, pide que exista dentro del body el nombre de la columna.
        if (req.body.nombreTarjeta) {
            //este segundo if le indica que no tiene que venir vacío.
            if (req.body.nombreTarjeta === "") {
                return res.status(500).json({ error: "El campo es obligatorio y no puede ir vacío" });
            } else {
                //si cumple todas las condiciones entonces realiza la actualización.
                await Tarjeta.update(req.body, {
                    where: { tarjeta_id: req.params.tarjetaId }
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
        await Tarjeta.destroy({
            where: { tarjeta_id: req.params.tarjetaId }
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
