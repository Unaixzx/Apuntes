/*
 *REST nos permite representar un número indefinido de argumentos como un array.
 */

 console.log("--------------ES5-----------------------");
//ES5
/*
Arguments tiene TODOS los argumentos 
*/
function numerosES5(uno, dos) {
  console.log("uno =" + uno);
  console.log("dos =" + dos);
  console.log("Resto de argumentos: " + arguments);
  console.log("Longitud: " + arguments.length);
  for (const argument of arguments) {
    console.log(argument);
  }
}

numerosES5(1,2,3,4,5,6,7,8,9,10);



console.log("--------------ES6-----------------------");
//ES6
/*
...rest almacena solo los argumentos restantes(Los que no se pasan por parametro)
*/
function numerosES6(uno, dos, ...rest) {
  console.log("uno =" + uno);
  console.log("dos =" + dos);
  console.log("Resto de argumentos: " + rest);
  console.log("Longitud: " + rest.length);
  for (const r of rest) {
    console.log(r);
  }
}

numerosES6(1,2,3,4,5,6,7,8,9,10);
