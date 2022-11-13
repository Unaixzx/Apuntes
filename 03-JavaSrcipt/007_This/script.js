//This

/*
La keyword this hace referencia a su “propietario”.
Su valor dependerá del lugar desde la cual sea invocada.

*/

//Scope Global
console.log("Global: " + this === window); //false
console.log(this === window); // true

//En un Método
//this hace referencia al “propietario” de dicho método.

const coche = {
  ruedas: 4,
  color: "rojo",
  toString: function () {
    return `El coche es ${this.color} tiene ${this.ruedas} ruedas`;
  },
};

console.log(coche.toString());

//En una función
//Hace referencia al objeto global
//En 'use strict' this = undefined
function prueba() {
  return this;
}

console.log(prueba()); //Objeto Window

//Funciones Flecha
//No bindean su propio this, heredan del scope padre'Exterior'.

const flecha = () => {
  return this;
};

console.log(flecha()); //Objeto Window

const coche2 = {
  ruedas: 4,
  color: "rojo",
  toString: () => {
    return `El coche es ${this.color} tiene ${this.ruedas} ruedas`;
  },
};

console.log(coche2.toString()); // Undefined (Buscar window.color y window.ruedas)

//Bindeo
//El método bind() crea una nueva función que,
//al ser invocada, asigna a this el valor que se le pasa por parámetro.

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
console.log(person.fullName());
console.log(fullName());
