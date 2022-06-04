//Arrays

let arrayNum = [1, 2, 3, 4, 5];
let arrayString = [
  "Leche",
  "Cereales",
  "Melón",
  "Kiwis",
  "Plátanos ",
  "Mandarinas",
];
let arrayMezclado = [6, 7, 8, 9, "hola", "y", "adiós"];

let personas = [
  { nombre: "per1", edad: 44 },
  { nombre: "per2", edad: 47 },
  { nombre: "per3", edad: 33 },
  { nombre: "per4", edad: 27 },
  { nombre: "per5", edad: 90 },
  { nombre: "per6", edad: 19 },
];

//Métodos y propiedades

//Longitud de un Array
console.log(arrayNum.length); //Devuelve 5

//Cambiar longitud
arrayNum.length = 2;
console.log(arrayNum); //Muestra solo 1 y 2

//Añadir Elementos
arrayString.push("yogur", "chocolate");
console.log(arrayString);

//Eliminar Elementos

arrayString.pop(); //elimina el ultimo
console.log(arrayString);
arrayString.shift(); //elimina el primero
console.log(arrayString);
//arrayString.splice(2); //elimina el de la posición 2
//console.log(arrayString); //devuelve los elementos eliminados

//Pasar a Cadena
let lista = arrayString.join("-");
console.log(lista);

//Ordenar (alfabéticamente ) elementos.
console.log(arrayString.sort());

//Ordenar por edades un obj

let ordenadoEdades = personas.sort((p1, p2) => p1.edad - p2.edad);
console.log(ordenadoEdades);

//Cambiar orden

console.log(arrayString.reverse());

//Unir arrays
let unir = arrayNum.concat(arrayString);
console.log(unir);

//Programación Funcional
/*
   Intenta evitar los bucles for y while sobre arrays o listas de elementos.
   A la función se le pasa por parámetro la lista y la función que se debe aplicar.
*/

//Buscar

console.log(arrayString.find((arrayString) => arrayString === "Melón"));
console.log(personas.find((personas) => personas.nombre == "per1"));
//Filter devuelve un Array
console.log(arrayString.filter((arrayString) => arrayString === "Melón"));

//Every / some

console.log(personas.every((personas) => personas.nombre == "per1")); //false no todos lo cumplen
console.log(personas.some((personas) => personas.nombre == "per1")); //True al menos 1 si cumple

//Map
let pruebaMap = ["abril", "mayo", "junio", "julio"];

console.log(pruebaMap.map((pruebaMap) => pruebaMap.toLocaleUpperCase()));

//forEach

let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
arrayNotas.forEach((nota, indice) => {
  console.log("El elemento de la posición " + indice + " es: " + nota);
});

//Reduce
let sumarNotas = arrayNotas.reduce((total, notas) => (total += notas));
console.log(sumarNotas);

//Rest ...

let compra = (...articulos) => {
  articulos.map((a) => console.log(a));
};

compra("camiseta", "pantalones");
