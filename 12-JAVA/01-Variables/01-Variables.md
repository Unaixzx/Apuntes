<h1 align="center"> Variables </h1>

---

### Variables

Java es un lenguaje fuertemente tipado. Cualquier variable que se defina tiene que asociarse a un tipo de dato.
Las variables contienen valores o datos, el tipo de la variable determinara el valor que puede contener y las operaciones que puede realizar.

### Nombres Variables

- Empezar letra minúscula.
- Utilizar CamelCase para nombres compuestos.
- Caracteres Unicode.
- No usar palabras clave o reservadas.

### Categorías

**Primitivos**
Contienen un solo valor(No son objetos). Enteros, decimales, caracteres, booleanos...
Todos los tipos primitivos tienen su clase equivalente, las clase wrapper tienen métodos para dar funcionalidades extra.
Cambiar de tipo, cambiar caracteres a mayúsculas/minúsculas...

**Referencia** Contiene una dirección de un conjunto de valores. Arrays, clases, interfaces, objetos...

---

**Primitivo entero:**

byte => Entre -128 a 127(8bits)
`byte enteroByte = 100;`

short => Entre -bastante a bastante(16bits)
`short enteroShort = 45896;`

int => Entre -mucho a mucho(32bits)
`int enteroInt = 4125638547;`

long => Entre -muchísimo a muchísimo(64bits)
`long enteroLong = 985632145655478;`

**Primitivo punto flotante:**
Números decimales.
La coma es un punto.
Tipo float terminan con una f.

float
`float realFloat = 4.404f;`

double
`double realDoble = 2.7845648;`

**Primitivo boolean:**
Expresa un valor VERDADERO o FALSO.

`boolean a = true;`
`boolean b = false;`

**Primitivo char:**
Código UNICODE, cada carácter ocupa 16 bits.

`char a = 'a';`
`char b = '1';`
`char c = '\u0022';`

Secuencias de escape:

- Retroceso: \b
- Nueva línea: \n
- Retorno: \r
- Tabulador: \t
- Diagonal: `\\`
- Comillas dobles: \"
