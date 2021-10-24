const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Moneda', {
    moneda_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    cambio_quetzales: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    simbolo: {
      type: DataTypes.CHAR(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Moneda',
    timestamps: false
  });
};
