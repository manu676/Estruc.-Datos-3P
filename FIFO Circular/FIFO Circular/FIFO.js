export default class CircularListFIFO {
    constructor() {
        this._start = null;
        this._turnoSiguiente = null;
        this._contador = 0;
    }

    get size() {
        return this._contador;
    }

    get inTurn() {
        return this._turnoSiguiente;
    }

    nextNode() {
        if (this._turnoSiguiente != null) {
            this._turnoSiguiente = this._turnoSiguiente.next;
        }
    }

    push(data) {
        if (this._start != null) {
            let aux = this._start;
            while (aux.next != this._start)
                aux = aux.next;
                aux.next = data;
                data.next = this._start;
        } else {
            this._start = data;
            this._start.next = this._start;
            this._turnoSiguiente = this._start;
        }

        this._contador++;
    }

    pop() {
        if (this._turnoSiguiente != this._start) {
            let aux = this._start;
            while (aux.next != this._turnoSiguiente)
                aux = aux.next
            aux.next = aux.next.next;
            this._turnoSiguiente = aux.next.next;
        } else
            this._start = null;

        this._contador--;
    }
    recordTurns () {
        let string = "";
        if (this._start != null) {
            let aux = this._start;
            string = aux.toString();
            aux = aux.next;
            while (aux != this._start) {
                string = string + "\n" + aux.toString();
                aux = aux.next;
            }
        }
        return string;
    }

    TiempoRequerido(){
        let tiempoTotal = 0;
        if (this._start != null) {
            let aux = this._start;
            tiempoTotal = aux.timeRequired;
            aux = aux.next;
            while (aux != this._start) {
                tiempoTotal += aux.timeRequired;
                aux = aux.next;
            }
        }
        return tiempoTotal;
    }
}
