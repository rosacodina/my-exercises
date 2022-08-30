const students = [
  {
    name: 'Pablo',
    age: 15,
    class: '2A',
    mark: 6,
    description: 'Es un estudiante normal',
  },

  {
    name: 'Laura',
    age: 17,
    class: '2A',
    mark: 8,
    description: 'Es un buen estudiante',
  },
  {
    name: 'Mario',
    age: 21,
    class: '2A',
    mark: 9,
    description: 'Es un buen estudiante',
  },
];

//Método FIND para saber si lo que queremos buscar está dentro del array, es como una especie de bucle for que recorre nuestro array mediante una función flecha y nosotros le pasamos lo que queremos buscar. En este caso imprime aquel objeto (dentro del array) que contenga la edad de 21, pero en caso de que pusiéramos edad de 3 años, no imprimiría nada porque no hay ningun objeto que tenga la edad de 3
students.find((student) => student.age == 21);
console.log(students.find((student) => student.age == 21));

//Método SOME que nos devuelve true o false dependiendo de si existe o no lo que estamos buscando
students.some((student) => student.age === 9);
console.log(students.some((student) => student.age === 9));

students.some((student) => student.age === 21);
console.log(students.some((student) => student.age === 21));

//Método EVERY que lo que hace es que comprueba si se cumple en todos lo que estamos buscando.

students.every((student) => (student.class.includes = '1A'));
console.log(students.every((student) => (student.class.includes = '1A')));

//Método MAP es como un bucle for pero de una manera más declarativa, en for se declara de forma imperativa que dices lo que quieres ir haciendo, pero de manera declarativa que es el MAP dices qué quieres hacer. Devuelve un array con los elementos que queremos buscar, con lo que le pasemos.
//En este ejemplo, nos devuelve un nuevo array con las edades de todos los estudiantes.
students.map((student) => student.age);
console.log(students.map((student) => student.age));

//Método FILTER que nos devuelve un array a partir de otro con esa condición que queremos filtrar. Aquí por ejemplo nos devuelve únicamente las frases que tengan la palabra "buen". En este ejemplo nos devuelve el estudiante Laura y Mario
students.filter((buen) => buen.description.includes('buen'));
console.log(students.filter((buen) => buen.description.includes('buen')));

//OBJETO THIS
//This e sun objeto especial de JavaScript que hace referencia al contexto que se está ejecutando en cuestión.

let object = {
  foo: function () {
    return 'foo';
  },
  bar: function () {
    document.addEventListener('click', (event) => this.foo());
  },
};
