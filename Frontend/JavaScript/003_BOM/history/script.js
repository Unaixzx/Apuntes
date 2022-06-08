const verDatos = `
//Devuelve Número de URLs en el historial: <br>
Num URL: ${history.length}
`;
document.getElementById("ver").innerHTML = verDatos;

//Devolver URL anterior

const anteriorURL = () =>{history.back()}
const siguienteURL = () =>{history.forward()}
const go = () =>{
    const num = prompt("Numero");
    if(isNaN(num)){
        alert("Eso no es un número");
    }else{
      history.go(num);
    }
}