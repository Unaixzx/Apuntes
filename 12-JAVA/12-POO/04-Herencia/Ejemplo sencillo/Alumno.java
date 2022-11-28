package org.unai.pooherencia;

public class Alumno extends Persona{
    private String colegio;
    private double notaMatematica;
    private double notaBiologia;
    private double notaHistoria;

    //Getter&Setter
    public String getColegio() {
        return colegio;
    }

    public void setColegio(String colegio) {
        this.colegio = colegio;
    }

    public double getNotaMatematica() {
        return notaMatematica;
    }

    public void setNotaMatematica(double notaMatematica) {
        this.notaMatematica = notaMatematica;
    }

    public double getNotaBiologia() {
        return notaBiologia;
    }

    public void setNotaBiologia(double notaBiologia) {
        this.notaBiologia = notaBiologia;
    }

    public double getNotaHistoria() {
        return notaHistoria;
    }

    public void setNotaHistoria(double notaHistoria) {
        this.notaHistoria = notaHistoria;
    }
}
