<?php

//Funciones de validación

function validar_texto(string $texto): bool
{
    return !(trim($texto) == "");
}

function validar_email(string $texto): bool
{
    return filter_var($texto, FILTER_VALIDATE_EMAIL);
}

//Variables Globales

$errores = [];
$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : '';
$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';

//Comprobamos si nos llega los datos por POST

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!validar_texto($email)) {
        $errores[] = 'Campo Email obligatorio.';
    }

    if (!validar_email($email)) {
        $errores[] = 'Campo Email formato incorrecto.';
    }

    if (!validar_texto($password)) {
        $errores[] = 'Campo Contraseña obligatorio.';
    }


    //Verificar que no existe en la base de datos el mismo email
    //Establecer Conexión
    $con = new PDO('mysql:host=localhost; dbname=pruebas', 'root', '');

    //Preparar consulta
    $pst = $con->prepare("SELECT COUNT(*) as longitud
                        FROM registro
                        WHERE email = :email");

    //Ejecutar sentencia sql
    $pst->execute(['email' => $email]);

    //Guardar Resultados
    $resultados = $pst->fetch();

    //Comprobar si existe
    if ((int) $resultados['longitud'] > 0) {
        $errores[] = 'La dirección de email ya esta registrada.';
    }

    //Crear Cuenta

    if (count($errores) === 0) {
        //Generar Token
        $token = bin2hex(openssl_random_pseudo_bytes(16));
        //Preparar Insert
        $nuevoRegistro = $con->prepare("INSERT INTO registro(email,pass,activo,token)
    VALUES (:email, :pass, :activo, :token)");
        //Ejecutar Insert
        $nuevoRegistro->execute([
            'email' => $email,
            //Hash contraseña
            'pass' => password_hash($password, PASSWORD_BCRYPT),
            'activo' => 0,
            'token' => $token
        ]);

        //Envió Email
        $header = [
            'From' => 'admin@dominio.com',
            'Content-type' => 'text/plain; charset=utf-8'
        ];
        // Variables para el email
        $emailEncode = urlencode($email);
        $tokenEncode = urlencode($token);

        // Texto del email
        $textoEmail = "
     Hola!\n 
     Gracias por registrate\n
     Para activar entra en el siguiente enlace:\n
     http://midomino.com/verificar-cuenta.php?email=$emailEncode&token=$tokenEncode
      ";
        // Envio del email
        mail($email, 'Activa tu cuenta', 'Gracias por suscribirte', $headers);

        //Redirección
        header("Location: identificarse.php?registrado=1");
        die();
    }
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>

<body>
    <h1>Registro</h1>
    <ol>
        <li>Pedir los datos para crear la cuenta.</li>
        <li>Validar que los datos son compatibles con la base de datos (el email no existe, tiene un formato válido…).</li>
        <li>Guardarlos en la base de datos, y marcamos que de momento no son hábiles.</li>
        <li>Enviamos un token a la dirección de email que nos han dado para comprobar que es un usuario real.</li>
        <li>Activar cuenta si pulsan sobre el enlace y el token es correcto.</li>
        <li>Llevar a la página de identificación y notificamos que su cuenta ha sido activada.</li>
    </ol>

    <h2>Formulario</h2>

    <!-- Mostramos errores por HTML -->
    <?php if (isset($errores)) : ?>
        <ul class="errores">
            <?php
            foreach ($errores as $error) {
                echo '<li>' . $error . '</li>';
            }
            ?>
        </ul>
    <?php endif; ?>

    <form action="" method="POST">
        <!-- Email -->
        <label>E-Mail</label>
        <input type="text" name="email">
        <!-- Contraseña -->
        <label>Contraseña</label>
        <input type="password" name="password">

        <!-- Botón submit -->
        <input type="submit" value="Registrarse">
    </form>
</body>

</html>