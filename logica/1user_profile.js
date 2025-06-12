let counter=0;
const nombre = prompt("ingresa tu nombre de usuario");
const edad = prompt("ingresa tu edad");

const peliculas=[];
//vamos a pedir 5 peliculas

//back tics
for(i=1;i<=5;i++){
    //back tics alt +96
peliculas.push(prompt(`ingresa la pelicula numero ${i}`));

    
}


console.log(`hola soy ${nombre} tengo ${edad} años y mis peliculas favoritas son:
    `);


while(counter<peliculas.length){//para leer el tamaño de cualquier array sin saber su tamaño
    console.log(`mi pelicula favorita numero ${counter + 1} es ${peliculas[counter]}`);
counter++;

}