"use strict";

// Importo las clases de los animales desde Animals.js
import { Animal } from "./Animal.js";
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

  //   Almacena en un array toda la información de cada animal
  const AnimalCards = [];

  //   Aquí buscamos la imagen correspondiente al animal
  nombreAnimalElement.addEventListener("change", () => {
    const animalElegido = nombreAnimalElement.value;

    // Encuentra la información del animal a través del nombre
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

    // Parametros agrupados para el switch case
    const params = [
      nombreAnimal,
      edadAnimal,
      animalEncontrado.imagen,
      comentariosAnimal,
      animalEncontrado.sonido,
    ];

    // Casos que almacenan las propiedades según animal
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

    // Activamos la función render
    render();
  });

  function render() {
    animalContainerElement.innerHTML = "";
    AnimalCards.forEach((animal) => {
      const DIVContainer = document.createElement("div");
      const IMGImagen = document.createElement("img");
      const DIVCardButton = document.createElement("div");

      //   Agrega una card
      DIVContainer.classList.add("card");

      //   Busca en la carpeta imgs la foto correspondiente al animal
      IMGImagen.setAttribute("src", `assets/imgs/${animal.Img}`);
      //   Añade las imagenes del animal correspondiente de tamaño pequeño
      IMGImagen.classList.add("img-small");

      //   Creo un card footer
      DIVCardButton.classList.add("card-footer", "p-0");

      //   En este card footer agrega un boton con el svg del sonido
      DIVCardButton.innerHTML = `
      <button class="btn btn-block" style="background:
      #ffc107">
        <img src="assets/imgs/audio.svg" style="width: 20px" />
      </button>
      `;

      //   Si preciono la imagen levanta un modal
      IMGImagen.addEventListener("click", () => {
        console.log("click imagen =>", animal);
        $("#modal").modal("show");

        // Diseño el modal por un modal-body e incluyo en una lista la información seleccionada del animal
        const modalBodyElement = document.querySelector("#modal .modal-body");
        modalBodyElement.innerHTML = `
        <img src="assets/imgs/${animal.Img}" class="img-small"/>
        <ul style="color: white; list-style-type:none; margin-top: 10px;">
            <li>Nombre: ${animal.Nombre}</li>
            <li>Edad: ${animal.Edad}</li>
            <li>Comentarios: ${animal.Comentarios}</li>
        </ul>
        `;
      });

      //   Cuando preciono el boton dependiendo del animal su sonido
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
