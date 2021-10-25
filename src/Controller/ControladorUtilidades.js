const { Moneda } = require("../Model/Moneda")

function conversion_a_moneda(tipo_cuenta, cantidad){
    Moneda.findOne({where: {moneda_id: tipo_cuenta}, raw: true}).then(moneda=>{
        return parseFloat(cantidad) * parseFloat(moneda.valorQuetzales);
    });
}

function conversion_de_moneda(tipo_cuenta, cantidad){
    Moneda.findOne({where: {id_moneda: tipo_cuenta}, raw: true}).then(moneda=>{
        return parseFloat(cantidad) / parseFloat(moneda.valorQuetzales);
    });
}

module.exports = {
    conversion_a_moneda,
    conversion_de_moneda
}