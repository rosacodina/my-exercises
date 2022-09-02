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
