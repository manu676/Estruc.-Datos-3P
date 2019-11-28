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
            let temporal = this._start;
            while (temporal.next != null)
                temporal = temporal.next;
            temporal.next = node;
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