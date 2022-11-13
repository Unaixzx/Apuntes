// Métodos de Objetos

const portatil = {
  marca: "HP",
  modelo: "4044",
  disponible: true,
  toString() {
    console.log(
      `El portatil ${this.marca} modelo ${this.modelo} ${(this.disponible = true
        ? "esta disponible"
        : "no esta disponible")} `
    );
  },
};

/* 
*Object.create()
Se usa  para crear un nuevo objeto y vincularlo al prototipo de un objeto existente.
*/
console.log("----create----");

portatil.toString();

const lenovo = Object.create(portatil);
lenovo.marca = "lenovo";
lenovo.modelo = "ln-900";
lenovo.disponible = true;

lenovo.toString();

/* 
*Object.keys()
Crea una matriz que contiene las claves de un objeto.
*/
console.log("----keys----");

const keys = Object.keys(portatil);
console.log(keys);

//Iterar matriz
keys.forEach((key) => {
  let valor = portatil[key];
  console.log(`${key} => ${valor}`);
});

/* 
*Object.values()
Crea una matriz que contiene los valores de un objeto.
*/
console.log("----values----");

const values = Object.values(portatil);

console.log(values);

/* 
*Object.entries()
Crea una matriz anidada con los pares clave-valor de un objeto.
*/
console.log("----entries----");

const entries = Object.entries(lenovo);

console.log(entries);
console.log(entries[0][0]);
console.log(entries[0][1]);

entries.forEach((entry) => {
  let key = entries[0];
  let value = entries[1];

  console.log(`${key} => ${value}`);
});

/* 
*Object.assign()
Copia valores de un objeto a otro.
Podemos crear dos objetos y fusionarlos con Object.assign().
*/
console.log("----assign----");

const alumno = {
  nombre: "Pedro",
  correo: "email@dominio.com",
};

const info = {
  curso: "Programación",
  tutor: "Alfredo",
};

const alumnoTotal = Object.assign(alumno, info);

console.log(alumnoTotal);

/* 
*Object.freeze()
Impide la modificación de propiedades y valores de un objeto,
y evita que se agreguen propiedades a un objeto o que se eliminen de él.
*/
console.log("----freeze----");

const coche = {
  ruedas: 4,
  color: "rojo",
};

const nuevoCoche = Object.freeze(coche);

nuevoCoche.ruedas = 8;
console.log(nuevoCoche);
console.log(Object.isFrozen(nuevoCoche));

/* 
*Object.seal()
Impide la adición de nuevas propiedades a un objeto,
pero permite la modificación de propiedades existentes. 
*/
console.log("----seal----");

const nuevoAlumno = Object.seal(alumno);

nuevoAlumno.nombre = "Mario";
nuevoAlumno.tel = "612345678";

console.log(nuevoAlumno);

/* 
*Object.getPrototypeOf()
Se usa para obtener la propiedad interna oculta [[Prototype]] de un objeto
*/
console.log("----getPrototypeOf----");

const num = [0, 1, 2, 3, 4];

console.log(Object.getPrototypeOf(num));
console.log(Object.getPrototypeOf(num) === Array.prototype);

