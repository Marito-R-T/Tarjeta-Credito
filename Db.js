const { Sequelize } = require('sequelize');
const { database } = require('./config');
const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
    host: database.host,
    dialect: "mysql"
}
);


const tarjetaModel = require('./model/Tarjeta');
//invocación al modelo que tiene la estructura de la tabla.
const Tarjeta = tarjetaModel(sequelize, Sequelize);

const monedaModel = require('./model/Moneda');
//invocación al modelo que tiene la estructura de la tabla.
const Moneda = monedaModel(sequelize, Sequelize);

const usuarioModel = require('./model/Usuario');
//invocación al modelo que tiene la estructura de la tabla.
const Usuario = usuarioModel(sequelize, Sequelize);

const tipo_cuentaModel = require('./model/Tipo_cuenta');
//invocación al modelo que tiene la estructura de la tabla.
const Tipo_cuenta = tipo_cuentaModel(sequelize, Sequelize);

const comentarioModel = require('./model/Comentario');
//invocación al modelo que tiene la estructura de la tabla.
const Comentario = comentarioModel(sequelize, Sequelize);

const deshabilitacionModel = require('./model/Deshabilitacion');
//invocación al modelo que tiene la estructura de la tabla.
const Deshabilitacion = deshabilitacionModel(sequelize, Sequelize);

const eliminacionModel = require('./model/Eliminacion');
//invocación al modelo que tiene la estructura de la tabla.
const Eliminacion = eliminacionModel(sequelize, Sequelize);

sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(
sequelize.sync({ force: false }).then(() => {
    console.log('Tablas sincronizadas')
}).catch(err => console.log(err)));

module.exports = {
    sequelize,
    Tarjeta,
    Moneda,
    Usuario,
    Tipo_cuenta,
    Comentario,
    Deshabilitacion,
    Eliminacion,
};