//Crear un array lista de palabras que diga "Colón llegó a América en 1942"
//Crear una function y que esa función reciba el array de palabras y que devuelva otro array con la frase junta

//DESCRIPTION
const words = ['Colón', 'llegó', 'a', 'América', 'en', '1942'];

const sentence = [];

let frase = '';

let uno = words[1];
let dos = words[3];

function sentences(words) {
  for (i = 0; i < words.length; i++) {
    frase += words[i] + ' ';
    console.log(frase);
  }

  sentence.push(frase);

  return sentence;
}

//USE

console.log(sentences(words));
