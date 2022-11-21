package org.unai.app.hogar;

import org.unai.app.jardin.Perro;

import static org.unai.app.hogar.Persona.saludar;

public class EjemploHogar {
    public static void main(String[] args) {
        Persona p = new Persona();
        Perro perro = new Perro();
        String saludo = saludar();
    }
}
