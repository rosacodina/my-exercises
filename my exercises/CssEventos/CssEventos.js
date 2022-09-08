//LISTENER: Es una función que nos permite escuchar ese evento que puede ocurrir.
//HANDLE: Función que se ejecuta cuando ocurre ese evento

const boton = document.getElementById('boton');
console.log('Hola mundo');

boton.addEventListener('click', () => {
  console.log('He clicado');
});

const input = document.getElementById('input');
input.addEventListener('click', () => {
  console.log('Introduce');
});
