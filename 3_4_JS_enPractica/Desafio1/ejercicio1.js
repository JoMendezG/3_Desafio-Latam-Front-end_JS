const formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", function (event) {
    /*Los formularios están pensados para no usar JS. JS se usa para 
    interseptar los formularios. Si vamos a usar el evento submit
    con JS, debemos cancelar el evento por defecto de los formularios
    para poder hacer nosotros nuestra lógica. */
    
    // Cancela el comportamiento por defecto del formulario
    event.preventDefault();
    console.log("evento submit");

    // Llamamos los imputs del formulario por id o querySelector
    const inputNombre = document.getElementById("nombre");
    const inputAsunto = document.getElementById("asunto");
    const inputMensaje = document.getElementById("mensaje");

    // Llamamos los mensajes ocultos en el HTML
    const errorNombre = document.getElementById("errorNombre");
    const errorAsunto = document.getElementById("errorAsunto");
    const errorMensaje = document.getElementById("errorMensaje");

    // Validamos los imputs
    // Expresiones regulares, permiten hacer operaciones con texto
    // https://regexr.com/
    // Toma las letras mayusculas y minusculas del abcdario
    const soloLetras = /([A-Za-z])/g

    // Variable que nos dira si esta bien o mal los imputs
    // El formulario es falso hasta que se demuestre lo contrario con las condicionales
    let validNombre = false;
    let validAsunto = false;
    let validMensaje = false;

    const exitoFormulario = document.getElementById("resultado");

    // Validación Nombre
    if (soloLetras.test(inputNombre.value)) {
        validNombre = true;
        errorNombre.innerHTML = "";
    } else {
        // Si quiero agregar texto a las etiquetas del html uso innerHTML
        errorNombre.innerHTML = "El campo nombre no es valido";
    }

    // Validación Asunto
    if (soloLetras.test(inputAsunto.value)) {
        validAsunto = true;
        errorAsunto.innerHTML = "";
    } else {
        errorAsunto.innerHTML = "El campo asunto no es valido";        
    }

    // Validamos Mensaje
    if (soloLetras.test(inputMensaje.value)) {
        validMensaje = true;
        errorMensaje.innerHTML = "";
    } else {
        errorMensaje.innerHTML = "El campo mensaje no es valido";        
    }

    // Si todos los imputs son correctos...
    if (validNombre == true && validAsunto == true && validMensaje == true) {
        exitoFormulario.innerHTML = "Formulario completado correctamente"
    } else {
        exitoFormulario.innerHTML = "";
    }

})

