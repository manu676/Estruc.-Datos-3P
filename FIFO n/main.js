import Random from "./random.js";
import Procesos from "./procesos.js";
import Colas from "./cola.js";

class Main{
    constructor(){
        this._timeProcesos = new Procesos();
        this._random = new Random();
        this._noProcess = 0;
        this._withProcess = 0;
        this._colas = new Colas();
    }
    get noProcess(){
        return this._noProcess;
    }
    get withProcess(){
        return this._withProcess;
    }
    iniciarTrabajo(){
        for(let i = 0; i<50;i++){
            let aleatorio = this._random.numerosAleatorios();
            let procesosAleatorios = this._timeProcesos.procesosAleatorios();
            
            if(aleatorio >39){
                this._noProcess++;
            }
            else{
                this._colas.add(new Work(aleatorio,procesosAleatorios);
                this._withProcess++;
            }
            
            console.log(aleatorio);
            console.log(procesosAleatorios);
        }
    }
}
var m = new Main();
m.iniciarTrabajo();
console.log(m);
console.log(m.noProcess);
console.log(m.withProcess);
/*let btnIniciar = document.querySelector("#btnStar").addEventListener("click", ()=>{
    
})*/