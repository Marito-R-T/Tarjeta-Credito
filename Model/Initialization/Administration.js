const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Admin = sequelize.define('Admin', {
    id_bancario: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dpi: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Admin',
        tableName: 'Administrador',
        timestamps: false
})

module.exports = Admin;