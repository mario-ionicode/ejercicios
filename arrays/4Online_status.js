/**
 * 
Online status
 

Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 
 * 
 * 
 */

 function UsuariosOnline(usuarios) {
  
    let usuario1y2 = [usuarios.shift()]; //se quita el primer elemento del array usuarios y se guarda en usuario1y2
    if (usuarios.length > 0) {   //la condicion evalua si la longitud de usuarios es mayor que 0 entonces
        usuario1y2.unshift(usuarios.shift()); //se quita el segundo usuario qeu hay en el array y se agrrga al principio la variable usuario1 y 2
    }
    
    let usuariosExtra = usuarios.length > 0 ? `${usuarios.length} más en línea` : "no hay otros usuarios"; //compara su la longitud del array usuarios que restan despue de tomar los dos primeros si es  mayor que 0 entonces se muestra la longitud restante del array con el mensaje i,mas en linea y si no es mayor se pone ya no hay otros usuarios.
    
   return usuario1y2[0] + ", " + usuario1y2[1] + ", " + usuariosExtra; //se devuelven los dos primeros valores del Array usuario1y2 y el numero de usuariosExtra

}

console.log(UsuariosOnline(['mockIng99', 'J0eyPunch', 'J0eyPunch','J0eyPunch'])); //se imprime en pantalla y se aplica la funcion UsuariosOnline al array

