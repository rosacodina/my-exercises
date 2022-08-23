/*Function receive a list of numbers from 1-10 and it returns 2 lists of numbers; one pair numbers and the second unpair 
Function from 1 to what I want.
*/

//DEFINITION
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pair = [];
const unpair = [];
const numbers2 = [5, 4, 8, 9, 125, 500, 683];
const list = [];
const digit = 5;

function lists(numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      pair.push(numbers[i]);
    } else {
      unpair.push(numbers[i]);
    }
  }
}

function autocomplete(list, digit) {
  for (i = 0; i <= digit; i++) {
    list.push(i);
    console.log(list);
  }
}

//USE
lists(numbers2);
console.log(pair);

autocomplete(list, digit);
