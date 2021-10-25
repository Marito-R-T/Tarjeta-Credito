
/*const { Cuenta } = require("../models/cuenta");
const { conversion_dolares_quetzales } = require("./controlador_utilidades");*/
//todo se va a manejar en quetzales

const vincular_cuenta_bancaria_portal_de_pagos = (req, res) => {
    Cuenta.findOne({where:{identificador: req.body.identificador}, raw: true}).then(cuenta=>{
        if(cuenta == null){
            res.status(401).json({information_message: 'No existe la cuenta solicitada.'});
        }else{
            res.status(200).json(cuenta);
        }
    });
};

const solicitar_retirar_saldo = (req, res) => {
    Cuenta.findOne({where: {identificador: req.body.identificador}}).then(cuenta=>{
        if(cuenta == null){
            res.status(401).json({information_message: 'No existe la cuenta solicitada'});
        }else{
            valor_solicitado = conversion_a_moneda(cuenta.tipo_de_cuenta, req.body.cantidad);
            if(parseFloat(cuenta.saldo) >= parseFloat(req.body.cantidad)){
                cuenta.update({saldo: parseFloat(cuenta.saldo)-parseFloat(req.body.cantidad)});
                res.status(200).json({information_message: 'Se ha realizado el retiro con éxito.'});
            }else{
                res.status(401).json({information_message: 'La cuenta no posee los fondos suficientes.'});
            }
        }
    });
};

const solicitar_depositar_saldo = (req, res) => {
    Cuenta.findOne({where: {identificador: req.body.identificador}}).then(cuenta=>{
        if(cuenta == null){
            res.status(401).json({information_message: 'No existe la cuenta solicitada'});
        }else{
            valor_solicitado = conversion_de_moneda(cuenta.tipo_de_cuenta, req.body.cantidad);
            cuenta.update({saldo: parseFloat(cuenta.saldo)+parseFloat(req.body.cantidad)});
            res.status(200).json({information_message: 'Se ha realizado el deposito con éxito.'});
        }
    });
};

module.exports = {
    vincular_cuenta_bancaria_portal_de_pagos,
    solicitar_depositar_saldo,
    solicitar_retirar_saldo
}