const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Disabling = sequelize.define('Disabling', {
    razon: {
        type: DataTypes.TEXT,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Disabling',
        tableName: 'Deshabilitacion',
        timestamps: false  
})

module.exports = Disabling;