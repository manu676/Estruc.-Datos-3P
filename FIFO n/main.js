import Random from './random.js';
import Work from './work.js';
import Cola from './cola.js';

document.querySelector('#btnStart').addEventListener('click', () => {
    let P1 = new Cola();
    let dRandomNumber = new Random(100);
    let dRandomProcess = new Random(11);
    for (let i = 1; i <= 300; i++) {
        if(dRandomNumber.aleatorio() <= 39){
            P1.add(new Work(i, dRandomProcess.aleatorio() + 3 ));
            P1.nextProceso();
            console.log("Reporte : " + P1.procesosReporte());
        }else{
            var free = P1.tiempoLibre++;
        }
        
    }
    let total = P1.tiempoLibre + P1.procesosTotales + P1.procesosTerminados;
    console.log("Total de iteraciones " + total);
    console.log("Procesos completados al 100% " + P1.procesosTerminados);
    console.log("Sin trabajo: " + free);
    console.log("Procesos pendiente " + P1.procesosTotales);
    
    
});