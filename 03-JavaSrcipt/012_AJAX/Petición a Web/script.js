let peticion = new XMLHttpRequest();
console.log("Estado inicial de la petición: " + peticion.readyState);

peticion.open("GET", "https://jsonplaceholder.typicode.com/users");
console.log("Estado de la petición tras el 'open': " + peticion.readyState);

peticion.send();
console.log("Petición hecha");

peticion.addEventListener("readystatechange", function () {
  console.log("Estado de la petición: " + peticion.readyState);
  if (peticion.readyState === 4) {
    if (peticion.status === 200) {
      console.log("Datos recibidos:");
      let usuarios = JSON.parse(peticion.responseText); // Convertirmos los datos JSON a un objeto
      console.log(usuarios);
      //Mostrar datos
      document.getElementById("mostrar").addEventListener("click", function () {
        for (usuario of usuarios) {
          let template = `
            <ul>
                <li>-Nombre: ${usuario.name}</li>
                <li>-Alias: ${usuario.username}</li>
                <li>-E-mail ${usuario.email}</li>
                <li>-Web ${usuario.website}</li>
            </ul>
            `;
          document.getElementById('ver').innerHTML += template;
        }
      });
    } else {
      console.log(
        "Error " +
          peticion.status +
          " (" +
          peticion.statusText +
          ") en la petición"
      );
    }
  }
});
console.log("Petición acabada");

//
