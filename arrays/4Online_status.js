/**
 * 
Online status
 

Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 
 * 
 * 
 */


const usuariosOnline=[];
for(i=1;i<=5;i++){
    //back tics alt +96
usuariosOnline.push(prompt(`ingresa el nombre de usuario ${i}`));



    
}

const  [firstElement,secondElement,... online] =usuariosOnline;

console.log(usuariosOnline);






