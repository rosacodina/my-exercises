/*Create a list of 20 numbers from 0 to 20. 
lower numbers than 10: sum 2 & higher numbers: than 10 multiply 5 and print the list.
Make a function
*/

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < numbers.length; i++) {
  if (i < 10) {
    numbers[i] = numbers[i] + 2;
  } else if (i >= 10) {
    numbers[i] = numbers[i] * 5;
  }
}
console.log(numbers);

function calculation(array, number1, number2) {
  for (let i = 0; i < array.length; i++) {
    if (i < 10) {
      array[i] = array[i] + number1;
    } else if (i >= 10) {
      array[i] = array[i] * number2;
    }
  }
}

const usedArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
calculation(usedArray, 2, 2);
console.log(usedArray);

//Constructor function of an object which has a feature name and age

function Object(name, caca, status) {
  this.name = name;
  this.loQueQuiera = caca;
  this.status = status;

  this.print = function () {
    console.log(this.name + ' ' + this.status);
  };
}

let user = new Object('Rosa', '', 'Codina');
console.log(user);

///////////////////////

let myDate = new Date(1990, 21, 10, 19);
console.log(myDate);

Date.prototype.sumDays = function (days) {
  this.setDate(this.getDate() + days);
  return this;
};

Date.prototype.sumYears = function (years) {
  this.setDate(this.getDate() + years);
  return this;
};

console.log(myDate);
console.log(myDate.sumYears(5));
