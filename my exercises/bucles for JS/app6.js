function determinaDato(a) {
  if (a === undefined) {
    console.log('A is undefined');
  }
  if (typeof a === 'number') {
    console.log('A is a number');
  }

  if (typeof a === 'string') {
    console.log('A is a text');
  }

  if (typeof a === 'object') {
    console.log('A is an object');
  }
}

let b = 4;
console.log(b);

determinaDato(b);

/*
function sum(a, b) {
  return a + b;
}

function media(c, d) {
  return sum(c, d) / 2;
}

let result = sum(4, 5);
console.log(result);

let resultMedia = media(2, 2);
console.log(resultMedia);

Tengo que meter el resultado en una variable
*/
