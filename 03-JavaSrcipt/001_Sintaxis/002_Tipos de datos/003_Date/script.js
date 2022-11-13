//Crear fecha
const f1 = new Date();
console.log(f1);

//fecha concreta
const f2 = new Date("2019-05-7");
console.log(f2);

//Mostrar año
console.log(f1.getFullYear());
//Mostrar mes
console.log(f1.getMonth() + 1);
//Mostrar día de la semana
console.log(f1.getDay());
//Mostrar día
console.log(f1.getDate());

//Introducir datos
f1.setDate(14);
f1.setFullYear(2014);
f1.setMonth(4-1);
console.log(f1);