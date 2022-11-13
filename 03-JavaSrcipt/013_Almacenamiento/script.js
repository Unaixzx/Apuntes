//Almacenamiento

//Dataset

const portatil = document.querySelector(".portatil");

console.log(portatil.dataset.marca);
console.log(portatil.dataset.modelo);
console.log(portatil.dataset.color);

//Localstorage

const localstorage = window.localStorage;

//Guardar Variable
localStorage.setItem("color", "rojo");
//Leer Variables
console.log(localStorage.getItem("color"));

//Guardar JSON
localStorage.setItem("colores", JSON.stringify(["rojo", "azul", "verde"]));
//Leer JSON
const colores = JSON.parse(localStorage.getItem("colores"));
console.log("----Iterar Colores----");
for (const c of colores) {
  console.log(c);
}

//Eliminar elementos
localstorage.removeItem("color");

//Eliminar todos los elementos
localstorage.clear();
