<?php

declare(strict_types=1);

/*
* Métodos Estáticos
    -static
    -No utilizan this.
    -Se utiliza self.
    -No requiere instanciación.
*/


class Usuario
{
    //Atributos estáticos
    static $id = 0;
    static $nombre = "Hodei";
    static $logeado = false;

    //Método statico
    public static function verDatos()
    {
        $auth = self::$logeado ? ' Esta logeado' : ' No esta logeado';

        echo "Id: " . self::$id .  " Usuario: " . self::$nombre . $auth;
    }
}

Usuario::verDatos();
