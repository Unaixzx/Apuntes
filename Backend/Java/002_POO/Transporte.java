package poo;

public abstract class Transporte {
	//Atributos
	protected int ruedas;
	protected int capacidad;
	protected String color;
	
	//Constructor
	public Transporte(int ruedas, int capacidad, String color) {
		this.ruedas = ruedas;
		this.capacidad = capacidad;
		this.color = color;
	}
	
	
	
}
