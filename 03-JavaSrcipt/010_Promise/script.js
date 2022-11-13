//Promise
/*
-resolve: cuando el promise se cumple.
-reject: cunado no se cumple.

Valores:
-Pending: En espara.
-Fulfiled: Se cumplio.
-Reject: Rechazado no se cumple.
*/
const authUser = new Promise((resolve, reject) => {
  const auth = true;

  if (auth) {
    resolve("Usuario Autenticado");
  } else {
    reject("No se puede conectar");
  }
});

console.log(authUser);

authUser
  .then(function (respuesta) {
    console.log(respuesta);
  })
  .catch(function (error) {
    console.log(error);
  });
