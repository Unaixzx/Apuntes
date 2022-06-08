<?php

//Clases Abstractas: No se pueden instanciar solo se pueden heredar

use Transporte as GlobalTransporte;

abstract class Transporte
{
    public function __construct(protected int $ruedas, protected int $capacidad)
    {
    }
}


class Bicicleta extends Transporte
{

    public function getInfo(): string
    {
        return "El transporte tiene " . $this->ruedas . " ruedas y una capacidad de " . $this->capacidad . " personas y NO GASTA GASOLINA ";
    }
}

class Automovil extends Transporte
{
    public function __construct(protected int $ruedas, protected int $capacidad, protected string $transmision)
    {
    }

    public function getTransmision(): string
    {
        return $this->transmision;
    }
}

//Error Cannot instantiate abstract class 
$transporte = new GlobalTransporte(1,3);
