export class Transaccion {
    _id!: string;
    monedaOrigen: String;
    cantidadOrigen: Number;
    monedaDestino: String;
    cantidadDestino: Number;
    emailCliente: String;
    tasaConversion: Number;

    constructor() {
        this.monedaOrigen = "";
        this.cantidadOrigen = 0;
        this.monedaDestino = "";
        this.cantidadDestino = 0;
        this.emailCliente = "";
        this.tasaConversion = 0;
    }
}
