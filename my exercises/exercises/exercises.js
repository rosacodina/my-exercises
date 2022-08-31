//Calcular la media de un array de números. Con 6 números. El resultado guardarlo en una variable e imprimir ésta por consola.

const numbers = [1, 2, 3, 4, 5, 6];
let result = 0;

function average(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }

  result = result / numbers.length;

  return result;
}

console.log(average(numbers));

//bucle while que imprima una lista de números que tiene que ir de mayor a menor hasta el 10 y que el while se ejecute hasta que el número que se imprima por consola sea menor o igual que 6

const numberList = [2, 4, 6, 8, 10];
let i = 0;

function lista(numberList) {
  while (i <= 2) {
    console.log(numberList[i]);
    i++;
  }
}

lista(numberList);

const numberList2 = [10, 12, 14, 16];

function numeros(numberList2) {
  for (let i = 0; i <= 1; i++) {
    console.log(numberList2[i]);
  }
}
numeros(numberList2);

//Calcular la media de una lista de números

const numberList3 = [2, 4, 6, 8];
let result3 = 0;
let final = 0;

function media(numberList3) {
  for (let i = 0; i < numberList3.length; i++) {
    result3 = numberList3[i] + result3;
    console.log(result3);
  }

  final = result3 / numberList3.length;
  return final;
}

console.log(media(numberList3));

/*Función con bucle while que vaya recorriendo una lista de
palabras y cuando encuentre la palabra "simio" que el bucle pare.
Hay una función ya dada en JS que es equals.*/

const palabras = ['hola', 'señor', 'simio', ',', '¿cómo', 'está?'];
let posicion = 0;

function parar(palabras) {
  while (palabras[posicion] <= palabras[1]) {
    console.log(palabras[posicion]);
    posicion++;
  }
}
parar(palabras);

/*Función que reciba una lista de números donde haya pares e impares y que devuelva otra lista diferente con los números impares de la primera lista multiplicados por 2*/

const paresImpares = [1, 2, 3, 4, 5, 6, 7, 8];
let listaPares = [];
let listaImpares = [];

function nuevaLista(paresImpares) {
  for (let i = 0; i < paresImpares.length; i++) {
    console.log(paresImpares[i]);
    if (paresImpares[i] % 2 !== 0) {
      listaImpares.push(paresImpares[i]);
    }
  }
  console.log(listaImpares);

  for (let i = 0; i < listaImpares.length; i++) {
    listaImpares[i] = listaImpares[i] * 2;
  }

  console.log(listaImpares);
}

nuevaLista(paresImpares);

//Coger la lista de número anterior (paresImpares) y usando la función MAP que divida cada uno de ellos entre 3

let listaDividida = paresImpares.map(function (elemento) {
  return elemento / 3;
});

console.log(listaDividida);

//Recibo una lista de números y que devuelva otra lista nueva con los números pares de esa lista multiplicados por 10 y hacerlo usando una función map y hacer este mismo ejercicio usando un for.

const otraLista = [10, 11, 12, 13, 14, 15];

let numerosPares = [];

function calcula(otraLista) {
  for (let i = 0; i < otraLista.length; i++) {
    if (otraLista[i] % 2 == 0) {
      numerosPares.push(otraLista[i] * 10);
    }
  }
  console.log(numerosPares);
}

calcula(otraLista);

//Hacer lo mismo con map
const eterno = [1, 2, 3, 4, 5];

let paresEterno = eterno.map(function (elemento) {
  if (elemento % 2 == 0) {
    return elemento * 10;
  } else {
    return elemento;
  }
});

console.log(paresEterno);

let putaLista = paresEterno.filter((lista) => lista % 2 == 0);

console.log(putaLista);
