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
    set startnew(start){
        this._start = start;
    }
    _checkExist(code){
        console.log(code);
        let object = null;
        if(this._start === null){
            return object;
        }else{
            object = this._continueCheck(code,this._start);
            return object;
        }
    }
    _continueCheck(code,raiz){  
        if(raiz.code === code){
            return raiz;
        }else{
            if(raiz.code < code){
                if(raiz.hijoDer != null){
                    return this._continueCheck(code,raiz.hijoDer);
                }
                else
                    return null;
            }else if(raiz.code > code){
                if(raiz.hijoIzq !=null){
                    return this._continueCheck(code,raiz.hijoIzq);
                }else{
                    return null;
                }
            }
        }
    }
    addObject(data){
        console.log(data);
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
                console.log(raiz.hijoIzq);
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
    consultCodeSearch(code){
        let exist = this._checkExist(code);
        console.log(exist);
        if(exist == null){
            return null
        }else{
            return exist;
        }
    }
    recordInventoryIn(){
        /// Izq, Raiz, Derecha
        this._orderInText();
    }
    _orderInText(){
        this._textIn = "";
        if(this._start == null){
            this._textIn = "No hay nada";
        }else{
            this._textIn += this._orderIn(this._start);
        }
    }
    _orderIn(start){
        let temp = "";
        if(start.hijoIzq !=null){            
            temp += this._orderIn(start.hijoIzq);
        }
        temp += start.toString() + "<br>";
        if(start.hijoDer !=null){
            temp += this._orderIn(start.hijoDer);
        }
        return temp;
    }
    recordInventoryPre(){
        /// Raiz, Izq, Dere
        this._orderPreText();
        
    }
    _orderPreText(){
        this._textPre = "";
        if(this._start == null){
            this._textPre = "No hay nada";
        }else{
            this._textPre += this._orderPre(this._start);
        }
    }
    _orderPre(start){
        let temp = "";
        temp += start.toString() + "<br>";
        if(start.hijoIzq !=null){            
            temp += this._orderPre(start.hijoIzq);
        }
        if(start.hijoDer !=null){
            temp += this._orderPre(start.hijoDer);
        }
        return temp;
    }
    recordInventoryPost(){
        /// Izq, Dere, Raiz
        this._orderPostText();
    }
    _orderPostText(){
        this._textPost = "";
        if(this._start == null){
            this._textPost = "No hay nada";
        }else{
            this._textPost += this._orderPost(this._start);
        }
    }
    _orderPost(start){
        let temp = "";
        if(start.hijoIzq !=null){            
            temp += this._orderPost(start.hijoIzq);
        }
        if(start.hijoDer !=null){
            temp += this._orderPost(start.hijoDer);
        }
        temp += start.toString() + "<br>";
        return temp;
    }
}