export default class Cola{
    constructor(){
        this._inicial = null;
        this._tail = null;
        this._resultado = 0;
    }
    get inicial(){
        return this._inicial;
    }
    get resultado(){
        return this._resultado;
    }
    get tail(){
        return this._tail;
    }
    set tail(tail){
    this._tail = tail
    }
    set inicial(inicial){
        this._inicial = inicial;
    }
    set resultado(resultado){
        this._resultado = resultado;
    }
    enqueue(data) {
        if (this._inicial == null) {
            this._inicial = data;
        } else {
            this._nextStart(data, this._inicial);
        }
        this._tail = data;
    }
    _nextStart(data, inicio) {
        if (inicio.next == null) {
            inicio.next = data;
            data.previous = inicio;
        } else {
            this._nextStart(data, inicio.next);
        }
    }
    dequeue(){
        this._realizarOperacion(this._inicial);
    }
    _realizarOperacion(data){;
        if(data!=null){
            while(data <9){
                data = data.next;
            }
            if(data == "*"){
                let dato1 = Number(data.previous.dato);
                let dato2 = Number(data.previous.previous.dato);
                let resultado = dato2*dato1;
                data.dato = resultado;
                this._resultado = dato2*dato1;
                this.quitFromInventory(dato1);
                this.quitFromInventory(dato2);
                this._realizarOperacion(data.next);
            }else if(data == "+"){
                let dato1 = Number(data.previous.dato);
                let dato2 = Number(data.previous.previous.dato);
                let resultado = dato2+dato1;
                data.dato = resultado;
                this._resultado =  dato2+dato1;
                this.quitFromInventory(dato1);
                this.quitFromInventory(dato2);
                this._realizarOperacion(data.next);
            }else if(data == "/"){
                let dato1 = Number(data.previous.dato);
                let dato2 = Number(data.previous.previous.dato);
                let resultado = dato2/dato1;
                data.dato = resultado;
                this._resultado =  dato2/dato1;
                this.quitFromInventory(dato1);
                this.quitFromInventory(dato2);
                this._realizarOperacion(data.next);
            }else{
                let dato1 = Number(data.previous.dato);
                let dato2 = Number(data.previous.previous.dato);
                let resultado = dato2-dato1;
                data.dato = resultado;
                this._resultado =  dato2-dato1;
                this.quitFromInventory(dato1);
                this.quitFromInventory(dato2);
                this._realizarOperacion(data.next);
            }
        }   
    }
    quitFromInventory(data) {
        if (data == null) {
            return console.log("No existe ese producto con ese codigo");
        } else {
            if (data == this._inicial.dato) {
                this._inicial = this._inicial.next;
                if (this._inicial != null) {
                    this._inicial.previous = null;
                }
                if (this._inicial == this._tail) {
                    this._tail = null;
                }
            } else {
                this._find(data);
            }
        }
    }

    _find(code) {
        let objeto = this._nextData(code, this._inicial);
        if (objeto == null) {
            return "Error";
        } else if (objeto === this._tail) {
            if (objeto.previous == this._inicial) {
                this._tail = objeto.previous;
                this._inicial.next = null;
            } else {
                this._tail = objeto.previous;
                objeto.previous.next = null;
            }
        } else {
            objeto.next.previous = objeto.previous;
            objeto.previous.next = objeto.next;
            objeto = null;
        }
    }
    _nextData(code, start) {
        while (start != null) {
            if (start.dato == code) {
                return start;
            }
            start = start.next;
        }
        return null;
    }
}