/**
 * 
 * 
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
 */

function activarAlarma() {                                                                 //se crea la funcion activar Alarma
    let segundos = parseInt(prompt("Ingresa la cantidad de segundos para la alarma:"));         //se crea el prompt y se guarda la variable en segundos
    let mensaje = prompt("Escribe el mensaje de la alarma:");           //se crea el prompt para guardar el mensaje

    if (isNaN(segundos) || segundos <= 0) {                                 //comparamos si los segundos son Not a Number o segundos es menor o igual que 0 entonces
        console.log("Por favor, ingresa un número válido de segundos.");    //pedirmos a usuario que intente otraves
        return;                                                             
    }


    setTimeout(() => {
        console.log(`${mensaje}`);              //usamos setTimeout() para validar los segundos e imprimir el mensaje al finalizar el tiempo.
    }, segundos * 1000); 
}


console.log(activarAlarma());       //mandamos a llamar la funcion activarAlarma()
