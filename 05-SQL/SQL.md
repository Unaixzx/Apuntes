# SQL

Crear Base de Datos:

```sql
CREATE DATABASE Nombre_De_La_BBDD;
```

Usar Base de Datos:

```sql
USE Nombre_De_La_BBDD;
```

Ver las Base de Datos:

```sql
SHOW DATABASES;
```

Crear Tablas:

```sql
CREATE TABLE pruebaddbb.clientes (
	id INT(11) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	precio DECIMAL(6,2) NOT NULL,
	PRIMARY KEY (id)
	);
```

Visualizar Tablas:

```sql
SHOW TABLES;

DESCRIBE clientes;
```

Cambiar Nombre Tablas:

```sql
RENAME TABLE clientes TO productos;
```

Insertar Datos:

```sql
INSERT INTO productos (nombre,precio) VALUES("Galletas", 6.89);
```

Insertar Varios Datos:

```sql
INSERT INTO productos (nombre,precio) VALUES 
		('Cereales',7),
    ('Pan',1.90),
    ('Pan',3.74);
```

Leer Y Buscar Datos:

```sql
SELECT * FROM productos;

SELECT nombre FROM productos;

SELECT nombre FROM productos WHERE nombre = "Leche";
```

Ordenar Y Limitar Datos:

```sql

SELECT * FROM productos ORDER BY ASC;

SELECT nombre FROM productos LIMIT 10;

```

Actualizar Datos (SafeMode solo cambia por KeyValue”id”):

```sql

UPDATE productos SET precio = 5 WHERE nombre = "Leche";

UPDATE productos SET precio = 5 WHERE id = 1;

```

Eliminar Datos :

```sql

DELETE FROM productos WHERE id = 1;

```

Modificar BBDD ya creada :

```sql

ALTER TABLE productos ADD descripcion VARCHAR(100) NOT NULL;

ALTER TABLE productos CHANGE descripcion valoracion VARCHAR(100) NOT NULL;

```

Eliminar Columna Y Tabla:

```sql

ALTER TABLE productos DROP COLUMN valoracion;

DROP TABLE productos;
```

Buscar POR... :

```sql

SELECT * FROM productos where precio >= 90;

SELECT * FROM productos where precio BETWEEN 90 AND 100;
```

Funciones Agregadas:

```sql

SELECT COUNT(id), nombre FROM productos GROUP BY nombre ORDER BY COUNT(id) DESC;

SELECT SUM(precio) AS total FROM productos;

SELECT MIN(precio) AS min FROM productos;
```

Buscar en SQL LIKE:

```sql

SELECT * FROM productos where nombre LIKE 'le%';

SELECT * FROM productos where nombre LIKE '%le';

SELECT * FROM productos where nombre LIKE '%le%';
```

Concatenar:

```sql

SELECT CONCAT(nombre, ' cuesta ',precio,' euros.') AS cuesta FROM productos;

SELECT * FROM productos WHERE CONCAT(nombre, ' cuesta ',precio,' euros.') LIKE "%s";
```

Devolver varios :

```sql

SELECT * FROM productos WHERE id IN(1,3);

SELECT * FROM productos WHERE precio = 5 AND id = 1;
```

Relacionar Tablas:

```sql

CREATE TABLE clientes (
			  id INT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(60) NOT NULL,
        apellido VARCHAR(60) NOT NULL,
        telefono VARCHAR(20) NOT NULL,
        email VARCHAR(60) NOT NULL UNIQUE,
        PRIMARY KEY (id)
);

CREATE TABLE citas (
			  id INT NOT NULL AUTO_INCREMENT,
        fecha DATE NOT NULL,
        hora TIME NOT NULL,
        clienteId INT NOT NULL,
        PRIMARY KEY (id),
        KEY clienteId (clienteId),
        CONSTRAINT cliente_FK
        FOREIGN KEY (clienteId)
        REFERENCES clientes (id)
);
```

Relacionar Tablas MOSTRAR Datos:

```sql

SELECT * FROM citas 
INNER JOIN clientes ON clientes.id = citas.clienteId;
```

Tabla pivote:

```sql

CREATE TABLE pruebaddbb.citasProductos (
				id INT AUTO_INCREMENT,
				idCita INT NOT NULL,
				idProducto INT NOT NULL,
        PRIMARY KEY(id),
				KEY idCita(idCita),
				CONSTRAINT  citas_FK
				FOREIGN KEY(idCita)
				REFERENCES citas(id),
				KEY idProducto(idProducto),
				CONSTRAINT  productos_FK
				FOREIGN KEY(idProducto)
				REFERENCES productos(id)
);
```

Tabla pivote MOSTRAR DATOS:

```sql

SELECT * FROM pruebaddbb.citasproductos
LEFT JOIN citas ON citas.id = citasProductos.idCita
LEFT JOIN productos ON productos.id = citasProductos.idProducto;
```

```sql

SELECT clientes.nombre AS cli_name, productos.nombre AS pro_name, productos.precio, CONCAT(citas.fecha, '-/-', citas.hora) AS fecha_hora FROM pruebaddbb.citasproductos
LEFT JOIN citas ON citas.id = citasProductos.idCita
LEFT JOIN clientes ON citas.clienteId = clientes.id
LEFT JOIN productos ON productos.id = citasProductos.idProducto
WHERE citas.clienteId = 1 ;
```