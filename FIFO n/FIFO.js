export default class Fifo {
    constructor() {
        this._start = null;
        this._contador = 0;
    }
    get size() {
        return this._contador;
    }
    push(node) {
        if (this._start != null) {
            let objeto = this._start;
            while (objeto.next != null)
                objeto = objeto.next;
            objeto.next = node;
        } else
            this._start = node;
        this._contador++;
    }
    pop() {
        let temporal = null;
        if (this._start != null) {
            temporal = this._start;
            this._start = this._start.next;
        }
        this._contador--;
        return temporal;
    }
    peek() {
        return this._start;
    }
    print() {
        let temporal = this._start;
        let string = '';
        while (temporal != null) {
            string = string + '\n' + temporal.toString();
            temporal = temporal.next;
        }
        return string;
    }
}