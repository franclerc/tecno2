class Juego1 {
  constructor() {
    
    this.texto= "JUEGO1";
    this.texto1= "Se consigue al final un QR (siguiente pantalla)";
    
    // Configuración de Matter.js
    this.engine = Matter.Engine.create();
    this.world = this.engine.world;

    // Crea una bola
    this.ball = Matter.Bodies.circle(400, 100, 40, {
      restitution: 0.8, // Elasticidad
      render: {
        fillStyle: 'rgba(0, 100, 255, 1)', // Color de relleno
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

    // Techo
    this.upWall = Matter.Bodies.rectangle(400, 0, 800, 10, { isStatic: true });
    Matter.World.add(this.world, this.upWall);
  }

  dibujar() {
    // Actualiza la física
    Matter.Engine.update(this.engine);

    // Dibuja el fondo
    background(255);

    // Dibuja la bola
    fill(0, 100, 255);
    ellipse(this.ball.position.x, this.ball.position.y, 80, 80); // Dibuja la bola (diámetro 80)

    // Dibuja el suelo
    fill(150);
    rect(this.ground.position.x - 400, this.ground.position.y, width, 500); // Dibuja el suelo
    
    push();
    fill(0);
    textSize(32);
    text( this.texto,200,200);
    text( this.texto1,200,250);
    pop();
  }
}
