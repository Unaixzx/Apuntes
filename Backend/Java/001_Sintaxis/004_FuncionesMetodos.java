package sintaxis;

public class FuncionesMetodos {

	public static String saludar() {
		return "Bienvenido";
	}
	
	public static void formatear(String nombre, int edad) {
		System.out.println("Tu nombre es: " + nombre);
		System.out.println("Tu edad es: " + edad);
	}
	
	public static int sumar(int a, int b) {
		return a + b;
	}
	
	public static void main(String[] args) {
		// Funciones-Métodos
		
		System.out.println(saludar());
		
		formatear("Juan", 44);
		
		System.out.println(sumar(4,6));
		

	}

}
