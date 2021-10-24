const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    usuario_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    correo: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    timestamps: false
  });
};
