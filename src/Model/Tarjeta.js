const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tarjeta', {
    tarjeta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero_tarjeta: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      unique: "numero_tarjeta"
    },
    cvv: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    fecha_vencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    notifyme: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Usuario',
        key: 'usuario_id'
      }
    },
    tipo_cuenta_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tipo_cuenta',
        key: 'tipo_cuenta_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Tarjeta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tarjeta_id" },
        ]
      },
      {
        name: "tarjeta_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tarjeta_id" },
        ]
      },
      {
        name: "numero_tarjeta",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero_tarjeta" },
        ]
      },
      {
        name: "IX_Relationship3",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "IX_Relationship4",
        using: "BTREE",
        fields: [
          { name: "tipo_cuenta_id" },
        ]
      },
    ]
  });
};
