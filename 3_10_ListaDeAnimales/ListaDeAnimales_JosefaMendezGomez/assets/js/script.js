"use strict";

class Propietario {
  constructor(nombreDueno, direccion, telefono) {
    this.nombreDueno = nombreDueno;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  //   Método
  datosPropietario() {
    return `Los datos del propietario son Nombre: ${this.nombreDueno} - Dirección: ${this.direccion} - Telefono: ${this.telefono}`;
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
    return this._tipo;
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
    nombreMascota,
    enfermedad
  ) {
    super(
      nombreDelPropietario,
      direccionDelPropietario,
      telefonoDelPropietario,
      tipoDeAnimal
    );

    this._nombreMascota;
    this._enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

//////////////////////////////////////////////

// Capturamos los datos del formulario
// querySelector ID
const propietarioElement = document.querySelector("#propietario");
const telefonoElement = document.querySelector("#telefono");
const direccionElement = document.querySelector("#direccion");
const nombreMascotaElement = document.querySelector("#nombreMascota");
const tipoElement = document.querySelector("#tipo");
const enfermedadElement = document.querySelector("#enfermedad");

const resultadoElement = document.querySelector("#resultado");

// querySelector Class
const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", (event) => {
  // Colocamos el prevent default para trabajar con el formulario en JS
  event.preventDefault();
  // capturamos la información
  const nombreDelPropietario = propietarioElement.value;
  const telefonoDelPropietario = telefonoElement.value;
  const direccionDelPropietario = direccionElement.value;
  const nombreDeLaMacosta = nombreMascotaElement.value;
  const tipoDeMascota = tipoElement.value;
  const enfermedadDeLaMascota = enfermedadElement.value;

  //   Probamos que todo va bien con console.log
  //   Objeto literal
  //   console.log({
  //     nombreDelPropietario,
  //     telefonoDelPropietario,
  //     direccionDelPropietario,
  //     nombreDeLaMacosta,
  //     tipoDeMascota,
  //     enfermedadDeLaMascota,
  //   });

  // Cadena de prototipo por herencia, se vinculan todas las clases entre sí
  const mascota = new Mascota(
    nombreDelPropietario,
    direccionDelPropietario,
    telefonoDelPropietario,
    tipoDeMascota,
    nombreDeLaMacosta,
    enfermedadDeLaMascota
  );

  console.log(mascota);

  // _enfermedad es solo una variable común y corriente, en cambio enfermedad tiene el getter y setter

  resultadoElement.innerHTML = `
    <ul>
      <li>${mascota.datosPropietario()}</li>
      <li>El tipo de animal es un: ${
        mascota.tipo
      }, mientras que el nombre de la mascota es: ${
    mascota.nombreMascota
  } y la enfermedad es: ${mascota.enfermedad}</li>
    </ul>
    `;
});
