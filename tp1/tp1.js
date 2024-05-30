let prototipo;

function setup() {
  createCanvas(300,300);// Tamaño inicial del lienzo
  prototipo = new Estados();

}


function draw() {
  background(0);
  prototipo.dibujar();
}


function keyPressed() {
  if (key == 'p') {
    prototipo.frenar();
  }else if (key == 'a') {
    prototipo.cambiarCoordenadas();
  }
}


function mousePressed() {
  prototipo.agregarMancha();
}
