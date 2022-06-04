<?php
/*
        Funciones Predefinidas:

        -is_null($var) determina si una variable es nula o no.
        -isset($var) determina si una variable está definida y no es NULL.
        -unset($var) destruye las variables especificadas.
        -empty($var) vuelve true si no existe o es FALSE
        -is_int($var), is_float(),is_bool(), is_array()
        -var_dump($var) muestra información de la variable.

    */

//Funciones

function suma($num1, $num2)
{
    return $num1 + $num2;
}

print(suma(4, 6));
echo '<br>';
//Paso de parámetros por referencia

$texto = "Texto Original";

function referencia(&$texto)
{
    $texto = "Texto modificado";
}

echo " Resultado  " . $texto;
referencia($texto);
echo '<br>';
echo " Resultado  " . $texto;

echo '<br>';
//Funciones anónimas

$saludo = function () {
    print("Holaaaaaa");
};

$saludo();

echo '<br>';
//Fn flecha

$mult = fn ($a, $b) => $a * $b;

echo $mult(4, 4);

echo '<br>';

//Ejemplo función con return de tipo string
function authUsuario(bool $autenticado): ?string
{
    if ($autenticado) {
        return "Esta autenticado";
    } else {
        return null;
    }
}


echo authUsuario(false);
