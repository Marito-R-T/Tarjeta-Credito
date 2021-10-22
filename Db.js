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


const tarjetaModel = require('./models/Tarjeta');
//invocación al modelo que tiene la estructura de la tabla.
const Tarjeta = tarjetaModel(sequelize, Sequelize);


module.exports = {
    sequelize,
    Tarjeta
};