export default class Random {
    constructor(lados) {
        this._lados = lados;
    }
    set lados(lados) {
        this._lados = lados;
    }
    get lados(){
        return this._lados;
    }
    aleatorio() {
        return Math.ceil(Math.random() * this._lados);
    }
}