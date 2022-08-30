const book = {
  title: 'Programming is easy',
  price: '22,95',
  pages: '132',

  //Function inside an objects are methods

  read: function () {
    console.log('He leído el libro');
  },
};

for (let prop in book) {
  console.log(`La prop ${prop} contiene: ${book[prop]}`);
}

//How to access to the properties of an object
console.log(book.title);
console.log(book['title']);

//How to access to the properties of an object and change the value inside that property
console.log((book.title = 'New title'));

//How to use a method object
book.read();
