<?php
//crear un objeto genérico
$miObj = new stdClass();

$miObj->id = 1;
$miObj->nombre = "admin";
$miObj->email = "admin@min.com";
$miObj->tel = 654789321;


$encode = json_encode($miObj);
//Convertir a Array
$resultado = json_decode($encode, true);

foreach ($resultado as $key) {
    print($key);
    echo '<br>';
}
