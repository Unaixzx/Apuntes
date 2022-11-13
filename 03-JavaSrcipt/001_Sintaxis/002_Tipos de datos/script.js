//Tipos de datos

let a = "hola";
let b = 4;
let c = true;
let d = new Date();

//Saber el tipo de dato typeof
console.log("---Tipo de datos---");
console.log(a + " tipo: " + typeof a);
console.log(b + " tipo: " + typeof b);
console.log(c + " tipo: " + typeof c);
console.log(d + " tipo: " + typeof d);

//Casting variables
/*Javascript realiza automáticamente las conversiones necesarias para,
 si es posible, realizar la operación. */

console.log("---Casting---");
console.log(4 + "4"); //Devuelve 44 *** Hace casting del number al stirng***
console.log(4 - "4"); //Devuelve 0
console.log(4 * "4"); //Devuelve 16
console.log(4 * null); //Devuelve 0(null y false = 0 )
console.log(4 - true); //Devuelve 3
console.log(4 * undefined); //Devuelve NaN

