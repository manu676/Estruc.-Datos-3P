import Dato from "./Dato.js";
import Operacion from "./Operacion.js";
import Cola from "./Cola.js";
import Stack from "./Pilas.js";

class Main{
    constructor(){
        this._operacion = new Operacion();
        this._cola = new Cola();
        this._pila = new Stack();
    }
    //Separa los caracteres para hacer lista doble
    separarCaracteres(){
        let cadena = document.querySelector("#dato").value;
        for(let i = 0; i < cadena.length; i++){
            this._operacion.addObjeto(new Dato(cadena.charAt(i)));
        }
        this._operacion.armarArbol();
        this.printInfoInOrder();        
    }
    printInfoInOrder(){
        this._operacion.recordInventoryIn();
        divIn.innerHTML = this._operacion.textIn;
    }
    printInfoPreOrder(){
        let divPre = document.querySelector("#divPre");
        this._operacion.recordInventoryPre();  
        let cadena = this._operacion.textPre;
        for(let i = 0; i < cadena.length; i++){
            this._pila.push(new Dato(cadena.charAt(i)));
        }
        this._pila.pop();   
        divPre.innerHTML = this._operacion.textPre +  " El resultado total es de = " + this._pila.resultado;
    }
    printInfoPostOrder(){
        let divPost = document.querySelector("#divPost");
        this._operacion.recordInventoryPost();
        let cadena = this._operacion.textPost;
        for(let i = 0; i < cadena.length; i++){
            this._cola.enqueue(new Dato(cadena.charAt(i)));
        }
        this._cola.dequeue();     
        divPost.innerHTML = this._operacion.textPost + " El resultado total es de = " + this._cola.resultado;
    }
}
let m = new Main();
let btnSeparar = document.querySelector("#btnSeparar").addEventListener("click", ()=>{
    m.separarCaracteres();
    console.log(m);
})
let btnPrintPre = document.querySelector("#btnOrderPre").addEventListener("click", () =>{
    m.printInfoPreOrder();
})
let btnPrintPost = document.querySelector("#btnOrderPost").addEventListener("click", () =>{
    m.printInfoPostOrder();
})
