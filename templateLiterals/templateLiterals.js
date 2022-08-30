//Template literals es una nueva funcionalidad. Cuando antes teníamos una constante y queríamos concatenar varias constantes, teníamos que hacer: nombre + " " apellido, pero los template literals nos permite concatenar:

const nombre = 'Carlos';
const apellido = 'Azaustre';

console.log(`${nombre} ${apellido}`);

//Entre paréntesis son las props
//De esta manera le podemos pasar variables a un string de forma dinámica
function Componente({ backgroundColor }) {
  return <div className={`bg-color-${backgroundColor}`}>Hola</div>;
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
