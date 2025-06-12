/**
 * Reto de Programación: FizzBuzz
Descripción:

Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:

Si el número es múltiplo de 3, imprime "Fizz".

Si el número es múltiplo de 5, imprime "Buzz".

Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".

Si no es múltiplo de ninguno, imprime el número tal cual

1 : 100 numeros
2. crear un bucle
3. Si el número es múltiplo de 3, imprime "Fizz".
ocupar numero%3
es verdadero si modulo =0
4. Si el número es múltiplo de 5, imprime "Buzz".
i ocupar numero % 5

es verdadero si modulo =0
5. Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
i ocupar numero % 5 y 5 imprime FizzBuzz

es verdadero si modulo =0
6. Si no es múltiplo de ninguno, imprime el número tal cual

 */




/**tipo de funcion */
const fizzbuzz = (counterNumber) => {
    let counter = 1;
    do {
        if (counter % 3 === 0 && counter % 5 === 0) {
            console.log(`El numero es ${counter} es FizzBuzz`);
        } else if (counter % 3 === 0) {
            console.log(`El numero es ${counter} es Fizz`);
        }
        else if (counter % 5 === 0) {
            console.log(`El numero es ${counter} es Buzz`);
        } else {
            console.log(`${counter}`);
        }
        counter++;
    } while (counter <= counterNumber)

};
let first=prompt("escribe el valor de numeros que quieres consultar:");
console.log(`${first} veces`);
fizzbuzz(first);


let second=prompt("escribe el valor de numeros que quieres consultar:");
console.log(`${second} veces`);
fizzbuzz(second);