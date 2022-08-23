/*EJERCICIO 
Crear función que reciba una lista de números que sean 10, 0, 5, 4, 3, 0 y 1; y que detecte los números 0 de la lista y los meta en otra lista que es la que tiene que devolver la función*/

const numbersList = [10, 0, 5, 4, 3, 0, 0, 1];
let ceroList = [];

function getList(numbersList) {
  for (let i = 0; i < numbersList.length; i++) {
    console.log(numbersList);
    if (numbersList[i] == 0) {
      ceroList.push(numbersList[i]);
      console.log(ceroList);
    }
  }
}

getList(numbersList);
