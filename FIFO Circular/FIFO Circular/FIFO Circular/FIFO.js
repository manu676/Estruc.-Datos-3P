export default class CircularListFIFO {
    constructor() {
        this._start = null;
        this._turnoSiguiente = null;
        this._contador = 0;
    }
    get contador() {
        return this._contador;
    }
    get tSiguiente() {
        return this._turnoSiguiente;
    }
    tiempo(){
        let tiempoTotal = 0;
        if (this._start != null) {
            let objeto = this._start;
            tiempoTotal = objeto.tiempo;
            objeto = objeto.next;
            while (objeto != this._start) {
                tiempoTotal += objeto.tiempo;
                objeto = objeto.next;
            }
        }
        return tiempoTotal;
    }
    nextTurno() {
        if (this._turnoSiguiente != null) {
            this._turnoSiguiente = this._turnoSiguiente.next;
        }
    }
    push(data) {
        if (this._start != null) {
            let tempo = this._start;
            while (tempo.next != this._start)
                tempo = tempo.next;
                tempo.next = data;
                data.next = this._start;
        } else {
            this._start = data;
            this._start.next = this._start;
            this._turnoSiguiente = this._start;
        }

        this._contador++;
    }
    delete() {
        if (this._turnoSiguiente != this._start) {
            let objeto = this._start;
            while (objeto.next != this._turnoSiguiente){
                objeto = objeto.next
            }
            this._start = objeto.next;
            this._turnoSiguiente = objeto.next.next;
        } else
            this._start = null;

        this._contador--;
    }
    recordTurns () {
        let string = "";
        if (this._start != null) {
            let objeto = this._start;
            string = objeto.toString();
            objeto = objeto.next;
            while (objeto != this._start) {
                string = string + "\n" + objeto.toString();
                objeto = objeto.next;
            }
        }
        return string;
    }
}
