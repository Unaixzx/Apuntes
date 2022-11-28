package org.unai.pooherencia;

public class EjemploHerencia {
    public static void main(String[] args) {
        Alumno alu = new Alumno();
        Profesor pro = new Profesor();

        alu.setNombre("Alumno 1");
        pro.setNombre("Profesor 1");

        System.out.println(alu.getNombre());
        System.out.println(pro.getNombre());
    }
}
