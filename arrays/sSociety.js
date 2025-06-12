/**
 * 
Secret Society
 

Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
 * 1 recibir un array que tiene nombres
 * 1.1  estos nombres enpiezan con mayus
 * 1.2 ordenar el array en orden alfabetico
 * 2. Inicializar una variable para guardar las iniciales
 * 3. utilizar un ciclo para rrecorrer el array
 * 4. obtener la primera letra de cada nombre utilizando la notacion
 * 5. pegar la inicial de cada nombre para saber el nombre de la sociedad secreta basado en la primera letra de cada nombe
 * 
 * 
 * 
 * 
 * 
 */

/**
 * ejemplo de recorrido a string como array
 * let nombre="mario";
 * console.log(nombre[3]);
 */

const secretName=function(namesArray){ //declaramos la funcion expression
   let societyName = ""; //inicializamos un strin vacio
   const sortedNames =namesArray.toSorted(); //declaramos un array con .toSorted() para ordenar alfabeticamente
   sortedNames.forEach((name) => societyName = societyName + name[0]);  // recorre el array ordenado sortedName y toma la primer letra de cada parabra 
   return societyName; //devuelve el string con las iniciales
 }
 console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));