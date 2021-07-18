// Variables
let num1 = prompt ("Ingresa el número de días a calcular");
let resultadoAno = (parseInt(num1) / 365);
let resultadosemana = ((parseInt(num1) - (365 * parseInt(resultadoAno)))/7);
let resultadoDias = ((parseInt(num1)%7)-1)


console.log (resultadoAno);
if (resultadoAno >= 1 && resultadoAno < 2 ) {
    document.write (parseInt(resultadoAno) + " año");
} else if (resultadoAno >= 2) {
    document.write (parseInt(resultadoAno) + " años")
}
document.write("<br>");
console.log (resultadosemana);
if (resultadosemana >= 1 && resultadosemana < 2 ) {
    document.write (parseInt(resultadosemana) + " semana");
} else if (resultadosemana >= 2) {
    document.write (parseInt(resultadosemana) + " semanas")
}
document.write("<br>");
console.log (resultadoDias);
if (resultadoDias >= 1 && resultadoDias < 2 ) {
    document.write (parseInt(resultadoDias) + " día");
} else if (resultadoDias >= 2) {
    document.write (parseInt(resultadoDias) + " dias")
}