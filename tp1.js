let classifier;
//let soundModel = 'https://teachablemachine.withgoogle.com/models/xx63-iBqws/';

let soundModel = 'https://teachablemachine.withgoogle.com/models/xx63-iBqws/';
let mic;
let tpfinal;
let label = 'listening...';
let vol;


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  createCanvas(300, 300); // Tamaño inicial del lienzo
  tpfinal = new Estados();
  
  startListening();
  userStartAudio(); 
  classifier.classify(gotResult);

}

function startListening() {
  // Inicializar el micrófono solo después de la interacción del usuario
  mic = new p5.AudioIn();
  mic.start(acceso); // Llamar a gotMicAccess cuando se inicia el micrófono
}

function acceso() {
  console.log('Micrófono listo');
  
 
}

function draw() {
  background(0);
  tpfinal.dibujar();
  vol = mic.getLevel();
  console.log(vol);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;

  if (label === 'Frenar') {
    tpfinal.frenar();
  } else if (label === 'Achicar') {
    tpfinal.ajustarTamanoYCambiarCoordenadas();
  } else if (label === 'Reiniciar') {
    tpfinal.reiniciar();
  }
}
