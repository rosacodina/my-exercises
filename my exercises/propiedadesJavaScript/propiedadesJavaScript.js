//Template literals es una nueva funcionalidad. Cuando antes teníamos una constante y queríamos concatenar varias constantes, teníamos que hacer: nombre + " " apellido, pero los template literals nos permite concatenar:

const nombre = 'Carlos';
const apellido = 'Azaustre';

console.log(`${nombre} ${apellido}`);

//Entre paréntesis son las props
//De esta manera le podemos pasar variables a un string de forma dinámica
function Componente({ backgroundColor }) {
  return <div className={`bg-color-${backgroundColor}`}> Hola</div>;
}

/*Otra funcionalidad son los short hand property names de Javas en objetos. 
Los short hands property names permite no tener que poner el contenido de la caja dentro del objeto, es decir, si el contenido es lo mismo que la variable que hemos declarado antes, entonces podemos ahorrarnos eso*/

const nombre2 = 'Laura';
const edad = 35;
const twitter = 'https://twitter.com/Laura';

const persona = {
  nombre2, //En vez de: nombres2= "nombre2",
  edad,
  twitter,
};

console.log(persona);

//FUNCIONES QUE SE USAN CON JAVASCRIPT Y REACT

//FUNCIONES FLECHA
//Una función normal es:

function nombreDeFuncion(parámetros) {
  return 'Hola';
}

//La función flecha se escribe con una constante, después las llaves se sustituyen por la flecha y si el código tiene varias líneas se escriben llaves y se pone dentro, pero podemos incluso quitar las últimas llaves y directamente poner el return detrás de la flecha:

const funcionFlecha = (argumentos) => {
  return 'Hola';
};

funcionFlecha();

const funcionFlechaCorta = () => 'Hola';
funcionFlechaCorta();

//DESTRUCTURING
/*Manera normal*/

const cuadrado = {
  x: 10,
  y: 3,
};

function calculaArea(cuadrado) {
  return cuadrado.x * cuadrado.y;
}

calculaArea(cuadrado);

//Manera con destructuring, donde se sacan las propiedades del objeto y trabajar con ellas dentro de la función
//Opción 1
const cuadrado1 = {
  x: 10,
  y: 3,
};

function calculaArea(cuadrado1) {
  const { x, y } = cuadrado1;
  return x * y;
}

calculaArea(cuadrado1);

//Opción 2
const cuadrado2 = {
  x: 10,
  y: 3,
};

function calculaArea({ x, y }) {
  return x * y;
}

calculaArea(cuadrado2);

//SPREAD OPERATOR se puede aplicar a arrays y objetos
//Ejemplo normal con listas
const array = [1, 2, 3, 4, 5];

const otroArray = [6, 7, 8, 9, 10];

const nuevoArray = array.concat(otroArray);
console.log(nuevoArray);

//Ejemplo con spread operator y así queda de una manera más legible

const nuevoArray2 = [...array, ...otroArray];

//Ejemplo normal con objetos

const obj1 = {
  a: a,
  b: b,
  c: c,
};

const obj2 = {
  d: d,
  e: e,
};

const nuevoObjeto = Object.assign({}, obj1, obj2); //con las llaves de dentor del ( ) indicamos que es el nuevo array

//Ejemplo con spread operator con objetos:

const nuevoObjeto2 = { ...Componenteobj1, ...obj2 };
