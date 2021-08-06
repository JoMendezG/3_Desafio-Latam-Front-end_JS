"use strict";

// Importo las clases de los animales desde Animals.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animals.js";

(async () => {
  const Response = await fetch("/animales.json");
  const { animales: Animales } = await Response.json();

  //   Obtenemos los elementos del html por ID
  const nombreAnimalElement = document.getElementById("animal");
  const edadAnimalElement = document.getElementById("edad");
  const comentariosAnimalElement = document.getElementById("comentarios");

  const previewAnimalElement = document.getElementById("preview");
  const btnRegistrarElement = document.getElementById("btnRegistrar");

  nombreAnimalElement.addEventListener("change", () => {
    const animalElegido = nombreAnimalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === animalElegido
    );

    console.log(animalEncontrado);

    previewAnimalElement.setAttribute(
      "src",
      `/assets/imgs/${animalEncontrado.imagen}`
    );
  });

  //   Cuando realizo un click en elemento boton imprime en la consola los valores
  btnRegistrarElement.addEventListener("click", () => {
    console.log(
      nombreAnimalElement.value,
      edadAnimalElement.value,
      comentariosAnimalElement.value
    );
  });
})();
