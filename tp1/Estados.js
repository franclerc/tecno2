class Estados {
  constructor() {
    this.filas = 0;
    this.columnas = 0;
    this.tamCelda = 75;
    
    this.temblarActivado = false;
   
    // dimensiones de los canvas
    
    this.dimensiones = [
      { inicioX: 25, finalX: 400, inicioY: 25, finalY: 400 },   // Canvas 1: 400x400
      { inicioX: 30, finalX: 310, inicioY: 25, finalY: 610 },   // Canvas 2: 250x600
      { inicioX: 30, finalX: 330, inicioY: 35, finalY: 540 },   // Canvas 3: 300x500
      { inicioX: 50, finalX: 640, inicioY: 40, finalY: 600 },   // Canvas 4: 600x600
      
      { inicioX: 25, finalX: 400, inicioY: 25, finalY: 400 },   // Canvas 1: 400x400
      { inicioX: 30, finalX: 310, inicioY: 25, finalY: 610 },   // Canvas 2: 250x600
      { inicioX: 30, finalX: 330, inicioY: 35, finalY: 540 },   // Canvas 3: 300x500
      { inicioX: 50, finalX: 640, inicioY: 40, finalY: 600 },   // Canvas 4: 600x600
      
      { inicioX: 25, finalX: 400, inicioY: 25, finalY: 400 },   // Canvas 1: 400x400
      { inicioX: 30, finalX: 310, inicioY: 25, finalY: 610 },   // Canvas 2: 250x600
      { inicioX: 30, finalX: 330, inicioY: 35, finalY: 540 },   // Canvas 3: 300x500
      { inicioX: 50, finalX: 640, inicioY: 40, finalY: 600 },   // Canvas 4: 600x600
      
      { inicioX: 25, finalX: 400, inicioY: 25, finalY: 400 },   // Canvas 1: 400x400
      { inicioX: 30, finalX: 310, inicioY: 25, finalY: 610 },   // Canvas 2: 250x600
      { inicioX: 30, finalX: 330, inicioY: 35, finalY: 540 },   // Canvas 3: 300x500
      { inicioX: 50, finalX: 640, inicioY: 40, finalY: 600 }    // Canvas 4: 600x600
    ];

    this.tiempo = 0;
    this.estado = 0;
    this.frenoActivado= false;
    this.indiceMancha = 0;
    this.manchaCoordenadas = [];

  // los tamaños de los canvas
    this.tamanio = [
      { ancho: 420, alto: 420 },
      { ancho: 270, alto: 600 },
      { ancho: 350, alto: 500 },
      { ancho: 600, alto: 600 },
      
      { ancho: 420, alto: 420 },
      { ancho: 270, alto: 600 },
      { ancho: 350, alto: 500 },
      { ancho: 600, alto: 600 },
      
      { ancho: 420, alto: 420 },
      { ancho: 270, alto: 600 },
      { ancho: 350, alto: 500 },
      { ancho: 600, alto: 600 },
      
      { ancho: 420, alto: 420 },
      { ancho: 270, alto: 600 },
      { ancho: 350, alto: 500 },
      { ancho: 600, alto: 600 },
    ];

   
    
        this.colores = [ // fondos
      'data/Amarillo1.png',
      'data/Rojo2.png',
      'data/Rosa3.png',
      'data/Verde4.png',
      
      'data/Rojo1.png',
      'data/Rosa2.png',
      'data/Verde3.png',
       'data/Amarillo4.png',
       
       
      'data/Rosa1.png',
       'data/Verde2.png',
       'data/Amarillo3.png',
       'data/Rojo4.png',
       
      'data/Verde1.png',
      'data/Amarillo2.png',
      'data/Rojo3.png',
      'data/Rosa4.png',
     
    ];

    this.pintura = new Pintura();
    this.cargarImagenes();
    this.pintura.cargarImagenes();

    this.crearGrilla();
    
     this.factorTam = 70; // tamaño pngs
     this.achicar = true;
     this.agrandar = false;
     
  }

  cargarImagenes() {
    for (let i = 0; i < this.colores.length; i++) {
      this.colores[i] = loadImage(this.colores[i]);
    }
  }

  dibujar() {
    this.tiempo++;
    this.dibujartamanio();

    if (this.tiempo >= 100 && !this.frenoActivado) {
      this.estado = (this.estado + 1) % this.tamanio.length;
      this.tiempo = 0;
    }

    if (this.colores[this.estado]) {
      image(this.colores[this.estado], 0, 0, this.tamanio[this.estado].ancho, this.tamanio[this.estado].alto);
    }



  for (let i = 0; i < this.columnas; i++) {
  for (let j = 0; j < this.filas; j++) {
    let indiceImagen = i * this.filas + j;
    if (indiceImagen < this.pintura.imagenes.length) {
      let imagen = this.pintura.imagenes[indiceImagen];
      image(imagen, this.grilla[i][j].x, this.grilla[i][j].y, this.factorTam, this.factorTam); // Tamaño arbitrario de la imagen
      if (this.temblarActivado == true){
          let desX = random(-10, 10); // Desplazamiento aleatorio en X
          let desY = random(-10, 10); // Desplazamiento aleatorio en Y
          image(imagen, this.grilla[i][j].x + desX, this.grilla[i][j].y + desY, this.factorTam, this.factorTam);
      }
    }
  }
  
   
}



  }
  
  
  
  
  crearGrilla() { // cantidad de columnas y filas
    const canvasActual = this.dimensiones[this.estado];
    this.columnas = int((canvasActual.finalX - canvasActual.inicioX) / this.tamCelda);
    this.filas = int((canvasActual.finalY - canvasActual.inicioY) / this.tamCelda);

    this.grilla = []; // Array para almacenar las coordenadas de cada celda

    // Llenar la grilla con las coordenadas de cada celda
    for (let i = 0; i < this.columnas; i++) {
      this.grilla[i] = [];
      for (let j = 0; j < this.filas; j++) {
        this.grilla[i][j] = { x: canvasActual.inicioX + i * this.tamCelda, y: canvasActual.inicioY + j * this.tamCelda };
        let factor= 65; 
        this.grilla[i][j].x += noise (i * this.filas+j,0) * factor - factor*0.5;
         this.grilla[i][j].y += noise (0, i * this.filas+j) * factor - factor*0.5;
      }
    }
  }

  dibujartamanio() {
    resizeCanvas(this.tamanio[this.estado].ancho, this.tamanio[this.estado].alto);
    this.crearGrilla();
  }

  frenar() { // detener el tiempo en un canvas determinado
    this.frenoActivado = true;
    this.tiempo = 0;
  }


  cambiarCoordenadas() {
    // Mezclar aleatoriamente las imágenes en la lista
    shuffle(this.pintura.imagenes, true);

    // Redibujar la grilla con las imágenes mezcladas
    for (let i = 0; i < this.columnas; i++) {
      for (let j = 0; j < this.filas; j++) {
        let indiceImagen = i * this.filas + j;
        if (indiceImagen < this.pintura.imagenes.length) {
          let imagen = this.pintura.imagenes[indiceImagen];
          image(imagen, this.grilla[i][j].x, this.grilla[i][j].y, this.factorTam, this.factorTam); // Tamaño arbitrario de la imagen
        }
 
      }
    }

  }
  

  
 activarTemblar() {
    this.temblarActivado = true;
   
  }
  
  desactivarTemblar() {
    this.temblarActivado = false;
  }



  reiniciar(){
     this.frenoActivado = false;
     this.estado=0;
     this.tiempo = 0;
     this.factorTam = 70;
  }
}
