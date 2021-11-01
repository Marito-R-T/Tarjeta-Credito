
var { Tarjeta } = require('../Db');
const { conversion_a_moneda } = require("./ControladorUtilidades");
const { conversion_de_moneda } = require("./ControladorUtilidades");
//todo se va a manejar en quetzales

const vincular_tarjeta_credito_portal_de_pagos = (req, res) => {
    Tarjeta.findOne({where:{identificador: req.body.identificador}, raw: true}).then(tarjeta=>{
        if(tarjeta == null){
            res.status(401).json({information_message: 'No existe la cuenta solicitada.'});
        }else{
            res.status(200).json(tarjeta);
        }
    });
};

const solicitar_retirar_saldo = (req, res) => {
    Tarjeta.findOne({where: {identificador: req.body.identificador}}).then(tarjeta=>{
        if(tarjeta == null){
            res.status(401).json({information_message: 'No existe la cuenta solicitada'});
        }else{
            valor_solicitado = conversion_a_moneda(tarjeta.tipo_cuenta_id, req.body.cantidad);
            if(parseFloat(tarjeta.saldo) >= parseFloat(req.body.cantidad)){
                tarjeta.update({saldo: parseFloat(tarjeta.saldo)-parseFloat(req.body.cantidad)});
                res.status(200).json({information_message: 'Se ha realizado el retiro con éxito.'});
            }else{
                res.status(401).json({information_message: 'La cuenta no posee los fondos suficientes.'});
            }
        }
    });
};

const solicitar_depositar_saldo = (req, res) => {
    Tarjeta.findOne({where: {identificador: req.body.identificador}}).then(tarjeta=>{
        if(tarjeta == null){
            res.status(401).json({information_message: 'No existe la cuenta solicitada'});
        }else{
            valor_solicitado = conversion_de_moneda(tarjeta.tipo_cuenta_id, req.body.cantidad);
            tarjeta.update({saldo: parseFloat(tarjeta.saldo)+parseFloat(req.body.cantidad)});
            res.status(200).json({information_message: 'Se ha realizado el deposito con éxito.'});
        }
    });
};

module.exports = {
    vincular_tarjeta_credito_portal_de_pagos,
    solicitar_depositar_saldo,
    solicitar_retirar_saldo
}