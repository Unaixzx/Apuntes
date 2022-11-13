<?php

$num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Ver contenido

echo "<pre>";
var_dump($num);
echo "</pre>";

//Ver un elemento
echo $num[0];
echo '<br>';

//Añadir elemento
$num[10] = 11;
echo $num[10];

//Añadir al final
array_push($num, 99);

// Añadir al inicio
array_unshift($num, 0);

//Sumar todo
echo '<br>';

echo array_sum($num);

//Recuperar Ultimo
echo '<br>';

echo array_pop($num);

//Buscar elemento.
echo '<br>';
echo in_array(4, $num); // Devuelve 1


//Array Asociativo (Key Value)

$animales = [
    "key" => "value",
    "perro" => "Goofy",
    "gato" => "Gardfield"
];

echo '<br>';

echo $animales["key"];
echo '<br>';
echo $animales["perro"];
echo '<br>';
echo $animales["gato"];

//Array Multidimensional

$cars = array(
    array("Volvo", 22, 18),
    array("BMW", 15, 13),
    array("Saab", 5, 2),
    array("Land Rover", 17, 15)
);

//Mostrar Array Multidimensional

echo $cars[0][0] . ": In stock: " . $cars[0][1] . ", sold: " . $cars[0][2] . ".<br>";
echo $cars[1][0] . ": In stock: " . $cars[1][1] . ", sold: " . $cars[1][2] . ".<br>";
echo $cars[2][0] . ": In stock: " . $cars[2][1] . ", sold: " . $cars[2][2] . ".<br>";
echo $cars[3][0] . ": In stock: " . $cars[3][1] . ", sold: " . $cars[3][2] . ".<br>";

//Recorrer Array Multidimensional

for ($row = 0; $row < 4; $row++) {
    echo "<p><b>Row number $row</b></p>";
    echo "<ul>";
    for ($col = 0; $col < 3; $col++) {
        echo "<li>" . $cars[$row][$col] . "</li>";
    }
    echo "</ul>";
}

//Ordenar
sort($num); // de menor a mayor
rsort($num); // de mayor a menor