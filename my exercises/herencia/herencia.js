//HERENCIA: podemos crear una clase con sus propiedades y métodos después reutilizarla en otra clase que creemos abajo sin necesidad de describirla como tal. Con la palabra reservada EXTENDS + el nombre de la clase padre, y así cogemos el patrón de la clase padre. Solo se puede extender una clase. Con EXTENDS copiamos directamente todos los métodos de la clase padre en la clase hijjo.
//Con la palabra SUPER, lo que hacemos es heredar en el hijo la propiedad (constructor) o método de la clase padre y si añadimos más propiedades al hijo, se haría de la manera habitual, con this.

class Telefono {
  constructor(marca) {
    this.marca = marca;
  }
  anuncio() {
    return 'Ha llegado el nuevo teléfono de ' + this.marca;
  }
}

class Modelo extends Telefono {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }

  anuncioCompleto() {
    return this.anuncio() + ':el modelo ' + this.modelo;
  }
}

let miTelefono = new Modelo('Google', 'Pixel');
console.log(miTelefono.anuncioCompleto());

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');
//
//
//
//
//

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  saludo() {
    console.log(`Hola, soy ${this.nombre}`);
  }

  login(email, password) {
    return this.email === email && this.password === password;
  }
}

//Heredamos la clase usuario usando la palabra EXTENDS

class Alumno extends Usuario {
  constructor(nombre, email, password) {
    //Añadimos propiedad cursos
    super(nombre, email, password);
    this.cursos = [];
    this.activo = false;
  }
  agregarCurso(curso) {
    this.cursos.push(curso);
  }

  activar() {
    this.activo = true;
  }

  login(email, password) {
    if (!this.activo) return false;
    return super.login(email, password); //Aquí uso el login del padre a través de SUPER
  }
}

const Pablo = new Usuario('Pablo', 'pablo@gmail.com', 'pablo123');
const Jose = new Alumno('José', 'jose@gmail.com', 'jose123');

console.log(Pablo instanceof Usuario);
console.log(Jose instanceof Alumno);
console.log(Pablo instanceof Alumno);
console.log(Jose instanceof Usuario);
