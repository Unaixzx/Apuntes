<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>

<body>
    <h1>Formulario</h1>
    <!-- Básico -->
    <!-- 
        $_REQUEST es un array que contiene todas las variables que recibimos,
        lo cual nos simplifica a la hora de extraer cada elemento.
        
        form:
        method='' Método de envío  
        action='ruta.php' Ruta donde lleva los datos.(GET default)

     -->
    <h2>Básico</h2>
    <form>

        <?php
        var_dump($_REQUEST);
        echo '<br>';
        ?>

        <input type="text" name="nombre">
        <input type="submit" value="Enviar">
    </form>
    <hr>

    <h2>Guardar datos en variables</h2>
    <form>

        <?php
        //isset() comprobar que existe
        $nombre = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : '';
        echo '<br>';
        ?>

        <input type="text" name="nombre">
        <input type="submit" value="Enviar">
        <span style="color: teal; margin-left:20px; font-size: 20px; padding: 5px; border: 3px solid black;"><?php echo $nombre ?></span>
    </form>
    <hr>

    <!-- 
        Métodos de petición:
        -GET:
        El método GET envía la información en la propia URL, estando limitada a 2000 caracteres.
        La información es visible por lo que con este método nunca se envía información sensible.
        No se pueden enviar datos binarios (archivos, imágenes...).

        -POST:
        El método POST transmite datos de una página PHP a otra.
        A diferencia del método GET, estos datos no están visibles en la URL.

        -PUT:
        La petición HTTP PUT crea un nuevo elemento o reemplaza una representación del elemento
        de destino con los datos de la petición.

        -DELETE:
        Eliminar elementos. Requiere el ID exclusivo del recurso.

        -HEAD:
        Es idéntido a GET, pero el servidor no devuelve el contenido en el HTTP response.

     -->
    <h2>Comprobar método de petición</h2>
    <form method="POST">

        <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            echo 'Llega algo por POST';
        }
        echo '<br>';
        ?>

        <input type="text" name="nombre3">
        <input type="submit" value="Enviar">
    </form>
    <hr>

    <h2>GET</h2>
    <form method="GET">

        <?php
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            //$GET['nnombreGet'];
            $nombre = isset($_REQUEST['nombreGet']) ? $_REQUEST['nombreGet'] : '';
        }
        echo '<br>';
        ?>

        <input type="text" name="nombreGet">
        <input type="submit" value="Enviar">
    </form>
    <hr>

    <h2>POST</h2>
    <form method="POST">

        <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            //$POST['nnombreGet'];
            $nombre = isset($_REQUEST['nombrePost']) ? $_REQUEST['nombrePost'] : '';
        }
        echo '<br>';
        ?>

        <input type="text" name="nombrePost">
        <input type="submit" value="Enviar">
    </form>
    <hr>

    <h2>Evitar que se borren con el submit</h2>
    <form method="POST">

        <?php
        $nombre = '';

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            //$POST['nnombreGet'];
            $nombre = isset($_REQUEST['nom']) ? $_REQUEST['nom'] : '';
        }

        ?>

        <input type="text" name="nom" value="<?php echo $nombre ?>">
        <input type="submit" value="Enviar">
    </form>
    <hr>

    <h2>Campo oculto</h2>
    <form method="POST">

        <?php
        $saludo = ' ';

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $saludo = isset($_REQUEST['oculto']) ? $_REQUEST['oculto'] : '';

            $asignaturas = isset($_REQUEST['asignaturas']) ? $_REQUEST['asignaturas'] : [];

            foreach($asignaturas as $asignatura){
                echo $asignatura;
                echo '<br>';
            }
        }

        ?>

        <input type="hidden" name="oculto" value="hola">

        <!-- Array -->
        <input type="hidden" name="asignaturas[]" value="php">
        <input type="hidden" name="asignaturas[]" value="java">
        <input type="hidden" name="asignaturas[]" value="javascript">

        <?php echo $saludo ?>
        <input type="submit" value="Enviar">
    </form>
    <hr>

</body>

</html>