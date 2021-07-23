// Arrays con información de las consultas

const Radiologia = [{
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA"
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE"
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE"
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA"
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA"
    }
];


const Traumatologia = [{
        hora: "08:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA"
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA"
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE"
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE"
    }
];

const Dental = [{
        hora: "08:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
];


// Mostrar el contenido en una tabla
// Tabla radiología
let textoRa = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISÍON</th></tr>";
for (let i = 0; i < Radiologia.length; i++) {
    textoRa += `<tr>
            <td>${Radiologia[i].hora}</td>
            <td>${Radiologia[i].especialista}</td> 
            <td>${Radiologia[i].paciente}</td>
            <td>${Radiologia[i].rut}</td>
            <td>${Radiologia[i].prevision}</td>
            </tr>`;
}

document.getElementById("tablaRadiologia").innerHTML = textoRa;

const ordenRadiologia = document.getElementById("atencionRa").innerHTML =
    `Primera atencion: ${ Radiologia[0].paciente} - ${ Radiologia[0].prevision } | Última atención: ${ Radiologia[Radiologia.length - 1].paciente } - ${ Radiologia[Radiologia.length - 1].prevision }.`


// Tabla traumatologia
let textoTra = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISÍON</th></tr>";
for (let i = 0; i < Traumatologia.length; i++) {
    textoTra += `<tr>
            <td>${Traumatologia[i].hora}</td>
            <td>${Traumatologia[i].especialista}</td> 
            <td>${Traumatologia[i].paciente}</td>
            <td>${Traumatologia[i].rut}</td>
            <td>${Traumatologia[i].prevision}</td>
            </tr>`;
}

document.getElementById("tablaTraumatologia").innerHTML = textoTra;

const ordenTraumatologia = document.getElementById("atencionTra").innerHTML =
    `Primera atencion: ${ Traumatologia[0].paciente} - ${ Traumatologia[0].prevision } | Última atención: ${ Traumatologia[Traumatologia.length - 1].paciente } - ${ Traumatologia[Traumatologia.length - 1].prevision }.`


// Tabla radiología
let textoDen = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISÍON</th></tr>";
for (let i = 0; i < Dental.length; i++) {
    textoDen += `<tr>
            <td>${Dental[i].hora}</td>
            <td>${Dental[i].especialista}</td> 
            <td>${Dental[i].paciente}</td>
            <td>${Dental[i].rut}</td>
            <td>${Dental[i].prevision}</td>
            </tr>`;
}

document.getElementById("tablaDental").innerHTML = textoDen;

const ordenDental = document.getElementById("atencionDen").innerHTML =
    `Primera atencion: ${ Dental[0].paciente} - ${ Dental[0].prevision } | Última atención: ${ Dental[Dental.length - 1].paciente } - ${ Dental[Dental.length - 1].prevision }.`