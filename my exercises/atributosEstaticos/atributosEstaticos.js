//Los atributos estáticos no heredan los hijos objetos, sino que heredan a una subclase. Además los atributos estáticos se ponen dentro de las llaves pero por encima del constructor poniendo la palabra "static".
//Para imprimir el atributo estático debemos usar el nombre de la clase (ver línea console.log(Mascota.cola);) en vez de el nombre del objeto. En cambio el atributo no estático "pelo" sí lo podemos consultar desde el objeto (ver línea console.log(Mascota1.pelo);)
//Los atributos estáticos pueden valer para saber cuántos objetos creo de esa clase, porque si lo pongo dentro del constructor, éste no detecta cuántos objetos he creado.
//MÉTODO ESTÁTICO se usa también con "static" y se puede consultar desde la clase, no desde el objeto.

class Mascota {
  //Atributo estático
  static cola = 'larga';
  static contadorMascota = 0;
  pelo = 'liso';
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.numero = ++Mascota.contadorMascota; //Aquí incremento cada vez que se cree un objeto de esta clase
  }

  get numeroCreacion() {
    return this.numero;
  }

  static saludo() {
    return 'mover la cola';
  }
}

let Mascota1 = new Mascota('Boby', 5);
let Mascota2 = new Mascota('Ade', 8);
let Mascota3 = new Mascota('Dia', 9);

console.log(Mascota1);
console.log(Mascota.cola);
console.log(Mascota1.pelo);
console.log(Mascota1.numeroCreacion);
console.log(Mascota2.numeroCreacion);
console.log(Mascota3.numeroCreacion);

console.log(Mascota.saludo());

//Hacer subclase con atributo adicional "raza" y luego lo imprimimos y vemos que sí hereda del padre

class Perro extends Mascota {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }
}

console.log(Perro.cola); //lo imprimimos y vemos que sí hereda del padre
console.log(Perro.saludo());
console.log(Perro.contadorMascota());

let perro1 = new Perro('Dama', 5, 'Cocker');

console.log(Perro.contadorMascota());

console.log('----------------------------');

//GETTER & SETTER: los métodos GET y SET se utilizan para asignar y extraer atributos de un objeto. El nombre de los getters/setters no puede ser el mismo que ningún atributo que haya en la clase.
class Telefono {
  cosntructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }

  set marca(mar) {
    return (this._marca = mar);
  }
}

let miTelefono = new Telefono('Google');
console.log((miTelefono.marca = 'iPhone'));
