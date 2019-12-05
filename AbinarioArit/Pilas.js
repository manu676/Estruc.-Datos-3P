export default class Stack{
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
    push(data) {
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
    pop(){
        this._realizarOperacion(this._tail);
    }
    _realizarOperacion(data){
        if(data!=null){
            while(data <9){
                data = data.previous;
            }
            if(data == "*"){
                let dato1 = Number(data.next.dato);
                let dato2 = Number(data.next.next.dato);
                let resultado = dato1*dato2;
                data.dato = resultado;;
                this._resultado = dato1*dato2;
                this.quitFromInventory(data.next);
                this.quitFromInventory(data.next);
                this._realizarOperacion(data.previous);
            }else if(data == "+"){
                let dato1 = Number(data.next.dato);
                let dato2 = Number(data.next.next.dato);
                let resultado = dato1+dato2;
                data.dato = resultado;
                this._resultado = dato1+dato2;
                this.quitFromInventory(data.next);
                this.quitFromInventory(data.next);
                this._realizarOperacion(data.previous);
            }else if(data == "/"){
                let dato1 = Number(data.next.dato);
                let dato2 = Number(data.next.next.dato);
                let resultado = dato1/dato2;
                data.dato = resultado;
                this._resultado = dato1/dato2;
                this.quitFromInventory(data.next);
                this.quitFromInventory(data.next);
                this._realizarOperacion(data.previous);
            }
            else if(data == "-"){
                let dato1 = Number(data.next.dato);
                let dato2 = Number(data.next.next.dato);
                let resultado = dato1-dato2;
                data.dato = resultado;
                this._resultado = dato1-dato2;
                this.quitFromInventory(data.next);
                this.quitFromInventory(data.next);
                this._realizarOperacion(data.previous);
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
                let objeto = data;
                if (objeto === this._tail) {
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
        }
    }
}