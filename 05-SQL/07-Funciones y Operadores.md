<h1 align=center>Operaciones con Registros</h1>

### Contenido

- Columna calculada
- Funciones de cadena
- Funciones matemáticas
- Operadores de comparación
- Operadores lógicos

---

### Columna calculada

Las columnas calculadas sirven para calcular valores de varias columnas. La columna que se crea es virtual, no se almacena físicamente a no ser que la marquemos con `PERSISTED`.

Ejemplo: calcular el total precio\*cantidad.

```SQL
SELECT nombre, precio*cantidad  FROM productos;
```

Añadir un nombre/alias `AS` a la tabla virtual.

```SQL
SELECT nombre, precio*cantidad AS total  FROM productos;
```

---

### Funciones de cadena

Algunas funciones para trabajar con cadenas:

**CONCAT:**
Para unir varias cadenas en una sola.

```SQL
SELECT CONCAT('Concatenar ','texto relleno',44);
```

> Resultado: Concatenar texto relleno44

**LENGTH**
Longitud de la cadena(Cuenta espacios en blanco).

```SQL
SELECT LENGTH('longitud de caracteres');
```

**LEFT**

Devuelve la parte izquierda de una cadena de caracteres con el número de caracteres especificado.

```SQL
SELECT LEFT('Hola',3);
```

> Resultado: Hol

Tambien se puede aplicar a un campo.

```SQL
SELECT LEFT(nombre,3) from productos;
```

> **RIGHT** Lo mismo hacia la derecha.

**UPPER y LOWER**

UPPER para convertir los caracteres a mayúsculas

```SQL
SELECT UPPER(nombre) from productos;
```

LOWER para convertir los caracteres a minúsculas.

```SQL
SELECT LOWER(nombre) from productos;
```

**TRIM**
Elimina espacio u otros caracteres especificados del principio, el final o ambos lados de una cadena.

```SQL
SELECT TRIM('        Texto de relleno.    ');
```

LEADING: quita el principio

```SQL
SELECT TRIM(LEADING '123' FROM '123abc123') AS resultado;
```

> Resultado: abc123

TRAILING: quita el final.

```SQL
SELECT TRIM(LEADING '123' FROM '123abc123') AS resultado;
```

> Resultado: 1223abc

BOTH(Por defecto) quita el principio y el final.

```SQL
SELECT TRIM(BOTH '123' FROM '123abc123') AS resultado;

SELECT TRIM('123' FROM '123abc123') AS resultado;
```

> Resultado: abc

**REPLACE**
Reemplaza todas las instancias de un valor de cadena especificado por otro valor de cadena.

```SQL
SELECT REPLACE('electroencefalografista', 'a','4') AS resultado;
```

> Resultado: electroencef4logr4fist4

**REVERSE**
Devuelve el orden inverso de un valor de cadena.

```SQL
SELECT REVERSE ('electroencefalografista') AS resultado;
```

> Resultado: atsifargolafecneortcele

---

### Funciones matemáticas

Funciones para realizar cálculos y redondeos:

**CEILING**
Redondea hacia arriba.

```SQL
SELECT CEILING (4.5) AS resultado;
```

> Resultado: 5

**FLOOR**
Redondea hacia arriba.

```SQL
SELECT FLOOR (4.5) AS resultado;
```

> Resultado: 4

**MOD**
Devuelve el resto(residuo) de una division.

```SQL
SELECT MOD (10,4) AS resultado;
```

> Resultado: 2

**POWER**
Para trabajar con potencias.

```SQL
SELECT POWER (10,2) AS resultado;
```

> Resultado: 100

**PI**
Devuelve el valor constante de PI.

```SQL
SELECT PI() AS resultado;
```

> Resultado: 3.141593

**SQRT**
Devuelve la raíz cuadrada del valor de tipo flotante especificado.

```SQL
SELECT SQRT(4) AS resultado;
```

> Resultado: 2

**RAND**
Devuelve un valor float pseudoaleatorio de 0 a 1, ambos excluidos.

Numero aleatorio entre 0 y 1

```SQL
SELECT RAND() AS resultado;
```

Numero aleatorio entre 1 y 100

```SQL
SELECT FLOOR(RAND()*(100-1)+1) AS resultado;
```

**SIGN**
Devuelve el signo positivo (+1), cero (0) o negativo (-1).

```SQL
SELECT SIGN(-44) AS resultado;
```

> Resultado: -1

**COUNT**
Calcular el número de registros.

```SQL
SELECT COUNT(*) AS resultado FROM productos;
```

**MAX-MIN**

MAX: devuelve el valor más grande de la columna.

```SQL
SELECT MAX(precio) AS resultado FROM productos;
```

MIN: devuelve el valor más pequeño de la columna.

```SQL
SELECT MIN(precio) AS resultado FROM productos;
```

---

### Operadores de comparación

Operadores para comparar si dos expresiones son iguales, devuelven un valor Booleano(True-False):

Menor que `<`
Mayor o igual que ` >=`
Menor o igual que `<=`
No es igual a `<>`

### Operadores lógicos

Operadores para comparar la veracidad de alguna condición, devuelven un valor Booleano(True-False):

`AND` si ambas expresiones booleanas son TRUE.
`OR` si cualquiera de las dos expresiones booleanas es TRUE.
`NOT` invierte el valor de cualquier otro operador booleano.
`ANY` si cualquier miembro del conjunto de comparaciones es TRUE.
`SOME` si alguna de las comparaciones de un conjunto es TRUE.
`EXISTS` si una subconsulta contiene cualquiera de las filas.
`IN` si el operando es igual a uno de la lista de expresiones.
`BETWEEN` si el operando está dentro de un intervalo.
`LIKE` si el operando coincide con un patrón.
`ALL` si el conjunto completo de comparaciones es TRUE.

Ejemplos:

```SQL
#Buscar por precio mayor o igual a 90
SELECT * FROM productos where precio >= 90;

#Buscar por precio entre 90 y 100
SELECT * FROM productos where precio BETWEEN 90 AND 100;

#Buscar que empieza por...
SELECT * FROM productos where nombre LIKE 'le%';

#Buscar que termine por...
SELECT * FROM productos where nombre LIKE '%le';

#Buscar que contenga...
SELECT * FROM productos where nombre LIKE '%le%';

#Devolver varios
SELECT * FROM productos WHERE id IN(1,3);

SELECT * FROM productos WHERE precio = 5 AND id = 1;
```
