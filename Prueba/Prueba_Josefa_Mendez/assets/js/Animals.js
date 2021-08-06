"use strict";

// Importamos la clase Animla de Animal.js
import { Animal } from "./Animal.js";

// Exporto las clases de cada animal para utilizar en el index.js
export class Leon extends Animal {
  Rugir() {
    this.playerPlay();
    console.log("Roooar!");
  }
}

export class Lobo extends Animal {
  Aullar() {
    this.playerPlay();
    console.log("Auuuu!");
  }
}

export class Oso extends Animal {
  Gruñir() {
    this.playerPlay();
    console.log("Grrrrr!");
  }
}

export class Serpiente extends Animal {
  constructor(...args) {
    super(...args);
  }

  Sisear() {
    this.playerPlay();
    console.log("Zzzzz!");
  }
}

export class Aguila extends Animal {
  Chillar() {
    this.playerPlay();
    console.log("Iiiiii!");
  }
}
