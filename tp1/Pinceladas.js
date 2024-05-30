class Pintura {
  constructor() {
    this.imagenes = [
      'data/manchasamarillas.png',
      'data/manchasvioletas.png',
      'data/manchasverdes.png',
      'data/manchasrojas.png',
      'data/manchasrosas.png',
      'data/manchasnegras.png',
      'data/manchasblancas.png',
      'data/manchasazules.png'
    ];
  }

  cargarImagenes() {
    for (let i = 0; i < this.imagenes.length; i++) {
      this.imagenes[i] = loadImage(this.imagenes[i]);
    }
  }
}
