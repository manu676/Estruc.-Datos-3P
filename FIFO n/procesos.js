export default class Procesos{
    constructor(){
    }
    procesosAleatorios(){
        let procesosAleatorios= Math.ceil(Math.random()*11)+3;
        return procesosAleatorios;
    }
    /*numeroProcesosAleatorios(){
        let counter = 0;
        let counter2 = 0;
        let counter3 =0;
        let counter4 = 0;
        for(let i=0; i <50;i++){
            let numero = Math.ceil(Math.random()*11)+3;
            console.log(numero);
            if(numero <4){
                counter++;
            }
            else if (numero == 4){
                counter2++;
            }else if (numero >4 && numero <=14){
                counter3++;
            }else{
                counter4++;
            }
        }
        console.log(counter);
        console.log(counter2);
        console.log(counter3);
        console.log(counter4);
    }*/
}
let m = new Procesos();
m.procesosAleatorios();