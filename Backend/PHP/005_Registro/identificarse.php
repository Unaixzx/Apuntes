<?php 
    //======================================================================
    // PROCESAR FORMULARIO 
    //======================================================================
    
    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    $email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
    $password = isset($_REQUEST['contrasenya']) ? $_REQUEST['contrasenya'] : null;
    $errores = [];

    // Comprobamos que nos llega los datos del formulario
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        //-----------------------------------------------------
        // COMPROBAR SI LA CUENTA ESTA ACTIVA
        //-----------------------------------------------------
        // Conecta con base de datos
        $con = new PDO('mysql:host=localhost; dbname=pruebas', 'root', '');
        // Prepara SELECT para obtener la contraseña almacenada del usuario
        $miConsulta = $con->prepare('SELECT activo, pass FROM registro WHERE email = :email;');
        // Ejecuta consulta
        $miConsulta->execute([
            'email' => $email
        ]);
        // Guardo el resultado
        $resultado = $miConsulta->fetch();
        if ((int) $resultado['activo'] !== 1) {
            $errores[] = 'Tu cuenta aún no esta activa. ¿Has comprobado tu bandeja de correo?';
        } else {
            //-----------------------------------------------------
            // COMPROBAR LA CONTRASEÑA
            //-----------------------------------------------------
            // Comprobamos si es válida
            if (password_verify($password, $resultado['pass'])) {
                // Si son correctos, creamos la sesión
                session_start();
                $_SESSION['email'] = $email;
                // Redireccionamos a la página segura
                header('Location: privado.php');
                die();
            } else {
                $errores[] = 'El email o la contraseña es incorrecta.';
            }
        }
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Entra</title>
</head>
<body>
    <h1>Entrar</h1>
    <!-- Mostramos errores por HTML -->
    <?php if (count($errores) > 0): ?>
    <ul class="errores">
        <?php 
            foreach ($errores as $error) {
                echo '<li>' . $error . '</li>';
            } 
        ?> 
    </ul>
    <?php endif; ?>
    <!-- Mensaje de aviso al registrarte -->
    <?php if(isset($_REQUEST['registrado'])): ?> 
    <p>¡Gracias por registrarte! Revista tu bandeja de correo para activar la cuenta.</p>
    <?php endif; ?> 
    <!-- Mensaje de cuenta activa -->
    <?php if(isset($_REQUEST['activada'])): ?> 
    <p>¡Cuenta activada!</p>
    <?php endif; ?> 
    <!-- Formulario de identificación -->
    <form method="post">
        <p>
            <input type="text" name="email" placeholder="Email"> 
        </p> 
        <p>
            <input type="password" name="contrasenya" placeholder="Contraseña"> 
        </p>
        <p>
            <input type="submit" value="Entrar"> 
        </p>
    </form>
</body>
</html>
