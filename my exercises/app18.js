/*EJERCICIO UNO
Cear función que reciba una lista de números y que dicha función imprima por consola "la lista tiene un número de elementos par" (cuando la lista tenga un número par de elementos) y si no, que imprima "la lista tiene un número de elemntos impar"*/

const numbers1 = [1, 2, 3, 4, 5, 6];

function numbers(numbers1) {
  for (let i = 0; i < numbers1.length; i++) {
    if (numbers1.length % 2 == 0) {
      console.log('La lista tiene un número de elementos par');
    } else {
      console.log('La lista tiene un número de elementos impar');
    }
  }

  return numbers1;
}

numbers(numbers1);
