class portada {

  constructor() {
    // imagen de fondo de la protada
    this.fondo= loadImage('data/fondo.jpg');
    this.usuario = loadImage('data/usuario.png', img => {
      // Redimensiona la imagen de usuario cuando se haya cargado
      img.resize(300, 200); // Cambia el tamaño de la imagen de usuario a 100x100
    }
    );


    this.form = createInput('');
    this.form.size(200);
    this.form.attribute('placeholder', 'Escribe contraseña'); // Texto de marcador de posición


    //circulo
    this.Posxcir= windowWidth / 2.45;
    this.Posycir= 120;
    this.tam= 100;
  }

  dibujar() {

    push();
    tint(150);
    image(this.fondo, 0, 0, width, height);
    pop();

    //IMG USUARIO
    //CONTENDOR
    push();

    image(this.usuario, this.Posxcir, this.Posycir);
    noStroke();

    //fill(60,150);
    //rect(this.Posx, this.Posy,this.ancho, this.largo);
    pop();

    // Centra el FORMULARIO en la pantalla
    let formX = (windowWidth - this.form.size().width) / 2; // Calcula la posición en X
    let formY = (windowHeight - this.form.size().height) / 2; // Calcula la posición en Y
    this.form.position(formX, formY); // Ajusta la posición según el cálculo
  }

  // Función para ocultar el formulario
  ocultarForm() {
    this.form.hide();  // Oculta el formulario
  }

  mostrarForm() {
    this.form.show();  // Muestra el formulario
  }
}
