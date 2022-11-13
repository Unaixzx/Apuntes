<h1 align=center>Tablas</h1>

### Contenido

- Crear tabla
- Visualizar tablas
- Eliminar tabla

---

### Crear tabla

Sintaxis:

```SQL
CREATE TABLE [nombre_bbdd.][nombre_schema.]nombre_tabla (
    pk_columna tipo_dato PRIMARY KEY,
    columna_1 tipo_dato NOT NULL,
    columna_2 tipo_dato,
    ...,
    tabla_restricciones
);
```

Ejemplo:

```SQL
CREATE TABLE pruebaddbb.clientes (
	id INT(11) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	precio DECIMAL(6,2) NOT NULL,
	PRIMARY KEY (id)
);
```

---

### Visualizar tablas

Visualizar las tablas de una BBDD.

```SQL
SHOW TABLES;
```

Visualizar una tabla(Columnas, Tipo de dato, Restricciones).

```SQL
DESCRIBE nombre_tabla;
```

---

### Renombrar tabla

```SQL
RENAME TABLE nombre_antiguo TO nombre_nuevo;
```

---

### Eliminar tabla

```SQL
DROP TABLE nombre_tabla;
```

---
