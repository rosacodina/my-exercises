//Hacer una lista de 5 números y calcular su media

const numbers = [2, 4, 6];

function average(numbers) {
  let result = 0;
  let final1 = 0;

  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }

  final1 = result / numbers.length;
  return final1;
}

average(numbers);
console.log(average(numbers));
