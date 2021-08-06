"use strict";

// Creamos una clase llamada Animal que puede ser exportada
export class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;

  // Constructor con todas las propiedades indicadas
  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  //   Getters y Setters
  get Nombre() {
    return this.#nombre;
  }

  get Edad() {
    return this.#edad;
  }

  get Img() {
    return this.#img;
  }

  get Comentarios() {
    return this.#comentarios;
  }

  set Comentarios(nuevosComentarios) {
    this.#comentarios = nuevosComentarios;
  }

  get Sonido() {
    return this.#sonido;
  }

  playerPlay() {
    const player = document.getElementById("player");
    player.setAttribute("src", `./sounds/${this.#sonido}`);
    player.onload();
    player.player();
  }
}
