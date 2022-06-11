<?php


//Crear

//setcookie('nombre','valor','caducidad');

//Caduca en 1 minuto
$caducidad = time() + 60;
setcookie("idioma","es",$caducidad);

//Obtener
echo $_COOKIE['idioma'];

echo '<br>';

//Update cambiar valor
setcookie('idioma', 'fr');
echo $_COOKIE['idioma'];

//Eliminar
//unset($_COOKIE['idioma']);
