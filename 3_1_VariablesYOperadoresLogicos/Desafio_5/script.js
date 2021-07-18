let num1 = prompt ("Ingresa el primer número");
let num2 = prompt ("Ingresa el segundo número");
let num3 = prompt ("Ingresa el tercer número");
let num4 = prompt ("Ingresa el cuarto número");
let num5 = prompt ("Ingresa el quinto número");

let suma =  parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5);
let promedio = suma/5;

document.write ("La suma de todos tus números es: " + suma);
document.write("<br>");
document.write ("El promedio de tus números es: " + promedio);