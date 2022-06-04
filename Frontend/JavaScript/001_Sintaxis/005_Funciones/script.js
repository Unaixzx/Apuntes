//Funciones

/*Se declaran con function.
  Se le puede pasar parámetros y al llamarlas argumentos.
  hoisting: el navegador primero carga todas las funciones
  y mueve las declaraciones de las variables al principio y luego ejecuta el código.
*/
console.log("Funciones nomales");
function saludar(nombre) {
  console.log("Hola: " + nombre);
}

//Lamar a saludar pasando "arkadiusz " como argumento.
saludar("Arkadiusz ");

//Funcion asignada a una variable o Anónimas
console.log("Función Anónima");
const sumar = function (a, b) {
  return (total = a + b);
};

console.log("Asignada a una variable: " + sumar(4, 6));

//Funciones Flecha(Arrow)

/*Sintaxis (param1,param2) => { Sentencia};
            (param1,param2) => expresion;
            () => { Sentencia, return ...};
            true => {sentencia} */
console.log("Función Flecha");

let error = (msg)=>{return ("Error:  " + msg)};

//Otro ejemplo
let error2 = (msg)=>("Error:  " + msg);

console.log(error("404"));
console.log(error2("505"));

//Funciones IIFE
/*Funciones que se ejecutan tan pronto como se definan */

(function(){
  console.log("Función IIFE ");
})();