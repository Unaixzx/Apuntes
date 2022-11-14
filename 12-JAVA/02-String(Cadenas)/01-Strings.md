<h1 align="center"> String </h1>

---

Los String son objetos de tipo referencia.
Los String son inmutables, si por ejemplo se usa el método replace para cambiar caracteres, retornara una nueva instancia distinta a la original.

`String nombre = new String("Tu Nombre");`
`String nombre = "Tu Nombre";`

### Concatenar

Para concatenar se usa el carácter de suma/plus +.

`String nombre = "Tu Nombre";`
`String apellido = "Tu apellido";`

`String nombreCompleto = nombre + " " + apellido ;`

### Comparar

El operador de igualdad `==` no compara los valores de un String, compara por referencia.
Para comparar por valor un String usar `equals()`. Devuelve TRUE o FALSE.

`String cadena1 = "Texto random";`
`String cadena2 = "Texto random";`

`System.out.println(cadena1.equals(cadena2));`


### Métodos

- int length() : número de caracteres.
- boolean equals(String b) : compara si ambas son iguales, por valor
- boolean equalsIgnoreCase(String b) compara si ambas son iguales,
  independientemente de mayúsculas o minúsculas.
- int compareTo(String b) Compara contra la cadena del argumento,
  devolviendo:
    - un valor negativo si la cadena es anterior a b
    - cero (0) si la cadena es igual a b
    - un valor positivo si la cadena es posterior a b
- String trim() Crea un nuevo objeto eliminado el espacio en blanco que pudiera
  haber al principio o al final.
- char charAt(int posición) Extrae un carácter en la posición indicada.
- char[] toCharArray() Convierte la cadena en un arreglo de caracteres.
- String substring(int a, int b) Extrae la sub-cadena entre las posiciones a y b.
- String substring(int desde) Extrae la sub-cadena desde la posición indicada.
- int indexOf(String cadena) Indican en qué posición se encuentra el carácter (o
  cadena) indicado por primera vez, buscando desde el principio.
- int lastIndexOf(String cadena) Indica en qué posición se encuentra el carácter
  (o cadena) indicado por primera vez, buscando desde el final.
- boolean startsWith(String prefijo) Dice si la cadena comienza con el prefijo
  indicado.
- boolean endsWith(String sufijo) Dice si la cadena termina con el sufijo
  indicado.
- String[] split(String patron) Divide la cadena en varias sub cadenas utilizando
  el patrón indicado como separador.
