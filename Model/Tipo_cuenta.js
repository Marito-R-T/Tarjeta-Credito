const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tipo_cuenta', {
    tipo_cuenta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    limite_default: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    moneda_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Moneda',
        key: 'moneda_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Tipo_cuenta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tipo_cuenta_id" },
        ]
      },
      {
        name: "tipo_cuenta_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tipo_cuenta_id" },
        ]
      },
      {
        name: "IX_Relationship5",
        using: "BTREE",
        fields: [
          { name: "moneda_id" },
        ]
      },
    ]
  });
};
