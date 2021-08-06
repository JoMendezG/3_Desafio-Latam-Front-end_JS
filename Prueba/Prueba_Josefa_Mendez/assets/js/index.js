"use strict";

// Importo las clases de los animales desde Animals.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animals.js";

(async () => {
  const Response = await fetch("animales.json");
  const { animales: Animales } = await Response.json();

  //   Obtenemos los elementos del html por ID
  const nombreAnimalElement = document.getElementById("animal");
  const edadAnimalElement = document.getElementById("edad");
  const comentariosAnimalElement = document.getElementById("comentarios");

  const previewAnimalElement = document.getElementById("preview");
  const btnRegistrarElement = document.getElementById("btnRegistrar");

  const animalContainerElement = document.getElementById("Animales");
  const playerElement = document.getElementById("player");
  const modalElement = document.getElementById("modal");

  const AnimalCards = [];

  nombreAnimalElement.addEventListener("change", () => {
    const animalElegido = nombreAnimalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === animalElegido
    );

    console.log(animalEncontrado);

    previewAnimalElement.setAttribute(
      "src",
      `assets/imgs/${animalEncontrado.imagen}`
    );
  });

  //   Cuando realizo un click en elemento boton imprime en la consola los valores
  btnRegistrarElement.addEventListener("click", () => {
    const nombreAnimal = nombreAnimalElement.value;
    const edadAnimal = edadAnimalElement.value;
    const comentariosAnimal = comentariosAnimalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === nombreAnimal
    );

    const params = [
      nombreAnimal,
      edadAnimal,
      animalEncontrado.imagen,
      comentariosAnimal,
      animalEncontrado.sonido,
    ];

    switch (nombreAnimal) {
      case "Leon":
        // Guardamos este animal dentro del mismo arreglo
        AnimalCards.push(new Leon(...params));
        break;

      case "Lobo":
        AnimalCards.push(new Lobo(...params));
        break;

      case "Oso":
        AnimalCards.push(new Oso(...params));
        break;

      case "Serpiente":
        AnimalCards.push(new Serpiente(...params));
        break;

      case "Aguila":
        AnimalCards.push(new Aguila(...params));
        break;
    }

    render();
  });

  function render() {
    animalContainerElement.innerHTML = "";
    AnimalCards.forEach((animal) => {
      const DIVContainer = document.createElement("div");
      const IMGImagen = document.createElement("img");
      const DIVCardButton = document.createElement("button");

      DIVContainer.classList.add("card");

      IMGImagen.setAttribute("src", `assets/imgs/${animal.Img}`);
      IMGImagen.classList.add("img-small");

      DIVCardButton.classList.add("card-footer", "p-0");

      DIVCardButton.innerHTML = `
      <button class="btn btn-primary btn-block">
        <img src"assets/imgs/audio.svg" style="width:10px" />
      </button>
      `;

      IMGImagen.addEventListener("click", () => {
        console.log("click imagen =>", animal);
        $("#modal").modal("show");

        const modalBodyElement = document.querySelector("#modal .modal-body");
        modalBodyElement.innerHTML = `
        <img src="/assets/imgs/${animal.Img}" class="img-small"/>
        <ul class"text-white">
            <li>Nombre: ${animal.Nombre}</li>
            <li>Edad: ${animal.Edad}</li>
            <li>Comentarios: ${animal.Comentarios}</li>
        </ul>
        `;
      });

      DIVCardButton.addEventListener("click", () => {
        console.log("click", animal);
        switch (animal.Nombre) {
          case "Leon":
            animal.Rugir();
            break;
          case "Lobo":
            animal.Aullar();
            break;
          case "Oso":
            animal.Gruñir();
            break;
          case "Serpiente":
            animal.Sisear();
            break;
          case "Aguila":
            animal.Chillar();
            break;
        }
      });

      DIVContainer.appendChild(IMGImagen);
      DIVContainer.appendChild(DIVCardButton);
      animalContainerElement.appendChild(DIVContainer);
    });
  }
})();
