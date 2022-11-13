<h1 align=center>Reglas y Restricciones(Constraints)</h1>

### Contenido

- NOT NULL
- UNIQUE
- DEFAULT
- CHECK
- PRIMARY KEY
- FOREIGN KEY

---

Las reglas y restricciones se aplican a una o varias columnas, estas reglas están relacionadas con los valores permitidos. Nos sirven para saber si los datos insertados cumplen con la regla de restricción establecida. Por ejemplo que un valor no sea nulo(NOT NULL). Estas restricciones se pueden establecer al crear una tabla o al modificar la tabla.

### Restricción NOT NULL

Por defecto las columnas pueden contener valores nulos. Podemos usar la restricción ` NOT NULL` para evitar que se inserten o actualicen valores nulos.

---

### Restricciones UNIQUE

La restricción `UNIQUE` se utiliza para evitar la inserción de valores duplicados.
Garantiza que no haya dos filas con el mismo valor.

---

### Restricciones DEFAULT

La restricción `DEFAULT` se utiliza para establecer un valor por defecto a una columna. Con esta restricción controlamos los valores, en caso de que no inserten ninguno. La restricción `DEFAULT` nos ayuda a mantener la integridad del dominio al proporcionar valores adecuados para la columna.

---

### Restricciones CHECK

La restricción `CHECK` se utiliza para limitar el rango de valores que se pueden inserta mediante una condición predefinida.
Por ejemplo: si queremos que al insertar un precio, este sea mayor que 0, estableceremos la condición `precio INT CHECK (precio>0)`. Es similar a la cláusula `WHERE`

---

### Restricciones PRIMARY KEY(LLave Primaria)

La restricción/cláusula `PRIMARY KEY` es una combinación de las restricciones `UNIQUE` y `NOT NULL`.
Se usa para identificar de forma única cada registro en una tabla. Una tabla solo puede tener una clave principal.

**AUTO_INCREMENT**

Al añadir `AUTO_INCREMENT`, genera automáticamente un número secuencial empezando por defecto en 1. Esta palabra clave se utiliza mucho con las `PRIMARY KEY`.

---

### Restricciones FOREIGN KEY (Llave foránea)

La restricción/cláusula `FOREIGN KEY ` se utiliza para vincular dos tablas. FOREIGN KEY en la tabla secundaria hace referencia a la PRIMARY KEY de la tabla principal.
