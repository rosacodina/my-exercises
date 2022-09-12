//AJAX: es una petición que hacemos a través del protocolo http a un dominio y cuando escribimos la dirección estamos solicitando a un servidor/nube, cierta información. Ésto nos devuelve la página web compuesta por HTML, CSS, imágenes, etc. Así es como funcionan todas las webs que no usan AJAX. Cuando nosotros usamos AJAX lo que hacemos es interceptar esa respuesta para evitar que la página se recarge. Así lo que hacemos es una petición pero solo solicitamos ciertos datos, no todos, y esos datos cuando nos llegan, lo guardamos en un objeto y no recargamos la página porque los tenemos en ese objeto y una vez estando ahí trabajamos con ese objeto de la forma que necesitemos.
//AJAX es un intermediario, un motor,  entre la interfaz del usuario y el servidor y esto hac que el servidor nos de la información sin necesidad de recargar el ordenador, por eso ess asíncrono.
//CREAMOS UN OBJETO PONIENDO LO SIGUIENTE. Éste es el objeto que describe AJAX
//let = new XMLHttpRequest();

//variables que empiezan con $ hacen referencia a un elemento del DOM
/*Para que el objeto httpRequest funcione necesita:
1) Crear la instancia que está en la variable xhr
2) Ejecutar/asignar el o los eventos, el más usado es addEventListener("readystatechange")
3) Instrucción que abre la petición con el método open donde el primer parámetro es el método por el cual vamos a comunicarnos y el segundo parámetro es la URL a laque vamos a hacer la petición.
4) Ejecutar el método send del objeto XMLHttpRequest
*Dentro de la función podemos poner  un condicional para que no me devuelva cuatro objetos con los cuatro estados de la petición y en su lugar me devuelva solo un objeto que es la respuesta en estado completo.
*La segunda condicional es para que nos salte solo cuando la petición sea entre 200 y 300 para que ejecute el código.
*/
(() => {
  const xhr = new XMLHttpRequest();
  $xhr = document.getElementById('xhr');
  $fragment = document.createDocumentFragment();
  xhr.addEventListener('readystatechange', (ev) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) console.log(xhr);
  });

  xhr.open('GET', 'https://jsonplaceholder.typicode.com');
  xhr.send();
})();

/*API Fetch es la forma moderna de hacer AJAX con función anónima autoejecutable.
1)Método then ejecuta la parte positiva si el método se resuelve
2)El método chatch ejecuta la parte negativa
3) Finally es para que ejecute el resultado independientemente de la respuesta fetch
*/

(() => {
  const $fetch = document.getElementById('fetch');
  $fragment = document.createDocumentFragment();

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() =>
      console.log(
        'Esto se ejecutará independientemente del resultado de la Promesa Fetch'
      )
    );
})();

//------------
//JSON: es JS simple notation, es un formato de información, así pasamos objetos.

function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((pongoLoQueQuiera) => {
      document.querySelector('.js-result').innerHTML = pongoLoQueQuiera.result;
    });
}

document.querySelector('.js-emoji').addEventListener('click', getEmoji);

console.log('-------------------');

//FORMA CON XMLHttpRequest + PINTAR : la manera en la que se hacía anteriormente:
// 1) Crear una constante donde metamos la URL de la API
const API_URL = 'https://jsonplaceholder.typicode.com';

// 2) Usar el objeto XMLHttpRequest metiéndolo en una constante
const xhr = new XMLHttpRequest();

/*
3) Función manejadora que la usaremos como callback:
  a) Después se hace una función que es el manejador del request, de la petición y aquí tenemos que hacer una comprobación del código de la respuesta para ver si la respuesta ha sido correcta. Hay 5 códigos; el 0 es un unset que quiere decir que no se ha llamado al método open, el 1 = opened, se ha llamado al método open, el state 2 = headers_received, se está llamando al método send () , el state 3 = Loading, está cargando, recibiendo la respuesta y el state 4 = Done, se ha completado la operación.

  b) La respuesta la recibimos en formato texto y como es un array(objetos) al ser formato texto no podemos iterarlo, trabajar con ello, pero si es un JSON bien formado podemos parsearlo con el método .parse que ponemos dentro de la condición de la función: 
  const data = JSON.parse(this.response);

  c) Una vez pasado a estructura array, para poder pintar el API hay que crear una constante donde llamamos a document.querySelector cogiendo el elemento de HTML que queremos insertar ahí la respuesta que vamos a pintar en formato HTML: 
  const HTMLResponse = document.querySelector('#app');

  d) Iterar esos datos y vamos a mapear ese objeto data y por cada usuario vamos a hacer una lista (li) y dentro de cada li vamos a meter el user name e email:
  const template = data.map((user) => `<li>${user.name} & ${user.email} <li>`)

  e) Después usamos la constante HTMLResponse donde tenemos enlazado el div del HTML y llamamos al método innerHTML para pasarle un ul donde le iteramos la constante template:
  HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
*/

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    const HTMLResponse = document.querySelector('#app');
    const template = data.map(
      (user) => `<li>${user.name} , con email: ${user.email} <li>`
    );
    HTMLResponse.innerHTML = `<ul>${template}<ul>`;
  }
}

//Cuando se han completado los 4 estados y la respuesta es correcta (llega un método 200 del servidor), llamamos a la función para que se ejecute y le usamos el objeto xhr que hemos creado y le decimos que escuche el evento "load" y le pasamos la función anterior.

xhr.addEventListener('load', onRequestHandler);
//Luego llamamos al método open que recibe el parámetro verbo/petición http que en este caso es GET apra que nos deuelva datos del servidor y la URL que va a ser el API, éste open activa el estado 1
xhr.open('GET', `${API_URL}/users`);
//Nos queda llamar al método SEND para que inicie la petición
xhr.send();

console.log('--------------------');
