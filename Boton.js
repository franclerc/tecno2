class Boton {
  //constructor
  constructor(Posx, Posy, ancho, alto) {
    this.Posx=Posx;
    this.Posy =Posy;
    this.ancho =ancho;
    this.alto =alto;
  }

  //dibujar
  dibujar(x1, x2, y1, y2) {
    if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
      fill(191,133,133);
    } else {
      fill(183,68,68);
    }
    rect(this.Posx, this.Posy, this.ancho, this.alto);
  }
  
}
