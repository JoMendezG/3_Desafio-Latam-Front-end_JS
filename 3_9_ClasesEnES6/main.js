class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  //   getters y Setters
  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }

  set monto_bruto_anual(value) {
    this._monto_bruto_anual = value;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(value) {
    this._deducciones = value;
  }
}

class Cliente {
  constructor(nombre, impuesto) {
    if (typeof nombre != "string") {
      console.warn("Se supone que nombre debiese ser un texto para la persona");
    }

    if (!(impuesto instanceof Impuestos)) {
      console.warn(
        "Se supone que impuesto es de tipo impuesto para la persona " + nombre
      );
    }
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  //   getters y Setters
  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  calcularImpuesto() {
    return (
      // Calculo formula
      (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21
    );
  }
}

// X = Luis
const impuestosDeX = new Impuestos(100, 5);
const clienteX = new Cliente("X", impuestosDeX);

// Y = Angela
const impuestosDeY = new Impuestos(300, 15);
const clienteY = new Cliente("Y", impuestosDeY);

const calculoDeX = clienteX.calcularImpuesto();
const calculoDeY = clienteY.calcularImpuesto();

console.log({ calculoDeX, calculoDeY });
// // Z = Carolina
// const impuestosDeZ = {
//   monto_bruto_anual: 200,
//   deducciones: 10,
// };

// const clienteZ = new Cliente("ClienteZ", impuestosDeZ);

// console.log({
//   typeofZ: typeof impuestosDeZ,
//   typeof: typeof impuestosDeY,
// });

// console.log({
//   instanceofZ: impuestosDeZ instanceof Impuestos,
//   instanceofY: impuestosDeY instanceof Impuestos,
// });

// // W = Sebastian
// const clienteW = new Cliente("clienteW", {});
// const resultado = clienteW.calcularImpuestoM;

// console.log({ resultado });

/*
BABEL
1. Levantamos el package.json -> npm init -y
2. npm install @babel/core @babel/cli --save-dev
3. npx babel main.js --out-file dist.js -> creamos el dist.js
4. Creamos el babel.config.json y lo configuramos con el código de desafío latam
5. npm install @babel/preset-env -> Se convierte nuestro dist en ES5

*/
