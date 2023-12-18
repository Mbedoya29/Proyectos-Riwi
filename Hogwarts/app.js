function formulario(){
    window.location.href = 'inicio1.html'
}

/*____________________paso 1____________________*/
var datos = {
    nombre: "",
    edad: "",
    familia: "",
    linaje: "",
    casa:"",
    animal_patronus: "",
    cualidades: "",
};
/*___________________/paso 1____________________*/

/*____________Sombrero seleccionador____________*/
let Gryffindor =["Valor, fuerza, audacia"]
let Hufflepuff =["Justicia, Lealtad, Paciencia"]
let Ravenclaw =["Creatividad, Erudición, Inteligencia"]
let Slytherin =["Ambición, Determinación, Astucia"]

function cualidades(){
    var nombre = document.getElementById('nombre').value;
    var familia = document.getElementById('familia').value;
    var edad = document.getElementById('edad').value;
    var gryffindor = document.getElementById('gryffindor').checked;
    var hufflepuff = document.getElementById('hufflepuff').checked;
    var ravenclaw = document.getElementById('ravenclaw').checked;
    var slytherin = document.getElementById('slytherin').checked;
    var mestizo = document.getElementById('mestizo').checked;
    var muggle = document.getElementById('muggle').checked;

    if(edad >= 11){
        alert(`Muy bien, tienes la edad suficiente para entrar a hogwarts, ¡¡Bienvenido!!`)
    }else{
        alert(`Lo siento, no tienes la edad suficiente para entrar a hogwarts`)
        location.reload()
    }

    if(mestizo){
        linaje = "mestizo"
    }else if (muggle){
        linaje = "muggle"
    }else{
        linaje = "Sangre pura"
    }

    datos.nombre = nombre;
    datos.familia = familia;
    datos.edad = edad;
    datos.linaje = linaje;

    if (gryffindor){
        datos.casa = "Gryffindor";
        datos.cualidades = Gryffindor
        document.getElementById('imagen').innerHTML = `<img src="./Imagenes/Escudos/Gryffindor.png" alt="">`

    }else if(hufflepuff){
        if(linaje == "Sangre pura"){
            alert(`Error, tus cualidades no pueden pertenecer al linaje seleccionado`)
            location.reload()
        }
        datos.casa = "Hufflepuff";
        datos.cualidades = Hufflepuff;
        document.getElementById('imagen').innerHTML = `<img src="./Imagenes/Escudos/Hufflepuff.png" alt="">`

    }else if(ravenclaw){
        datos.casa = "Ravenclaw"
        datos.cualidades = Ravenclaw;
        document.getElementById('imagen').innerHTML = `<img src="./Imagenes/Escudos/Ravenclaw.png" alt="">`
        

    }else if (slytherin){
        if(linaje == "mestizo" || linaje == "muggle"){
            alert(`Error, tus cualidades no pueden pertenecer al linaje seleccionado`)
            location.reload()
        }
        datos.casa = "Slytherin"
        datos.cualidades = Slytherin;
        document.getElementById('imagen').innerHTML = `<img src="./Imagenes/Escudos/Slytherin.png" alt="">`
    }

    document.getElementById('bienvenida').innerHTML = `Hola ${datos.nombre} ${datos.familia}, tu edad es de ${datos.edad} años. Según tus cualidades y tu linaje perteneces a: `
}
/*____________/Sombrero seleccionador___________*/

/*____________________Clases____________________*/
     
function materias(){
    document.getElementById('clases').innerHTML = `
    <section id="clases" >
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-3">
                    <table class="table table-dark table-striped-columns">
                        <thead>
                        <tr>
                            <th scope="col">Materias</th>
                            <th scope="col">Profesores</th>
                            <th scope="col">Horarios</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Transformaciones</td>
                            <td>Kevin Slughorn</td>
                            <td>6:00 a.m a 8:00 a.m</td>
                        </tr>
                        <tr>
                            <td>Herbologia</td>
                            <td>Maria Umbridge</td>
                            <td>8:30 a.m a 9:30 a.m</td>
                        </tr>
                        <tr>
                            <td>Pociones</td>
                            <td>Liliana McGonagall</td>
                            <td>9:30 p.m a 10:00 p.m</td>
                        </tr>
                        <tr>
                            <td>Encantamientos</td>
                            <td>Jackie</td>
                            <td>10:00 a.m a 12:30 p.m</td>
                        </tr>
                        <tr>
                            <td>Defensa contra las artes oscuras</td>
                            <td>Robinson Snape</td>
                            <td>12:30 p.m a 3:00 p.m</td>
                        </tr>
                        <tr>
                            <td>Historia de magia</td>
                            <td>Ronald Sproute</td>
                            <td>5:15 p.m a 7:30 p.m</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>`
}

var clases = {
    transformaciones: "Profesor Kevin Slughorn => Horarios: 6:00 a.m a 8:00 a.m",
    herbologia: "Profesor Maria Umbridge => Horarios: 8:30 a.m a 9:30 a.m",
    pociones: "Profesor Liliana McGonagall => Horarios: 9:30 p.m a 10:00 p.m",
    encantamientos: "Profesora Jackie => Horarios: 10:00 a.m a 12:30 p.m",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape => Horarios: 12:30 p.m a 3:00 p.m ",
    animalesMagicos: "Profesor David Filch => Horarios: 3:30 p.m a 5:00 p.m",
    historiaDeMagia: "Profesor Ronald Sprout => Horarios: 5:15 p.m a 7:30 p.m",
}
/*___________________/Clases____________________*/

/*_______________Animal patronus________________*/
function animalPatronus(boton){
    var animal = ['Caballo', 'Gato', 'Oso', 'Leon', 'Ciervo', 'Lobo']
    var aleatorio = Math.floor((Math.random()*animal.length))
    document.getElementById('animalPatronus').innerHTML = animal[aleatorio];
    boton.disabled = true
    datos.animal_patronus = animal[aleatorio];
}
/*______________/Animal patronus________________*/

/*__________Clase de transformaciones___________*/
function araña(){
    document.getElementById('riddikulus1').innerHTML ='<img class="imagenRiddikulus" src="./Imagenes/Transformaciones/Araña-riddkulus.avif" alt="">'
}
function snape(){
    document.getElementById('riddikulus2').innerHTML ='<img class="imagenRiddikulus" src="./Imagenes/Transformaciones/Snape-riddikulus.jpg" alt="">'
}
function serpiente(){
    document.getElementById('riddikulus3').innerHTML =' <img class="imagenRiddikulus" src="./Imagenes/Transformaciones/Payaso.jpg" alt="">'
}
function dementor(){
    document.getElementById('riddikulus4').innerHTML ='<img class="imagenRiddikulus" src="./Imagenes/Transformaciones/luna.webp" alt="">'
}
/*_________/Clase de transformaciones___________*/

/*__________________Resultado___________________*/

function resultado(){
    document.getElementById('resultadoNombre').innerHTML = `<strong>Nombre:</strong> ${datos.nombre}`
    document.getElementById('resultadoFamilia').innerHTML = `<strong>Familia:</strong> ${datos.familia}`
    document.getElementById('resultadoEdad').innerHTML = `<strong>Edad:</strong> ${datos.edad}`
    document.getElementById('resultadoLinaje').innerHTML = `<strong>Linaje:</strong> ${datos.linaje}`
    document.getElementById('resultadoCasa').innerHTML = `<strong>Casa:</strong> ${datos.casa}`
    document.getElementById('resultadoAnimal').innerHTML = `<strong>Animal Patronus:</strong> ${datos.animal_patronus}`
}
/*_________________/Resultado___________________*/