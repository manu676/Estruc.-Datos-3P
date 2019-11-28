export default class Process{
    constructor(contador,tiempo){
        this._contador = contador;
        this._tiempo = tiempo;
        this._next = null;
    }
    get tiempo(){
        return this._tiempo;
    }    
    set tiempo(tiempo){
        this._tiempo = tiempo;
    }
    get next(){
        return this._next;
    }

    set next(next){
        this._next = next;
    }
    toString(){
        return "Tiempo a ocupar: " + this._tiempo;
    }
}
