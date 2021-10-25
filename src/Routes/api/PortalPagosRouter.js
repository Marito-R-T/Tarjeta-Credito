const { Router } = require('express'); //Que usaremos la funcion Router, del paquete express
const router = Router(); //Creamos un router
const { vincular_tarjeta_credito_portal_de_pagos, solicitar_depositar_saldo, solicitar_retirar_saldo } = require('../../Controller/ControladorPortalPago');

//rutas para el portal de pagos
router.post('/tarjeta/verificacion/portal_pagos', vincular_tarjeta_credito_portal_de_pagos);
router.post('/tarjeta/deposito/portal_pagos', solicitar_depositar_saldo);
router.post('/tarjeta/retiro/portal_pagos', solicitar_retirar_saldo);

module.exports = router;