var DataTypes = require("sequelize").DataTypes;
var _Comentario = require("./Comentario");
var _Deshabilitacion = require("./Deshabilitacion");
var _Eliminacion = require("./Eliminacion");
var _Moneda = require("./Moneda");
var _Tarjeta = require("./Tarjeta");
var _Tipo_cuenta = require("./Tipo_cuenta");
var _Transaccion = require("./Transaccion");
var _Usuario = require("./Usuario");

function initModels(sequelize) {
  var Comentario = _Comentario(sequelize, DataTypes);
  var Deshabilitacion = _Deshabilitacion(sequelize, DataTypes);
  var Eliminacion = _Eliminacion(sequelize, DataTypes);
  var Moneda = _Moneda(sequelize, DataTypes);
  var Tarjeta = _Tarjeta(sequelize, DataTypes);
  var Tipo_cuenta = _Tipo_cuenta(sequelize, DataTypes);
  var Transaccion = _Transaccion(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  Tipo_cuenta.belongsTo(Moneda, {foreignKey: "moneda_id"});
  Moneda.hasMany(Tipo_cuenta, {foreignKey: "moneda_id"});
  Deshabilitacion.belongsTo(Tarjeta, {foreignKey: "tarjeta_id"});
  Tarjeta.hasMany(Deshabilitacion, {foreignKey: "tarjeta_id"});
  Eliminacion.belongsTo(Tarjeta, {foreignKey: "tarjeta_id"});
  Tarjeta.hasMany(Eliminacion, {foreignKey: "tarjeta_id"});
  Transaccion.belongsTo(Tarjeta, { foreignKey: "tarjeta_id"});
  Tarjeta.hasMany(Transaccion, { foreignKey: "tarjeta_id"});
  Tarjeta.belongsTo(Tipo_cuenta, { foreignKey: "tipo_cuenta_id"});
  Tipo_cuenta.hasMany(Tarjeta, { foreignKey: "tipo_cuenta_id"});
  Comentario.belongsTo(Usuario, { foreignKey: "usuario_id"});
  Usuario.hasMany(Comentario, { foreignKey: "usuario_id"});
  Tarjeta.belongsTo(Usuario, { foreignKey: "usuario_id"});
  Usuario.hasMany(Tarjeta, { foreignKey: "usuario_id"});

  return {
    Comentario,
    Deshabilitacion,
    Eliminacion,
    Moneda,
    Tarjeta,
    Tipo_cuenta,
    Transaccion,
    Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
