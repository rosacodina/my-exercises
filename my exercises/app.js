//DECLARATION:
//VARIABLES

//OBJECTS

//FUNCTIONS

//USE:
//USE OF OBJECTS

//USE OF FUNCTIONS

var persona = {
  nombre: 'rosa',
  apellido: 'codina',
  direccion: {
    calle: 'de los pinos',
    numero: 5,
    edificio: {
      color: 'verde',
    },
  },
};

var edificio = persona.direccion.edificio;

edificio.mierda;

//DECLARATION
function print(nombre, apellido) {
  apellido = apellido || 'xxx';
  console.log(nombre + ' ' + apellido);
}

function media(uno, dos, tres, cuatro, cinco) {
  const result = (uno + dos + tres + cuatro + cinco) / 5;
  console.log(result);
}

function numbers(one, two) {
  if (one > two) {
    console.log(one);
  } else {
    console.log(two);
  }
  //else if (two > one) {
  //console.log(two);
}

function printTwo(nombre) {}

var person = {
  name: 'Rose',
  surname: 'Codina',
  print: function () {
    console.log(person);
  },
};

//Create an object called student and it has three properties: maths, language and science. And it has to have a method that makes the average of those marks and another method that has to use the result of the first method and print if the student passes or not.

var student = {
  english: 10,
  math: 10,
  science: 6,
  average: function () {
    return (this.english + this.math + this.science) / 3;
  },
  mark: function () {
    if (this.average() < 4.9) {
      console.log('fail');
    } else if (this.average() > 5) {
      console.log('pass');
    }
  },
};

function Try() {
  this.name = 'rose';
  this.age = 31;
  this.surname = 'codina';
}
var rose = new Try();

console.log(rose);

//USE
print('Rosa');

media(2, 4, 6, 8, 10);
media(4, 3, 3, 3, 3);

student.mark();
