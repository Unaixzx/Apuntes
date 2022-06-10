<?php

// Conectar a la BD con PDO
$db = new PDO('mysql:host=localhost; dbname=pruebas', 'root', '');

// Creamos el query
$query = "SELECT nombre, edad from alumnos";

// Lo preparamos
$stmt = $db->prepare($query);

// Lo ejecutamos
$stmt->execute();

// Obtener los resultados
$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Iterar
foreach ($resultado as $propiedad) :
    echo $propiedad['nombre'];
    echo "<br>";
    echo $propiedad['edad'];
    echo "<br>";
endforeach;
