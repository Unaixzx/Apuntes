<?php

declare(strict_types=1);

//Definir Clase

class Usuario
{
    //Constructor Se ejecuta automatico al instanciar el objeto.
    public function __construct(public int $id, public string $nombre, public bool $logeado)
    {
    }

    //Método
    public function toString()
    {
        $auth = $this->logeado ? 'Esta logeado' : 'No esta logeado';

        echo "Id: $this->id   Usuario: $this->nombre $auth";
    }
}

//Instanciar Objeto
$usuario = new Usuario(0, "Hodei", false);


//Ver
$usuario->toString();
