<h1 align=center>Operaciones con Registros</h1>

### Contenido

- Crear(Insertar)
- Leer y Buscar
- Actualizar
- Eliminar
- Ordenar
- Limitar

---

### Crear(Insertar)

Insertar Datos:

```SQL
INSERT INTO nombre_tabla(dato_1,dato_2) VALUES("valor_1", "valor_2");

INSERT INTO productos (nombre,precio) VALUES("Galletas", 3.99);
```

Insertar Varios Datos:

```SQL
INSERT INTO productos (nombre,precio) VALUES
		    ('Cereales',7),
                    ('Pan',1.20),
                    ('Galletas',3.99);
```

---

### Leer y Buscar

Leer(mostrar) todos los registros:

```SQL
SELECT * FROM nombre_tabla;

SELECT * FROM productos;
```

Leer(mostrar) registros de un campo concreto:

```SQL
SELECT nombre_campo FROM nombre_tabla;

SELECT nombre FROM productos;
```

Buscar por valor del campo:

```SQL
SELECT * FROM nombre_tabla WHERE nombre_campo="valor";

SELECT * FROM productos WHERE id="3";
```

---

### Actualizar (SafeMode solo cambia por KeyValue”id”)

Safe Mode evita que se ejecuten consultas SQL de modificación de datos (update y delete), por seguridad. Si aparece un error "You are using safe update mode..." hay que deshabilitar el Safe Mode.

```SQL
UPDATE productos SET precio = 5 WHERE id = 1;

UPDATE productos SET precio = 5 WHERE nombre = "Leche";
```

> Actualiza el precio del campo id con valor 1 y del campo nombre con valor "Leche".

---

### Eliminar

**DELETE**
Con `DELETE` borramos los registros uno a uno y si existe algún campo autonumérico(serial, autoincremental) no se reinicia la numeración.

```SQL
DELETE FROM productos WHERE id = 1;
```

> Elimina todo los registros que tenga el campo id con valor 1.

**TRUNCATE TABLE**
Con `TRUNCATE TABLE` borramos todos los registros, reiniciando las numeraciones de los campos autonumérico(serial, autoincremental). Es como si acabáramos de crear la tabla.

```SQL
 TRUNCATE TABLE productos;
```

> Elimina todo los registros que tenga el campo id con valor 1.

---

### Ordenar

Visualizar datos ordenados en orden ascendente(por campo id).

```SQL
SELECT * FROM productos ORDER BY id ASC;
```

Visualizar datos ordenados en orden descendente(por campo id).

```SQL
SELECT * FROM productos ORDER BY id DESC;
```

---

### Limitar

Limitar los registros que se retornan.

```SQL
SELECT * FROM productos LIMIT 10;
```
