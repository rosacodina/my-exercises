//LEARNING PROTOTYPES (19th video)

function Person() {
  this.name = 'Rose';
  this.surname = 'Codina';
  this.age = 30;

  this.printInfo = function () {
    console.log(this.name + ' ' + this.surname + ' ' + this.age);
  };
}

var rose = new Person();

//prototype: mention the Class.prototype.whatIWant:

Person.prototype.country = 'Spain';

//USE

console.log(rose);
