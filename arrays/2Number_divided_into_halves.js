/**
 * 

Number divided into halves
 

Given a number, return the number divided into its halves in an array.


Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 
 */
/**

1a forma
let number= prompt("Escribe un numero:");
numDiv=number/2;
const numberDivide=[numDiv,numDiv];
console.log(numberDivide);
*/

//2a Forma
let number= prompt("Escribe un numero:");


const numberDivide=[number];

numDiv= number/2;

numberDivide.shift();

numberDivide.splice(0,2,numDiv,numDiv);

console.log(numberDivide);


//https://jscodez.com/javascript-metodos-slice-splice-concat/

