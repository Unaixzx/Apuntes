package poo;

//Hereda de una clase abstracta
public class Bicicleta extends Transporte implements ITrasporte {

	private int piniones;

	public Bicicleta(int ruedas, int capacidad, String color, int piniones) {
		super(ruedas, capacidad, color);
		this.piniones = piniones;
	}

	public String getInfo() {
		return "El auto tiene ruedas: " + super.ruedas + " capacidad: " + super.capacidad + " piñones: "
				+ this.piniones + " color: "+ super.color;
	}

}
