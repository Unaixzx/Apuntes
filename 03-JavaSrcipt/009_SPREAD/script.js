/*
 *SPREAD Permite a elementos iterables ser expandidos.
 */

//Arrays

console.log(Math.max(0, 4, 9, 14, 19)); //19

const array = [0, 4, 9, 14, 19];
console.log(Math.max(array)); //NaN
console.log(Math.max(...array)); //19

//Concatenar dos arrays con spread

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrTotal = [...arr1, ...arr2];

console.log(arrTotal);

//Cadenas

let quijote = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme";
console.log([...quijote]);

//Funciones

function suma(a, b, c) {
  return a + b + c;
}
const arrSumar = [3,3,4];
console.log(suma(...arrSumar));

//Objetos
/*
Si las propiedades tienen el mismo nombre se sobrescribe.
*/