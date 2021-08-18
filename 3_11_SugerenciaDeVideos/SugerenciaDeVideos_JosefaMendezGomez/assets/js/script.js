class Multimedia {
  constructor(url) {
    this._url = url;
  }

  setInicio() {
    console.log("Este método es para realizar un cambio en la URL del video");
  }

  get url() {
    return this._url;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }

  playMultimedia() {}

  setInicio() {}
}
