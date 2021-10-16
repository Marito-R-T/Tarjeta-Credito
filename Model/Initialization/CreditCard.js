const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const Credit = sequelize.define('Credit', {
    no_tarjeta: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    cvv: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre_tarjeta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_vencimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    tipo_plan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bloqueado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    recordatorio: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    habilitada: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Credit',
        tableName: 'Tarjeta_credito',
        timestamps: false
})

module.exports = Credit;