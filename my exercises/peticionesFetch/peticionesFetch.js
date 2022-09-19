//FETCH + PINTAR

// 1) Creamos una constante donde metemos la URL de donde vamos a sacar los datos, la que vamos a usar.
const API_URL = 'https://jsonplaceholder.typicode.com';

// 2) Creamos un nodo raíz donde vamos a incrustar el resultado dentro de nuestro id/elemento que hemos creado en HTML
const HTMLResponse = document.querySelector('#app');

/* 3)
    a) Llamamos al método FETCH que recibe la URL y esto devuelve una promesa y el resultado de la promesa lo recogemos con un primer THEN donde recibe uan respuesta en formato string, así que tenemos que parsearla con el método json:
        fetch(`${API_URL}/users`)
        .then((response) => response.json())

    b) Esto devuelve otra promesa (la segunda) THEN que es donde metemos los datos.
        .then((users)

    c) Dentro de la función arrow del segundo then, creamos una constante donde recibimos el resultado de mapear el array de usuarios donde queremos que por cada usuario nos devuelva un li y dentro de cada li nos mete lo que le digamos, en este caso el usuario y el email: 
    const template = users.map(
        .then((users) => {
        const template = users.map(
        (user) => `<li>${user.name} cuyo email es ${user.email}</li>`);

    d) Llamamos a la constante que hemos creado anteriormente donde hemos "cogido" nuestro elemento de HTML usando el método innerHTML para que lo meta en lo que le digamos, en este caso la constante template dentro de un ul:
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
            
*/
fetch(`${API_URL}/users`)
  .then((response) => response.json())
  .then((users) => {
    const template = users.map(
      (user) => `<li>${user.name} cuyo email es: ${user.email}</li>`
    );
    HTMLResponse.innerHTML = `<ul>${template}</ul>`;
  });
