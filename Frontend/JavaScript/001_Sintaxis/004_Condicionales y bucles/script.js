//Estructuras y Bucles

//Condicional If

console.log("---IF---");
if (false) {
  console.log("Es true");
} else {
  console.log("Es false");
}

//Condicional Switch
console.log("---Switch---");

const color = "azul";

switch (color) {
  case "rojo":
    console.log("Color es rojo");
  case "azul":
    console.log("Color es azul");
}

//Bucle while
console.log("---While---");

n = 1;
while (n <= 3) {
  console.log(n);
  n++;
}

//Bucle doWhile (Se ejecuta 1 vez)
console.log("---doWhile---");

x = 1;
do {
  console.log(x);
  x++;
  console.log(x);
} while (x == 0);

//Bucle for
console.log("---For---");

let lista = ["Cereales", "Leche", "Melón"];

for (i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

//Bucle for in
/*crea una variable contador que toma como valores la posición del elemento en el array */
console.log("---For...In---");

let cajon = ["Cuchara", "Tenedor", "Cuchillo"];

for (let indice in cajon) {
  console.log(cajon[indice]);
}

//Bucle for of
/*crea una variable contador que toma como valores cada elemento */
console.log("---For...Of---");

let palabra = "Hola";

for (let letra of palabra) {
  console.log(letra);
}
