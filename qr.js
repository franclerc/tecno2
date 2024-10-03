class QR {
  constructor() {
    this.texto = "QR";
    this.texto1 = "Se escanea con celular y se activara la plancha de corcho..";
    this.imagen = loadImage("data/QR.png");  //
    //this.imagen = loadImage("data/QR2.png");
  }

  dibujar() {
    background(0); // Fondo negro
    fill(255);     // Texto en blanco

    // Dibujar el texto
    push();
    textSize(32);
    text(this.texto, 500, 200);
    text(this.texto1, 500, 250);
    pop();
    
    // Dibujar la imagen con un tamaño personalizado (ancho: 100px, alto: 100px)
    let imgWidth = 200;
    let imgHeight = 200;
    image(this.imagen, 200, 150, imgWidth, imgHeight);
  }
}
