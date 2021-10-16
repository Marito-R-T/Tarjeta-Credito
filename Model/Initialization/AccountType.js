const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

//Creacion del modelo

const AccountType = sequelize.define('AccountType', {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    moneda: {
        type: DataTypes.STRING,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'AccountType',
        tableName: 'Tipo_plan',
        timestamps: false
});

module.exports = AccountType;