const numbers = [2, 4, 6, 8];

function average(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }

  result = result / numbers.length;

  return result;
}

let mierda = average(numbers);
console.log(mierda);

console.log('-------------------------------------------');

/*función que reciba lista de números y que devuelva la suma de los nº que estén en las posiciones de la lista pares */

const numbersList = [1, 2, 3, 4, 5, 6];
let result = 0;

function unpair() {
  for (let i = 0; i < numbersList.length; i++) {
    if (i % 2 == 0) {
      result = result + numbersList[i];
    }
  }
  return result;
}

console.log(unpair(numbersList));

console.log('-------------------------------------------');

//Crear función que reciba una lista de números y que devuelva la media de los números en posiciones pares//

let hola = [1, 2, 3, 4, 5, 6, 7, 8];
let result2 = 0;
let media = 0;

function mediaLista(hola) {
  let contadora = 0;
  for (let i = 0; i < hola.length; i++) {
    if (i % 2 == 0) {
      result2 = result2 + hola[i]; //16//
      contadora = contadora + 1;
    }
  }

  media = result2 / contadora;
  return media;
}

console.log(mediaLista(hola));

//Lista de 10 números, de los cuales 4 son negativos, y que devuelva una lista  con los negativos convertidos en positivos//

const hol = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4];
let listaNegativos = [];

function converted(hol) {
  for (let i = 0; i < hol.length; i++) {
    if (hol[i] < 0) {
      hol[i] = hol[i] * -1;
      listaNegativos.push(hol[i]);
    }
  }

  return listaNegativos;
}

//Tengo que meter el resultado de la función en una caja para que el valor "no quede en el aire"
let result25 = converted(hol);

console.log(result25);
