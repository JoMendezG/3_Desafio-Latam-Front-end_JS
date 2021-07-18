let numero = prompt("Ingrese un numero del 1 al 20");


// Función para mostrar la tabla de múltiplicación
let Fmultiplicar = (nMultiplicar) => {
// For de multiplicación
    for (let i = 1; i <= nMultiplicar; i++) {
        let multiplicar = i * nMultiplicar;
        document.write (i + " * " + nMultiplicar + " = " + multiplicar + "<br>"); 
        // Resultado en consola
        console.log(i + " * " + nMultiplicar + " = " + multiplicar);
    }
}

// función para calcular el factorial del numero entregado
let Ffactorial = (nEntregado) => {
    // For de Factorial
    for (let i = 1; i <= nEntregado; i++) {
        let factorial = 1;

        for (let j = 1; j <= i; j++) { 
        factorial = factorial * j;
    }
        document.write("Factorial de " + i + " es: " + factorial + "<br>");
        // Resultado en consola
        console.log ("Factorial de " + i + " es: " + factorial)
    }
}


// Condicional del 1 al 20 
if (numero >= 1 && numero<= 20) {

    Fmultiplicar(parseInt(numero));
    Ffactorial (parseInt(numero));

    
} else {
    document.write ("Número fuera del rango");
    // Resultado en consola
    console.log ("Número fuera del rango");
}