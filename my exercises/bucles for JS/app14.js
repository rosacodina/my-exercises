/*Function that receives a list and return a second list multiply 3
 */

function listNumbers(lista) {
  let resultado = 0;

  for (i = 0; i < lista.length; i++) {
    resultado = resultado + lista[i];
  }

  return resultado;
}

console.log(listNumbers([5, 2]));
