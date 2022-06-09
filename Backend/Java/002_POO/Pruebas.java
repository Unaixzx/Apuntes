package poo;

public class Pruebas {

	public static void main(String[] args) {
		// Instanciar Bicicleta

		Bicicleta bici = new Bicicleta(2, 2, "gris", 7);

		System.out.println(bici.getInfo());
		
		
		//Instanciar Automovil
		
		Automovil auto = new Automovil(4, 5, "rojo");
		System.out.println(auto.getInfo());

	}

}
