const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tarjeta', {
    tarjeta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    identificador: {
      type: DataTypes.TEXT,
      allowNull: false
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
    timestamps: false
  });
};
