//ASINCRONÍA: uso de PROMESAS y ASIN AWAY
//Esta es una función síncrona, que devuelve los datos
const datos = [
  {
    id: 1,
    title: 'Iron man',
    year: 1990,
  },
  {
    id: 2,
    title: 'La bella',
    year: 1980,
  },
  {
    id: 3,
    title: 'Blancanievez',
    year: 1985,
  },
];

/*const getData = () => {
  return datos;
};

console.log(getData());*/

//Si estos datos no los tenemos aquí y vienen de una API que nos da ese array, cualquier llamada que se hace desde la red, tiene un pequeño retraso que es lo que produce la asincronía. Para simular esa sincronía para cuando cojamos datos de una API, vamos a usar la función setTimeOut.
//Cuando usamos la función setTimeOut y luego consoleamos, nos aparece un "undefined" por el uso de esta función porque no ha pasado el tiempo que le marcamos y esto se resuelve gracias a las PROMESAS que son un objeto especial de javascript que nos permite ejecutar un trozo de código y cuando esté listo se devuelve, pero siempre devuelve algo sólo que va a pasar ese tiempo.

/*


const getData = () => {
  setTimeout(() => {
    return datos;
  }, 1500);
};

console.log(getData()); */

//----------

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

//dentro del ( then puedo llamarlo como quiera)
getData().then((datos) => console.log(datos));
