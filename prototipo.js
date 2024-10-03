let intro;



function setup() {
  createCanvas(windowWidth, windowHeight);
  intro= new estados();
}


function draw() {
  background(200);

  intro.dibujar();
}


function mousePressed() {
  intro.pasarEstado();
}
