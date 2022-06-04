//String

const texto =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde pariatur dolorum earum excepturi. Laboriosam excepturi amet doloremque temporibus. Animi, repellendus! Cupiditate dolores quae commodi quis, rerum excepturi ad fuga tempora.";

const texto2 =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde pariatur dolorum earum excepturi. Laboriosam excepturi amet doloremque temporibus. Animi, repellendus! Cupiditate dolores quae commodi quis, rerum excepturi ad fuga tempora.";
const err = "a-error";
//String
//Bucar carater
console.log(texto.charAt(1)); //devuelve o

//Devolver primera posición de un caracter
console.log(texto.indexOf("i")); // devuelve posición 6

//Buscar una cadena o expresión regular en otra cadena
console.log(texto.search("dolor")); //Devuelve la posición 12

//Comparar devuelve -1(antes), 0(igual), 1(despues)
console.log(texto.localeCompare(texto2)); // devuelve 0
console.log("a".localeCompare("b")); // devuelve -1

//Incluye, empieza o termina
console.log(err.includes("error")); // devuelve true

//Concatenar
console.log(err.concat("-no da fallo"));

//Extraer
console.log(texto.slice(6, 12)); //devuelve ipsum

//Divide la cadena en un array
console.log(texto.split(" ")); //devuelve un array. Separa por espacio.

//Empieza por...
console.log(texto.startsWith("hola")); //devuelve false
