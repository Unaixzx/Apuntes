<?php

//-----------------------------------------------------
// Variables
//-----------------------------------------------------
$email = isset($_REQUEST['email']) ? urldecode($_REQUEST['email']) : '';
$token = isset($_REQUEST['token']) ? urldecode($_REQUEST['token']) : '';

//-----------------------------------------------------
// COMPROBAR SI SON CORRECTOS LOS DATOS
//-----------------------------------------------------
// Conecta con base de datos
$con = new PDO('mysql:host=localhost; dbname=pruebas', 'root', '');
// Prepara SELECT para obtener la contraseña almacenada del usuario
$con = $pst->prepare('SELECT COUNT(*) as length FROM registro WHERE email = :email AND token = :token AND activo = 0;');
// Ejecuta consulta
$miConsulta->execute([
    'email' => $email,
    'token' => $token
]);
$resultado = $miConsulta->fetch();
// Existe el usuario con el token
if ((bool) $resultado['length']) {
    //-----------------------------------------------------
    // ACTIVAR CUENTA
    //-----------------------------------------------------
    // Prepara la actualización
    $miActualiacion = $pst->prepare('UPDATE registro SET activo = 1 WHERE email = :email;');
    // Ejecuta actualización
    $miActualiacion->execute([
        'email' => $email
    ]);
    //-----------------------------------------------------
    // REDIRECCIONAR A IDENTIFICACION
    //-----------------------------------------------------
    header('Location: identificarse.php?activada=1');
    die();
}

// No es un usuario válido, le enviamos al formulario de identificación
header('Location: identificarse.php');
die();
