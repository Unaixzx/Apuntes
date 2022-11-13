//Manejo de errores

/*Debemos intentar capturar los posibles errores de nuestro código
  antes de que se produzcan.
  
  try: código que queremos proteger y cualquier error producido en él será pasado al bloque catch.
  catch: donde se trata el error.
  finally: e ejecuta tanto si se produce un error como si no.
  
  El parámetro que recibe catch es un objeto con las propiedades name, indica el tipo de error,
  y message, que indica el texto del error producido.
  throw: Lanza un error en la función  */

//Lanzar excepción
function banco(saldo, retirar) {
  if (saldo < retirar) {
    throw (
      "No puedes retirar más monedas que las que tienes en tu saldo: " + saldo
    );
  }
  return saldo - retirar;
}

//Recuperar excepción
try {
  console.log(banco(100,150) + " monedas");
} catch (error) {
    console.log(error);
}
