class Propietario {
  constructor(nombre, telefono, direccion) {
    this._nombre = nombre;
    this._telefono = telefono;
    this._direccion = direccion;
  }

  get nombre() {
    return this._nombre;
  }

  get telefono() {
    return this._telefono;
  }

  get direccion() {
    return this._direccion;
  }
  datosPropietario() {
    return `El propietario es ${this._nombre}, su numero de telefono es ${this._telefono} y su direccion es ${this._direccion}`;
  }
}
class Animal extends Propietario {
  constructor(nombre, telefono, direccion, tipo) {
    super(nombre, telefono, direccion);
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
  datosAnimal() {
    return `El tipo de animal es ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombre, telefono, direccion, tipo, nombreMascota, enfermedad) {
    super(nombre, telefono, direccion, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nuevaenfermedad) {
    this._enfermedad = nuevaenfermedad;
  }

  datosMascota() {
    return `El nombre de la mascota es ${this._nombreMascota} y su enfermedad es ${this._enfermedad}`;
  }
}

let agregar = document.getElementById("agregar");

agregar.addEventListener("click", (event) => {
  event.preventDefault();
  let nombre = document.getElementById("propietario").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let tipo = document.getElementById("tipo").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let enfermedad = document.getElementById("enfermedad").value;
  let propietario = new Propietario(nombre, telefono, direccion);
  let animal = new Animal(nombre, telefono, direccion, tipo);
  let mascota = new Mascota(
    nombre,
    telefono,
    direccion,
    tipo,
    nombreMascota,
    enfermedad
  );

  document.getElementById("propietario").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("tipo").value = "";
  document.getElementById("nombreMascota").value = "";
  document.getElementById("enfermedad").value = "";
  document.getElementById("propietario").focus();
  document.getElementById("resultado").innerHTML += `
    <ul>
      <li>${propietario.datosPropietario()}</li>
      <li>${animal.datosAnimal()}</li>
      <li>${mascota.datosMascota()}</li>
    </ul>
    `;
});
