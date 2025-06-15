/**
 * 
 * 
 * 
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

 */

function NumberHighest() { //se crea la funcion NumberHiguest
    let numeros = [];       //se declara la variable numeros
    
    for (i = 1; i <=10; i++) {      //se crea unciclo for para repetir una instruccion 10 veces
        let numero = parseInt(prompt(`Ingresa el número ${i}:`));     //  se crea la instruccion a repetir asignando el valor a la variable numero
        if (!isNaN(numero)) {     //se compara si numero es diferente a Not a Number entonces 
            numeros.push(numero);   //agrega el valor del numero al array numeros
        } 
    }
    la 
    const numeroMaximo = Math.max(...numeros);   //el metodo Math.max devuelve el valor mas alto de el arrat numeros y lo almacena en la variable numeroMaximo
    return `El número más alto es: ${numeroMaximo}`;      //devuelve el valor mas alto del array usando la variable Math.max
}





console.log(NumberHighest());   //muestra el valor que arroja la funcion.
