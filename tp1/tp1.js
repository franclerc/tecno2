let classifier;
let soundModel = 'https://teachablemachine.withgoogle.com/models/RMENQs2CP/'; // nuevo
let mic; 
let tpfinal;
let label = 'listening...';
let vol;



function preload() {
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
  
  mic = new p5.AudioIn();
  mic.start(acceso); 
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
  
  

  if (label === 'Frenar' && vol > 0.01 ) {
    tpfinal.frenar();
    tpfinal.desactivarTemblar();
  } else if (label === 'Cambiar' &&  vol > 0.01) {
    tpfinal.desactivarTemblar();
    tpfinal.cambiarCoordenadas();
    tpfinal.desactivarTemblar();
  }else if (label === 'Vibrar' &&  vol >  0.001) {
    tpfinal.activarTemblar();
  }else if (label === 'Reiniciar' && vol > 0.0001) {
    tpfinal.reiniciar();
    tpfinal.desactivarTemblar();
  }
  
   
}
