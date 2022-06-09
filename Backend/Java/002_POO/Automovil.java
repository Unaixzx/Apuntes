package poo;

public class Automovil extends Transporte implements ITrasporte {

	public Automovil(int ruedas, int capacidad, String color) {
		super(ruedas, capacidad, color);

	}

	public String getInfo() {
		return "La bicicleta tiene ruedas: " + super.ruedas + " capacidad: " + super.capacidad + " piñones: "
				+ " color: " + super.color;
	}

}
