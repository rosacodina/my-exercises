const book = {
  title: 'You are going to be a programmer',
  author: 'Rose Codina',
  numPages: 123,

  read: function () {
    console.log('He leído el libro');
  },
};

//To access to a property (notación por puntos o corchetes)
console.log(book.title);
console.log(book['title']);

//To use the method of the object
book.read();

//--------------------------------------//

//Another way to create an object
let book1 = {};
book1.title = 'The programmer';

//Another way to create an object
let book2 = new Object({ title: 'La la land' });
console.log(book2.title);

let book3 = {
  title: 'JavaScript',
  author: {
    name: 'Rose',
    surname: 'Codina',
  },
};

//How to access to the value of a property. There are two ways:
book3.author.name;
book3['author']['name'];

let myArray = [[1, 2][(3, 4)]];

const numbers = [2, 2, 3, 4];

const multiply = numbers.map((element) => {
  return element * 2;
});

console.log(multiply);

const names = ['Rosa', 'María', 'Luisa'];

const upperNames = names.map((element) => {
  return element.toLocaleUpperCase();
});

console.log(upperNames);
