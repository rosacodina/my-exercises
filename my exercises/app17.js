/*EJERCICIO UNO
1) Crear una función que reciba dos listas de números y que devuelva una única lista con las dos listas juntas (una detrás de otra).*/

let lista1 = [1, 2, 3, 4, 5];
const lista2 = [6, 7, 8, 9];

function juntas(lista1, lista2) {
  for (let i = 0; i < lista2.length; i++) {
    lista1.push(lista2[i]);
  }
  return lista1;
}

juntas(lista1, lista2);
console.log(lista1);

/*EJERCICIO DOS
2) Una función que reciba dos listas de números y tiene que devolver dos listas de números siendo una de ellas los números pares de ambas listas y otra los números impares de ambas listas
*/

let listaA = [1, 2, 3, 4, 5];
let listaB = [6, 7, 8, 9];
let pair = [];
let unpair = [];

function dosListas(listaA, listaB) {
  for (let i = 0; i < listaB.length; i++) {
    listaA.push(listaB[i]);
  }

  for (let i = 0; i < listaA.length; i++) {
    if (listaA[i] % 2 == 0) {
      pair.push(listaA[i]);
      console.log(pair);
    } else {
      unpair.push(listaA[i]);
      console.log(unpair);
    }
  }

  return unpair;
}

const resultPair = dosListas(listaA, listaB);

console.log(resultPair);
