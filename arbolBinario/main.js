import Article from "./article.js";
import Inventory from "./inventoryTree.js";

let divIn = document.querySelector("#divIn");

class Main{
    constructor(){
        this._initTable = new Inventory()
    }
    objetoInfo(){
        let objeto ={
            code : document.querySelector("#code").value,
            name : document.querySelector("#name").value,
            price : document.querySelector("#price").value
        };
        return objeto;
    }
    sendInfoToSave(){
        divIn.innerHTML= "";
        let newArticle = new Article(this.objetoInfo());
        this._initTable.addObject(newArticle);
        this.printInfoInOrder();
        
    }
    printInfoInOrder(){
        this._initTable.recordInventoryIn();
        divIn.innerHTML = this._initTable.textIn;
    }
    printInfoPreOrder(){
        let divPre = document.querySelector("#divPre");
        this._initTable.recordInventoryPre();
        divPre.innerHTML = this._initTable.textPre;
    }
    printInfoPostOrder(){
        let divPost = document.querySelector("#divPost");
        this._initTable.recordInventoryPost();
        divPost.innerHTML = this._initTable.textPost;
    }
    searchObject(){
        let divResult = document.querySelector("#divSearch");
        let codeSearch = document.querySelector("#codeSearch").value;
        let consult = this._initTable.consultCodeSearch(codeSearch);
        console.log(consult);
        if(consult != null){
            divResult.innerHTML = consult.toString();
        }
    }
}
let m = new Main();

let btnAdd = document.querySelector("#btnAdd").addEventListener("click", ()=>{
    m.sendInfoToSave();
    console.log(m);
})
let btnPrintPre = document.querySelector("#btnOrderPre").addEventListener("click", () =>{
    m.printInfoPreOrder();
})
let btnPrintPost = document.querySelector("#btnOrderPost").addEventListener("click", () =>{
    m.printInfoPostOrder();
})
let btnSearch = document.querySelector("#btnSearch").addEventListener("click",()=>{
    m.searchObject();
})