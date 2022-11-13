//Async Await
function descargarClientes() {
  return new Promise((resolve) => {
    console.log("Espere...");
    setTimeout(function () {
      resolve("Clientes Descagados");
    }, 3000);
  });
}

async function descarga() {
  try {
    const resultado = await descargarClientes();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

descarga();

console.log("No para la carga del codigo");

//Otro Ejemplo.

// const datos = [
//   {
//     id: 1,
//     nombre: "juan",
//     tel: 123456789,
//   },
//   {
//     id: 2,
//     nombre: "maria",
//     tel: 789456123,
//   },
//   {
//     id: 3,
//     nombre: "carlos",
//     tel: 963258741,
//   },
// ];

// const getDatosPromise = () => {
//   return new Promise((resolve, reject) => {
//     if (datos.length === 0) {
//       reject(new Error("no existen datos"));
//     }
//     setTimeout(() => {
//       resolve(datos);
//     }, 1500);
//   });
// };

// async function dataAwait() {
//   try {
//     const datosFinal = await getDatosPromise();
//     console.log("Await");
//     console.log(datosFinal);
//   } catch (error) {
//     console.log(error);
//   }
// }

// dataAwait();
