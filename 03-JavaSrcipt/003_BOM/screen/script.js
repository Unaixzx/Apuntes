const verDatos = `
//Tamaño Pantalla: <br>
Ancho: ${screen.width}<br>
Alto:${screen.width}<br>
<hr>  
//Tamaño Pantalla SIN BARRA: <br>
Ancho: ${screen.availWidth}<br>
Alto:${screen.availHeight}<br>
<hr>
//Profundidad de color: <br>
Color-Depth: ${screen.colorDepth}<br>
<hr>

`;
document.getElementById("ver").innerHTML = verDatos;
