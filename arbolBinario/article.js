export default class Article{
    constructor(article){
        this._code = article.code;
        this._name = article.name;
        this._price = article.price;
        this._hijoIzq = null;
        this._hijoDer = null;
    }
    ////////////////////////Lectura
    get code(){
        return this._code;
    }
    get name(){
        return this._name;
    }
    get price(){
        return this._price;
    }
    get hijoDer(){
        return this._hijoDer;
    }
    get hijoIzq(){
        return this._hijoIzq;
    }
    //////////////////////////Escritura
    set hijoDer(hijoD){
        this._hijoDer = hijoD;
    }
    set hijoIzq (hijoI){
        this._hijoIzq = hijoI;
    }
    toString(){
        return "Code= " + this._code + " Name= " + this._name + " Price = $" + this._price;
    }
}