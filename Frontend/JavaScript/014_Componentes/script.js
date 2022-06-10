//Componentes

class SaludoComponent extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.textContent = "Hola, Bienvenido 👋";
  }
}

customElements.define("saludo-component",SaludoComponent);