//Hacer la media de una lista de números usando un FOR
const numeros = [1, 2, 3, 4, 5, 6];
let media = 0;
let result = 0;

function average(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    media = numeros[i] + media;
    console.log(media);
  }
  result = media / numeros.length;
  console.log(result);
}

average(numeros);

console.log('------------------------');

//Crear una lista de números y  multiplicarlos por 10 todos usando MAP y , después, de esa lista  ya multiplicada que se filtre por los que sean mayores de 15 usando FILTER.

const listaNumeros = [0.5, 0.3, 0.2, 0.1, 1, 5, 7, 8, 9, 10, 14, 21, 25];
let multiplicar = [];

multiplicar = listaNumeros.map(function (elemento) {
  return elemento * 10;
});

console.log(multiplicar);

let filtro = multiplicar.filter((elemento) => elemento > 15);
console.log(filtro);

/*EJERCICIO:
Crear una clase Alumno (que es el molde de los objetos alumnos que podré crear los que quiera) y tienen que tener nombre, apellido, clase y lista de notas (un array) y que esta clase tenga un método y que el método de la clase use la función de calcular la media que he hecho en el primer ejercicio y crear tres objetos de esta clase e invoque al método de calcular media de la clase*/

let mediaAlumnos = 0;

//Clase: definir las características del Objeto
class Alumno {
  constructor(nombre, apellido, clase, notas) {
    //Propiedades del objeto
    this.nombre = nombre;
    this.apellido = apellido;
    this.clase = clase;
    this.notas = notas;
  }

  getMedia() {
    for (let i = 0; i < this.notas.length; i++) {
      mediaAlumnos = this.notas[i] + mediaAlumnos;
    }
    mediaAlumnos = mediaAlumnos / this.notas.length;
    return mediaAlumnos;
  }
}

//Objeto
const alumno1 = new Alumno('Edu', 'Pepe', '2A', [5, 6, 7]);
console.log(alumno1);
//To use the method of the object
console.log(alumno1.getMedia());

console.log('----------------');

//Clase Persona atributos nombre, apellido, edad y métodos escribir por consola con el valor de todos los atributos. Una clase que herede de esa que sea Policía con atributo número de placa y método arrestar que imprima "Te he arrestado" y otro que sea profesor que reciba el parámetro nota media con dos métodos (aprobar que imprima si el estudiante ha aprobado y el segundo método que calcule la media). Después llamar al método común desde un  objeto creado en profesor o polícia desde el método padre y que compruebe que se puede usar.

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  devuelve() {
    return (
      'Esta persona se llama ' +
      this.nombre +
      ' ' +
      this.apellido +
      ' ' +
      ', y tiene una edad de' +
      ' ' +
      this.edad
    );
  }
}

class Policia extends Persona {
  constructor(nombre, apellido, edad, numeroPlaca) {
    super(nombre, apellido, edad);
    this.numeroPlaca = numeroPlaca;
  }

  arrestar() {
    return (
      'El policía' +
      super.devuelve() +
      '.' +
      'Es policía y tiene número de placa' +
      ' ' +
      this.numeroPlaca +
      ' ' +
      ' y te ha arrestado'
    );
  }
}

const persona1 = new Persona('Laura', 'Bernarbé', '22');
const policia1 = new Policia('Paco', 'León', '34', '564332-D');

console.log(persona1.devuelve());
console.log(policia1.arrestar());
console.log(policia1.devuelve());
