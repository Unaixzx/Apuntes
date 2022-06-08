//Eventos

//Recomendable poner el código que atiende a los eventos dentro de una función
//que se ejecute al producirse el evento load de la ventana.

window.onload = function () {
  function pulsado() {
    console.log("Con la función");
  }
};

// Event Listeners
//La forma recomendada de hacerlo es usando el método addEventListener.
//recibe como primer parámetro el nombre del evento a escuchar (sin ‘on’).
//como segundo parámetro la función a ejecutar (OJO, sin paréntesis)

window.onload = function () {
  document.getElementById("texto").addEventListener("mouseenter", cambiarTexto);

  function cambiarTexto() {
    document.getElementById("texto").style.backgroundColor = "teal";
  }

  //Con Función Anónima

  document.getElementById("texto").addEventListener("mouseleave", function () {
    document.getElementById("texto").style.backgroundColor = "";
  });
};

//Tipos de Eventos

/*
***Eventos de página***
Se producen en el documento HTML, normalmente en el BODY:

-load: se produce cuando termina de cargarse la página (cuando ya está construido el árbol DOM). Es útil para hacer acciones que requieran que el DOM esté cargado como modificar la página o poner escuchadores de eventos
-unload: al destruirse el documento (ej. cerrar)
-beforeUnload: antes de destruirse (podríamos mostrar un mensaje de confirmación)
-resize: si cambia el tamaño del documento (porque se redimensiona la ventana)


***Eventos de ratón***
Los produce el usuario con el ratón:

-click / dblclick: cuando se hace click/doble click sobre un elemento
-mousedown / mouseup: al pulsar/soltar cualquier botón del ratón
-mouseenter / mouseleave: cuando el puntero del ratón entra/sale del elemento (tb. podemos usar mouseover/mouseout)
-mousemove: se produce continuamente mientras el puntero se mueva dentro del elemento


***Eventos de teclado***
Los produce el usuario al usar el teclado:

-keydown: se produce al presionar una tecla y se repite continuamente si la tecla se mantiene pulsada
-keyup: cuando se deja de presionar la tecla
-keypress: acción de pulsar y soltar (sólo se produce en las teclas alfanuméricas)

***Eventos de toque***
Se producen al usar una pantalla táctil:

-touchstart: se produce cuando se detecta un toque en la pantalla táctil
-touchend: cuando se deja de pulsar la pantalla táctil
-touchmove: cuando un dedo es desplazado a través de la pantalla
-touchcancel: cuando se interrumpe un evento táctil.



***Eventos de formulario***
Se producen en los formularios:

-focus / blur: al obtener/perder el foco el elemento
-change: al perder el foco un <input> o <textarea> si ha cambiado su contenido o al cambiar de valor un <select> o un <checkbox>
-input: al cambiar el valor de un <imput> o <textarea> (se produce cada vez que escribimos una letra es estos elementos)
-select: al cambiar el valor de un <select> o al seleccionar texto de un <imput> o <textarea>
-submit / reset: al enviar/recargar un formulario
*/

/*
***Propagación de eventos (bubbling)***
Los eventos se propagarán en orden ascendente desde le elemento en el que se hace clic,
que es el de menor jerarquía, hasta sus padres, que son los de mayor jerarquía.
Este es el método que se usa por defecto.
*/

document.getElementById("btn1").addEventListener("click", function () {
  console.log("Pulsado btn1");
});

document.getElementById("container").addEventListener("click", function () {
  console.log("Pulsado container");
});

/*
***Propagación de eventos (Capturing)***
Los eventos se propagarán en orden inverso,
comenzando por los elementos de mayor jerarquía y descendiendo por su árbol de hijos
hasta los elementos de menor jerarquía.
Para ser Capturing debería tener el valor true.
*/
document.getElementById("btn2").addEventListener(
  "click",
  function () {
    console.log("Pulsado btn2");
  },
  true
);

document.getElementById("container2").addEventListener(
  "click",
  function () {
    console.log("Pulsado container (Capturing)");
  },
  true
);

// Scroll

document.addEventListener("scroll", function (evento) {
  const ultimaPosicion = window.scrollY;

  if (ultimaPosicion > 200) {
    alert(ultimaPosicion);
  }
});
