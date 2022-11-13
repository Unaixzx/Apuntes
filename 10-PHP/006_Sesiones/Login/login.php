<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //Variables que teóricamente estarían en una BBDD
    $user = "root";
    $pass = "root";

    //Variables del formulario
    $formUser = isset($_REQUEST['user']) ? $_REQUEST['user'] : null;
    $formPass = isset($_REQUEST['pass']) ? $_REQUEST['pass'] : null;

    //Comprobar datos
    if ($user == $formUser && $pass == $formPass) {
        //Creamos la sesión
        session_start();
        $_SESSION['user'] = $formUser;

        //Redireccion a la pagina
        header('Location: perfil.php');
        die();
    } else {
        echo "Error";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <form method="POST" style="text-align: center;">

        <label for="user">Usuario:</label> <br>
        <input type="text" id="user" name="user" placeholder="usuario"> <br>

        <label for="pass">Contraseña:</label> <br>
        <input type="password" id="pass" name="pass" placeholder="constraseña"> <br>

        <hr style="width: 40%;">
        <input type="submit" value="Entrar">
    </form>
</body>

</html>