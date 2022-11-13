//Variables

/* Javascript es un lenguaje débilmente tipado,
    no se indica de qué tipo es una variable al declararla
    y su valor puede cambiar de tipo. */

/*Variables *** VAR ***
Las variables var existen en toda la función que se declara. */
console.log("---Var---");

var pruebaVar = 1;
console.log("Fuera de un bloque: " + pruebaVar);

if (true) {
  var pruebaVar = 2;
  console.log("Dentro de un bloque: " + pruebaVar);
}

console.log("Final: " + pruebaVar);

/*Variables *** LET ***
Las variables let sólo existen en el bloque que se declaran. */
console.log("---Let---");

let pruebaLet = 1;
console.log("Fuera de un bloque: " + pruebaLet);

if (true) {
  let pruebaLet = 2;
  console.log("Dentro de un bloque: " + pruebaLet);
}

console.log("Final: " + pruebaLet);

/*Variables *** CONST ***
Las variables constantes presentan un ámbito de bloque.
el valor de una constante no puede cambiarse a través de la reasignación.
Las constantes no se pueden redeclarar. */

const url = "https://www.const.com";


