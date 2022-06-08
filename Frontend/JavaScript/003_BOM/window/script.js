let saludo = "holaa";
let saludo2 = `
      //Tamaño de la ventana (externo) <br>
      Alto: ${window.outerHeight}<br>
      Ancho: ${window.outerHeight}<br>
      <hr>
      //Tamaño de la ventana (Interna) <br>
      Alto: ${window.innerHeight}<br>
      Ancho: ${window.innerWidth}<br>
      <hr>
      //Devolver num pixel del scroll <br>
      Alto: ${window.scrollX}<br>
      Ancho: ${window.scrollY}<br>
      <hr>
      //Distancia con la esquina izq <br>
      Alto: ${window.screenX}<br>
      Ancho: ${window.screenY}<br>
      
      `;
document.getElementById("mostrar").innerHTML = saludo2;

//Crear ventana
const win = (window.name = "mi ventana");

//Tamaño de la ventana (externo)
const alto = window.outerHeight;
const ancho = window.outerWidth;

//Tamaño de la ventana (interna)
const altoIn = window.innerHeight;
const anchoIn = window.innerWidth;

//Devolver num pixel del scroll
const scrollX = window.pageXOffset;
const scrollY = window.pageYOffset;

//Distancia con la esquina izq
const screenX = window.screenX;
const screenY = window.screenY;
