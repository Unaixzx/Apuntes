<?php


//Crear una sesión

session_start();

$_SESSION['usuario'] = 'admin';
$_SESSION['rol'] = 'administrador';

//Leer variable
echo $_SESSION['usuario'];
echo '<br>';

//comprobar si existe 

if (isset($_SESSION['usuario'])) {
    echo ' bienvenido ' . $_SESSION['usuario'];
} else {
    //Borar sesion
    session_destroy();
}
