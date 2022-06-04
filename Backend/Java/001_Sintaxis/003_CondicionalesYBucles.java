package sintaxis;

public class CondicionalesYBucles {

	public static void main(String[] args) {
		// Condicionales

		// Condicional if-else
		if (true) {
			System.out.println("Se cumple");
		} else {
			System.out.println("No se cumple");
		}

		// Condicional switch
		switch ("negro") {
		case "rojo": {

			System.out.println("El color es Rojo");
		}
			break;
		case "negro": {

			System.out.println("El color es Negro");
		}
			break;
		case "azul": {

			System.out.println("El color es Negro");
		}

		}

		// Bucles

		// For
		for (int i = 0; i <= 10; i++) {
			System.out.println(i);
		}

		// For mejorado

		int[] numeros = { 1, 2, 3, 4, 5 };

		for (int i : numeros) {
			System.out.println(i);
		}

		// While
		boolean resultado = true;

		while (resultado) {
			System.out.println("qwerty");
			resultado = false;
		}

		// do...While
		boolean resultado2 = false;

		do {
			System.out.println("asdfgh");
		} while (resultado2);

	}
}
