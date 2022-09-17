// import
console.log("Conectado....");

// Variables y constantes 
// Vectores
let usuarios = [];
// Objetos literales   
let datos = {};

let formulario = document.querySelector('#form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let edad = document.querySelector('#edad').value;
    let email = document.querySelector('#email').value;

    if ([nombre, apellido, email, edad].includes("")) {
        console.log("Todos los campos son obligatorios");
        return;
    }

    console.log("Paso la validacion");

    datos = {
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "edad": edad
    }

    usuarios.push(datos);

    console.log(datos);
    console.log(usuarios);

    formulario.reset();

})