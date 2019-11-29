import Dato from "./Dato.js";
import Operacion from "./Operacion.js";

class Main{
    constructor(){
        this._operacion = new Operacion();
    }
    //Separa los caracteres para hacer lista doble
    separarCaracteres(){
        let cadena = document.querySelector("#dato").value;
        for(let i = 0; i < cadena.length; i++){
            this._operacion.addObjeto(new Dato(cadena.charAt(i)));
        }
        //Hace el arbol mediante la lista ya hecha 
        this._operacion.armarArbol();

        //Imprime el orden normal 
        this.printInfoInOrder();
    }
    printInfoInOrder(){
        this._operacion.recordInventoryIn();
        divIn.innerHTML = this._operacion.textIn;
    }
    printInfoPreOrder(){
        let divPre = document.querySelector("#divPre");
        this._operacion.recordInventoryPre();
        divPre.innerHTML = this._operacion.textPre;
    }
    printInfoPostOrder(){
        let divPost = document.querySelector("#divPost");
        this._operacion.recordInventoryPost();
        divPost.innerHTML = this._operacion.textPost;
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
