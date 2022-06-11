<?php

//Comprobar si existe la sesión 

session_start();
if (!isset($_SESSION['user'])) {
    header('Location: login.php');
    die();
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
</head>

<body>
    <!-- Saludamos -->
    <h1>Bienvenido <?= $_SESSION['user'] ?></h1>
    <!-- Botón para cerrar la sesión -->
    <a href="logout.php">Cerrar sesión</a>
</body>

</html>