<?php

//Sin Autoload

// require 'Cliente.php';
// require 'Detalle.php';

//Con Autoload

function mi_autoload($clase)
{
    echo $clase;
    require  __DIR__ . "\\" . $clase . ".php";
}

//Registrar Autoload
spl_autoload_register("mi_autoload");

$detalle = new Detalle();
echo '<br>';
echo '<br>';
$cliente = new Cliente();
