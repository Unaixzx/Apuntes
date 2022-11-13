<?php

declare(strict_types=1);

//Definir Clase

class Usuario
{
    //Constructor Se ejecuta automatico al instanciar el objeto.
    public function __construct(public int $id, public string $nombre, public bool $logeado)
    {
    }
}

//Instanciar Objeto
$usuario = new Usuario(0, "Hodei", true);


//Ver
echo '<pre>';
var_dump($usuario);
echo '</pre>';
