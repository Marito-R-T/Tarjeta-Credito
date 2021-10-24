const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comentario', {
    comentario_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Usuario',
        key: 'usuario_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Comentario',
    timestamps: false
  });
};
