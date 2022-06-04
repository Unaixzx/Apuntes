//Numbers
/* No existen enteros y decimales.
   El tipo de dato para cualquier número es number.  */

//Number
const x = 10;
const a = "texto";
//Pasar número a cadena
console.log(typeof x.toString()); //String

//Cambiar base
console.log(x.toString(2)); //Binario
console.log(x.toString(8)); //Octal
console.log(x.toString(16)); //Hexadecimal

//Infinito
// let infinito = 4;
// while (infinito != Infinity){
//     console.log(infinito);
//     infinito *= infinito;
// }

//Not a number
console.log(isNaN(a * x)); //True

//Número como Obj
const numObj = new Number(4);

console.log(typeof numObj); //Object
console.log(typeof x); //Number

//Establecer decimales
const z = 10.4587;
console.log(z.toFixed(2));

//Establecer num de cifras
console.log(z.toPrecision(5));

//Redondear num a notación científica
console.log(z.toExponential());

//parse
//parseFloat y parseInt

//Es entero
console.log(Number.isInteger(13.45)); //False

//Es NaN (Number)

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(x * "hola")); //true
console.log(Number.isNaN(45)); //false
console.log(isNaN(x * "hola")); //true

//Evitar pérdida de precisión num integers
console.log(Number.isSafeInteger(500)); //true
console.log(Number.isSafeInteger(999999999999999999)); //false
