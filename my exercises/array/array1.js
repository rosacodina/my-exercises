const myArray = [1, 2, 3, 4];

myArray.forEach((item, index) => {
  console.log(`El valor de la posición  ${index} es ${item}`);
});

//If we have an object and we would like to go across the properties of that object, we have to use a method to reiterate the object. We need the properties are an array and we can do this with "getDownProperty"

const book = {
  title: 'Learning JavaScript',
  author: 'Carlos Azaustre',
  numPages: 122,
  price: '24,95',
};

const props = Object.getOwnPropertyNames(book);
props.forEach((name) => {
  let value = Object.getOwnPropertyDescriptor(book, name).value;
  console.log(`La prop ${name} contiene: ${value}`);
});
