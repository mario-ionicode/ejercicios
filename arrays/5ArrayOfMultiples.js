/**
 * 
 *
Array of Multiples
 

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 * 
 * 
 */


function multiplosArr(num, long) {// creamos la funcion y asignamos los parametros num(numero) y long(longitud) 
    let resultado = []; //se crea una variable y se asigna a un array vacio
    for (i = 1; i <= long; i++) { //se crea un ciclo for para hacer el recorrido de 0 hasta el valor de long y con un aumento de 1
        resultado.push(num * i); // se agregan os elementos al nuevo array con push y se hace la operacion de num * el valor de i
    }
    return resultado; //se devuelve el resultado en un array nuevo
}

console.log(multiplosArr(2, 10)); //se muestra los resultados 
console.log(multiplosArr(17, 6)); //se mjestran resultados
