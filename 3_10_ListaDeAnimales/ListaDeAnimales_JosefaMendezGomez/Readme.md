<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html">
    <h1 id="github-pages">Github pages</h1>
    <p><a href="https://josefamendezpruebaunodl.ga/Unidad_3/3_1_VariablesYOperadoresLogicos/index.html">Vista
        del proyecto</a></p>
    <h1 id="desafío">Descripción </h1>
    <p>La clínica veterinaria Pet-XYZ requiere de un sistema en línea para que los médicos
    veterinarios y asistentes puedan guardar la información de tres tipo de animales en
    específico, como es el caso de Perros, Gatos y Conejos, debido a que son la mayor demanda
    por cantidad de casos al día por los momentos. Esto se realizará mediante la utilización de
    un formulario para identificar el tipo y datos del animal, en conjunto con los datos del dueño.
    <br>
    <b>Importante:</b> La carpeta de Apoyo Desafío - Lista de Animales, ya cuenta con el formulario
    elaborado, los estilos definidos e incluso el archivo de JavaScript listo para que agregues tu
    código.
    <br>
    <br>
   Por lo tanto, el desafío consiste en llevar a un archivo JavaScript un modelo de Herencia
  (diagrama de clases) en específico, como se muestra en la primera imagen, implementado
  la nomenclatura de ES6, para así facilitar a los usuarios de la aplicación (clínica veterinaria)
  identificar a los animales y a sus dueños. Es importante recalcar, que cada dueño tiene una
  mascota y se pueden seleccionar solo tres tipos de mascotas: perros, gatos o conejos,
  igualmente se debe ingresar el motivo de la consulta o enfermedad con el nombre del
  animal y los datos del dueño (nombre, dirección y número telefónico) como se muestran en
  el formulario en la imagen 2. Todo esto con el propósito que se despliegue una lista al final del formulario con los datos del dueño y de la mascota, incluyendo la enfermedad o motivo
de la consulta
    <br>
    <br>
    Para ello, la empresa entrega el diagrama de clases a través de la siguiente imagen, con las
    características básicas de lo que se debe diseñar y programar mediante la reseña de cardinalidad. En este caso, debes utilizar Node y Babel para ejecutar tu código, ya que solo debes realizar el programa en JavaScript, creando tres archivos, un archivo principal o main,y otros dos archivos para cada una de las clases.
    <br>
    <br>
    Utilizar el siguiente modelo de Herencia (diagrama de clases) como base:
    <br>
    <br>
      <img src="imgReadme/img10.jpg" alt="">
    <br>
    <br>
    En el formulario se añaden los datos requeridos y estos deben ser mostrados al final del
    formulario, exactamente como una lista después del texto “Datos agregados”, como muestra la siguiente imagen:
    <br>
    <br>
     <img src="imgReadme/img11.jpg" alt="">
    </p>
    <h1>Requerimientos</h1>
    <ol>
        <li>
          Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases
        </li>
        <br>
        <li>
        Crear los métodos get y set para la clase de mascota.  
        </li>
        <br>
        <li>
         Crear un método get para la clase Animal de la propiedad tipo para retornar el
mensaje “El tipo de animal es un: ${this.tipo}”
        </li>
        <br>
        <li>
         Crear el método “datosPropietario” en la clase correspondiente y que pueda ser
accedido desde las clases inferiores
        </li>
        <br>
        <li>
        Captar los elementos del formulario con JavaScript e identificar el tipo de animal
        para realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el
        usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el
        nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse
        “Perro”
        </li>
        <br>
        <li>
        Mostrar a modo de lista los mensajes resultantes para el método “datosPropietario”
        cuando el usuario haga un clic sobre el botón Agregar, accediendo a los métodos get
        de las clases Animal y Mascota, concatenando todo en un solo mensaje, como se muestra en la imagen a continuación:
        </li>
        <br>
        <br>
        <img src="imgReadme/img12.jpg" alt="">
    </ol>
  </div>
</body>

</html>
