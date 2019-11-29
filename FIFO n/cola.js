import FIFO from './FIFO.js';

export default class Cola {
    constructor() {
        this._FIFO = new FIFO();
        this._tiempoLibre = 0;
        this._procesosEsperando = 0;
        this._procesosTotales = 0;
        this._procesosTerminados = 0;
    }

    get tiempoLibre(){
        return this._tiempoLibre;
    }
    set tiempoLibre(libre){
        this._tiempoLibre = libre
    }

    get procesosEsperando(){
        return this._procesosEsperando;
    }

    get procesosTotales(){
        return this._procesosTotales;
    }

    get procesosTerminados(){
        return this._procesosTerminados;
    }

    add(newProceso) {
        this._FIFO.push(newProceso);
    }

    nextProceso() {
        if (this._FIFO.peek() != null) {
            this._FIFO.peek().tiempo--;
            if (this._FIFO.peek().tiempo === 0){
                this._FIFO.pop();
                this._procesosTerminados++;
            }
        } else
            this._tiempoLibre++;
        this._procesosEsperando = this._FIFO.size;

        if(this._FIFO.size > this._procesosTotales){
            this._procesosTotales = this._FIFO.size;
        }
    }

    procesosReporte() {
        return this._FIFO.print();
    }
}