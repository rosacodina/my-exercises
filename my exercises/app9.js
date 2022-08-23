//DATA OBJECT

let today = new Date();
let date2 = new Date(1990, 9, 21, 06, 13, 45);

console.log(today);
console.log(date2);
console.log(date2.getFullYear());
console.log(date2.getDate());
console.log(date2.getTime()); //milisegundos de una fecha

//============
let beginning = new Date();
for (let i = 0; i < 5000; i++) {
  console.log('Sth...');
}

let finish = new Date();

let duration = beginning.getTime() - finish.getTime();
console.log(duration / 1000 + 'seconds');
