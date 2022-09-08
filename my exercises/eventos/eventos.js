/* 1º Tenemos que coger el elemento de HTML con el que queremos trabajar para pasarlo a JS, poniéndole un nombre en HTML con class y después en JS creamos una constante nombre = document.querySelector("nombreQueQuiera")*/
//2º Todas las constantes en las que enlazamos el elemento HTML deben de ir juntas arriba y debajo todas las funciones juntas, no como se muestra en estas pruebas que están ordenadas por los eventos a usar.
//addEventListener()  sirve para escuchar eventos y reaccionar a ellos. Tenemos qeu pasarle dos valores: el tipo de evento y el código a ejecutarse.

const boton = document.querySelector('button');

boton.addEventListener('click', () => {
  console.log('El botón ha sido clicado');
});

/* 
EVENTOS DE RATÓN:
  click - cuando pulsamos en el botón izquiero del ratón
  dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
  mouseenter - cuando entramos en la zona que tiene el evento
  mouseleave - cuando salimos de la zona que tiene ele vento
  mousedown - cuando pulsamos el botón izquiero del ratón
  mouseup - cuando soltamos el botón izquierdo del ratón
  mousemove - cuando movemos el ratón

EVENTOS DE TECLADO:
  keydown - cuando pulsamos una tecla
  keyup - cuando soltamos una tecla
  keypress - cuando pulsamos una tecla y no la soltamos
*/

//DBLCLICK
/*const buttonA = document.getElementById('button1'); //¿Por qué no funciona con querySelector?
buttonA.addEventListener('dblclick', () => {
  console.log('botón 1 pulsado');
});

const box = document.getElementById('box');
//MOUSEENTER & MOUSELEAVE
box2.addEventListener('mouseenter', () => {
  box2.classList.add('red', 'green');
});

box2.addEventListener('mouseleave', () => {
  box2.classList.replace('green', 'red');
});
*/

//MOUSEDOWN & MOUSEUP
const button3 = document.getElementById('button3');

button3.addEventListener('mousedown', () => {
  console.log('Has pulsado en la caja');
});

button3.addEventListener('mouseup', () => {
  console.log('Has soltado el botón izquierdo en la caja');
});

//MOUSEMOVE
const button4 = document.getElementById('button4');
button4.addEventListener('mousemove', () => {
  window.alert('CAKCFNJEKRFNEJKRFNJKERMNFK');
});

//EVENTOS DE TECLA: la gracias consiste en saber qué tecla se ha pulsado, para eso hay que usar el objeto evento. El objeto evento vive siempre que haya un evento, se envía el evento por el segundo parámetro
//KEYDOWN
const input = document.getElementById('input');
input.addEventListener('keydown', () => {
  console.log('HAS PULSADO UNA TECLA');
});

//KEYUP
input.addEventListener('keyup', (ev) => {
  console.log(ev.key);
});
//KEYPRESS
input.addEventListener('keypress', () => {
  console.log('ESTÁS PULSANDO UNA TECLA');
});
