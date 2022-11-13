//Desestructuración

//Arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [primero] = arr;
console.log(primero);

let [, , , cuarto] = arr;
console.log(cuarto);

let [uno, ...resto] = arr;
console.log(resto);

//Array de objetos

let alumnos = [
  { nombre: "juan", rol: "admin" },
  { nombre: "maria", rol: "user" },
  { nombre: "marcos", rol: "Super admin" },
  { nombre: "pedro", rol: "user" },
  { nombre: "mario", rol: "boss" },
];

let [, , marcos] = alumnos;
console.log(marcos);

let [, maria, ...otros] = alumnos;
console.log(maria);
console.log(otros);

//Objetos

const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
};

const {precio, disponible} = producto;
console.log(precio + " " + disponible);