//Crea una lista de diez números con una función que filtre por los números pares y luego usar otra función usando map que multiplique todos los números por 15 creando una lista nueva.

let lista = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

let listaFiltrada = lista.filter((item) => item % 2 === 0);

let listaMultiplicada = listaFiltrada.map((numero) => (numero = numero * 10));
console.log(listaFiltrada);
console.log(listaMultiplicada);

//Crear clase padre Figura que tenga atributos base, altura y tipo que es indefinido. Método area y lo dejamos vacío. Con esto lo que hago es que las clases hijas implementen este método área. Crear otra clase hija Cuadrado con atributos cuadrado y otra clase que sea Rectángulo con atributo rectángulo. Y en el método get area implementar cómo se calcula el área de un cuadrado o rectángulo.

class Figura {
  constructor(lado, base) {
    this.lado = lado;
    this.base = base;
  }

  get area() {
    return 'Este objeto tiene ' + this.lado * this.base;
  }

  set area(areaNueva) {
    this._area = areaNueva;
  }
}

class Cuadrado extends Figura {
  constructor(lado, base) {
    super(lado, base);
  }
}

let cuadrado1 = new Cuadrado(5, 10);
(cuadrado1._area = 5), 6;
console.log(cuadrado1._area);
