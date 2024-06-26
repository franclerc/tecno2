let classifier;
let soundModel = 'https://teachablemachine.withgoogle.com/models/x42aco5mJ/';
let mic;
let tpfinal;

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  createCanvas(300, 300); // Tamaño inicial del lienzo
  tpfinal = new Estados();
}

function startListening() {
  // Inicializar el micrófono solo después de la interacción del usuario
  mic = new p5.AudioIn();
  mic.start(gotMicAccess); // Llamar a gotMicAccess cuando se inicia el micrófono
}

function gotMicAccess() {
  console.log('Micrófono listo');
  // Comenzar a clasificar una vez que el micrófono esté listo
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  tpfinal.dibujar();
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  let label = results[0].label;

  if (label === 'Frenar') {
    tpfinal.frenar();
  } else if (label === 'Achicar') {
    tpfinal.achicar();
  } else if (label === 'Agrandar') {
    tpfinal.agrandar();
  } else if (label === 'Cambiar') {
    tpfinal.cambiarCoordenadas();
  } else if (label === 'Reiniciar') {
    tpfinal.reiniciar();
  }
}
