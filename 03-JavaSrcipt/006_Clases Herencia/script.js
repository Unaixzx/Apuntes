//Clases

class Producto {
  //Constructor
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  toString() {
    return `El producto: ${this.nombre} tiene un precio de ${this.precio}€`;
  }
}

//Herencia
class Categoria extends Producto {
  constructor(nombre, precio, categoria) {
    super(nombre, precio);
    this.categoria = categoria;
  }

  formatearCategoria(){
    const producto = super.toString();

    return producto + " La categoria es: " + this.categoria;
  }
}

//Instanciar 
const producto = new Producto("Samsung TV", 500);
const productoCat = new Categoria("Samsung TV", 500, "Smart Tv");

console.log(producto.toString());
console.log(productoCat.formatearCategoria());

