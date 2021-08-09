class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  //   Método
  datosPropietario() {
    console.log(
      `Los datos del propietario son Nombre: ${this.nombre} - Dirección: ${this.direccion} - Telefono: ${this.telefono}`
    );
  }
}

// Clase animal que se extiende de propietario
class Animal extends Propietario {
  // Llamo los componentes de la clase anterior + los que necesita esta clase
  constructor(
    nombreDelPropietario,
    direccionDelPropietario,
    telefonoDelPropietario,
    tipo
  ) {
    super(
      nombreDelPropietario,
      direccionDelPropietario,
      telefonoDelPropietario
    );
    // Se coloca el _ para no tener el mismo nombre que el getter
    this._tipo = tipo;
  }

  get tipo() {
    return this.tipo;
  }
}

// const Perrito = new Animal("Luis", "Av. Victoria 186", "+56934123772", "Perro");

class Mascota extends Animal {
  // Se crea un constructor con todos los componentes de Animal + los que necesita mascota
  constructor(
    nombreDelPropietario,
    direccionDelPropietario,
    telefonoDelPropietario,
    tipoDeAnimal,
    nombre,
    enfermedad
  ) {
    super(
      nombreDelPropietario,
      direccionDelPropietario,
      telefonoDelPropietario,
      tipoDeAnimal
    );

    this._nombre;
    this._enfermedad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}
