//FUNCIÓN CONSTRUCTORA DE OBJETOS

function Citizens(name, surname, age, country, address) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.country = country;
  this.address = address;

  this.nationality = function () {
    if (this.country === 'Spanish') {
      console.log('This is citizen already has the Spanish nationality');
    } else {
      this.country = 'Spanish';
      console.log('This citizen is now a new Spanish');
    }
  };
}

//USE

var moroccan = new Citizens(
  'Abdul',
  'Dalah',
  36,
  'Morocco',
  'vah dah luah rionha, neh 1, Badalah'
);

var egipcian = new Citizens('Ramah', 'Anubis', 51, 'Egypt', 'Nilo, 4, 1A');

var greek = new Citizens('Lala', 'Sama', 24, 'Greece', 'Isla Gre');

var jamaican = new Citizens('Rule', 'Sasa', 32, 'Jamaica', 'Marihuana');

var spanish = new Citizens('Sara', 'Codina', 39, 'Spanish');

console.log(moroccan);
console.log(egipcian);
console.log(greek);
console.log(jamaican);

moroccan.nationality();
egipcian.nationality();
greek.nationality();
jamaican.nationality();
spanish.nationality();

console.log(moroccan);

function Dog(parametro1, parametro2) {
  this.name = parametro1;
  this.breed = parametro2;

  this.changeBreed = function (parametro) {
    this.breed = parametro;
    console.log(this.breed);
  };
}
//Estoy creando un objeto invocando a la función constructora de la clase Dog
var kira = new Dog('Kira', 'Cocker');

console.log(kira);

//¿Cómo COÑO se usan los objetos?
console.log(kira.name);
//Usando el método cambiarRaza de la clase Dog
kira.changeBreed('Bulldog');
console.log(kira);

////////////////////

//invoices with importe, concepto, empresa quién la emite, y destinatario. Se cambia el impuesto, por defecto es el iva Metodo: imprimir factura por consola, modificar importe factura y modificar impuesto

function Invoices(value, concept, company, sender, recipient, tax) {
  this.value = value;
  this.concept = concept;
  this.company = company;
  this.sender = sender;
  this.recipient = recipient;
  this.tax = tax;

  this.print = function () {
    console.log(
      this.value,
      this.concept,
      this.company,
      this.sender,
      this.recipient
    );
  };

  this.modifyImport = function (value) {
    this.value = value;
  };

  this.modifyTax = function (value) {};
}

var invoice1 = new Invoices(150, 'Limpieza', 'ServiClean', 'Rosa', 'Daniel');

invoice1.print();

invoice1.modifyImport(1000);
invoice1.print();

///// Constructor function of a student who has name, class, list of marks (decimals)
//Method that makes the average of that list and print the average on console. Method that prints the student

function Student(name, classroom, marks = []) {
  this.name = name;
  this.classroom = classroom;
  this.marks = marks;

  this.average = function () {
    var result = 0;

    for (var i = 0; i < this.marks.length; i++) {
      result = result + this.marks[i];
    }
    console.log(result);
    console.log(result / this.marks.length);
  };
}

var student1 = new Student('Pepe', '3ºA', [4, 8, 9, 7, 9]);
console.log(student1);

student1.average();
