class Estados {
  constructor() {
    this.tiempo = 0;
    this.estado = 0;
    this.frenoActivado = false;
    this.indiceMancha = 0;
    this.manchaCoordenadas = [];

    this.tamanio = [  // tam de los canvas
      { ancho: 400, alto: 400 },
      { ancho: 400, alto: 400 },
      { ancho: 400, alto: 400 },
      { ancho: 400, alto: 400 },
      
        { ancho: 250, alto: 600 },
      { ancho: 250, alto: 600 },
      { ancho: 250, alto: 600 },
      { ancho: 250, alto: 600 },
      
        { ancho: 300, alto: 500 },
      { ancho: 300, alto: 500 },
      { ancho: 300, alto: 500 },
      { ancho: 300, alto: 500 },
      
        { ancho: 600, alto: 600 },
      { ancho: 600, alto: 600 },
      { ancho: 600, alto: 600 },
      { ancho: 600, alto: 600 },
    ];
    

    this.colores = [  // fondos
      'data/Amarillo1.png',
      'data/Rojo1.png',
      'data/Rosa1.png',
      'data/Verde1.png',
      'data/Amarillo2.png',
      'data/Rojo2.png',
      'data/Rosa2.png',
      'data/Verde2.png',
      'data/Amarillo3.png',
      'data/Rojo3.png',
      'data/Rosa3.png',
      'data/Verde3.png',
      'data/Amarillo4.png',
      'data/Rojo4.png',
      'data/Rosa4.png',
      'data/Verde4.png'
    ];

    // Coordenadas específicas para cada tamaño de canvas
    this.coordenadasPorTamanio = {
      "400x400": [
        { x: 30, y: 10 },  // Mancha 1
        { x: 40, y: 80 },  // Mancha 2
        { x: 100, y: 30 }, // Mancha 3
        { x: 200, y: 70 },   // Mancha 4
        { x: 20, y: 20 }, // Mancha 5
        { x: 40, y: 10 }, // Mancha 6
        { x: 100, y: 20 }, // Mancha 7
        { x: 100, y: 0 }  // Mancha 8
      ],
      "250x600": [
        { x: 50, y: 10 },
        { x: 70, y: 20 },
        { x: 100, y: 30 },
        { x: 50, y: 40 },
        { x: 20, y: 50 },
        { x: 22, y: 150 },
        { x: 50, y: -50 },
        { x: 10, y: -100 }
      ],
      "300x500": [
        { x: -40, y: 75 },
        { x: -150, y: 100 },
        { x: 15, y: 40 },
        { x: 50, y: 10 },
        { x: 10, y: 30 },
        { x: -80, y: 30 },
        { x: 60, y: 20},
        { x: -50, y: -100 }
      ],
      "600x600": [
        { x: -40, y: 10 },  
        { x: 240, y: 160 },  
        { x: 130, y: 140 },   
        { x: 100, y: 100 }, 
        { x: 200, y: 200 }, 
        { x: 70  , y: -40 }, 
        { x: 20, y: 0 },   
        { x: 150, y: -180 }    
      ]
    };

    this.pintura = new Pintura();
    this.cargarImagenes();
    this.pintura.cargarImagenes();
  }

  cargarImagenes() {
    for (let i = 0; i < this.colores.length; i++) {
      this.colores[i] = loadImage(this.colores[i]);
    }
  }

  dibujar() {
    this.tiempo++;
    this.dibujartamanio();
    if (this.tiempo >= 40 && !this.frenoActivado) {
      this.estado = (this.estado + 1) % this.tamanio.length;
      this.tiempo = 0;
    }

    if (this.colores[this.estado]) {
      image(this.colores[this.estado], 0, 0, this.tamanio[this.estado].ancho, this.tamanio[this.estado].alto);
    }

    for (let i = 0; i < this.manchaCoordenadas.length; i++) {
      let mancha = this.manchaCoordenadas[i];
      image(mancha.imagen, mancha.x, mancha.y);
    }
  }
  

  dibujartamanio() {
    resizeCanvas(this.tamanio[this.estado].ancho, this.tamanio[this.estado].alto);
  }
  

  frenar() { // detener el tiempo en un canva determinado
    this.frenoActivado = true;
    this.tiempo = 0;
  }

  agregarMancha() {  
    if (this.frenoActivado && this.indiceMancha < this.pintura.imagenes.length) {
      let imagenAleatoria = this.pintura.imagenes[this.indiceMancha];
      let key = `${this.tamanio[this.estado].ancho}x${this.tamanio[this.estado].alto}`;
      let coords = this.coordenadasPorTamanio[key][this.indiceMancha % this.coordenadasPorTamanio[key].length];

      this.manchaCoordenadas.push({ imagen: imagenAleatoria, x: coords.x, y: coords.y });
      this.indiceMancha++;
    }
  }

  cambiarCoordenadas() { // cambiar las coordenadas de las manchas con letra a
    let key = `${this.tamanio[this.estado].ancho}x${this.tamanio[this.estado].alto}`;
    let coords = this.coordenadasPorTamanio[key];
    let nuevaCoordenada = coords.shift(); // Extrae la primera coordenada del array
    coords.push(nuevaCoordenada); // Añade la primera coordenada al final del array

    // Actualiza las coordenadas de las manchas con las nuevas coordenadas
    this.manchaCoordenadas.forEach((mancha, index) => {
      mancha.x = coords[index].x;
      mancha.y = coords[index].y;
    });
  }
}
