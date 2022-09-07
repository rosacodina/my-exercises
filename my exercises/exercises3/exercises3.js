//EJERCICIO: Crear una clase Alumno (con nombre, apellidos, notas array de 7 notas) luego añadir setters y getters (setters son para modificar los atributos desde fuera y getters para obtenerlos) y tener método para calcular media. Y de esa clase que herede otra que sea alumno1 y que tenga otro campo que sea el colegio al que va, pero que herede todo del primer alumno.
//Setters y getters son métodos para insertar y extraer datos o atributos de las clases. Sintaxis: Get nombre () {} / set nombre () {}
//Lo que hacemos es exponer esto atributo diferente a los que ponemos en los propio atributos, así indicamos que es una "especie" de propiedad privada
//Los GETTERS obtienen un valor de una propiedad. Los SETTERS establece/asigna el valor de una propiedad

class Alumno {
  constructor(nombre, apellidos, notas) {
    this._nombre = nombre;
    this.apellidos = apellidos;
    this.notas = notas;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  media() {
    let mediaNotas = 0;
    for (let i = 0; i < this.notas.length; i++) {
      mediaNotas = this.notas[i] + mediaNotas;
    }

    mediaNotas = mediaNotas / this.notas.length;
    return mediaNotas;
  }
}

console.log(Alumno);

let estudiante1 = new Alumno('Laura', 'Bernardo', [5, 6, 7, 5, 7, 8, 7]);
console.log(estudiante1);
console.log(estudiante1.media());

estudiante1._nombre = 'Paco'; //Gracias a SET puedo cambiarle el nombre
console.log(estudiante1);

class AlumnoHijo extends Alumno {
  constructor(nombre, apellido, notas, colegio) {
    super(nombre, apellido, notas);
    this.colegio = colegio;
  }
}

let estudiante2 = new AlumnoHijo(
  'Pedro',
  'Jimenez',
  [2, 1, 2, 2, 2, 2, 2],
  'Instituto María Zambrano'
);
console.log(estudiante2);

console.log(estudiante2.media());
