//Buenas Prácticas

//‘use strict’
/*Si ponemos siempre esta sentencia al principio de nuestro código
  el intérprete nos avisará si usamos una variale sin declarar (muchas vecees por equivocarnos al escrbir su nombre). 
*/

"use strict";

x = 3.14;

console.log(x); //Uncaught ReferenceError: x is not defined

x = 3.14;
let x = 3.14;

console.log(x); //Uncaught ReferenceError: Cannot access 'x' before initialization

let z = 010;

console.log(z); //Uncaught SyntaxError: Octal literals are not allowed in strict mode

let y = 3.14;

console.log(y); //Bien, 3.14
