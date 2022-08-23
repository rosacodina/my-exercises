//ARRAY

let numbers = [5, 4, 3, 2, 1];
console.log(numbers);

//Reverse
numbers.reverse();
console.log(numbers);

//Map
numbers = numbers.map(function (elem) {
  elem *= elem;
  return elem;
});

console.log(numbers);

//Math sqrt: it returns the original array
numbers = numbers.map(Math.sqrt);

console.log(numbers);

//Join
numbers = numbers.join('|');
console.log(numbers);

//Split
numbers = numbers.split('|');
console.log(numbers);

//Push: to put more elements in our array
numbers.push(9, 10, 11);
console.log(numbers);

//Unshift: to put more elements at the beginning of our array
numbers.unshift(-3, -2, -1, 0);
console.log(numbers);

//toString : it changes the array to srting
console.log(numbers.toString());

//splice(what position it has to statr from, how many position to eliminate)
//numbers = numbers.splice(2, 2);
//console.log(numbers);

//slice (position from which starts, position until which finishes and it does not count)
numbers = numbers.slice(1, 7);
console.log(numbers);

//
let frutas = [
  true,
  {
    first: 'Rose',
    second: 'Codina',
  },
  function () {
    console.log('HOLA CARACOLA');
  },
  function (person) {
    console.log(person.first + ' ' + person.second);
  },
  ['Hola', 'me', 'llamo', 'Rose'],
];

console.log(frutas[1]);

frutas[2]();

function myFunction(a, b, c, d) {
  console.log(a + b + c + d);
}

myFunction(1, 1, 1, 1, 3, 2);

function determina(a) {
  if (a === undefined) {
    console.log('a is undefined');
  }
  if (typeof a === 'number') {
    console.log('a is a number');
  }
  if (typeof a === 'string') {
    console.log('a is a string');
  }
  if (typeof a === 'object') {
    console.log('a is an object');
  }
}

determina(['cca']);
