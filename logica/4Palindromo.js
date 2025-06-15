/**
 * 
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

 */


function palabraPalindromo(texto) {
    let textoLimpio = texto.toLowerCase().replace(/[^a-z]/g, ''); //convierte la palabra a minusculas y quita los espacios
    return textoLimpio === textoLimpio.split('').reverse().join('');  //compara la palabra convertida a miusculas con su version 
}

let palabra = prompt("Ingresa una palabra u oración para verificar si es un palíndromo:");

if (palabra) {
    console.log(palabraPalindromo(palabra) ? "Es un palíndromo." : "No es un palíndromo.");
}
