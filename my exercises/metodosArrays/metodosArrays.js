const posts = [
  {
    id: 1,
    title: 'Mi primer post',
    image: 'primer.jpg',
    tags: ['javascript', 'node'],
  },
  {
    id: 2,
    title: 'Mi segundo post',
    image: 'segundo.jpg',
    tags: ['Java', 'node'],
  },
  {
    id: 3,
    title: 'Mi tercer post',
    image: 'tercer.jpg',
    tags: ['node', 'html'],
  },
];

//FIND
const found = posts.find((element) => element.id == 3);
console.log(found);

//SOME: Devuelve true o false dependiendo de si existe o no la "condición" que le decimos.
const metodoSome = posts.some((element) => element.id == 0);
console.log(metodoSome); //False

//SOME & INCLUDES: Nos permite ver si hay X palabra dentro, lo hacemos con el método SOME
const incluye = posts.some((element) => element.id == 1);
console.log(incluye); //POR QUÉ NO FUNCIONA CON NÚMERO PERO SÍ CON TEXTO

const incluye2 = posts.some((element) => element.title.includes('Mi'));
console.log(incluye);

//EVERY: comprubea no sólo si hay alguno, si no si se cumple algo en todas. Devuelve sí o no
const estaEnTodos = posts.every((elemento) => elemento.id.includes == 1);
console.log(estaEnTodos);
const estaEnTodos2 = posts.every((elemento) => elemento.tags.includes('node'));
console.log(estaEnTodos2);

//MAP: es como un bucle for, se usa para crear un nuevo array a partir del que ya tenemos
const postsNuevo = posts.map((elemento) => elemento.id + ' ' + elemento.title);
console.log(postsNuevo);

//FILTRAR: Que nos devuelva un array a partir de otro únicamente con esa condición que queramos filtrar
const filtrado = posts.filter((element) => element.id == 1);
console.log(filtrado);
const filtrado2 = posts.filter((element) => element.tags.includes('node'));
console.log(filtrado2);

//REDUCE: si quiero crear un array que incluya todas las etiquetas por ej.
const reducir = posts.reduce((allTags, element) => {
  return [...allTags, ...element.tags];
}, []);

console.log(reducir); // ['javascript', 'node', 'Java', 'node', 'node', 'html']

//SLICE: nos permite devolver parte del array original pero le indicamos desde dónde parte y hasta dónde llega. El array que creamos es uno nuevo.
const partirArray = posts.slice(1, 3);
console.log(partirArray); //Imprime el segundo y tercer objeto

//SPLICE: cambia el contenido de un array eliminando elementos existente o añadiendo elementos nuevos. En los paréntesis ponemos en el primer elemento desde dónde queremos que empiece, y en el segundo parámetro ponemos el deleceCount que es el NÚMERO DE elementos que queremos eliminar
const spliceArray = posts.splice(1);
console.log(spliceArray); //Devuelve el 2º y 3 objeto

const spliceArrayDelete = posts.splice(1, 1); //Partimos desde cero y eliminamos uno
console.log(spliceArrayDelete);
