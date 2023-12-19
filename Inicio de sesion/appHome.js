var persons = [
    {
        nombre : "Manuela",
        correo : "",
        genero : "femenino",
        password : "1234",
        images : [
             './images/img-1.jpg',
             './images/img-2.jpeg',
             './images/img-3.jpg',
             './images/img-4.jpg',
             './images/img-5.webp',
             './images/img-6.jpg',
             './images/img-7.jpg',
             './images/img-8.jpg',
             './images/img-9.webp',
            
        ]
    },
    {
        nombre : "Samuel",
        correo : "samuel@gmail.com",
        genero : "masculino",
        password : "12345",
        images : [
            './images/img-11.jpg',
            './images/img-12.jpg',
            './images/img-13.jpeg',
            './images/img-14.webp',
            './images/img-15.jpg',
            './images/img-16.jpg',
            './images/img-17.webp',
            './images/img-18.jpg',
            './images/img-19.jpg',
            
        ]
    }
];

let auth = sessionStorage.getItem('auth');
let nombre = sessionStorage.getItem('nombre');
let genero = sessionStorage.getItem('genero')
var row = document.getElementById('row');

if(auth != "si"){
    location.href = "index.html";
}

if(genero ==`femenino`){
    let body = document.querySelector(`body`);
    body.style.backgroundColor = `#F2D8D8`
    persons[0].images.forEach(function(image){
        let col = document.createElement('div');
        col.classList.add("col-md-4");
        row.appendChild(col);
    
        // img
        let img = document.createElement('img');
        img.setAttribute('src', image)
        img.classList.add("imagenes1")
        col.appendChild(img);
    
    })
} else if(genero == "masculino"){
    let body = document.querySelector(`body`);
    body.style.backgroundColor = `#8EACBF`
    persons[1].images.forEach(function(image){
        let col = document.createElement('div');
        col.classList.add("col-md-4");
        row.appendChild(col);

        let img = document.createElement('img');
        img.setAttribute('src', image)
        img.classList.add("imagenes1")
        col.appendChild(img);
    
    })
}




function cerrarSesion(){
    localStorage.setItem("nombre", "");
    localStorage.setItem("auth", "");
    location.href = "index.html";
}