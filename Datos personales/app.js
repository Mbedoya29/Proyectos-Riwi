var persons = [
    {
       nombre: "Julian",
       apellidos: "Jimenex",
       correo : "julian@gmail.com"
    },
    {
       nombre: "Andres",
       apellidos: "Martinez",
       correo : "andres@gmail.com"
    },
    {
       nombre: "carmen",
       apellidos: "matias",
       correo : "carmen@gmail.com"
    }];

    console.log(persons);


let tabla = document.getElementById('tabla');

persons.forEach((elementos) => {
    let fila = document.createElement('tr')
    let celdanombre = document.createElement('td')

})









/* let nombres = document.getElementById('nombre1').value = persons[0].nombre;
let apellidos = document.getElementById('apellido1').value = persons[0].apellidos;
let correos = document.getElementById('correo1').value = persons[0].correo;

let nombres2 = document.getElementById('nombre2').value = persons[1].nombre;
let apellidos2 = document.getElementById('apellido2').value = persons[1].apellidos;
let correos2 = document.getElementById('correo2').value = persons[1].correo;

let nombres3 = document.getElementById('nombre3').value = persons[2].nombre;
let apellidos3 = document.getElementById('apellido3').value = persons[2].apellidos;
let correos3 = document.getElementById('correo3').value = persons[2].correo; */




/* allPersons.forEach(function(person){
    let nombres = document.getElementById('resNombre').innerText = person.nombres;
    let apellidos = document.getElementById('resApellido').innerText = person.apellidos;
    let correo = document.getElementById('resCorreo').innerText = person.correo;
}); */


