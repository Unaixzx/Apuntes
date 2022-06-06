<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validar Formulario</title>
</head>

<body>

    <?php

    //Comprobar si los datos llegan con el método POST
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        //*Métodos para validar

        function validar_texto(string $texto): bool
        {
            //trim — Elimina espacio en blanco (u otro tipo de caracteres) del inicio y el final de la cadena.

            return !(trim($texto) == '');
        }

        function validar_entero(string $numero): bool
        {
            return filter_var($numero, FILTER_VALIDATE_INT);
        }

        function validar_email(string $texto): bool
        {
            return filter_var($texto, FILTER_VALIDATE_EMAIL);
        }

        //*Variables
        $errores = [];
        $feedback = "";
        $nombre = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : null;
        $edad = isset($_REQUEST['edad']) ? $_REQUEST['edad'] : null;
        $email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;

        //*Validaciones

        // Nombre
        if (!validar_texto($nombre)) {
            $errores[] = 'El campo Nombre es obligatorio.';
        }
        // Edad
        if (!validar_entero($edad)) {
            $errores[] = 'El campo de Edad debe ser un número.';
        }
        // Email
        if (!validar_email($email)) {
            $errores[] = 'El campo de Email tiene un formato no válido.';
        }

        //*Lógica

        if (!isset($errores)) {
            //Guardar datos
        }
    }

    ?>

    <!-- Feedback Errores -->

    <?php if (isset($errores)) : ?>
        <?php foreach ($errores as $error) : ?>
            <div style="width: 300px; height: 30px; background-color: tomato; color:white; margin:20px auto; text-align: center; padding: 10px;">
                <?php
                echo $error;
                echo '<br>';
                ?>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>



    <!-- Formulario -->
    <h1 style="text-align: center; margin-top: 50px;">Formulario</h1>
    <form method="post" style="text-align: center;">

        <p>
            <!-- Campo nombre -->
            <input type="text" name="nombre" placeholder="Nombre">
        </p>
        <p>
            <!-- Campo edad -->
            <input type="number" name="edad" placeholder="Edad">
        </p>
        <p>
            <!-- Campo Email -->
            <input type="text" name="email" placeholder="Email">
        </p>
        <p>
            <!-- Botón submit -->
            <input type="submit" value="Enviar">
        </p>
    </form>

</body>

</html>