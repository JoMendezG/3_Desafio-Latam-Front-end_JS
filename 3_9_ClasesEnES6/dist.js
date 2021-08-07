"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  } //   getters y Setters


  _createClass(Impuestos, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    },
    set: function set(value) {
      this._monto_bruto_anual = value;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(value) {
      this._deducciones = value;
    }
  }]);

  return Impuestos;
}();

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    if (typeof nombre != "string") {
      console.warn("Se supone que nombre debiese ser un texto para la persona");
    }

    if (!(impuesto instanceof Impuestos)) {
      console.warn("Se supone que impuesto es de tipo impuesto para la persona " + nombre);
    }

    this._nombre = nombre;
    this._impuesto = impuesto;
  } //   getters y Setters


  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (// Calculo formula
        (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21
      );
    }
  }]);

  return Cliente;
}(); // X = Luis


var impuestosDeX = new Impuestos(100, 5);
var clienteX = new Cliente("X", impuestosDeX); // Y = Angela

var impuestosDeY = new Impuestos(300, 15);
var clienteY = new Cliente("Y", impuestosDeY);
var calculoDeX = clienteX.calcularImpuesto();
var calculoDeY = clienteY.calcularImpuesto();
console.log({
  calculoDeX: calculoDeX,
  calculoDeY: calculoDeY
}); // // Z = Carolina
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
