/**
 * 

Number divided into halves
 

Given a number, return the number divided into its halves in an array.

Número dividido en mitades.
 Dado un número, retorna el número dividido en sus mitades en un arreglo.

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 
 */


let number= prompt("Escribe un numero:");
numDiv=number/2;
const numberDivide=[];
numberDivide.push(numDiv);
numberDivide.unshift(numDiv);
console.log(numberDivide);



