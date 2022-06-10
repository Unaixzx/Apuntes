//Ajax

document.getElementById("cambiar").addEventListener("click", cambiarContenido);

function cambiarContenido() {
  const http = new XMLHttpRequest();

  //Comprobar solicitud
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this);
      document.getElementById("response").innerHTML = this.responseText;
    }
  };
  //Método, nombre archivo, true/false(Asyn)
  http.open("GET","Documento de texto.txt",true);
  http.send();
  
}
