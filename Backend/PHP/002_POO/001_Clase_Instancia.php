<?php

//Definir Clase

class Usuario
{
    //Atributos
    public int $id;
    public string $nombre;
    public string $logeado;
}

//Instanciar Objeto
$usuario = new Usuario();

//Insertar datos
$usuario->id = "0";
$usuario->nombre = "Hodei";
$usuario->logeado = true;

//Ver
echo '<pre>';
var_dump($usuario);
echo '</pre>';
