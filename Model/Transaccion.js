const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Transaccion', {
    transaccion_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    es_Aumento: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'Transaccion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaccion_id" },
        ]
      },
      {
        name: "IX_Relationship8",
        using: "BTREE",
        fields: [
          { name: "tarjeta_id" },
        ]
      },
    ]
  });
};
