export class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  //   getters y Setters
  get nombre() {
    return this.nombre;
  }

  set nombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  calcularImpuesto() {
    return (
      // Calculo formula
      (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21
    );
  }
}
