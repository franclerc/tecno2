class estados {

  constructor() {
    this.estado = 0;
    this.Portada= new portada(this);
    this.juego1= new Juego1();
    this.qr= new QR();
    this.juego2= new Juego2();
    this.juego3= new Juego3();
    this.fin = new Seleccionar();
    this.termino= new Final();
    this.boton=[];
    this.boton[0]= new Boton(725, 400, 210, 30); //boton 1 menu (estado 0)
    this.boton[1]= new Boton(500, 400, 210, 30);
    this.boton[2]= new Boton(270, 400, 210, 30);
    this.boton[3]= new Boton(960, 400, 210, 30);
   

  }

  dibujar() {
    if (this.estado == 0) {
      this.Portada.dibujar();
      this.boton[0].dibujar(725, 935, 400, 430); // aca es para que el mouse haga la interaccion en le lugar correcto.
    } else if (this.estado == 1) {
      this.juego1.dibujar();
      this.boton[0].dibujar(725, 935, 400, 430); // aca es para que el mouse haga la interaccion en le lugar correcto.
    } else if (this.estado == 2) {
      this.qr.dibujar();
      this.boton[0].dibujar(725, 935, 400, 430);
    } else if (this.estado == 3) {
      this.juego2.dibujar();
      this.boton[0].dibujar(725, 935, 400, 430);
    } else if (this.estado == 4) {
      this.juego3.dibujar();
      this.boton[0].dibujar(725, 935, 400, 430);
    } else if (this.estado == 5) {
      this.fin.dibujar();
      this.boton[0].dibujar(730, 940, 400, 430);
      this.boton[1].dibujar(500, 710, 400, 430);
      this.boton[2].dibujar(270, 490, 400, 430);
      this.boton[3].dibujar(960, 1360, 400, 430);
    } else if (this.estado == 6) {
      this.termino.dibujar();
      this.boton[0].dibujar(730, 940, 400, 430);
    }

  
    push();
    fill(255);
    textSize(30);
    text(frameCount, 20, 60);
    pop();

  }


  pasarEstado() {
    if (this.estado == 0 && toqueAqui(730, 940, 400, 430)) {

      this.Portada.ocultarForm();  // Oculta el formulario
      this.estado = 1;
    } else  if (this.estado == 1 && toqueAqui(730, 940, 400, 430)) {
      this.Portada.ocultarForm();  // Oculta el formulario
      this.estado = 2;
    } else  if (this.estado == 2 && toqueAqui(730, 940, 400, 430)) {
      this.Portada.ocultarForm();  // Oculta el formulario
      this.estado = 3;
    } else  if (this.estado == 3 && toqueAqui(730, 940, 400, 430)) {
      this.Portada.ocultarForm();  // Oculta el formulario
      this.estado = 4;
    } else  if (this.estado == 4 && toqueAqui(730, 940, 400, 430)) {
      this.Portada.ocultarForm();  // Oculta el formulario
      this.estado = 5;
    } else  if (this.estado == 5 && toqueAqui(730, 940, 400, 430)) {
      this.Portada.ocultarForm();  // Oculta el formulario
      this.estado = 6;
    } else  if (this.estado == 6) {
      if (toqueAqui(730, 940, 400, 430 ) || toqueAqui(500, 710, 400, 430) || toqueAqui(270, 490, 400, 430) || toqueAqui(960, 1360, 400, 430)) {
        this.Portada.mostrarForm()
          this.estado = 0;
      }
    }
  }
}








function toqueAqui(x1, y1, x2, y2) {
  return mouseX > x1 && mouseX < y1 && mouseY > x2 && mouseY < y2;
}
