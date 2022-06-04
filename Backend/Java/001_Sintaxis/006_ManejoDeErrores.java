package sintaxis;

public class ManejoDeErrores {

	public static int banco(int saldo, int retirar) throws Exception {
		if (saldo < retirar) {
			throw new Exception("No puedes retirar más monedas que las que tienes en tu saldo: " + saldo);
		}
		return saldo - retirar;
	}

	public static void main(String[] args) {
		// Manejo de Errores
		
		try {
			System.out.println(banco(50,100));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

}
