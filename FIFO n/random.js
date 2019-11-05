export default class Random{
    constructor(){
    }
    numerosAleatorios(){
        let numero = Math.ceil(Math.random()*100);
        return numero;
    }
    /*numerosAleatorios(){
        let number = 0;
        for(let i = 0; i<300; i++){
            number = Math.ceil(Math.random()*100);
            //console.log(number);
            if(number >=40){
                this._noProcess++;
            }
            else{
                this._withProcess++;
            }
        }
    }*/
}
//let m = new Random();
//m.numerosAleatorios();
//console.log(m);
/*console.log(m.noProcess);
console.log(m.withProcess);*/