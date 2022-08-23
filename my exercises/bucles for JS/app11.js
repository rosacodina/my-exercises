let text = 'Hola mundo';

let arr = text.match();
console.log(arr);

//DESCRIPTION

class Plants {
  //Atributes
  colour;
  size;
  type;
  //Constructor
  constructor(colour, size, type) {
    this.colour = colour;
    this.size = size;
    this.type = type;
  }

  sayHello() {
    console.log(this.type);
  }
}

//USE

const jimmy = new Plants('green', 'big', 'Cactus');
console.log(jimmy);

jimmy.sayHello();

////////////////////////////////////
class Bag {
  size;
  brand;

  constructor(size, brand) {
    this.size = size;
    this.brand = brand;
  }

  printBrand(brand) {
    console.log(this.brand);
  }
}

//Here I create a bag
const bag1 = new Bag('grande', 'Coach');

bag1.printBrand();

/////////////

/*alumno nombre, colegio , edad, lista de notas
Método para añadir una nota más a la lista
Crear dos alumnos e imprimir*/

//LAS CLASES CREAN OBJETOS
class Student {
  name;
  school;
  age;
  marks;

  constructor(name, school, age, marks) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.marks = marks;
  }

  addMarks(newMark) {
    this.marks.push(newMark);
  }

  average() {
    let sum = 0;

    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    return sum / this.marks.length;
  }
}

student1 = new Student('Álvaro', 'Escritora', 31, [10, 9, 9]);

console.log(student1.average());
