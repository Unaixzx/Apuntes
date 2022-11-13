<?php

declare(strict_types=1);

/*
*Encapsulacion
    -Public: Se puede acceder y modificar en cualquier clase y objeto.
    -Private:Solo miembros de la misma clase.
    -Protected:Se puede acceder unicamente en la clase.
*/


class Usuario
{
    //Constructor Se ejecuta automatico al instanciar el objeto.
    public function __construct(public int $id, private string $nombre, public bool $logeado)
    {
    }

    //Método Setter
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    //Método Getter
    public function getNombre(): string
    {
        return $this->nombre;
    }

    //Método to String
    public function toString()
    {
        $auth = $this->logeado ? 'Esta logeado' : 'No esta logeado';

        echo "Id: $this->id   Usuario: $this->nombre $auth";
    }
}

//Instanciar Objeto
$usuario = new Usuario(0, "Hodei", false);

//Insertar nombre
$usuario->setNombre("Nekane");
//Ver nombre
echo $usuario->getNombre();
echo '<br>';
//ver Obj
$usuario->toString();
