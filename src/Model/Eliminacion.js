const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Eliminacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    motivo: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    tarjeta_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tarjeta',
        key: 'tarjeta_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Eliminacion',
    timestamps: false
  });
};
