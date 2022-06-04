package sintaxis;

public class Arrays {

	public static void main(String[] args) {
		// Arrays
		
		int arrayNumeros[];
		arrayNumeros = new int[10];
		
		arrayNumeros[0] = 4;
		arrayNumeros[1] = 44;
		arrayNumeros[2] = 444;
		
		System.out.println(arrayNumeros[2]);
		
		int numeros[] = {0,1,2,3,4,5};
		
		for(int num:numeros) {
			System.out.println(num);
		}
		
		//Multidimensional 
		
		String[][] multi = new String[10][10];
		
		multi[0][0] = "pantalon";
		multi[0][1] = "azul";
		
		multi[1][0] = "camiseta";
		multi[1][1] = "negra";
		
		int[][] x = {
				{1,22,333},
				{4,55,666}
		};
		
		for(int i = 0; i < x.length; ++i) {
			 for(int j = 0; j < x[i].length; ++j) {
	                System.out.println(x[i][j]);
	            }
		}
		

	}

}
