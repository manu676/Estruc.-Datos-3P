import FIFO from './FIFO.js';

export default class Cola {
    constructor() {
        this._FIFO = new FIFO();
        this._iteraciones = 0;
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
    get iteraciones(){
        let fifo = this._FIFO.TiempoRequerido()
        return this._iteraciones = fifo;
    }
    set iteraciones(iteraciones){
        this._iteraciones = iteraciones
    }
    get procesosEsperando(){
        return this._procesosEsperando;
    }
    set procesosEsperando(procesosEsperando){
        this._procesosEsperando = procesosEsperando
    }
    get procesosTotales(){
        return this._procesosTotales;
    }
    set procesosTotales(procesosTotales){
        this._procesosTotales = procesosTotales
    }
    get procesosTerminados(){
        return this._procesosTerminados;
    }
    set procesosTerminados(procesosTerminados){
        this._procesosTerminados = procesosTerminados
    }
    add(newProceso) {
        this._FIFO.push(newProceso);
    }

    nextProceso() {
        if (this._FIFO.tSiguiente != null) {
            this._FIFO.tSiguiente.tiempo--;
            if (this._FIFO.tSiguiente.tiempo === 0) {
                this._FIFO.delete();
                this._procesosTerminados++;
            }
            else
                this._FIFO.nextTurno();
        } else
            this._tiempoLibre++;

        if (this._procesosTotales < this._FIFO.contador)
            this._procesosTotales = this._FIFO.contador;
        this._procesosEsperando = this._FIFO.contador;
    }

    procesosReporte() {
        return this._FIFO.recordTurns();
    }
}