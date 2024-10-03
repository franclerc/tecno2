class Seleccionar {


  constructor() {
    this.texto= "Pantalla final, Cuál es el culpable?";
    this.texto2= "Se elige uno de las cuatro opciones (con foto de cada peronaje)";
    
  }


  dibujar() {
    background(0);
    fill(255);
    textSize(32);
    text(this.texto, 200, 200);
    
  }
}
