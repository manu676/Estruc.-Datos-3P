export default class Inventory{
    constructor(){
        this._start = null;
        this._textIn = "";
        this._textPre = "";
        this._textPost = "";
    }
    get start(){
        return this._start;
    }
    get textIn(){
        return this._textIn;
    }
    get textPre(){
        return this._textPre;
    }
    get textPost(){
        return this._textPost;
    }
    addObject(data){
        if(this._start == null){
            this._start = data;
        }else{
            this._nextStart(data,this._start);
        }
    }
    _nextStart(data,raiz){
        if(data.code < raiz.code){
            if(raiz.hijoIzq == null){
                raiz.hijoIzq = data;
            }else{
                this._nextStart(data, raiz.hijoIzq);
            }
        }else{
            if(raiz.hijoDer == null){
                raiz.hijoDer = data;   
            }else{
                this._nextStart(data, raiz.hijoDer)
            }
        }
    }
    recordInventoryIn(){
        /// Izq, Raiz, Derecha
        this._textIn += this._orderIn();
    }
    _orderIn(node = this._start){
        if(!node){
            return
        }
            this._orderIn(node.hijoDer);
            console.log(node.value);
            this._orderIn(node.hijoIzq);
        }
    recordInventoryPre(){
        /// Raiz, Izq, Dere
        
    }
    recordInventoryPost(){
        /// Izq, Dere, Raiz
    }
}