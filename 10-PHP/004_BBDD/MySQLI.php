<?php


// Conectar a la BD con Mysqli.
$db = new mysqli('localhost', 'root', '', 'pruebas');

// Creamos el query
$query = "SELECT nombre, edad from alumnos";

// Lo preparamos
$stmt = $db->prepare($query);

// Lo ejecutamos
$stmt->execute();

// creamos la variable
$stmt->bind_result($nombre, $edad);

// imprimir el resultado
while ($stmt->fetch()) :
    var_dump($nombre);
    echo '<br>';
    var_dump($edad);
    echo '<br>';
endwhile;
