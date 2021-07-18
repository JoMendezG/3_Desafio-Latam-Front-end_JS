// Creo una variable para obtener la información del formulario por el ID
const formulario = document.getElementById("formulario");
// Imprimo formulario, deberia ver el html del formulario
console.log(formulario);

// Creo un evento para el formulario
formulario.addEventListener("submit", function (event) {
    // preventDefault nos permite funcionar nuestra validación
    event.preventDefault();
    console.log("evento submit");


    // VARIABLES QUE LLAMAN AL HTML POR ID
    // Variables para campos imput del formulario
    const onlyLetters = /([A-Za-z])/g;
    const inputNombre = document.getElementById("nombre");
    const inputAsunto = document.getElementById("asunto");
    const inputMensaje = document.getElementById("mensaje");

    // Variables para los errores de ser generados
    const errorNombre = document.getElementById("errorNombre");
    const errorAsunto = document.getElementById("errorAsunto");
    const errorMensaje = document.getElementById("errorMensaje");

    // Variable que declara el formulario completado exitosamente
    const successResultado = document.getElementById("resultado");

    // Booleanas que validan que el campo esta funcionando en las condiconales
    let validNombre = false;
    let validAsunto = false;
    let validMensaje = false;

    // Si el testeo de las letras es verdadero en el imput del nombre
    if (onlyLetters.test(inputNombre.value)) {
    // Cambio de estado la validación
    validNombre = true;
    // No escribo nada en el campo
    errorNombre.innerHTML = "";
    } else {
    // Activo la variable error y escribo este mensaje
    errorNombre.innerHTML = "El campo nombre no es valido";
    }


    if (onlyLetters.test(inputAsunto.value)) {
        validAsunto = true;
        errorAsunto.innerHTML = "";
    } else {
    errorAsunto.innerHTML = "El campo asunto no es valido";
    }
    
    if (onlyLetters.test(inputMensaje.value)) {
    validMensaje = true;
    errorMensaje.innerHTML = "";
    } else {
    errorMensaje.innerHTML = "El campo mensaje no es valido";
    }
    
    // Si los tres campos son verdaderos escribe la palabra exito
    if (validNombre && validAsunto && validMensaje) {
    successResultado.innerHTML = "Exito";
    } else {
    successResultado.innerHTML = "";
    }

});