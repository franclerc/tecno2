class Juego3 {
   constructor() {
    
    this.texto= "JUEGO3";
    this.texto1= "CONSEGUIS: SEGUNDA PARTE DE LA FIGURA";
     this.texto2= "Llega notificación para escuchar audios";
    
    // Configuración de Matter.js
    this.engine = Matter.Engine.create();
    this.world = this.engine.world;

    // Crea una bola
    this.ball = Matter.Bodies.circle(400, 100, 40, {
      restitution: 0.8, // Elasticidad
      render: {
        fillStyle: 'rgba(155, 100, 255)', // Color de relleno
      },
    });
    Matter.World.add(this.world, this.ball);

    // Crea el suelo
    this.ground = Matter.Bodies.rectangle(400, 500, 800, 10, { isStatic: true });
    Matter.World.add(this.world, this.ground);

    // Pared izquierda
    this.leftWall = Matter.Bodies.rectangle(0, height / 2, 10, 600, { isStatic: true });
    Matter.World.add(this.world, this.leftWall);

    // Pared derecha
    this.rightWall = Matter.Bodies.rectangle(width, height / 2, 10, 600, { isStatic: true });
    Matter.World.add(this.world, this.rightWall);

  
  }

  dibujar() {
    // Actualiza la física
    Matter.Engine.update(this.engine);

    // Dibuja el fondo
    background(50,0,50);

    // Dibuja la bola
    fill(200,200,0);
    ellipse(this.ball.position.x, this.ball.position.y, 80, 80); // Dibuja la bola (diámetro 80)

    // Dibuja el suelo
    fill(40);
    rect(this.ground.position.x - 400, this.ground.position.y, width, 500); // Dibuja el suelo
    
    push();
    fill(255);
    textSize(32);
    text( this.texto,200,200);
    text( this.texto1,200,250);
    text( this.texto2,200,300);
    pop();
  }
    
}
