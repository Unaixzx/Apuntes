<h1 align=center>Tipos de datos</h1>

### Contenido

- Numéricos
- Alfanuméricos(Cadenas)
- Fecha y Hora

---

### Tipos de datos Numéricos

Los datos de tipo numérico se dividen en dos grupos, enteros y decimales(real).
Los tipos de datos numéricos aceptan las opciones: UNSIGNED o ZEROFILL.

UNSIGNED: permite sólo valores positivos.
ZEROFILL: rellena con ceros los espacios disponibles a la izquierda.

**Enteros:**

- TINYINT(Tamaño): -128 a 127.
- SMALLINT(Tamaño): -32768 a 32767.
- MEDIUMINT(Tamaño): -8388608 a 8388607.
- INT(Tamaño) o INTEGER: -2147483648 a 2147483647.[El más usado]
- BIGINT(Tamaño): -9223372036854775808 a 9223372036854775807.
- BIT(Tamaño):1-0 Boolean.

> (Tamaño) = La cantidad máxima de dígitos.

**Decimales(real)**

- FLOAT(tamaño, decimal): números más pequeños.
- DOBLE(tamaño, decimal): números más grandes.
- DECIMAL(tamaño, decimal): permite un punto decimal fijo.

> (Tamaño) = La cantidad máxima de dígitos.
> (decimal) = El número máximo de dígitos a la derecha del punto decimal.

---

### Alfanuméricos(Cadenas)

- CHAR(tamaño): puede almacenar hasta 255 caracteres(letras, números y caracteres especiales), longitud fija.
- VARCHAR (tamaño): puede almacenar hasta 255 caracteres(letras, números y caracteres especiales), longitud variable. [El más usado]
- TINYTEXT: longitud máxima de 255 caracteres.
- TEXTO: longitud máxima de 65.535 caracteres.
- MEDIUMTEXT: longitud máxima de 16,777,215 caracteres.
- LONGTEXT: longitud máxima de 4.294.967.295 caracteres.
- BLOB: hasta 65.535 bytes de datos. (Binario)
- MEDIUMBLOB: hasta 16.777.215 bytes de datos. (Binario)
- LONGBLOB: hasta 4.294.967.295 bytes de datos. (Binario)
- ENUM (valores): crea una lista de valores posibles. Solo se permite seleccionar un valor.
- SET: crea una lista de valores posibles. Permite almacenar más de una opción.

---

### Fecha y Hora

- DATE():
  - Para fecha.
  - Formato: AAAA-MM-DD.
  - Rango admitido: '1000-01-01' a '9999-12-31'.
- DATETIME():
  - Para fecha y hora.
  - Formato: AAAA-MM-DD HH: MI: SS.
  - Rango admitido: '1000-01-01 00:00:00' a '9999-12-31 23:59:59'.
- TIMESTAMP():
  - Para marca de tiempo.
  - Formato: AAAA-MM-DD HH: MI: SS.
  - Rango admitido: '1970-01-01 00:00:01' UTC a '2038-01-09 03:14:07' UTC.
- TIME():
  - Para tiempo.
  - Formato: HH: MI: SS.
  - Rango admitido: '-838: 59: 59' a '838: 59: 59'.
- YEAR():
  - Para año.
  - Formato: dos o cuatro dígitos.
  - Rango admitido:
    - cuatro dígitos: 1901 a 2155.
    - dos dígitos: 70 a 69(Representan 1970 a 2069).
