import { Moneda } from './moneda.model'

export class TipoCuenta {
    tipo_cuenta_id: number;
    nombre: string;
    limite_default: number;
    Moneda: Moneda;
}
