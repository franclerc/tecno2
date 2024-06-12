class Pintura {
  constructor() {
    this.imagenes = [
      'data/combinacion1.png',
      'data/combinacion2.png',
      'data/combinacion3.png',
      'data/combinacion4.png',
      'data/combinacion5.png',
      'data/combinacion6.png',
      'data/combinacion7.png',
      'data/combinacion8.png'
    ];
   
  }

  cargarImagenes() {
    for (let i = 0; i < this.imagenes.length; i++) {
      this.imagenes[i] = loadImage(this.imagenes[i]);
    }
  }
}
