/**
 * 
 * 

Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 * 
 * 
 * 
 * 
 */
function arrayPositivo(dominancia) { //Se declara la funcion arrayPositivo
    let dominanciaPositiva = 0;     //se declaran las variables 
    let dominanciaNegativa = 0;

    for (i = 0; i < dominancia.length; i++) { //se crea un ciclo for, para recorrer el array dominancia

        if (dominancia[i] > 0){             //se crea la condicion si el valor del array es mayor que 0 
             dominanciaPositiva++;             //se incrementa el recorrido en 1 en la variable dominancia positiva y se guarda

         } else if (dominancia[i] < 0)          //si no si dominancia es menor que 0 
            {
                dominanciaNegativa++;            //se incrementa el recorrido en 1 en la variable dominancia Negativa y se guarda

            }
    }

    return dominanciaPositiva > dominanciaNegativa;   //se hace una comparacion si la dominanciaPositiva es mayor se devulve un true(positivo) si no un false
}

console.log(arrayPositivo([-1, -3, -5, 4, 6767])); 
console.log(arrayPositivo([-1, 3, -5, 4, 2])); 
