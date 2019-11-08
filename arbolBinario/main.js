import Article from "./article.js";
import Inventory from "./inventoryTree.js";

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
        let newArticle = new Article(this.objetoInfo());
        this._initTable.addObject(newArticle);
        console.log(newArticle);
    }
    printInfoInOrder(){
        let divIn = document.querySelector("#divIn");
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
    deleteObject(){
        let codeDelete = document.querySelector("#codeDelete").value;
        this._initTable.quitFromInventory(codeDelete);
    }
    search(){
        let codeSearch = document.querySelector("#codeSearch").value;
        this._initTable.searchObject(codeSearch);
    }
}
let m = new Main();

let btnAdd = document.querySelector("#btnAdd").addEventListener("click", ()=>{
    m.sendInfoToSave();
    console.log(m);
    m.printInfoInOrder();
})
/*let btnPrintPre = document.querySelector("#btnPrintPre").addEventListener("click", () =>{
    m.printInfoPreOrder();
})
let btnPrintPost = document.querySelector("#btnPrintPost").addEventListener("click", () =>{
    m.printInfoPostOrder();
})
let btnDelete = document.querySelector("#btnDelete").addEventListener("click", ()=>{
    m.deleteObject();
})
let btnSearch = document.querySelector("#btnSearch").addEventListener("click", ()=>{
    m.searchObject();
})*/