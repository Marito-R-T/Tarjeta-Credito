const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Comment = sequelize.define('Comment', {
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    texto: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tipo_plan: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
} , {
        sequelize,
        modelName: 'Comment',
        tableName: 'Comentario',
        timestamps: false
})

module.exports = Comment;