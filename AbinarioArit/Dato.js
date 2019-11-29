export default class Dato{
    constructor(dato){
        this._dato = dato;
        this._sonRight = null;
        this._sonLeft = null;
        this._next = null;
        this._previous = null;
    }
    get dato(){
        return this._dato;
    }    
    set dato(dato){
        this._dato = dato;
    }
    get sonRight(){
        return this._sonRight;
    }
    get sonLeft(){
        return this._sonLeft;
    }
    set sonRight(sonRight){
        this._sonRight = sonRight;
    }
    set sonLeft(sonLeft){
        this._sonLeft = sonLeft;
    }
    get next(){
        return this._next;
    }
    get previous(){
        return this._previous;
    }
    set next(next){
        this._next = next;
    }
    set previous(previous){
        this._previous = previous;
    }
    toString(){
        return this._dato;
    }
}