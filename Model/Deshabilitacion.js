const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Deshabilitacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    motivo: {
      type: DataTypes.TEXT,
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
    tableName: 'Deshabilitacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IX_Relationship9",
        using: "BTREE",
        fields: [
          { name: "tarjeta_id" },
        ]
      },
    ]
  });
};
