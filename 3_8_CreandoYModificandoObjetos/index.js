// Creamos la función constructora del consultorio
function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
}

Consultorio.prototype.todosLosPacientes = function() {
    console.log(JSON.parse(JSON.stringify(this.pacientes)));
};

// Función que filtra los pacientes paraq encontrarlos
Consultorio.prototype.buscarPaciente = function(nombrePacienteABuscar) {
    var indice = -1;

    // For que recorre un arreglo de tamaño indefinido
    for (var i = 0; i < this.pacientes.length; i++) {
        if (this.pacientes[i].nombre == nombrePacienteABuscar) {
            indice = i;
        }
    }

    // Si hay un valor
    if (indice >= 0) {
        console.log(
            "Paciente encontrado, sus datos son: ",
            JSON.parse(JSON.stringify(this.pacientes[indice]))
        );
        // Si no hay ni un valor
    } else {
        console.log("Paciente no encontrado, intenta con otro nombre");
    }
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
        enumerable: true,
    });

    Object.defineProperty(this, "edad", {
        get: function() {
            return _edad;
        },
        set: function(nuevoEdad) {
            _edad = nuevoEdad;
        },
        enumerable: true,
    });

    Object.defineProperty(this, "rut", {
        get: function() {
            return _rut;
        },
        set: function(nuevoRut) {
            _rut = nuevoRut;
        },
        enumerable: true,
    });

    Object.defineProperty(this, "diagnostico", {
        get: function() {
            return _diagnostico;
        },
        set: function(nuevoDiagnostico) {
            _diagnostico = nuevoDiagnostico;
        },
        enumerable: true,
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

// Busqueda de pacientes de forma manual
ConsultorioNN.todosLosPacientes();
ConsultorioNN.buscarPaciente("Roberto");
ConsultorioNN.buscarPaciente("Carolina");
ConsultorioNN.buscarPaciente("Angela");