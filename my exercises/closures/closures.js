//CLOSURES o funciones de cierre es un patrón muy usado. Las funciones en JavaScript son objetos , de hecho todo en Js es un objeto y heredan propiedades de la clase object por tanto se pueden tratar como tal. Se puede guardar una función en una variable y después invocarla con el paréntesis.
//Una función la podemos usar como el valor de una constante o variable, es decir, meter en la cajita de esa constante o variable una función.

const saludar = function (nombre) {
  return 'Hola ' + nombre;
};

saludar('Rosa');
console.log(saludar('Rosa'));

/*También se puede dar que una función esté dentro de otra función, dando así otros ámbitos o scops para las variables que hay dentro de ellas y para poder acceder desde el exterior de la función a estas variables tenemos que usar 2 veces los paréntesis.

El closure se usa para evitar usar este doble paréntisis, y lo hacemos metiendo la función principal dentro de una constante o variable y después llamamos a esa constante o variable, ver línea 30. Esto son funciones anidadas.*/

const a = 'Hey!';
function global() {
  const b = '¿Qué';

  function local() {
    const c = 'tal?';
    return a + ' ' + b + ' ' + c;
  }
  return local;
}

global()();
console.log(global()());

const closure = global();
closure();
console.log(closure());

//--------- Variable privada: let _contador = 0; el ejemplo de abajo es un closure donde hay varias funciones y todas ellas se meten en paréntesis y se ejecuta en ella misma, los paréntesis del final y al final hacemos un return para devolver las funciones que hay dentro

const miContador = (function () {
  let _contador = 0;

  function incrementar() {
    return _contador++;
  }

  function decrementar() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }

  return {
    incrementar,
    decrementar,
    valor,
  };
})();

miContador.valor();
console.log(miContador.valor());

let resultado = miContador.incrementar();
console.log(resultado);

resultado = miContador.incrementar();
console.log(resultado);

resultado = miContador.incrementar();
console.log(resultado);

resultado = miContador.incrementar();
console.log(resultado);

//CLOSURE es una función ejecutable que contiene determinadas variables o funciones y puedo trabajar con ellas. Es un patrón parecido al de clases y permite tener estructuras de datos o datos privadas.
