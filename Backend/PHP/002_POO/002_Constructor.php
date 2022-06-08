<?php
declare(strict_types = 1);

//Definir Clase

class Usuario
{
    //Atributos
    public int $id;
    public string $nombre;
    public string $logeado;

    //Constructor Se ejecuta automatico al instanciar el objeto.
    public function __construct(int $id, string $nombre, bool $logeado)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->logeado = $logeado;
    }
}

//Instanciar Objeto
$usuario = new Usuario(0,"Hodei",true);


//Ver
echo '<pre>';
var_dump($usuario);
echo '</pre>';
