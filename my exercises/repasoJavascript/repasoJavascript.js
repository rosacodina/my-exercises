//1) Saber de qué tipo de dato se trata. TYPEOF
let miNumero = 1;
typeof miNumero;
console.log(typeof miNumero);

let miString = 'string se escriben entre comillas simples, oblicuas o rectas ';
console.log(typeof miString);

let miBooleano = true;
console.log(typeof miBooleano);

//2) Operadores
// 2.a) Sumar
let suma = 5 + 5;
console.log(suma);

//2. b) Restar
let resta = 3 - 2;
console.log(resta);

//2. c) Dividir
let division = 3 / 3;
console.log(division);

//2.d) Multiplicar
let multiplicacion = 5 * 5;
console.log(multiplicacion);

//2.e) Potencia
let potencia = 3 ** 3;
console.log(potencia);

//2.f) Concatenar diferentes variables string o trozos de string
let frase = 'hola ' + 'mundo';
console.log(frase);

//3) Operadores pos y pre incremento
let x = 1;
let y = ++x; //Esto lo que hace es incrementar x a 2 y equiparamos y a x
console.log(x, y);

let z = x++; //z va a ser igual a x que es dos y después de esta variable z va a valer 3.

//3.a) Decremento
let a = x--; //x valía 3 y a vale 3 y después x valdrá 2 porque se decrementa

//3.b) Predecremento
let b = --x; //b vale 1 y x vale 1

//3.c) Operador de igualdad:
true === true;
console.log(true); //devuelve que es cierto
true === true; //verdadero
true === false; //falso
true !== false; //!== es diferente a, aquí true es diferente a false por eso pone true
false !== false; //Dice falso porque son iguales
3 == '3'; //Dice que sí es igual porque es el mismo valor
3 === '3'; //Dice falso porque no es del mismo tipo, tienen solo el mismo valor

//3.d) Mayor o menor que
5 > 3; // 5 es mayor que 3? sí, true
5 < 3; //False
3 >= 3; //5 es mayor o igual que 3, devuelve true
2 <= 1; // 2 es menor que o igual que 1, falso
'a' < 'b'; //True porque a va antes que b en el alfabeto. Esto nos sirve para ordenar caracteres

//3.e) Operadores lógicos
true && true; //Devuelve true porque todos son iguales
true && true && false; //La cadena se rompe con el false y devuelve false

false || false; //devuelve falso
false || false || true; //devuelve true

//4) Condicionales
//4.a) IF
let operacion = 5 + 2;
if (operacion >= 7) {
  console.log('Es true');
} //imprime true

if (operacion == 9) {
  console.log('Es falso');
} //no imprime

if (operacion >= 14) {
  console.log('Es true');
} else {
  console.log('Es false');
}

//4.b) IF ANIDADOS
if (operacion > 7) {
  console.log('Es true');
} else if (operacion < 7 && operacion > 2) {
  console.log('Está entre 7 y 2');
} else {
  console.log('Es menos de 2');
}

//4.c) SWITCH + CASE + BREAK  + DEFAULT FINAL: cuando queremos comprobar varios casos, sustituimos muchos if else
let operacion2 = 5 + 2;

switch (operacion) {
  case 0:
    console.log('El resultado es 0');
    break;
  case 7:
    console.log('El resultado es 7');
    break;
  default: //PARA CONTEMPLAR CUALQUIER OTRO CASO QUE NO SE DE ANTES
    console.log('El resultado no es ni 0 ni 7');
}

//5) FUNCIONES:
//Bloques de código que ejecutamos a los cuales podemos reusar en diferentes partes del código y a los que le pasemos ciertos parámetros que son los datos que queremos transformar. La idea es que estas funciones hagan una tarea. Lo ideal es una función pura que quiere decir que a los datos de entrada nos devuelva los mismos datos de salida.

function nombreQueQuiera(nombre) {
  return `¡Hola ${nombre}!`; //Aquí hacemos una interpolación de variable
}

//Hay que llamar/usar la función cogiendo el nombre de la función y metiéndole el parámetro que queramos
console.log(nombreQueQuiera('Carlos'));
console.log(nombreQueQuiera('Pepe'));
console.log(nombreQueQuiera('Pepa'));

//Se puede poner un valor por defecto en el parámetro para que cuando se ejcute si está ejecutnaose vacío, aparezca el nombre por defecto

function saludar(nombre = 'Carlos') {
  return `Hola Sr. ${nombre}`;
}

console.log(saludar()); //Devuelve hola Sr. Carlos

//6) PROGRAMACIÓN ORIENTADA A OBJETOS
//Creas una clase/molde con propieadades, como un coche, y después usas esa estructura para crear objetos "replicadso", con la misma forma, como por ejemplo más modelos de coche. El objeto puede tener métodos que son las acciones que hace ese objeto.
//El nombre de los objetos siempre con inicial mayúscula
class Inventario {
  constructor(nombre) {
    this.nombre = nombre;
    this.articulos = [];
  }

  getNombre(nombre) {
    return this.nombre;
  }

  add(articulo, cantidad) {
    this.articulos[articulo] = cantidad;
  }

  cantidad(articulo) {
    return this.articulos[articulo];
  }
}

//6.a) Crear un objeto de la clase creada Inventario
let libros = new Inventario('libros');
console.log(libros.getNombre());

console.log(libros.add('Aprendiendo JavaScript', 5)); //POR QUÉ ES UNDEFINED

console.log(libros.cantidad('Aprendiendo'));

//7) BUCLES
//A veces queremos que ciertas partes de nuestro código se ejecuten varias veces dependiendo de una condición.

//7.a) WHILE: mientras se cumpla X condición, se ejecutará el código que pongamos entre llaves

function buclewhile(num) {
  let i = 0;
  while (i < num) {
    console.log(i); //POR QUÉ NO PUEDO PONERLO AL REVÉS
    i++;
  }
}

console.log(buclewhile(11)); //Devuelve números del 0 al 11, entra en el bucle hasta la 10a vez.

//7.b) DO WHILE: do le ponemos lo que queremos hacer y while hace la comprobación

function doWhile(num) {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < num);
}

console.log(doWhile(0)); //undefined porque 0 no es menor que nuestro i= 0

//7.c) FOR permite resumir en una sola línea lo que haríamos con while. for (incialización, condición de permanencia, actualización ) {código a ejecutar}

function bucleFor(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}

bucleFor(15);

//ARRAY
//Es una estructura de datos donde guardamos huecos como variables, datos, otras estructuras de datos, etc. Es como una cajonera donde en cada hueco se guarda algo pero encapsulado en el cajón

const array = [];

array[0] = '1';
array[1] = '2';

const array2 = new Array(10000);
console.log(array2);

const obj = {
  unArray: new Array(1000),
};

let longitud = obj.unArray.length;

for (let i = 0; i < longitud; i++) {
  obj.unArray[i] = 'Hola';
}

//OPERADOR CONSOLE.TIME que nos muestra el tiempo exacto en que se inicia una función y finaliza
//En la segunda opción el código es más limpio porque se crea una variable donde se pone la longitud de obj2 y por eso tarda menos en ejecutarse.

const obj2 = {
  //CONST ó CLASS
  unArray: new Array(1000000),
};

function badPerformance() {
  console.time('bad');
  for (let i = 0; i < obj2.unArray.length; i++) {
    obj2.unArray[i] = 'Hola';
  }
  console.timeEnd('bad');
}

function goodPerformance() {
  console.time('good');
  let unArray = obj2.unArray;
  for (let i = 0, longitud = unArray.length; i < longitud; i++) {
    unArray[i] = 'Hola';
  }
  console.timeEnd('good');
}

console.log(badPerformance());
console.log(goodPerformance());

//7.d) FOREACH: BUCLE PARA ITERAR DENTRO DE UN ARRAY de manera secuencial, es decir, para recorrerlo sin usar for

const miArray = [1, 2, 3, 4];
miArray.forEach(function (item, index) {
  //puede ser: (item, index) =>
  console.log(`El valor de la posición ${index} es: ${item}`);
});

//8) ITERAR UN OBJETO:
//Se usa cuando tenemos un objeto y queremos recorrer todos los valores de las propiedades que tiene. Para iterar el objeto necesitamos que las propiedades del objeto sean como un array (para iterar los arrays se usa foreach) y en el caso de los objetos se deben pasar a un array con la función - getOwnPropertyNames - que nos devuelve las propiedades del obj y la función - getOwnPropertyDescriptor- que nos devuelve el valor.

const libro = {
  titulo: 'Aprendiendo JS',
  auto: 'Carlos Azaustre',
  numPaginas: 100,
  precio: '24,90',
};

const props = Object.getOwnPropertyNames(libro);
props.forEach((name) => {
  let valor = Object.getOwnPropertyDescriptor(libro, name).value; //POR QUÉ USA LIBRO
  console.log(`La prop ${name} contiene: ${valor}`);
});

//7.f) FOR IN nos permite hacer lo mismo pero de manera más sencilla, la sintaxis es como un for pero se le pasa la estructura for(key in objet)

for (prop in libro) {
  console.log(`La prop ${prop} contiene: ${libro[prop]} `);
}

//9) CLASES CORE Y MÓDULOS DE JS
//Además de los tipos primitivos (number, string, boolean, number), están las clases core que forman el núcleo de JS. Las más usadas son object, number, array(estructura de datos) y string (para manipular texto).

//OBJETO: colección de variables y funciones agrupadas estructuralmente. Las variables que definimos son las propiedaes y las funciones son los métodos. Para acceder a las propiedades se hacen con la notación tipo punto y la notación tipo array.

const book = {
  titulo: 'Aprendiendo JS',
  autor: 'Carlos Azaustre',
  numPaginas: 100,
  editorial: 'carlosazaustre.es',
  precio: '24,90',
  //método
  leer: function () {
    console.log('He leído el libro');
  },
};

//Para acceder a las propiedades: 1) notación por tipo punto 2) notación tipo array
console.log(book.titulo);
console.log(book['numPaginas']);

//Las propiedades se pueden modificar a pesar de que el objeto sea con una constante, porque los objetos sí lo permiten
console.log((book.titulo = 'Desarrollo web'));

//Notación por corchetes
let pages = 'numPaginas';
console.log(book[pages]); //No se puede hacer libro.pages porque no lo lee, no devuelve nada

//Usar el método del objeto:
console.log(book.leer());

//CREACIÓN DE OBJETOS: 1) Se puede hacer con la notación de llaves 2) Creando una nueva instancia de la clase object
// 1)
let libro2 = {};
libro2.titulo = 'Éste es el comienzo';

// 2)
let libro3 = new Object({ titulo: 'Este es el título' });
console.log(libro3.titulo);

//Un objeto puede tener varios niveles, por supuesto una propiedad no hace falta que esté al mismo nivel. Una propiedad puede tener así mismo otro objeto con más propiedades dentro:

let libro4 = {
  titulo: 'Aprendiendo JS y objetos',
  autor: {
    nombre: 'Carlos Az',
    edad: 36,
    redes: {
      twitch: 'twich.ajdne',
      tiktok: 'tiktok.carlos',
    },
  },
};

//Para acceder a esas propiedaes:
console.log(libro4.autor.nombre, ['autor']);
console.log(libro4['autor']['redes']);

//CLASE CORE NUMBER: codifica los números en coma flotante de doble precisión, es decir, en 8 bites o 64 bytes
5.4e2; // 5.4 x 10 elevado a 2 = 540

//FUNCION PARSEINT:  si pasamos un string, nos lo formatea a entero
console.log(parseInt('15')); //Nos pasa el string a formato texto

//TOFIXED: redondea el número que le pasemos, solo que devuelve un string.
let n = 2.678;
n.toFixed(2); //Devuelve un string que lo redondea

//PASAR DE NÚMERO A BINARIO: le pasamos el número que queramos con toString y entre paréntesis le pasamos el 2 para que sea binario
console.log((15).toString(2));

//MATH para operaciones matemáticas que tiene ciertas funciones a su vez
Math.PI; //nos devuelve el número PI directamente

//Math.EMath.random(); //devuelve un número aleatorio

Math.pow(2, 6); //Devuelve la potencia de 2 elevado a 6

Math.min(2, 4, 6); //Devuelve el número más pequeño

//10) CLASE ARRAY
//Es una colección de datos (string, números, funciones, otros objetos, otros array) e incluso un array de arrays, es decir, una matriz
let miArray2 = [{ propiedad: 'valor' }, { propiedad: 'valor' }];

let miArray3 = [
  [2, 4],
  [3, 6],
];

console.log(miArray3[0][0]); //2
console.log(miArray3[0][1]); //4
console.log(miArray3[1][0]); //3
console.log(miArray3[1][1]); //6

//.LENGTH es el método para saber la longitud del array
let otroArray = [1, true, [3, 2], 'hola', { clave: 'valor' }];
console.log(`Mi array tiene ${otroArray.length} elementos`);

//.SORT para ordenar arrays
let array4 = [3, 6, 1, 4, 7, 2, 5];
console.log(array4.sort());

//POP saca el último elemento de mi array, aquí nos devuelve 7 porque lo hemos ordenado anteriormente y si volvemos a imprimir después de pop, nos sale el array sin el 7 porque lo hemos sacado
console.log(array4.pop());
console.log(array4);

//PUSH(elemento) sirve para introducir nuevos datos, el dato se lo indicamos ()
console.log(array4.push(8));
console.log(array4);

//.REVERSE() para revertir el orden del array
console.log(array4.reverse());

//.JOIN es un método que nos permite unir los elementos de un array en uno solo, uniéndolos por el separador que le metamos.
let valor = 3;
const template = ['<li>', valor, '</li'].join('...'); //Aquí le decimos que los junte con tres puntos
console.log(template);

//MAP nos permite aplicar una misma función a todos los elementos de un array y transformarlos y nos devuelve un array nuevo con dicho elementos transformados
let miArray5 = [2, 4, 6, 8];
let raices = miArray5.map((item) => {
  return Math.sqrt(item);
  //Si la función tiene el mismo elmento que el argumento, podemos quitarlo de la función
  // let raices = miArray5.map(Math.sqrt)
});
console.log(raices); //Nos devuelve las raíces cuadradas

//FILTER nos permite filtrar ciertos elementos de un array
let miArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = miArray6.filter((item) => item % 3 === 0);
console.log(miArray6);
console.log(resultado);

//SLICE se trocean los arrays y le pasamos como parámetro el índice a partr del cual queremos cortar el array y el final
console.log(miArray6.slice(2)); //Devuelve desde la posición 2, es decir el 3, hasta el final
console.log(miArray6.slice(2, 4)); //Que corte desde la posición 2, que es el 3, hasta el corte 4 sin incluir esta posición

//11) OBJETOS DE UN ARRAY
const posts = [
  {
    id: 1,
    title: 'Mi primer post',
    image: 'https://img.com',
    tags: ['javascript', 'webdevelopment'],
  },
  {
    id: 2,
    title: 'Mi experiencia con React',
    image: 'https://img.com/2',
    tags: ['javascript', 'webdevelopment', 'react'],
  },
  {
    id: 3,
    title: '¿Por qué dejé Angular?',
    image: 'https://img.com/3',
    tags: ['javascript', 'webdevelopment', 'angular'],
  },
];

//FIND: Aquí le decimos que queremos buscar la pregunta, nos devuelve aquel cuyo title sea el que tenga la pregunta
let resultFind = posts.find((post) => post.title === '¿Por qué dejé Angular?');
console.log(resultFind);
let result2 = posts.find((post) => post.id === 1);
console.log(result2);

//EVERY nos sirve para ver si en todos los objetos existe el elemento que le pasemos
let resultEvery = posts.every((post) => post.tags.includes('react'));
console.log(resultEvery); //Devuelve false porque no está en todos

//MAP
let resultMap = posts.map((post) => post.title);
console.log(resultMap); //Devuelve los 3 títulos

//FILTER
let resultFilter = posts.filter((post) => post.tags.includes('angular'));
console.log(resultFilter);

let resultFilterImage = posts.filter(
  (post) => post.image.includes !== undefined //Aquí le decimos que nos envíe los objetos cuya imagen sea diferente a undefined, es decir, que no tenga. Nos devuelve todos porque todos tienen imagen
);
console.log(resultFilterImage);

//REDUCE recibe dos elementos; el primero es el acumulador y el segundo es el elemento que estamos iterando en ese momento. Aquí devolvemos un nuevo array concatenando todas las etiquetas con las tags y después lo inicializamos con un array vacío para que sepa que es un array
let resultReduce = posts.reduce((allTags, post) => {
  return [...allTags, ...post.tags];
}, []);
console.log(resultReduce);

//12) STRINGS Y SUS MÉTODOS
//nos permite manipular textos y tiene su clase y métodos propios. Un string se comporta como un array porque es un conjunto de caracteres
console.log('javascript'[2]); //Devuelve V
console.log('javascript'.length); //Devuelve el nº de caracteres
console.log('javascript'.charCodeAt(2)); //En el parámetro le ponemos la posición que queremos y en este ejemplo devuelve el número en unicode de ese caracater
console.log('javascript'.indexOf('script')); //Devuelve 4 porque a partir de la posición 4 es donde empieza la palabra "script"
console.log('javascript'.substring(2, 4)); //Devuelve -va-, desde la posición 2-4 sin incluir 4

//.split transforma un texto en array

//13) OBJETO THIS
//THIS es un objeto que hace referencia al contexto en que se está ejecutando la función

//14) CLOSURES
//Son un patrón muy usado. Las funciones son objetos y heredan propiedades de la clase object por eso se puede tratan como tal, por eso podemos guardar una función en una variable y después invocarla/usarla con un ()
//Un closure es una función que encapsula una serie de variables y definiciones locales que son accesibles únicamente si son devueltas con el operador return. Esto nos permite tener variables "privadas", es decir, que sean difíciles de acceder desde fuera.

const saludo = function (nombre) {
  return 'Hola ' + nombre;
};
console.log(saludo('Paco'));

//Función dentro de otra función, para poder acceder a esta segunda función hay que usar 2 veces ()

const a1 = 'Hey!';

function global() {
  const b = '¿Qué';
  function local() {
    const c = 'tal?';
    return a1 + b + c;
  }
  return local;
}

console.log(global()); //Si llamamos a global, nos devuelve local porque global devuelve la función como tal, no la función ejecutada
console.log(global()()); //Con doble () global devueve la función y con el segundo () devuelve la función de local

const closure = global(); //Aquí escribimos la ejecución
console.log(global());

//A continuación vamos a ver un closure, donde metemos una función dentro de una constante y dentro de esa función una variable privada con _ por convención, para saber que es u variable que no es accesible desde fuera. Para que sea un closure, englobamos toda la función dentro de un () y a su vez la vamos a ejecutar con el operador () al final de la misma. De este modo, la variable contador no es accesible desde fuera, sino que tiene que ser todo hecho a través del closure de mi contador.
//Para devolver estas funciones, tenemos que devolverlas a través de un return y devolver las funciones
//Si hubiera algún error, se tiene que coger con .catch(err =>........)
const miContador = (function () {
  let _contador = 0;

  function incrementar2() {
    return _contador++;
  }

  function decrementar2() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }

  return { incrementar2: incrementar2, decrementar2: decrementar2, valor }; //Aquí devuelve los métodos de la función
})();

console.log(miContador); //Aquí nos devuelve sólo las funciones del return
console.log(miContador.valor()); //Aquí ejecutamos la función valor, y devuelve 0
console.log(miContador.incrementar2());
console.log(miContador.incrementar2()); //Devuelve 1
console.log(miContador.incrementar2()); //Devuelve 2
console.log(miContador.decrementar2()); //Devuelve 1 //¿POR QUÉ DEVUELVE 3?

// 15) ASINCRONÍA Y PROMESAS: asincronía de tiempo, para evitar el retraso a que se ejecute una función se usan las promesas que son un objeto especial de JS que nos permite ejecutar un trozo de código y cuando esté listo se devuelve, siempre devuelve algo, lo único que pasa ese tiempo de asincronía que caracteriza a JS.
//PROMISE recibe dos argumentos; promise y reject. En resolve le pasamos como argumento nuestra función y en caso de que haya cualquier error tenemos que poner reject.
//Para ejecutar la función con promise tenemos que llamar a getDatos2().then() y then es una función de callback

const datos2 = [
  {
    id: 1,
    title: 'Iron Man',
    year: 2008,
  },
  {
    id: 2,
    title: 'Spiderman',
    year: 2017,
  },
  {
    id: 3,
    title: 'Avengers',
    year: 2019,
  },
];

const getDatos2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos2);
    }, 1500);
  });
};

getDatos2().then((datos) => console.log(datos));

//16) 10 CARACTERÍSTICAS DE JS PARA REACT
// 16.a) TEMPLATE LITERALS: nos permite interpolar variables de la siguiente manera

const nombre5 = 'Carlos';
const apellido5 = 'Azau';
console.log(`Esta persona se llama ${nombre5} ${apellido5}`);

//Con React sería una función y dentro recibe unas props, después podemos interpolar metiendo la prop con $
function Componente({ backgroundColor }) {
  //return <div className={`color ${backgroundColor}`}>Hola</div>;
}

//16.b) ACORTADORES DE NOMBRES/SHORTHAND PROPERTY NAMES: si la clave de un objeto o clase (en este caso es nombre, edad, twitter) es lo mismo que la variable que he declarado, me lo puedo ahorrar.

const nombre6 = 'Carlos';
const edad = 36;
const twitter = 'https://twitter.com/carlos';

const persona = {
  nombre6, // nombre6: nombre6 (me ahorro tener que ponerlo así)
  edad, //edad: edad,
  twitter, //twitter: twitter,
};

console.log(persona);

//Otro ejemplo aplicado en React con un Componente. Si a las variables le pongo el mismo nombre que a las claves dentro de useState, me puedo ahorrar este paso.

function Componente({ initialState, totalCount }) {
  const [state, setState] = useState({ initialState, totalCount });
}

// 16.c) ARROW FUNCTION:
//Manera normal
function nombreFuncion() {
  return 'Hola función normal';
}

console.log(nombreFuncion());

//Manera con función flecha: nos ahorramos la palabra function y lo escribimos con una variable como const + nombre = (donde irían los parámetros) => la flecha corresponde a las llaves.
//Las funciones flechas se usan en React cuando por ejemplo estás recorriendo un listado y quieres imprimir varios componentes por cada listado, sobre todo cuando se trabaja con muchos arrays.

const funcionFlecha = () => 'Hola función flecha';
console.log(funcionFlecha());

//Ejemplo con arrays de un Componente. Tenemos un listado que se mapea y por cada elemento queremos devolver elemento.nombre dentro del li.

/*
function ListaTareas() {
  return (
    <ul>
      {listado.map((elemento) => (
        <li>{elemento.nombre}</li>
      ))}
    </ul>
  );
}
*/

// 16.d) DESTRUCTURING DE OBJETOS Y ARRAYS: por ejemplo tenemos un objeto con unas propiedades y luego una función donde se calcula el área. Antes tendríamos que pasarle a esta función como parámetros el cudrado y devolver - cuadrado.x * cuadrado.y - pero con destructuring lo podemos hacer de dos formas, en lugar de pasarle cuadrado, podríamos hacer una constante dentro de la functión y poner llaves con -x- e -y-, y después usar -x- e -y-
//Esto se usa mucho cuando le estamos pasando propiedades a un componente

const cuadrado = {
  x: 10,
  y: 10,
};

//Antes haríamos:
function calcularArea(cuadrado) {
  return cuadrado.x * cuadrado.y;
}

//Ahora lo hacemos de esta manera, donde el destructuring se hace en la constante:
function calcularArea1(cuadrado) {
  const { x, y } = cuadrado;
  return x * y;
}

//O de esta otra manera donde el destructuring se hace en los parámetros y nos ahorramos una línea
function calcularArea2({ x, y }) {
  return x * y;
}

//Ejemplo de cuando le estamos pasando propiedades a un componente:

/*
function Avatar({ username, url }) {
  return <img src={url} alt={username} />;
}
*/

// 16.e) PARÁMETROS POR DEFECTO: por ej si tenemos una función suma con parámetros -a- y -b- pero a la hora de ejecutarla sólo le pasamos uno, tendríamos que poner un condicional donde alerte que se deben pasar dos valores. Esto era algo largo y por eso se usa el valor por defecto, se le pone un valor por defecto a -a- y -b- y devolver algo, aunque no se le pase nada a la hora de ejecutarla.

//Versión normal pasándole solo un parámetro
function sumaA(a, b) {
  if (a === undefined || b === undefined) {
    console.log('Debes introducir 2 valores');
  }
  return a + b;
}

sumaA(3);

//Versión con parámetros por defecto

function sumaB(a = 0, b = 0) {
  return a + b;
}
console.log(sumaB());

// 16.f) SPREAD OPERATOR/PARÁMETROS REST: se usa en arrays y objetos, y también cuando pasamos props en React. Si quieres hacer un array con dos arrays, tendrías que usar el método concat

const array5 = [1, 2, 3, 4, 5];
const otroArray5 = [6, 7, 8, 9, 10];

//Usando el método concat
const nuevoArray = array5.concat(otroArray5);

//Usando el spread operator con arrays, donde juntamos los dos arrays directamente mediante puntos suspensivos antes:
const nuevoArray5 = [...array5, ...otroArray5];
console.log(nuevoArray5);

//Spread operator con objetos:
const objeto1 = {
  a: 'a',
  b: 'b',
  c: 'c',
};

const objeto2 = {
  d: 'd',
  e: 'e',
};

//Con el habitual método Object.assign
const nuevoObjeto = Object.assign({}, objeto1, objeto2);
console.log(nuevoObjeto);

//Con spread operator:
const nuevoObjetoSpread = { ...objeto1, ...objeto2 };
console.log(nuevoObjetoSpread);

// 16.g) MÓDULOS ECMScript: los módulos nos permiten crear diferentes ficheros para no tener el código en un mismo fichero y cuando necesite algo de esos ficheros podemos reusarlo o importarlo
//En un fichero tenemos la function suma, en otro fichero tenemos funcion resta, y en el 3 fichero queremos calcular la suma y la resta. Las 2 primeras funciones las podemos usar utilizando EXPORT DEFAULT en su fichero de origen y poner IMPORT {NOMBREFUNCIÓN, OTRASFUNCIONES} FROM "./MNCFJFNJ"; en el fichero donde queremos usar/exportar esas funciones.

/*export default function suma(a, b) {

}

export default function resta(a, b) {

}

import {suma} from "./dklkdk";
import {resta} from "./fnrjkfnjr";
*/
//Con React tenemos que usar: import, {useState,useEffect,Fragment......} React from "React"

// 16.h) LOS TERNARIOS: las operaciones ternarias se usan mucho porque nos permiten renderizar componentes de manera condicional en una sola línea, un ternario es como un cortador de la sentencia condicional if else

const coche3 = {
  marca: 'Tesla',
  model: 'Cyber',
};

//coche.model si existe y si no le decimos que sea X. Esto es una operación ternaria
let modelo = coche3.model ? coche3.model : 'X';

console.log(modelo); //Imprime cyber, pero si quitamos el modelo del objeto, entonces imprime X
