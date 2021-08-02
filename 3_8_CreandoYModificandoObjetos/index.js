// Creamos la función constructora del consultorio
function Consultorio(nombre, pacientes) {
    // this.nombre = nombre;
    // this.pacientes = pacientes;

    // Creamos los getters y setters de la función constructora
    var _nombre = nombre;
    var _pacientes = pacientes;
}

Consultorio.prototype.todosLosPacientes = function() {
    console.log(this.pacientes);
};

// Creamos la función constructora de Pacientes
function Paciente(nombre, edad, rut, diagnostico) {
    // this.nombre = nombre;
    // this.edad = edad;
    // this.rut = rut;
    // this.diagnostico = diagnostico;

    // Creamos los getters y setters de la función constructora
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    // Getters y setters de Pacientes
    Object.defineProperty(this, "nombre", {
        get: function() {
            return _nombre;
        },
        set: function(nuevoNombre) {
            _nombre = nuevoNombre;
        },
    });

    Object.defineProperty(this, "edad", {
        get: function() {
            return _edad;
        },
        set: function(nuevoEdad) {
            _edad = nuevoEdad;
        },
    });

    Object.defineProperty(this, "rut", {
        get: function() {
            return _rut;
        },
        set: function(nuevoRut) {
            _rut = nuevoRut;
        },
    });

    Object.defineProperty(this, "diagnostico", {
        get: function() {
            return _diagnostico;
        },
        set: function(nuevoDiagnostico) {
            _diagnostico = nuevoDiagnostico;
        },
    });
}

Paciente.prototype.toS;

// Pacientes
const PacienteNN1 = new Paciente("Roberto", 30, "1.222.333-4", "Tos");
const PacienteNN2 = new Paciente("Carolina", 27, "1.222.333-4", "Covid");

const ConsultorioNN = new Consultorio("Josefa Méndez", [
    PacienteNN1,
    PacienteNN2,
]);

ConsultorioNN.todosLosPacientes();